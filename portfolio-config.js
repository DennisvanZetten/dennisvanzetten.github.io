// portfolio-config.js
// Fotografie portfolio configuratie - Dennis van Zetten

const PORTFOLIO_CONFIG = {
  landschappen: {
    title: "Landschappen",
    description: "Nederlandse natuur en landschapsfotografie",
    // Zet je landschapsfoto's in images/portfolio/landschappen/
    images: [
      {
        filename: "posbank-zonsopkomst.jpg",
        title: "Posbank bij zonsopgang",
        description:
          "Klassiek Nederlands landschap met heide in het ochtendlicht",
      },
    ],
  },
  macro: {
    title: "Macro Fotografie",
    description: "Macro shots van insecten en bloemen",
    images: [
      {
        filename: "paddestoelen-cluster.jpg",
        title: "Paddestoelen Hongarije",
        description:
          "Paddestoelen in een cluster, vastgelegd in het bos van Hongarije",
      },
      {
        filename: "paddestoel-zwartwit.jpg",
        title: "Paddestoel zwart wit, Hongarije",
        description:
          "Paddestoelen zwart wit, vastgelegd in het bos van Hongarije",
      },
      {
        filename: "paddestoel-tegenlicht.jpg",
        title: "Paddestoel met tegenlicht, Hongarije",
        description:
          "Paddestoel prachtig verlicht, vastgelegd in het bos van Hongarije",
      },
    ],
  },
  zwartwit: {
    title: "Zwart Wit",
    description: "Tijdloze zwart-wit fotografie",
    // Zet je zwart-wit foto's in images/portfolio/zwartwit/
    images: [],
  },
  // "all" categorie wordt automatisch gevuld - niet handmatig bewerken
  all: {
    title: "Portfolio",
    description: "Een verzameling van mijn beste werk",
    images: [], // Dit wordt automatisch gevuld door getAllImages()
  },
};

// Functie om alle foto's uit andere categorieën te verzamelen
function getAllImages() {
  const allImages = [];

  // Loop door alle categorieën behalve "all"
  Object.keys(PORTFOLIO_CONFIG).forEach((category) => {
    if (category !== "all" && PORTFOLIO_CONFIG[category].images) {
      PORTFOLIO_CONFIG[category].images.forEach((image) => {
        // Voeg category info toe aan elke foto voor correcte pad constructie
        allImages.push({
          ...image,
          category: category, // Voeg categorie toe voor pad: images/portfolio/{category}/{filename}
          categoryTitle: PORTFOLIO_CONFIG[category].title, // Voor display doeleinden
        });
      });
    }
  });

  return allImages;
}

// Automatisch de "all" categorie vullen bij het laden van de configuratie
PORTFOLIO_CONFIG.all.images = getAllImages();

// Export voor gebruik in andere scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PORTFOLIO_CONFIG, getAllImages };
}
