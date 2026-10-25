/* CONTENU DU SITE : modifiez ce fichier.
   Les images sont chargées depuis les dossiers de votre ordinateur (mêmes noms de dossiers que sur Drive),
   placés à côté de index.html. Le premier fichier de la liste `images` sert de couverture.
   Les champs vides (client, surface, statut...) sont simplement masqués. */

/* TODO : remplacez ces coordonnées par les vraies avant la mise en ligne */
const SITE={name:'AFA-GROUP',tag:'Architecture et design · Cameroun',email:'contact@afa-group.example'};

const CATS=['Immeubles de bureaux','Immeubles d’habitation','Résidences','Culture & loisirs'];

const SK={day:['#86aedb','#e1ebf0','#fff6dc',.3],dusk:['#34437a','#f2b58b','#ffd9a0',.95],mist:['#a9b5b3','#e4e9e7','#f4f7f6',.4],dawn:['#6d86b6','#f4d0ae','#fff0cf',.8]};

/* aide : chemin dossier + liste de fichiers */
/* Les images optimisées (WebP) sont dans le dossier images/, voir optimiser_images.py */
const F=(dir,files)=>files.map(f=>'images/'+dir+'/'+f.replace(/\.[^.]+$/,'.webp'));

const PROJECTS=[
/* ---------- IMMEUBLES DE BUREAUX ---------- */
 {id:'siege-orange',title:'Siège Orange',loc:'Burkina Faso',cat:'Immeubles de bureaux',
  typology:'Immeuble de bureaux',
  type:'grid',seed:11,hue:25,skies:[SK.day,SK.dusk,SK.mist],
  images:F('Immeubles de bureau/Siège orange BK',['ENSEMBLE.png','les deux bâtiments.png','Croquis architectural du siège Orange Burkina Faso 2.png','3.png','OB ET OMBF.png']),
  desc:'Une composition contemporaine pensée comme un ensemble de travail ouvert sur son paysage.'},

 {id:'bureaux-bertoua',title:'Immeuble de bureaux de Bertoua',loc:'Bertoua, Cameroun',cat:'Immeubles de bureaux',
  client:'Privé',typology:'Immeuble R-1+5 de bureaux',surface:'500 m²',status:'En étude',
  mission:'Études architecturales, techniques et technologiques',
  type:'blocks',seed:23,hue:200,skies:[SK.day,SK.mist,SK.dawn],
  images:F('Immeubles de bureau/Bertoua',['Bureau 1.png','Bureau 2.png','Bureau 3.png','Bureau 4.png','DEF-05.jpg','DEF-01_000.jpg','facade principale.png','plan masse.png','plan de distribution.png']),
  desc:'Un immeuble de bureaux sur six niveaux et un sous-sol. Le rez-de-chaussée accueille le hall, une salle de conférence de 145 places occupe le R+1, les étages courants proposent des espaces de coworking et le R+5 est un rooftop.',
  programme:'Sous-sol : 12 places de parking, local groupe électrogène, local technique, ascenseur, escalier de service. Rez-de-chaussée : hall d’accueil, bureau, cour arrière de 6 places de parking. R+1 : salle de conférence de 145 places avec loge, magasin et local technique, espace de coworking avec toilettes. R+2 à R+4 : deux espaces de coworking, deux blocs de toilettes genrées, cuisine. R+5 : rooftop.',
  note:'Escalier de service, escalier de secours, ascenseur, locaux techniques par palier, groupe électrogène au sous-sol et guérite de sécurité. Rampe d’accès et toilettes adaptées à chaque niveau pour les personnes à mobilité réduite et la prise en compte du genre. Intégration d’espaces verts.'},

 {id:'bureaux-nkolndongo',title:'Immeuble de bureaux de Nkolndongo',loc:'Nkolndongo, Yaoundé',cat:'Immeubles de bureaux',
  typology:'Immeuble de bureaux',
  type:'blocks',seed:37,hue:215,skies:[SK.mist,SK.day,SK.dusk],
  images:F('Immeubles de bureau/Nkolndongo',['A.png','B.png','C.png','D.png','E.png']),
  desc:'Projet d’immeuble de bureaux à Nkolndongo, présenté en perspectives.'},

/* ---------- IMMEUBLES D'HABITATION ---------- */
 {id:'r2-nkolndongo',title:'Immeuble résidentiel de Nkolndongo',loc:'Yaoundé, Cameroun',cat:'Immeubles d’habitation',
  client:'Privé',typology:'Immeuble résidentiel R+2',surface:'415 m²',architect:'AKAMBA Ariel, ONAC 632',
  status:'En construction. Gros œuvre finalisé, second œuvre en cours',
  type:'blocks',seed:41,hue:35,skies:[SK.day,SK.dawn,SK.mist],
  images:F('Immeuble d_habitation/R+2 Nkolndongo',['Image 1.jpg','Image 2.jpg','Image 3.jpg','Image 4.jpg','Image 5.jpg','Image 6.jpg','Image 7.jpg']),
  desc:'Deux appartements T3 par niveau et un rooftop. À l’extérieur : parking, jardins et local groupe électrogène.',
  programme:'Deux appartements T3 par niveau, un rooftop. Aménagement extérieur : un parking, des jardins, un local groupe électrogène.',
  note:'Le bâtiment adopte une architecture contemporaine aux lignes courbes. Les balcons ondulants, habillés de parements en pierre naturelle, donnent aux façades légèreté et dynamisme. Les larges ouvertures vitrées favorisent un éclairage naturel optimal.'},

 {id:'febe-parcours-vita',title:'Immeuble résidentiel FEBE Parcours Vita',loc:'Yaoundé, Cameroun',cat:'Immeubles d’habitation',
  client:'Privé',typology:'Immeuble résidentiel R-2+1',surface:'600 m²',architect:'AKAMBA Ariel, ONAC 632',
  status:'En construction. Gros œuvre en cours',
  type:'terraces',seed:53,hue:150,skies:[SK.day,SK.mist,SK.dusk],
  images:F('Immeuble d_habitation/R-2+1 FEBE',['msg777000-7095.jpg','msg777000-7094.jpg','msg777000-7093.jpg','msg777000-7092.jpg','msg777000-7091.jpg','msg777000-7090.jpg','msg777000-7089.jpg']),
  desc:'Deux appartements T3 aux niveaux R-1 et R-2, un duplex T5 sur le rez-de-chaussée et l’étage, et une terrasse accessible.',
  programme:'Deux appartements T3 au R-1 et au R-2. Un duplex T5 sur le RDC et l’étage. Une terrasse accessible.',
  note:'Un immeuble résidentiel collectif à l’architecture contemporaine, aux lignes épurées et aux volumes sobres. Les façades, ouvertes par de généreuses baies vitrées et des balcons filants végétalisés, favorisent l’éclairage naturel. L’aménagement extérieur intègre espaces verts, stationnements et circulations clairement définies.'},

 {id:'febe-village',title:'Immeuble résidentiel FEBE Village',loc:'Yaoundé, Cameroun',cat:'Immeubles d’habitation',
  client:'Privé',typology:'Immeuble résidentiel R+3',surface:'1 000 m²',
  architect:'AKAMBA Ariel, ONAC 632 (chef de projet) · TCHAPET SAMEN Maurice (junior)',
  status:'En construction. Gros œuvre en cours',
  type:'fold',seed:61,hue:160,skies:[SK.dawn,SK.day,SK.mist],
  images:F('Immeuble d_habitation/RESIDENCE EMERAUDE',['concept.png','photo_5810127072952175129_y.jpg','photo_5810127072952175130_y.jpg','photo_5810127072952175131_y.jpg','photo_5810127072952175132_y.jpg','photo_5810127072952175133_y.jpg','photo_5810127072952175134_y.jpg','photo_5810127072952175135_y.jpg']),
  desc:'Du T2 au penthouse T5 avec piscine, répartis sur quatre niveaux. Parking, jardins, guérite et buanderie complètent le programme.',
  programme:'Un appartement T4 et un T3 au RDC et au R+1. Un T3 et deux T2 au R+2. Un penthouse T5 avec piscine au R+3. Aménagement extérieur : parking, jardins, local groupe électrogène, guérite, buanderie.',
  note:'Une architecture contemporaine inspirée des formes organiques et fluides. De vastes balcons aux lignes ondulantes animent les façades et créent un mouvement harmonieux. Volumes courbes, garde-corps vitrés et matériaux clairs composent une image élégante et légère.'},

 {id:'tsinga-village',title:'Immeuble résidentiel Tsinga Village',loc:'Soa, Cameroun',cat:'Immeubles d’habitation',
  client:'Privé',typology:'Immeuble résidentiel R+2',surface:'500 m²',architect:'AKAMBA Ariel, ONAC 632',
  status:'En construction. Finitions en cours',
  type:'blocks',seed:67,hue:20,skies:[SK.dusk,SK.day,SK.dawn],
  images:F('Immeuble d_habitation/R+2 Tsinga village',['photo_5830455518240116277_y.jpg','photo_5830455518240116278_y.jpg','photo_5830455518240116297_y.jpg','photo_5830455518240116298_y.jpg','photo_5830455518240116352_y.jpg','photo_5981236873512733559_y.jpg','photo_5981236873512733560_y.jpg','photo_5981236873512733561_y.jpg','photo_5981236873512733562_y.jpg','photo_5981236873512733566_y.jpg']),
  desc:'Un appartement T5 au rez-de-chaussée, puis deux T3 et deux T2 sur les étages, avec une terrasse accessible.',
  programme:'Rez-de-chaussée : un appartement T5, parking. R+1 à R+2 : deux appartements T3 et deux appartements T2. Une terrasse accessible.',
  note:'Un immeuble résidentiel collectif de style contemporain, à la composition volumétrique dynamique. Les façades sont rythmées par des jeux de couleurs, des parements décoratifs et de larges ouvertures. Balcons généreux et protections solaires intégrées participent au confort des occupants.'},

/* ---------- RÉSIDENCES ---------- */
 {id:'residence-okola',title:'Résidence Okola',loc:'Okola, Cameroun',cat:'Résidences',
  client:'Privé',typology:'Résidence privée',surface:'1 ha',status:'En étude',
  mission:'Études architecturales, techniques et technologiques',
  type:'contours',seed:73,hue:120,skies:[SK.day,SK.mist,SK.dawn],
  images:F('Résidences/OKOLA',['OKOLA 2.png','OKOLA.png','OKOLA 3.png','OKOLA 4.png','OKOLA 5.png','OKOLA 6.png','OKOLA 7.png','OKOLA 8.png']),
  desc:'Un salon de réception de 120 places, un séjour, des chambres et une chambre parentale, entourés d’un caveau familial avec chapelle, d’un boukarou, d’un étang et d’un jardin à thème.',
  programme:'Rez-de-chaussée : grand salon de réception de 120 places avec toilettes genrées, hall d’accueil, séjour avec salle à manger, cuisine avec cellier, deux chambres avec salles d’eau, WC visiteur. R+1 : salon familial avec vide sur le séjour, trois chambres avec salle d’eau, chambre parentale avec dressing, deux terrasses. Extérieur : caveau familial avec chapelle, boukarou, dépendance, étang, jardin à thème, local groupe électrogène, jet d’eau, guérite.',
  note:'Le bâtiment principal est implanté en arrière-plan d’un site de forme rectangulaire. Ce choix met en valeur un axe paysager majeur : une allée plantée à double sens qui traverse une vallée verte. L’ensemble crée une séquence d’entrée généreuse et immersive, dans une atmosphère tropicale.'},

 {id:'residence-olembe',title:'Résidence Olembe',loc:'Yaoundé, Cameroun',cat:'Résidences',
  client:'Privé',typology:'Résidence de haut standing',surface:'1 000 m²',status:'En étude',
  mission:'Études architecturales, techniques et technologiques',
  type:'fold',seed:79,hue:30,skies:[SK.dusk,SK.day,SK.mist],
  images:F('Résidences/OLEMBE',['DEF-01_000.jpg','DEF-01_001.jpg','DEF-01_002.jpg','DEF-01_003.jpg','DEF-01_004.jpg','DEF-01_005.jpg','DEF-01_006.jpg','DEF-01_007.jpg','DEF-01.jpg']),
  desc:'Une villa sur trois niveaux avec salle de sport, spa, salle de cinéma, une chambre parentale avec balcon sur la piscine, et un jardin avec dépendance.',
  programme:'R-1 : salle de sport, spa, buanderie, magasin, parking de 3 places. Rez-de-chaussée : hall d’accueil, séjour, salle à manger avec cuisine américaine, cellier, deux chambres avec salles d’eau, WC visiteur, salle d’étude, salle de cinéma. R+1 : salon familial avec vide sur le séjour, trois chambres avec salle d’eau, chambre parentale avec dressing et balcon sur la piscine. Extérieur : piscine, dépendance, local groupe électrogène, local technique, jardin, deux guérites.',
  note:'Une architecture résolument contemporaine, faite de volumes géométriques sobres, de porte-à-faux et de lignes horizontales affirmées. Larges surfaces vitrées, parements minéraux aux teintes sobres et éléments métalliques épurés donnent à l’ensemble une image moderne et prestigieuse. La double hauteur vitrée de la façade principale relie en permanence l’intérieur et l’extérieur.'},

 {id:'residence-mvoto',title:'Résidence Mvoto',loc:'Ntoun, Cameroun',cat:'Résidences',
  typology:'Maison individuelle',
  type:'fold',seed:83,hue:45,skies:[SK.day,SK.dawn,SK.dusk],
  images:F('Résidences/NTOUN MME MVOTO',['Maison moderne aux façades géométriques.png','Maison moderne à façade géométrique tropicale.png','Maison moderne aux motifs géométriques.png']),
  desc:'Une maison moderne dont la façade s’organise autour d’un jeu de motifs géométriques, adapté au climat tropical.'},

/* ---------- CULTURE & LOISIRS ---------- */
 {id:'yokadouma',title:'Complexe touristique de Yokadouma',loc:'Yokadouma, Cameroun',cat:'Culture & loisirs',
  typology:'Tourisme et loisirs',
  type:'contours',seed:89,hue:140,skies:[SK.day,SK.mist,SK.dawn],
  images:F('Culture, tourisme, loisirs/Complexe touristique de Yokadouma',['VUE D_ENSEMBLE.png','IMAGE YOKADOUMA.png','vue sur la piscine.png','restaurant.png','bungalow.png','mini-hôtel.png','salle polyvalente.png','plan masse.png']),
  desc:'Un ensemble de loisirs organisé autour de jardins, de lieux de rencontre et d’espaces de détente : piscine, restaurant, bungalows, mini-hôtel et salle polyvalente.'},

 {id:'chutes-nachtigal',title:'Les Chutes de Nachtigal',loc:'Ntui, Cameroun',cat:'Culture & loisirs',
  client:'Privé',typology:'Complexe hôtelier et touristique',surface:'3 ha',status:'En étude',
  mission:'Études architecturales, techniques et technologiques',
  type:'arches',seed:97,hue:150,skies:[SK.dawn,SK.day,SK.mist],
  images:F('Culture, tourisme, loisirs/Chutes de Nachtigal',['Cascade et bungalows sur pilotis.png','Refuge moderne au bord de l’eau.png','Image1_003.jpg','Image1_005.jpg','Image1_006.jpg','Image1_007.jpg','Image1_010.jpg','Image1_012.jpg','Image1_013.jpg']),
  desc:'Sur les rives du fleuve Mbam, près du pont, un complexe hôtelier avec espace nautique, restaurant, salle polyvalente d’environ 1 000 personnes et bungalows T1 et T2.',
  programme:'Espace nautique de loisirs, restaurant avec vue sur le fleuve, salle polyvalente d’environ 1 000 personnes, bungalows de type T1 et T2.',
  note:'Chaque espace offre des perspectives ouvertes sur le paysage. Le projet préserve et valorise la flore existante, notamment les mangroves aux abords du site, et garantit l’accessibilité aux personnes à mobilité réduite. Pierre, bois et autres matériaux naturels et locaux réduisent l’empreinte environnementale.'},

 {id:'abab-land',title:'ABAB Land',loc:'Cameroun',cat:'Culture & loisirs',
  typology:'Parc de loisirs',
  type:'arches',seed:101,hue:210,skies:[SK.dusk,SK.day,SK.dawn],
  images:F('Culture, tourisme, loisirs/ABAB_Land',['Grande roue et pavillons bleus au bord de l’eau.png','Croquis architectural de grande roue et pavillons.png','Image1_002.jpg','Image1_004.jpg','Image1_005.jpg','Image1_015.jpg','IMG-001.jpg','IMG-002.jpg']),
  desc:'Un projet de parc de loisirs qui associe attractions, espaces ouverts et promenade au bord de l’eau.'},

 {id:'cdef-kribi',title:'Espace de spectacle et de fêtes CDEF',loc:'Kribi, Cameroun',cat:'Culture & loisirs',
  client:'Privé',typology:'Salle de spectacle et auditorium',surface:'3 000 m²',
  architect:'AKAMBA Ariel, ONAC 632 (chef de projet) · TCHAPET SAMEN Maurice (junior)',
  status:'R+3 en construction. Gros œuvre en cours',
  type:'arches',seed:107,hue:5,skies:[SK.dusk,SK.dawn,SK.day],
  images:F('Culture, tourisme, loisirs/Salle de fêtes CDEF/_____',['Image1_0068.png','Image1_0012.png','Image1_011.png','Image1_003.png']),
  desc:'Une salle de spectacle de 550 m² et un auditorium de 280 m², avec parking, jardins, local groupe électrogène et guérite.',
  programme:'Une salle de spectacle de 550 m², un auditorium de 280 m². Aménagement extérieur : parking, jardins, local groupe électrogène, guérite.',
  note:'Deux volumes principaux : l’un, monumental, sous une toiture à deux pans asymétriques et une trame verticale polychrome de rouge, bordeaux et ocre ; l’autre, plus neutre, en gris métallique et bleu. Les grandes surfaces vitrées de la façade principale, protégées par des auvents, ouvrent les espaces sur le parvis et apportent un éclairage naturel généreux.'}
];
