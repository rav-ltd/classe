/* Strato automatico: scritto da monta_strato.py dalle proposte dei lettori delegati, dopo il controllo
 * di ogni stringa sul testo. Non si corregge a mano: si correggono le proposte e si rilancia lo script.
 * Le voci scritte a mano stanno in strato.js e hanno la precedenza (un capitolo presente là non si tocca qui). */
window.STRATO_AUTO = {
 "introduction": [
  {
   "tipo": "apertura",
   "img": "intro",
   "alt": "Un clown triste seul sur une petite scène avec son diplôme, devant trois chaises vides, et une échelle qui s’arrête dans le vide."
  },
  {
   "tipo": "esergo",
   "testo": "Cette misère subjective, qui produit un malaise objectif, est notre mal du siècle"
  },
  {
   "tipo": "esergo",
   "testo": "un ordre social qui promet une reconnaissance qu’il ne peut pas distribuer manque à sa propre parole, et devient instable"
  },
  {
   "tipo": "barre",
   "dopo": "La privation matérielle et sociale touche 13,1 %",
   "richiede": [
    "13,1 %",
    "11,7 %"
   ],
   "titolo": "Privation matérielle et sociale, France métropolitaine",
   "righe": [
    {
     "v": 11.7,
     "etichetta": "2013"
    },
    {
     "v": 13.1,
     "etichetta": "2025"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "esergo",
   "testo": "Une place ne vaut que si d’autres ne l’occupent pas, et la croissance, qui multiplie les biens, ne multiplie pas les places",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "De cette façon, chacun fait monter le prix de ce que tous doivent acheter"
  },
  {
   "tipo": "cifra",
   "dopo": "En 2025, les personnes sans domicile sont 350 000, ce qui représente une forte",
   "richiede": [
    "350 000"
   ],
   "valore": "350 000",
   "etichetta": "Personnes sans domicile en 2025, contre 143 000 enregistrées en 2012."
  },
  {
   "tipo": "cifra",
   "dopo": "Les personnes inscrites à l’aide alimentaire s’élèvent à 5,6 millions selon le rapport de",
   "richiede": [
    "5,6 millions"
   ],
   "valore": "5,6 millions",
   "etichetta": "Personnes inscrites à l’aide alimentaire, selon le rapport de juillet 2025."
  },
  {
   "tipo": "cifra",
   "dopo": "et 21,3 % a connu au moins une période de privation entre 2022 et",
   "richiede": [
    "21,3 %"
   ],
   "valore": "21,3 %",
   "etichetta": "De la population a connu au moins une période de privation entre 2022 et 2025."
  },
  {
   "tipo": "barre",
   "dopo": "La pauvreté touche d’abord les chômeurs (36,1 %) et les familles monoparentales (34,0 %).",
   "richiede": [
    "15,4 % des habitants de France métropolitaine",
    "les chômeurs (36,1 %)",
    "les familles monoparentales (34,0 %)"
   ],
   "titolo": "Taux de pauvreté relative, France métropolitaine",
   "righe": [
    {
     "v": 15.4,
     "etichetta": "Ensemble des habitants (2024)"
    },
    {
     "v": 36.1,
     "etichetta": "Chômeurs"
    },
    {
     "v": 34.0,
     "etichetta": "Familles monoparentales"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "barre",
   "dopo": "L’impossibilité de chauffer son logement concerne 11,4 % de la population en 2025",
   "richiede": [
    "11,4 % de la population en 2025",
    "6,7 % en 2020"
   ],
   "titolo": "Impossibilité de chauffer son logement, part de la population",
   "righe": [
    {
     "v": 6.7,
     "etichetta": "2020"
    },
    {
     "v": 11.4,
     "etichetta": "2025"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  }
 ],
 "1": [
  {
   "tipo": "apertura",
   "img": "01",
   "alt": "Un long train dessiné maladroitement : un wagon de tête élégant avec un petit personnage en haut-de-forme, un wagon de queue bondé, et des diplômes empilés sur le toit."
  },
  {
   "tipo": "esergo",
   "testo": "Le travailleur qualifié est une machine qui réduit l’incertitude et garantit la sécurité"
  },
  {
   "tipo": "esergo",
   "testo": "la concurrence symbolique a pris le dessus sur la vocation pour laquelle on l’avait instituée"
  },
  {
   "tipo": "barre",
   "dopo": "la productivité horaire du travail progressait de 5,2 % par an",
   "richiede": [
    "5,2 %",
    "0,7 %"
   ],
   "titolo": "Progression annuelle de la productivité horaire du travail, France",
   "righe": [
    {
     "v": 5.2,
     "etichetta": "1951-1974"
    },
    {
     "v": 0.7,
     "etichetta": "2003-2014"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "esergo",
   "testo": "Un examen vérifie un niveau, et tous ceux qui l’atteignent sont reçus ; un concours classe, et le nombre des places est fixé d’avance",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Lorsqu’on intervient pour résoudre un problème, on en crée inévitablement un autre"
  },
  {
   "tipo": "cronologia",
   "dopo": "Dans un article de 1905 intitulé La science socialiste, nouvelle religion des intellectuels",
   "richiede": [
    "1576",
    "1776",
    "1898",
    "1905"
   ],
   "titolo": "Quatre dates sur la place de la classe instruite",
   "tappe": [
    {
     "anno": "1576",
     "testo": "La Boétie qualifie de « servitude volontaire » la relation des sujets avec le souverain."
    },
    {
     "anno": "1776",
     "testo": "Adam Smith pressent à quel point le facteur-compétence est central dans l’économie."
    },
    {
     "anno": "1898",
     "testo": "Makhaïski a conscience que la fonction de direction constitue le monopole du monde instruit."
    },
    {
     "anno": "1905",
     "testo": "Makhaïski publie La science socialiste, nouvelle religion des intellectuels."
    }
   ]
  }
 ],
 "3": [
  {
   "tipo": "apertura",
   "img": "03",
   "alt": "Un personnage dessiné maladroitement, un pied sur un tapis rouge devant un manoir, l’autre dans une flaque, avec un diplôme et une minuscule clé."
  },
  {
   "tipo": "esergo",
   "testo": "Elle est donc à la fois une fraction dominée de la classe dominante et une fraction dominante de la classe dominée"
  },
  {
   "tipo": "esergo",
   "testo": "C’est pourquoi nous parlerons de suraccumulation de capital positionnel plutôt que de surproduction des élites"
  },
  {
   "tipo": "barre",
   "dopo": "les dépenses liées au logement (loyers, réels ou imputés, et énergie)",
   "richiede": [
    "10,7 %",
    "22,8 %"
   ],
   "titolo": "Part du logement dans le revenu disponible brut des ménages",
   "righe": [
    {
     "v": 10.7,
     "etichetta": "1960"
    },
    {
     "v": 22.8,
     "etichetta": "2024"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "cronologia",
   "dopo": "Turchin avait annoncé dès 2010 un pic d’instabilité",
   "richiede": [
    "1789",
    "1872",
    "1934",
    "1936",
    "2010",
    "2020"
   ],
   "titolo": "Un siècle et demi de « chômage intellectuel »",
   "tappe": [
    {
     "anno": "1789",
     "testo": "La Révolution française naît d’une élite trop nombreuse pour les places disponibles."
    },
    {
     "anno": "1872",
     "testo": "Bakounine voit dans les diplômés « déplacés » d’Italie une force révolutionnaire."
    },
    {
     "anno": "1934",
     "testo": "Alfred Rosier dénonce en France une masse d’intellectuels errants."
    },
    {
     "anno": "1936",
     "testo": "Michels note que des licenciés d’université postulent aux emplois de concierge."
    },
    {
     "anno": "2010",
     "testo": "Turchin annonce un pic d’instabilité autour de 2020."
    },
    {
     "anno": "2020",
     "testo": "Turchin et Goldstone publient un article sur le site Noema."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Les rentes de la culture s’effacent devant la rente immobilière",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "La prolétarisation de la classe instruite ne commence pas par son centre mais par ses marges, là où le titre est la seule richesse"
  },
  {
   "tipo": "cifra",
   "dopo": "les prix des logements anciens ont été multipliés par 2,5 en France métropolitaine, contre",
   "richiede": [
    "2,5"
   ],
   "valore": "2,5",
   "etichetta": "Multiplication des prix des logements anciens en France métropolitaine entre 2001 et 2023."
  },
  {
   "tipo": "cifra",
   "dopo": "un enseignant à temps complet gagnait en moyenne 3 180 euros nets par mois",
   "richiede": [
    "3 180 euros"
   ],
   "valore": "3 180 euros",
   "etichetta": "Salaire net mensuel moyen d’un enseignant à temps complet en 2024 (DEPP)."
  },
  {
   "tipo": "cifra",
   "dopo": "l’estime à près de 600 000 personnes, dont des adultes de plus de 25",
   "richiede": [
    "600 000"
   ],
   "valore": "600 000",
   "etichetta": "Près de 600 000 personnes en hébergement contraint chez un tiers, selon la Fondation pour le logement des défavorisés."
  },
  {
   "tipo": "barre",
   "dopo": "leur famille est passée de 20 % en 2002 à 27 % en 2013",
   "richiede": [
    "20 % en 2002",
    "27 % en 2013"
   ],
   "titolo": "Premiers propriétaires de 25 à 44 ans aidés par leur famille",
   "righe": [
    {
     "v": 20,
     "etichetta": "2002"
    },
    {
     "v": 27,
     "etichetta": "2013"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "barre",
   "dopo": "En 2023, 34,3 % des personnes vivant dans une famille monoparentale, le plus",
   "richiede": [
    "34,3 % des personnes vivant dans une famille monoparentale",
    "31,4 % un an plus tôt"
   ],
   "titolo": "Personnes vivant dans une famille monoparentale sous le seuil de pauvreté",
   "righe": [
    {
     "v": 31.4,
     "etichetta": "2022"
    },
    {
     "v": 34.3,
     "etichetta": "2023"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  }
 ],
 "4": [
  {
   "tipo": "apertura",
   "img": "04",
   "alt": "Une usine dessinée maladroitement qui déverse une montagne de cartons, et à droite une famille gonflée à la pompe à vélo, chargée d’énormes sacs de courses."
  },
  {
   "tipo": "esergo",
   "testo": "La mission de l’État sera de produire la principale des ressources rares, à savoir la demande"
  },
  {
   "tipo": "esergo",
   "testo": "Le consommateur devint la principale matière première du processus de reproduction du capital"
  },
  {
   "tipo": "barre",
   "dopo": "les dépenses publiques passent d’environ 35 % du PIB",
   "richiede": [
    "35 %",
    "57 %"
   ],
   "titolo": "Dépenses publiques, en % du PIB, France",
   "righe": [
    {
     "v": 35,
     "etichetta": "Début des années 1960"
    },
    {
     "v": 57,
     "etichetta": "2024"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "cronologia",
   "dopo": "Mai 68 constitua une nouvelle étape de cette révolution culturelle",
   "richiede": [
    "1819",
    "1914",
    "1936",
    "1949",
    "1955",
    "1968"
   ],
   "titolo": "Comment le capitalisme a fabriqué ses consommateurs",
   "tappe": [
    {
     "anno": "1819",
     "testo": "Sismondi prédit que la surproduction paralysera le cycle capitaliste."
    },
    {
     "anno": "1914",
     "testo": "Ford double le salaire de ses ouvriers pour en faire des acheteurs."
    },
    {
     "anno": "1936",
     "testo": "Keynes publie sa Théorie générale de l’emploi, de l’intérêt et de la monnaie."
    },
    {
     "anno": "1949",
     "testo": "Bataille, dans La Part maudite, traduit la Théorie générale en philosophie."
    },
    {
     "anno": "1955",
     "testo": "Lebow demande de faire de la consommation un mode de vie."
    },
    {
     "anno": "1968",
     "testo": "Le mouvement étudiant porte aussi des valeurs « libérales-libertaires »."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Il faut trouver des consommateurs. Les fabriquer, si nécessaire",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "En l’absence de consommateurs, il est impossible de générer du profit, tout comme on ne saurait fabriquer des saucisses sans viande"
  },
  {
   "tipo": "cifra",
   "dopo": "le plan Marshall (près de 13 milliards de dollars d’aide américaine entre",
   "richiede": [
    "13 milliards de dollars"
   ],
   "valore": "13 milliards de dollars",
   "etichetta": "Près de 13 milliards de dollars d’aide américaine : le plan Marshall, entre 1948 et 1952."
  }
 ],
 "5": [
  {
   "tipo": "apertura",
   "img": "05",
   "alt": "Un garçon pauvre dessiné maladroitement, le nez à la fenêtre d’un salon doré avec lustre et banquet, une minuscule bourse vide à la main."
  },
  {
   "tipo": "esergo",
   "testo": "guérir un individu adulte des besoins sociaux qui se sont enracinés en lui est une entreprise presque impossible"
  },
  {
   "tipo": "esergo",
   "testo": "le système capitaliste est condamné à stimuler une rareté artificielle en augmentant les besoins"
  },
  {
   "tipo": "esergo",
   "testo": "La philosophie naît, en un sens, précisément pour définir ce qui est nécessaire",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Rousseau ne savait pas encore que la prolifération des besoins sociaux était nécessaire à la subsistance de la société moderne"
  },
  {
   "tipo": "cronologia",
   "dopo": "popularise le concept de « besoins induits » dans L’Ère de l’opulence en 1958",
   "richiede": [
    "1750",
    "1893",
    "1929",
    "1958"
   ],
   "titolo": "Quatre dates sur la fabrique des besoins",
   "tappe": [
    {
     "anno": "1750",
     "testo": "Rousseau répond au concours de l’Académie de Dijon avec son Discours sur les sciences et les arts."
    },
    {
     "anno": "1893",
     "testo": "Lénine dégage une « loi des besoins croissants » dans À propos de la question dite des marchés."
    },
    {
     "anno": "1929",
     "testo": "L’obsolescence programmée des marchandises est théorisée comme remède à la crise de surproduction."
    },
    {
     "anno": "1958",
     "testo": "Galbraith popularise le concept de « besoins induits » dans L’Ère de l’opulence."
    }
   ]
  }
 ],
 "6": [
  {
   "tipo": "apertura",
   "img": "06",
   "alt": "Une petite maison confortable dessinée maladroitement, avec un habitant souriant au balcon, derrière laquelle fument une immense cheminée et un tas de planètes fissurées."
  },
  {
   "tipo": "esergo",
   "testo": "L’être humain occidental est une technologie que nous ne pouvons plus nous permettre"
  },
  {
   "tipo": "esergo",
   "testo": "En somme, nous sommes modernes parce que nous sommes bourgeois"
  },
  {
   "tipo": "barre",
   "dopo": "la première mesure donne 5,4 tonnes d’équivalent CO₂ par habitant",
   "richiede": [
    "5,4 tonnes",
    "8,2 tonnes"
   ],
   "titolo": "Émissions par habitant en France, en tonnes d’équivalent CO₂",
   "righe": [
    {
     "v": 5.4,
     "etichetta": "Émissions du territoire"
    },
    {
     "v": 8.2,
     "etichetta": "Émissions de la consommation"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "cronologia",
   "dopo": "intitulée Scientists’ Warning on Affluence",
   "richiede": [
    "1790",
    "1795",
    "1970",
    "1972",
    "2020",
    "2022"
   ],
   "titolo": "De la critique kantienne à l’alerte sur l’abondance",
   "tappe": [
    {
     "anno": "1790",
     "testo": "Kant décrit le sublime dynamique face aux catastrophes naturelles."
    },
    {
     "anno": "1795",
     "testo": "Schiller dénonce la fragmentation du monde moderne."
    },
    {
     "anno": "1970",
     "testo": "Le rapport de l’OCDE dirigé par Castoriadis dénonce les externalités du développement."
    },
    {
     "anno": "1972",
     "testo": "Le Club de Rome commande au MIT le rapport sur les limites de la croissance."
    },
    {
     "anno": "2020",
     "testo": "Nature Communications publie Scientists’ Warning on Affluence."
    },
    {
     "anno": "2022",
     "testo": "Macron annonce solennellement la fin de l’abondance."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "C’est l’homme instruit, urbanisé, civilisé, pacifique, tolérant, qui a dévasté la planète",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Ce n’est pas sa morale qui était bourgeoise, c’est son mode de vie, et celui-là ne peut pas être généralisé"
  }
 ],
 "7": [
  {
   "tipo": "apertura",
   "img": "07",
   "alt": "Une dame élégante dessinée maladroitement, vêtue d’une énorme robe, reliée par une corde effilochée à un petit bateau lointain qui rapetisse."
  },
  {
   "tipo": "esergo",
   "testo": "En ce sens, l’Occident n’a pas vécu au-dessus de ses moyens ; plutôt au-dessus de ceux des autres"
  },
  {
   "tipo": "esergo",
   "testo": "Paradoxalement, on gaspille plus de ressources à soustraire des ressources à ceux qui les produisent qu’à les produire directement"
  },
  {
   "tipo": "cronologia",
   "dopo": "les chocs pétroliers de 1973 et de 1979",
   "richiede": [
    "1377",
    "1571",
    "1669",
    "1902",
    "1913",
    "1973"
   ],
   "titolo": "Des rentes de l’empire à leur érosion",
   "tappe": [
    {
     "anno": "1377",
     "testo": "Ibn Khaldun propose, avec sa Muqaddima, une « science de l’histoire »."
    },
    {
     "anno": "1571",
     "testo": "Venise perd Chypre."
    },
    {
     "anno": "1669",
     "testo": "Venise perd la Crète."
    },
    {
     "anno": "1902",
     "testo": "Hobson donne la première théorie économique de l’expansion coloniale."
    },
    {
     "anno": "1913",
     "testo": "Rosa Luxemburg lit Hobson et Marx et en tire sa thèse sur l’expansion."
    },
    {
     "anno": "1973",
     "testo": "Premier choc pétrolier : l’énergie cesse d’être bon marché."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "La classe malaisée vit dans cet intervalle, entre une rente qui s’épuise et une promesse qui tarde",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Cette rente a une propriété remarquable : ceux qui la touchent ne la voient pas"
  },
  {
   "tipo": "cifra",
   "dopo": "les femmes accomplissent 76,2 % des heures de travail de soin non rémunéré",
   "richiede": [
    "76,2 %"
   ],
   "valore": "76,2 %",
   "etichetta": "Part des heures de travail de soin non rémunéré accomplies par les femmes dans le monde, selon l’OIT."
  },
  {
   "tipo": "cifra",
   "dopo": "le revenu médian d’un diplômé du supérieur était d’environ 22 000 euros par an",
   "richiede": [
    "22 000 euros"
   ],
   "valore": "22 000 euros",
   "etichetta": "Revenu médian annuel d’un diplômé du supérieur dans l’Union européenne, en 2012-2014."
  }
 ],
 "8": [
  {
   "tipo": "apertura",
   "img": "08",
   "alt": "Un escalier qui descend, dessiné maladroitement, un petit personnage assis sur la dernière marche tandis qu’une avalanche de neige se prépare derrière lui."
  },
  {
   "tipo": "esergo",
   "testo": "Vue ainsi, l’histoire économique du dernier demi-siècle est celle des moyens successifs par lesquels l’échéance a été différée"
  },
  {
   "tipo": "esergo",
   "testo": "Le prix de la mobilité ascendante, c’est la mobilité descendante"
  },
  {
   "tipo": "barre",
   "dopo": "5,3 % de croissance par an en moyenne entre 1949 et 1974",
   "richiede": [
    "5,3 %",
    "2,2 %",
    "0,1 %"
   ],
   "titolo": "Croissance annuelle moyenne du PIB, France",
   "righe": [
    {
     "v": 5.3,
     "etichetta": "1949-1974"
    },
    {
     "v": 2.2,
     "etichetta": "1974-2007"
    },
    {
     "v": 0.1,
     "etichetta": "2007-2012"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "cronologia",
   "dopo": "à l’éclatement de la bulle financière de 2008",
   "richiede": [
    "1971",
    "1973",
    "1975",
    "1979",
    "1981",
    "2008"
   ],
   "titolo": "Comment l’échéance a été repoussée",
   "tappe": [
    {
     "anno": "1971",
     "testo": "Nixon abolit la convertibilité du dollar en or."
    },
    {
     "anno": "1973",
     "testo": "La crise énergétique met fin au pétrole bon marché."
    },
    {
     "anno": "1975",
     "testo": "Premier déficit public significatif en France, après le choc pétrolier."
    },
    {
     "anno": "1979",
     "testo": "Début des politiques de Thatcher au Royaume-Uni."
    },
    {
     "anno": "1981",
     "testo": "Début des politiques de Reagan aux États-Unis."
    },
    {
     "anno": "2008",
     "testo": "La grande crise ; retour des néokeynésiens."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "La terre des opportunités est aussi une société du risque",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Nous voilà vraiment revenus à la case départ, et nous n’avons, semble-t-il, rien appris"
  },
  {
   "tipo": "cifra",
   "dopo": "remonte à 400-600 % en 2010, soit un retour vers les valeurs de",
   "richiede": [
    "400-600 %"
   ],
   "valore": "400-600 %",
   "etichetta": "Rapport entre patrimoine et revenu dans les pays riches en 2010 (Piketty et Zucman), contre 200-300 % en 1970."
  }
 ],
 "9": [
  {
   "tipo": "apertura",
   "img": "09",
   "alt": "Un personnage dessiné maladroitement, smoking en haut et short troué en bas, devant un miroir qui lui renvoie l’image d’un roi couronné."
  },
  {
   "tipo": "esergo",
   "testo": "Le déclassement se compte en positions mais la déception se compte en écarts"
  },
  {
   "tipo": "esergo",
   "testo": "Ne pas être soi, c’est d’abord cela : continuer de se voir avec les yeux d’un marché qui n’existe plus"
  },
  {
   "tipo": "barre",
   "dopo": "la part des jeunes diplômés qui occupent un poste inférieur à leur qualification",
   "richiede": [
    "26 %",
    "32 %"
   ],
   "titolo": "Jeunes diplômés dont le poste est inférieur à leur qualification (Céreq)",
   "righe": [
    {
     "v": 26,
     "etichetta": "Génération sortie en 2004"
    },
    {
     "v": 32,
     "etichetta": "Génération sortie en 2021"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "cronologia",
   "dopo": "Charles Taylor a intitulé en 1991 un livre",
   "richiede": [
    "1930",
    "1954",
    "1966",
    "1968",
    "1978",
    "1991"
   ],
   "titolo": "Les noms du malaise",
   "tappe": [
    {
     "anno": "1930",
     "testo": "Siegfried Kracauer ouvre son enquête Les Employés."
    },
    {
     "anno": "1954",
     "testo": "Lenski propose la cristallisation du statut, l’incohérence des rangs."
    },
    {
     "anno": "1966",
     "testo": "« Le Déclin et la chute de l’économie spectaculaire-marchande » paraît dans Internationale Situationniste."
    },
    {
     "anno": "1968",
     "testo": "Le malaise explose, puis le nouvel esprit du capitalisme le recouvre."
    },
    {
     "anno": "1978",
     "testo": "Bourdieu décrit l’hystérésis des habitus et la génération abusée."
    },
    {
     "anno": "1991",
     "testo": "Charles Taylor publie Le Malaise de la modernité."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Le malaise n’est pas seulement la négation de l’aise : il en est le corrélat, l’ombre toujours plus envahissante",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "L’opulence endort le malaise de la civilisation. Cinquante ans passent, la croissance ne revient pas : il n’y a plus de narcotique"
  },
  {
   "tipo": "cifra",
   "dopo": "données 2011), 55 % des Français se placent mal sur l’échelle des niveaux de",
   "richiede": [
    "55 %"
   ],
   "valore": "55 %",
   "etichetta": "Part des Français qui se placent mal sur l’échelle des niveaux de vie, selon l’Insee (données 2011)."
  },
  {
   "tipo": "cifra",
   "dopo": "et 38 % qui jugent que le revenu de leur foyer a baissé",
   "richiede": [
    "38 %"
   ],
   "valore": "38 %",
   "etichetta": "Part des Français qui jugent que le revenu de leur foyer a baissé en cinq ans, selon l’Ifop."
  },
  {
   "tipo": "cifra",
   "dopo": "près de 13 % des personnes de douze ans et plus prenaient un antidépresseur",
   "richiede": [
    "près de 13 %"
   ],
   "valore": "près de 13 %",
   "etichetta": "Personnes de douze ans et plus qui prenaient un antidépresseur aux États-Unis en 2011-2014."
  },
  {
   "tipo": "barre",
   "dopo": "19 % surestiment leur position, 36 % la sous-estiment, en jugeant d’après leurs conditions",
   "richiede": [
    "19 % surestiment leur position",
    "36 % la sous-estiment"
   ],
   "titolo": "Position perçue sur l’échelle des niveaux de vie, France (Insee, données 2011)",
   "righe": [
    {
     "v": 19,
     "etichetta": "Surestiment leur position"
    },
    {
     "v": 36,
     "etichetta": "La sous-estiment"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  }
 ],
 "10": [
  {
   "tipo": "apertura",
   "img": "10",
   "alt": "Un jeu de chaises musicales dessiné maladroitement : dix petits personnages identiques courent vers une seule chaise, déjà occupée par l’un d’eux."
  },
  {
   "tipo": "esergo",
   "testo": "Une génération formée pour des places qui ont disparu attend des places qui n’existent pas encore"
  },
  {
   "tipo": "esergo",
   "testo": "La généralisation de ce qui n’est pas généralisable ne produit qu’un seul résultat : un embouteillage aux portes de la reconnaissance"
  },
  {
   "tipo": "cronologia",
   "dopo": "la théorie de la surproduction des élites est déjà formulée",
   "richiede": [
    "1668",
    "1774",
    "1789",
    "1825",
    "1840",
    "1848"
   ],
   "titolo": "Les premières générations de malaisés",
   "tappe": [
    {
     "anno": "1668",
     "testo": "Molière met en scène George Dandin."
    },
    {
     "anno": "1774",
     "testo": "Goethe publie Les Souffrances du jeune Werther."
    },
    {
     "anno": "1789",
     "testo": "La nuit du 4 août abolit les privilèges."
    },
    {
     "anno": "1825",
     "testo": "Révolte des décembristes, jeunes officiers issus de l’aristocratie."
    },
    {
     "anno": "1840",
     "testo": "Balzac formule dans Z. Marcas le diagnostic de la jeunesse sans place."
    },
    {
     "anno": "1848",
     "testo": "Mouvements libéraux en France et en Allemagne."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "La logique de la déception se résume tout entière à une banale soustraction : combien de positions, combien de candidats ?",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "La modernité s’ouvre donc sur une crise d’indifférenciation"
  }
 ],
 "11": [
  {
   "tipo": "apertura",
   "img": "11",
   "alt": "Un personnage sur un podium sous un projecteur, entouré d’une foule de copies identiques de lui-même, chacune sur son propre podium."
  },
  {
   "tipo": "esergo",
   "testo": "Le Moi que la modernité somme d’exister reste donc, pour le plus grand nombre, une promesse"
  },
  {
   "tipo": "esergo",
   "testo": "Le capitalisme se nourrit d’avenir, et quand il l’a entièrement dévoré, il finit par mourir de faim"
  },
  {
   "tipo": "esergo",
   "testo": "quand les titres ne distinguent plus, la singularité devient le dernier titre",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "La vérité est que les modèles sociaux ne sont jamais faits pour être atteints"
  }
 ],
 "12": [
  {
   "tipo": "apertura",
   "img": "12",
   "alt": "Une femme dessinée maladroitement, lisant une pile de romans dans une petite cuisine, rêvant d’être une princesse dans une bulle au-dessus de sa tête."
  },
  {
   "tipo": "esergo",
   "testo": "La prétendue tragédie des prolétaires cognitifs est en vérité une tragédie de la bourgeoisie"
  },
  {
   "tipo": "esergo",
   "testo": "Il est le père fondateur de la classe malaisée, trop riche pour renoncer à ses aspirations, mais trop pauvre pour les réaliser"
  },
  {
   "tipo": "barre",
   "dopo": "la part des 18-24 ans qui déclarent les symptômes d’un épisode dépressif",
   "richiede": [
    "11,7 %",
    "20,8 %"
   ],
   "titolo": "18-24 ans déclarant un épisode dépressif dans l’année (Santé publique France)",
   "righe": [
    {
     "v": 11.7,
     "etichetta": "2017"
    },
    {
     "v": 20.8,
     "etichetta": "2021"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "esergo",
   "testo": "Nous nous voyons dans le rôle des opprimés, mais nous ne sommes peut-être que des oppresseurs ratés",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Le bovarysme est l’idéologie de notre temps"
  }
 ],
 "13": [
  {
   "tipo": "apertura",
   "img": "13",
   "alt": "Un diplômé en équilibre sur une pile de diplômes qui vacille, posée sur un levier dont le point d’appui est un minuscule caillou, observé par un recruteur à la loupe."
  },
  {
   "tipo": "esergo",
   "testo": "Le titre a donc, dès l’origine, deux fonctions qu’il faudra distinguer : attester un savoir et fermer l’accès à une place"
  },
  {
   "tipo": "esergo",
   "testo": "Les leviers s’allongent pendant que l’appui se rétrécit"
  },
  {
   "tipo": "cronologia",
   "dopo": "Duru-Bellat a donné ce titre à un livre de 2006",
   "richiede": [
    "1899",
    "1941",
    "1959",
    "1973",
    "1979",
    "2006"
   ],
   "titolo": "De Veblen à l’inflation scolaire",
   "tappe": [
    {
     "anno": "1899",
     "testo": "Veblen décrit la consommation ostentatoire de la classe de loisir."
    },
    {
     "anno": "1941",
     "testo": "Adorno qualifie la théorie de Veblen d’attaque contre la culture."
    },
    {
     "anno": "1959",
     "testo": "Packard popularise les théories de Veblen et de Weber."
    },
    {
     "anno": "1973",
     "testo": "Michael Spence traduit la logique du prestige dans une théorie du signal."
    },
    {
     "anno": "1979",
     "testo": "Collins décrit la « société des titres »."
    },
    {
     "anno": "2006",
     "testo": "Duru-Bellat publie un livre sur l’« inflation scolaire »."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Mais cette course à la reconnaissance ne peut pas avoir de vainqueurs",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Un savoir vaut alors par ce qu’il a coûté"
  }
 ],
 "14": [
  {
   "tipo": "apertura",
   "img": "14",
   "alt": "Une foule de bonshommes dessinés maladroitement, tous sur la pointe des pieds devant une clôture, sans que personne voie mieux, et un minuscule trophée sur une étagère inaccessible."
  },
  {
   "tipo": "esergo",
   "testo": "le prestige n’a de valeur que parce qu’il est distribué de cette manière, inégalement"
  },
  {
   "tipo": "esergo",
   "testo": "la richesse dont il s’agit est aussi un rang, et un rang ne se multiplie pas"
  },
  {
   "tipo": "barre",
   "dopo": "En 2019, près d’un tiers des salariés ne jugent pas leur travail reconnu",
   "richiede": [
    "68 %",
    "75 %",
    "63 %"
   ],
   "titolo": "Salariés jugeant leur travail reconnu à sa juste valeur, France, 2019",
   "righe": [
    {
     "v": 75,
     "etichetta": "Cadres"
    },
    {
     "v": 68,
     "etichetta": "Ensemble des salariés"
    },
    {
     "v": 63,
     "etichetta": "Employés administratifs"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "cronologia",
   "dopo": "Dans son livre de 1976, Social Limits to Growth",
   "richiede": [
    "1625",
    "1755",
    "1952",
    "1965",
    "1976"
   ],
   "titolo": "Les jalons de la reconnaissance",
   "tappe": [
    {
     "anno": "1625",
     "testo": "Bacon note que les tempêtes de l’État grandissent quand les choses tendent vers l’égalité."
    },
    {
     "anno": "1755",
     "testo": "Rousseau distingue amour de soi et amour-propre dans le second Discours."
    },
    {
     "anno": "1952",
     "testo": "Fanon décrit les pathologies de la méconnaissance liées à l’identité colonisée."
    },
    {
     "anno": "1965",
     "testo": "Otis Redding publie le single « Respect »."
    },
    {
     "anno": "1976",
     "testo": "Fred Hirsch publie Social Limits to Growth sur les biens positionnels."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Ce que nous cherchons dans le regard d’autrui, c’est d’exister",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Nous ne pouvons pas tous être également distingués"
  },
  {
   "tipo": "cifra",
   "dopo": "public de secteur élève le prix des logements de 1,4 à 2,4 %, et",
   "richiede": [
    "1,4 à 2,4 %"
   ],
   "valore": "1,4 à 2,4 %",
   "etichetta": "Hausse du prix des logements à Paris pour un écart-type de plus dans les résultats de l’établissement public de secteur."
  }
 ],
 "15": [
  {
   "tipo": "apertura",
   "img": "15",
   "alt": "Un joueur double sans cesse une tour de jetons branlante qui penche au-dessus de lui, sous le regard sévère d’un croupier."
  },
  {
   "tipo": "esergo",
   "testo": "Si tout le monde joue à la martingale, personne ne gagne, mais on ne fait que dilapider, collectivement, la valeur"
  },
  {
   "tipo": "esergo",
   "testo": "Toute la souffrance du déclassement tient dans l’écart entre ces deux comptabilités"
  },
  {
   "tipo": "barre",
   "dopo": "le taux de déclassement des jeunes diplômés",
   "richiede": [
    "26 %",
    "32 %"
   ],
   "titolo": "Taux de déclassement des jeunes diplômés, trois ans après la fin des études",
   "righe": [
    {
     "v": 26,
     "etichetta": "Sortis en 2004"
    },
    {
     "v": 32,
     "etichetta": "Sortis en 2021"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "esergo",
   "testo": "La martingale est la réponse individuelle à la grande dévalorisation, et elle en est aussi le moteur",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "L’issue ne peut donc venir que des règles du jeu, non de la sagesse de chaque joueur"
  },
  {
   "tipo": "barre",
   "dopo": "Les deux constats sont vrais ensemble, et c’est leur conjonction qui définit",
   "richiede": [
    "41 %",
    "17 %"
   ],
   "titolo": "Part des détenteurs d’un diplôme bac + 3 ou plus, France, 2024",
   "righe": [
    {
     "v": 17,
     "etichetta": "55-64 ans"
    },
    {
     "v": 41,
     "etichetta": "25-34 ans"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  }
 ],
 "16": [
  {
   "tipo": "apertura",
   "img": "16",
   "alt": "Une jeune femme épuisée travaille la nuit à son bureau pendant que des feux d’artifice éclatent derrière la fenêtre."
  },
  {
   "tipo": "esergo",
   "testo": "Nous pensions ne jamais travailler, nous travaillons toujours"
  },
  {
   "tipo": "esergo",
   "testo": "L’économie vocationnelle apparaît aujourd’hui comme le moteur secret du capitalisme"
  },
  {
   "tipo": "barre",
   "dopo": "Dans l’ensemble de la zone OCDE, le taux de syndicalisation a diminué",
   "richiede": [
    "passant de 33",
    "16 pour cent"
   ],
   "titolo": "Taux de syndicalisation, zone OCDE",
   "righe": [
    {
     "v": 33,
     "etichetta": "1975"
    },
    {
     "v": 16,
     "etichetta": "2018"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "esergo",
   "testo": "Nous sommes tous des artistes, des créateurs de contenu, de petits entrepreneurs, mais nous devons payer pour l’être",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Chaque acteur, pour survivre, accepte de participer à une course vers le bas sans vainqueur"
  },
  {
   "tipo": "cifra",
   "dopo": "1 165 800 entreprises ont été créées en 2025, dont environ les deux tiers",
   "richiede": [
    "1 165 800"
   ],
   "valore": "1 165 800",
   "etichetta": "entreprises créées en France en 2025, dont environ les deux tiers sous le régime du micro-entrepreneur."
  },
  {
   "tipo": "cifra",
   "dopo": "Un micro-entrepreneur sur deux en tire moins de 330 euros par mois",
   "richiede": [
    "330 euros"
   ],
   "valore": "330 euros",
   "etichetta": "Un micro-entrepreneur sur deux tire de son activité moins de 330 euros par mois."
  }
 ],
 "17": [
  {
   "tipo": "apertura",
   "img": "17",
   "alt": "Une longue file de petits personnages qui crient dans des porte-voix, et tout au bout un seul qui s’adresse à un chat endormi."
  },
  {
   "tipo": "esergo",
   "testo": "Au bout de la traîne, on trouve donc un lieu où publier, et très rarement un revenu"
  },
  {
   "tipo": "esergo",
   "testo": "le prosumer consomme en croyant travailler, et c’est pourquoi il ne s’arrête pas"
  },
  {
   "tipo": "cronologia",
   "dopo": "Dans son livre de 2011, Carlo Formenti a qualifié les prosumers",
   "richiede": [
    "1930",
    "1956",
    "1980",
    "2011"
   ],
   "titolo": "Le prosumer, de Benjamin à Formenti",
   "tappe": [
    {
     "anno": "1930",
     "testo": "Dans les années 1930, Walter Benjamin observe que la presse ouvre ses colonnes au courrier des lecteurs."
    },
    {
     "anno": "1956",
     "testo": "Günther Anders publie L’Obsolescence de l’homme."
    },
    {
     "anno": "1980",
     "testo": "Alvin Toffler forge le mot « prosumer » dans La Troisième Vague."
    },
    {
     "anno": "2011",
     "testo": "Carlo Formenti qualifie les prosumers d’« heureux et exploités »."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Andy Warhol a prophétisé que dans le futur nous serions tous célèbres pendant quinze minutes ; or nous sommes tous célèbres pour quinze personnes",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Tant que consommer passait pour un loisir, la consommation avait une limite : on pouvait s’en lasser, ou se la reprocher"
  }
 ],
 "18": [
  {
   "tipo": "apertura",
   "img": "18",
   "alt": "Un chevalier ploie sous une énorme armure branchée à un câble, derrière lui une longue file de chevaliers identiques."
  },
  {
   "tipo": "esergo",
   "testo": "chaque travailleur devra prouver qu’il est humain, plus humain que tous les autres"
  },
  {
   "tipo": "esergo",
   "testo": "Le marché du travail est sur le point de devenir un gigantesque CAPTCHA"
  },
  {
   "tipo": "esergo",
   "testo": "C’est la martingale de la classe malaisée, rejouée sur un terrain neuf : on ne relance plus avec un diplôme, mais avec une personnalité",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "La liquéfaction du capital cognitif laisse toute la place au capital social, c’est-à-dire à la réputation"
  },
  {
   "tipo": "cifra",
   "dopo": "Entre 1800 et 1870, le coût unitaire de l’énergie à vapeur se réduit",
   "richiede": [
    "80 %"
   ],
   "valore": "80 %",
   "etichetta": "Baisse du coût unitaire de l’énergie à vapeur entre 1800 et 1870 (« près de » 80 %)."
  },
  {
   "tipo": "cifra",
   "dopo": "Entre 1780 et 1830, le coût de production du fil de coton s’effondre",
   "richiede": [
    "85 %"
   ],
   "valore": "85 %",
   "etichetta": "Effondrement du coût de production du fil de coton entre 1780 et 1830 (« plus de » 85 %)."
  }
 ],
 "19": [
  {
   "tipo": "apertura",
   "img": "19",
   "alt": "Un diplômé en longue robe, perché sur un piédestal branlant, tient son diplôme sous les yeux d’une foule de diplômés identiques."
  },
  {
   "tipo": "esergo",
   "testo": "La course aux armements éducative est un jeu de chaises musicales joué avec des chaises en or massif"
  },
  {
   "tipo": "esergo",
   "testo": "Le cas chinois suggère que la concurrence pour le rang n’attend pas le déclin, puisqu’elle sévit dans une économie en pleine ascension"
  },
  {
   "tipo": "barre",
   "dopo": "Entre 1994 et 2019, la part des actifs diplômés à bac + 3 ou davantage",
   "richiede": [
    "9 %",
    "25 %"
   ],
   "titolo": "Part des actifs diplômés à bac + 3 ou plus, France",
   "righe": [
    {
     "v": 9,
     "etichetta": "1994"
    },
    {
     "v": 25,
     "etichetta": "2019"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "cronologia",
   "dopo": "Il existe un concept encore plus récent et nihiliste",
   "richiede": [
    "1999",
    "2009",
    "2018",
    "2021"
   ],
   "titolo": "La déception des diplômés chinois",
   "tappe": [
    {
     "anno": "1999",
     "testo": "Le gouvernement élargit massivement l’accès à l’université."
    },
    {
     "anno": "2009",
     "testo": "Lian Si définit la « Tribu des Fourmis » de diplômés précaires."
    },
    {
     "anno": "2018",
     "testo": "Fan Gang propose la théorie des « six portefeuilles »."
    },
    {
     "anno": "2021",
     "testo": "Début du phénomène du « Rester allongé », Tangping."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Une loterie qui, en alimentant les espoirs, finit par nourrir la déception",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "L’épuisement des rentes ne crée pas la concurrence ex nihilo, mais la rend plus agressive et désespérée"
  },
  {
   "tipo": "cifra",
   "dopo": "Aujourd’hui, la dette étudiante totale s’élève à plus de 1 700 milliards de dollars",
   "richiede": [
    "1 700 milliards de dollars"
   ],
   "valore": "1 700 milliards de dollars",
   "etichetta": "Plus de 1 700 milliards : la dette étudiante totale, deuxième poste d’endettement des ménages américains."
  },
  {
   "tipo": "cifra",
   "dopo": "si en 1998 on comptait environ un million de diplômés par an, on",
   "richiede": [
    "11 millions"
   ],
   "valore": "11 millions",
   "etichetta": "diplômés par an en Chine aujourd’hui, contre environ un million en 1998."
  },
  {
   "tipo": "cifra",
   "dopo": "Au Royaume-Uni, la dette étudiante totale a dépassé 200 milliards de livres sterling",
   "richiede": [
    "200 milliards de livres sterling"
   ],
   "valore": "200 milliards de livres sterling",
   "etichetta": "Dette étudiante totale au Royaume-Uni, dépassée en 2023."
  },
  {
   "tipo": "cifra",
   "dopo": "Aujourd’hui, le chômage des jeunes est si élevé, dépassant les 20 %",
   "richiede": [
    "20 %"
   ],
   "valore": "20 %",
   "etichetta": "Plus de 20 % : le chômage des jeunes en Chine, dont Pékin a suspendu la publication avant d’en modifier le calcul."
  }
 ],
 "20": [
  {
   "tipo": "apertura",
   "img": "20",
   "alt": "Un dodo en cravate au milieu d’une foule de dodos identiques, tous les yeux fixés sur une minuscule chaise vide."
  },
  {
   "tipo": "esergo",
   "testo": "Le taux de fécondité n’est en fait rien d’autre que le coefficient diviseur du capital au changement de génération"
  },
  {
   "tipo": "esergo",
   "testo": "Nous nous éteignons biologiquement pour ne pas nous éteindre socialement"
  },
  {
   "tipo": "cronologia",
   "dopo": "Les empires austro-hongrois et allemand en déliquescence",
   "richiede": [
    "1909",
    "1911",
    "1922",
    "1931",
    "1933"
   ],
   "titolo": "La fuite des intellectuels vers l’Ouest",
   "tappe": [
    {
     "anno": "1909",
     "testo": "Erich von Stroheim débarque à Ellis Island."
    },
    {
     "anno": "1911",
     "testo": "Wittgenstein arrive à Cambridge."
    },
    {
     "anno": "1922",
     "testo": "Premier film américain de Lubitsch."
    },
    {
     "anno": "1931",
     "testo": "Hayek arrive à Londres."
    },
    {
     "anno": "1933",
     "testo": "Après 1933, les menaces contre l’intégrité physique des intellectuels deviennent manifestes."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Qui est pauvre fait des enfants, qui est riche fait des enfants, mais qui est riche sans l’être assez en fait moins",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Il ne s’agit pas d’un libre choix culturel, mais d’une nécessité comptable"
  },
  {
   "tipo": "cifra",
   "dopo": "En France, l’indicateur conjoncturel de fécondité s’établit à 1,56 enfant par femme en 2025,",
   "richiede": [
    "1,56"
   ],
   "valore": "1,56",
   "etichetta": "enfant par femme en France en 2025 : le niveau le plus faible depuis la fin de la Première Guerre mondiale."
  },
  {
   "tipo": "cifra",
   "dopo": "et l’âge moyen à l’accouchement atteint 31,2 ans, contre 29,6 ans en 2005",
   "richiede": [
    "31,2 ans"
   ],
   "valore": "31,2 ans",
   "etichetta": "Âge moyen à l’accouchement en France en 2025, contre 29,6 ans en 2005."
  }
 ],
 "21": [
  {
   "tipo": "apertura",
   "img": "21",
   "alt": "Un bureau de change dont le tableau des taux est vide : un employé hausse les épaules devant un client qui tend son diplôme."
  },
  {
   "tipo": "esergo",
   "testo": "Par anomie, nous entendons la situation où aucune règle de conversion du capital ne vaut plus"
  },
  {
   "tipo": "esergo",
   "testo": "le ressentiment est une stratégie psychologique, discursive et en fin de compte politique qui consiste à rejeter la faute sur l’autre"
  },
  {
   "tipo": "cronologia",
   "dopo": "Mais n’est-ce pas là précisément la condition de la classe malaisée",
   "richiede": [
    "1880",
    "1897",
    "1912",
    "1938",
    "2006"
   ],
   "titolo": "L’anomie et le ressentiment, d’une théorie à l’autre",
   "tappe": [
    {
     "anno": "1880",
     "testo": "Dans les années 1880, Nietzsche théorise l’homme du ressentiment."
    },
    {
     "anno": "1897",
     "testo": "Durkheim publie Le Suicide, avec son chapitre sur le suicide anomique."
    },
    {
     "anno": "1912",
     "testo": "Max Scheler écrit, entre 1912 et 1919, Le Ressentiment dans l’édification des morales."
    },
    {
     "anno": "1938",
     "testo": "Merton prolonge Durkheim et éclaire la déviance par l’anomie."
    },
    {
     "anno": "2006",
     "testo": "Louis Chauvel constate que les enfants entrent dans le monde du travail dans une situation moins favorable que celle de leurs parents."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "L’anomie, prise à la lettre, est donc l’absence de règle de partage",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "La vie que nous apprenons obstinément à mépriser dans notre jeunesse est celle qui attend la plupart d’entre nous à l’âge adulte"
  }
 ],
 "22": [
  {
   "tipo": "apertura",
   "img": "22",
   "alt": "Une longue file de gens tenant des reconnaissances de dette devant un guichet de banque, où l’employé ouvre un coffre vide."
  },
  {
   "tipo": "esergo",
   "testo": "Nous appelons dette symbolique ce que les institutions doivent à ceux qui ont cru à leurs promesses"
  },
  {
   "tipo": "esergo",
   "testo": "La classe moyenne n’a pas toujours perdu ce qu’elle avait ; elle compte comme perdu ce qui lui avait été annoncé"
  },
  {
   "tipo": "cronologia",
   "dopo": "Dans une étude publiée en 2017, les politologues",
   "richiede": [
    "1789",
    "1973",
    "2002",
    "2017"
   ],
   "titolo": "Des promesses de 1789 à la désaffection démocratique",
   "tappe": [
    {
     "anno": "1789",
     "testo": "La Déclaration affirme que les hommes naissent libres et égaux en droits."
    },
    {
     "anno": "1973",
     "testo": "Choc pétrolier."
    },
    {
     "anno": "2002",
     "testo": "Daniel Kahneman reçoit le prix Nobel d’économie."
    },
    {
     "anno": "2017",
     "testo": "Mounk et Foa analysent l’effondrement des valeurs démocratiques en Occident."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "La déception, en somme, fait mouvoir le monde",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Une promesse déplace le point de référence avant d’avoir été tenue"
  },
  {
   "tipo": "cifra",
   "dopo": "ce chiffre baisse de décennie en décennie pour atteindre 30 % pour les",
   "richiede": [
    "30 %"
   ],
   "valore": "30 %",
   "etichetta": "Attachement très fort à la démocratie chez les personnes nées dans les années 1980, selon Mounk et Foa."
  },
  {
   "tipo": "cifra",
   "dopo": "les auteurs ont observé que 58 % des personnes interrogées à l’échelle mondiale",
   "richiede": [
    "58 %"
   ],
   "valore": "58 %",
   "etichetta": "des personnes interrogées à l’échelle mondiale se disent insatisfaites de la démocratie."
  }
 ],
 "23": [
  {
   "tipo": "apertura",
   "img": "23",
   "alt": "Un grand arbitre endormi, sifflet aux lèvres, au milieu de petits groupes qui lui tournent le dos autour de feux de camp séparés."
  },
  {
   "tipo": "esergo",
   "testo": "La guerre de tous contre tous, au fond, n’est rien d’autre qu’une crise de la dette symbolique"
  },
  {
   "tipo": "esergo",
   "testo": "La dissimilation est une défection sur place, qui passe par la production d’une différence"
  },
  {
   "tipo": "esergo",
   "testo": "Nous avons vu que la reconnaissance est un bien positionnel, qu’on ne peut promettre à tous sans la dévaluer",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Les crises de croissance, par manque d’opportunités, ouvrent le plus souvent des crises de cohésion"
  }
 ],
 "24": [
  {
   "tipo": "apertura",
   "img": "24",
   "alt": "Deux montagnes russes, l’une qui monte très haut, l’autre qui s’affaisse, et au milieu du vide un petit diplômé qui se gratte la tête."
  },
  {
   "tipo": "esergo",
   "testo": "Ce n’est pas une lutte des classes mais une lutte dans la classe"
  },
  {
   "tipo": "esergo",
   "testo": "les révolutions ne naissent pas de la misère, mais de la frustration relative"
  },
  {
   "tipo": "cronologia",
   "dopo": "mais projette son ombre sur la scène internationale",
   "richiede": [
    "1851",
    "1871",
    "1884",
    "1894",
    "1902"
   ],
   "titolo": "Le « prolétariat intellectuel » et ses menaces",
   "tappe": [
    {
     "anno": "1851",
     "testo": "Wilhelm Riehl formule la thèse d’une surproduction de diplômés en Allemagne."
    },
    {
     "anno": "1871",
     "testo": "George Eliot publie Middlemarch, avec le jeune Will Ladislaw."
    },
    {
     "anno": "1884",
     "testo": "Bismarck dénonce au Reichstag un « prolétariat de bacheliers »."
    },
    {
     "anno": "1894",
     "testo": "Ferrero accuse l’école italienne de cultiver le prolétariat intellectuel."
    },
    {
     "anno": "1902",
     "testo": "Hobson lie l’excédent de capital et de main-d’œuvre à la conquête de marchés."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "Le populisme, c’est la bourgeoisie déclassée qui se rêve en peuple",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Ce que le diplômé déclassé et l’électeur populiste ont en commun, c’est le sentiment de perdre un rang"
  },
  {
   "tipo": "cifra",
   "dopo": "la majorité des électeurs qui gagnaient moins de 50 000 dollars par an",
   "richiede": [
    "50 000 dollars"
   ],
   "valore": "50 000 dollars",
   "etichetta": "Seuil de revenu annuel : en 2016, la majorité des électeurs qui gagnaient moins n’avait pas voté pour Trump."
  },
  {
   "tipo": "cifra",
   "dopo": "En 2012, les États-Unis en importaient plus de 185 000 kilos de l’étranger",
   "richiede": [
    "185 000 kilos"
   ],
   "valore": "185 000 kilos",
   "etichetta": "Plus de 185 000 kilos de pseudoéphédrine importés de l’étranger par les États-Unis en 2012."
  }
 ],
 "25": [
  {
   "tipo": "apertura",
   "img": "25",
   "alt": "Un petit bateau en papier portant un diplôme flotte dans une baignoire, tandis qu’un homme inquiet scrute l’horizon vide à la longue-vue."
  },
  {
   "tipo": "esergo",
   "testo": "Un diplôme est un navire en mer : une créance sur une place future, dont nul ne sait si elle rentrera au port"
  },
  {
   "tipo": "esergo",
   "testo": "S’endetter sans rembourser reste donc possible aussi longtemps que la croissance le permet"
  },
  {
   "tipo": "barre",
   "dopo": "En France, selon le Conseil d’analyse économique",
   "richiede": [
    "60 %",
    "35 %"
   ],
   "titolo": "Part de la fortune héritée dans le patrimoine total, France",
   "righe": [
    {
     "v": 35,
     "etichetta": "Début des années 1970"
    },
    {
     "v": 60,
     "etichetta": "Désormais"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "esergo",
   "testo": "La dette financière double ainsi la dette symbolique : on emprunte pour tenir encore une promesse qui n’est plus tenue",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Portia est un bien positionnel, et sa cour une enchère où tous paient, vainqueur ou non"
  },
  {
   "tipo": "cifra",
   "dopo": "À la fin du deuxième trimestre 2026, sa dette publique atteint 119,0 %",
   "richiede": [
    "119,0 %"
   ],
   "valore": "119,0 %",
   "etichetta": "Dette publique de la France, en part du PIB, à la fin du deuxième trimestre 2026."
  },
  {
   "tipo": "cifra",
   "dopo": "La Cour des comptes prévoit une charge d’intérêts de 77 milliards d’euros",
   "richiede": [
    "77 milliards d’euros"
   ],
   "valore": "77 milliards d’euros",
   "etichetta": "Charge d’intérêts prévue par la Cour des comptes, égale au budget de l’éducation nationale hors pensions."
  },
  {
   "tipo": "barre",
   "dopo": "en dépassent aujourd’hui 15 %. La part du père a recommencé de croître.",
   "richiede": [
    "à peine 5 % du revenu national en 1950",
    "en dépassent aujourd’hui 15 %"
   ],
   "titolo": "Transmissions en part du revenu national, France",
   "righe": [
    {
     "v": 5,
     "etichetta": "1950"
    },
    {
     "v": 15,
     "etichetta": "Aujourd’hui (plus de 15 %)"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  }
 ],
 "26": [
  {
   "tipo": "apertura",
   "img": "26",
   "alt": "Un minuscule roi couronné porte une énorme boîte à fusibles sur le dos, tandis qu’une foule de petits personnages le désigne chacun dans une direction différente."
  },
  {
   "tipo": "cronologia",
   "dopo": "Fini, le pouvoir constituant républicain de l’abbé Sieyès",
   "richiede": [
    "2005",
    "2007",
    "2013",
    "2016",
    "2018"
   ],
   "titolo": "Du pouvoir destituant aux soulèvements",
   "tappe": [
    {
     "anno": "2005",
     "testo": "Émeutes en France ; un numéro de « La Rose de Personne » leur est consacré, où Adriano Vinale avance l’idée d’un pouvoir destituant."
    },
    {
     "anno": "2007",
     "testo": "Le Comité Invisible annonce « l’insurrection qui vient »."
    },
    {
     "anno": "2013",
     "testo": "Giorgio Agamben développe l’idée dans deux conférences."
    },
    {
     "anno": "2016",
     "testo": "Julien Coupat et Éric Hazan publient une tribune dans Libération."
    },
    {
     "anno": "2018",
     "testo": "Hiver des Gilets jaunes."
    }
   ]
  },
  {
   "tipo": "esergo",
   "testo": "la multitude s’est muée en pure puissance destituante : des créanciers qui ne s’accordent que sur le nom du débiteur",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "On passe ainsi de l’État-providence à l’État de survie"
  },
  {
   "tipo": "cifra",
   "dopo": "la dette souveraine mondiale dépasse désormais les 100 000 milliards de dollars",
   "richiede": [
    "100 000 milliards de dollars"
   ],
   "valore": "100 000 milliards de dollars",
   "etichetta": "La dette souveraine mondiale dépasse ce montant, soit près de la moitié de l’endettement global de la planète."
  }
 ],
 "27": [
  {
   "tipo": "apertura",
   "img": "27",
   "alt": "Un petit souverain fatigué tend un énorme sac de pièces à un garde géant casqué, qui cache la couronne dans son dos."
  },
  {
   "tipo": "esergo",
   "testo": "Une société qui tient debout du seul fait de la répression n’est plus une société, c’est une foule"
  },
  {
   "tipo": "esergo",
   "testo": "la demande de sécurité ne disparaît pas : elle se déplace de la compétence vers la force"
  },
  {
   "tipo": "esergo",
   "testo": "Le processus de modernisation se conçoit comme un cercle vertueux : la compétence stimule la croissance, la croissance finance la compétence",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "la compétence n’a pas de valeur absolue mais relative au degré de division du travail"
  }
 ],
 "conclusion": [
  {
   "tipo": "apertura",
   "img": "conclusion",
   "alt": "Un prince boudeur en couronne de papier est assis sur des cartons, face à un smartphone sur trépied équipé d’un anneau lumineux."
  },
  {
   "tipo": "esergo",
   "testo": "Hamlet est le premier grand déçu de la littérature occidentale"
  },
  {
   "tipo": "esergo",
   "testo": "La sobriété n’est une privation que lorsqu’elle est solitaire"
  },
  {
   "tipo": "barre",
   "dopo": "déclarent avoir confiance dans la politique",
   "richiede": [
    "22 %",
    "15 %",
    "60 %"
   ],
   "titolo": "Confiance des Français, février 2026 (Cevipof)",
   "righe": [
    {
     "v": 22,
     "etichetta": "Dans la politique"
    },
    {
     "v": 15,
     "etichetta": "Dans les partis"
    },
    {
     "v": 60,
     "etichetta": "Dans les maires"
    }
   ],
   "fonte": "Chiffres cités dans le chapitre."
  },
  {
   "tipo": "esergo",
   "testo": "Les places doivent cesser d’être des récompenses",
   "grande": true
  },
  {
   "tipo": "esergo",
   "testo": "Ce qui doit décroître n’est pas la culture, mais son emploi comme bien positionnel"
  },
  {
   "tipo": "cifra",
   "dopo": "recueillent 60 % de confiance. L’attachement au régime démocratique reste pourtant à 82 %",
   "richiede": [
    "82 %"
   ],
   "valore": "82 %",
   "etichetta": "Attachement au régime démocratique en France, selon le Cevipof (février 2026)."
  }
 ]
};
