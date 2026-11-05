// ================================================================
//  RÉGLAGES DU SITE — Échiquier de Saint-Hilaire Océan
//  C'est le seul fichier à modifier (une fois, à l'installation).
//  Chaque réglage laissé vide ("") garde le texte par défaut du site.
//  Le mode d'emploi est dans README.md.
// ================================================================
window.CLUB = {

  // 1. Google Sheet « Infos du club » publiée en CSV
  //    (Fichier > Partager > Publier sur le web > Format CSV > copier le lien)
  feuilleInfos: "",

  // 2. Google Agenda du club
  //    ID : Paramètres de l'agenda > Intégrer l'agenda > « ID de l'agenda »
  agendaId: "",
  //    Clé API Google (facultative, pour l'affichage aux couleurs du site).
  //    Sans clé, l'agenda Google standard est affiché à la place.
  agendaCleApi: "",

  // 3. Liens
  helloasso: "",       // formulaire d'adhésion HelloAsso
  ffeTournois: "https://www.echecs.asso.fr/ListeTournois.aspx",
  ffeClub: "https://www.echecs.asso.fr/FicheClub.aspx?Ref=3482",         // fiche du club sur le site FFE
  facebook: "https://www.facebook.com/p/Echiquier-de-Saint-Hilaire-Oc%C3%A9an-61594509785026/",
  instagram: "",

  // 4. Formulaire de contact relié à un Google Form (voir README.md)
  formulaire: {
    action: "",        // https://docs.google.com/forms/d/e/XXXX/formResponse
    nom: "",           // entry.XXXXXXX
    email: "",
    sujet: "",
    message: ""
  }
};
