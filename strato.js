/* Lo strato editoriale della v2: eserghi, infografiche e parti interattive.
 *
 * Sta fuori dal testo. Il testo vive nel Google Doc e cambia; qui ogni elemento si aggancia
 * al testo con una frase («dopo») e dichiara le parole che devono esserci ancora («richiede»).
 * Se la frase o le cifre spariscono dal Doc, l'elemento non compare: un grafico non può
 * contraddire il testo che accompagna.
 *
 * La chiave è il numero del capitolo (gli identificativi delle schede cambiano).
 * Le didascalie sono di Claude, da far rileggere a Raffaele; le cifre sono quelle del capitolo.
 */
window.STRATO = {
  2: [
    { tipo: 'apertura', img: '02', alt: 'Un étudiant en toque monte un escalier de diplômes vers une petite porte fermée.' },

    { tipo: 'esergo', grande: true,
      testo: 'mon titre, non ce que je sais faire, mais ce que les autres savent, ou croient, que je sais faire' },

    { tipo: 'segno',
      dopo: 's’évanouit dès que tout le monde l’arbore',
      titolo: 'Ce que vaut un titre quand tout le monde l’a',
      usage: 'Valeur d’usage', usageNota: 'ce que le titre permet de faire',
      signe: 'Valeur de signe', signeNota: 'l’écart qu’il marque',
      cursore: 'Part de la population qui détient le titre',
      nota: 'Schéma illustratif : il montre le raisonnement, il ne mesure rien.' },

    { tipo: 'scrolly-punti',
      dopo: 'Ce sommet se recrute peu en dehors de lui-même',
      richiede: ['à peine un quart', '52 %', '70 %'],
      titolo: 'Le sommet se recrute peu en dehors de lui-même',
      legenda: 'enfants de cadres supérieurs',
      passi: [
        { n: 25, cifra: '≈ 25', dove: 'Dans leur classe d’âge', testo: 'Sur cent jeunes du même âge, à peine un quart sont enfants de cadres supérieurs.' },
        { n: 52, cifra: '52', dove: 'En classes préparatoires, 2019', testo: 'À l’entrée de la voie étroite, ils sont déjà plus d’un sur deux.' },
        { n: 70, cifra: '70', dove: 'À l’ENA (2015) et à Polytechnique (2018)', testo: 'Au sommet, environ sept sur dix. Le concours est égal pour tous dans sa forme.' }
      ],
      fonte: 'Chiffres cités dans le chapitre ; sources en note.' },

    { tipo: 'barre',
      dopo: 'contre 30 % de ceux dont les parents sont peu ou pas diplômés',
      richiede: ['81 %', '30 %'],
      titolo: 'Diplômés du supérieur parmi les 25-44 ans, selon le diplôme des parents (2021)',
      righe: [
        { v: 81, etichetta: 'Un parent au moins diplômé du supérieur' },
        { v: 30, etichetta: 'Parents peu ou pas diplômés' }
      ],
      fonte: 'Chiffres cités dans le chapitre.' },

    { tipo: 'esergo', prima: true, testo: 'Les dés étaient pipés' }
  ]
};
