#!/usr/bin/env python3
"""Optimise les images du site AFA-GROUP.

Usage :
  python tools\\optimiser_images.py "C:\\chemin\\vers\\source-images"  # convertit
  python tools\\optimiser_images.py --verifier                       # vérifie data.js

Lit les dossiers source téléchargés depuis Drive (originaux, jamais modifiés),
écrit des WebP (1800 px max, qualité 80) dans ./site/images/ en gardant la même
arborescence. Nécessite Pillow pour la conversion.
"""
import json
import subprocess
import sys
import unicodedata
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
SITE_ROOT = PROJECT_ROOT / "site"
OUT = SITE_ROOT / "images"
EXT = {".png", ".jpg", ".jpeg", ".webp"}
MAXW = 1800


def nfc(value):
    return unicodedata.normalize("NFC", value)


def convert(source):
    from PIL import Image, ImageOps

    source = Path(source)
    count = total_in = total_out = 0
    for file in sorted(source.rglob("*")):
        if not file.is_file() or file.suffix.lower() not in EXT:
            continue
        relative = Path(*[nfc(part) for part in file.relative_to(source).parts]).with_suffix(".webp")
        destination = OUT / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        try:
            with Image.open(file) as source_image:
                image = ImageOps.exif_transpose(source_image)
            if image.width > MAXW:
                image = image.resize((MAXW, round(image.height * MAXW / image.width)), Image.LANCZOS)
            image = image.convert("RGBA" if image.mode in ("RGBA", "LA", "P") else "RGB")
            image.save(destination, "WEBP", quality=80, method=6)
        except (OSError, ValueError) as error:
            print("ÉCHEC", file, error)
            continue
        count += 1
        total_in += file.stat().st_size
        total_out += destination.stat().st_size
    print(f"{count} images converties : {total_in / 1e6:.1f} Mo -> {total_out / 1e6:.1f} Mo")


def verify():
    data_file = SITE_ROOT / "data.js"
    code = (
        f"const fs=require('fs');eval(fs.readFileSync({json.dumps(str(data_file))},'utf8')+';globalThis.P=PROJECTS');"
        "console.log(JSON.stringify(P.map(p=>[p.id,p.images||[]])))"
    )
    projects = json.loads(subprocess.check_output(["node", "-e", code]))
    available = {
        nfc(path.relative_to(SITE_ROOT).as_posix())
        for path in OUT.rglob("*")
        if path.is_file()
    } if OUT.exists() else set()
    missing_count = 0
    for project_id, images in projects:
        for image in images:
            image = image.replace("\\", "/")
            if nfc(image) not in available:
                print(f"MANQUANT [{project_id}] {image}")
                missing_count += 1
    print("Tout est en place." if not missing_count else
          f"{missing_count} image(s) manquante(s) (noms sensibles à la casse sur l'hébergement).")
    sys.exit(1 if missing_count else 0)


if __name__ == "__main__":
    arguments = sys.argv[1:]
    if not arguments:
        print(__doc__)
        sys.exit(0)
    if arguments[0] == "--verifier":
        verify()
    else:
        convert(arguments[0])
        verify()
