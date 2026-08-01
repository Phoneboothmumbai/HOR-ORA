// Central Oracle data & config
export const BRAND = {
  project: "Oracle",
  developer: "Hariom Realty",
  tagline: "We don't just build homes. We build trust.",
  positioning: "The Mulund of Exclusivity",
  location: "Mulund East, Mumbai",
  possession: "Dec 2029",
  rera: "PR1180002500319",
};

export const CONTACT = {
  primaryPhone: "7045955955",
  whatsapp: "917045955955",
  email: "contact@hariomrealty.com",
  office:
    "Office No. 1/2/3/4, Datta Vijay Society, Mahatma Phule Road, Mulund East, Mumbai – 400081",
  hours: "10:30 AM – 7:00 PM",
  instagram: "https://www.instagram.com/hariomrealty",
  facebook: "https://www.facebook.com/OraclebyHariomRealty",
};

export const CONFIGURATIONS = [
  { type: "2 BHK", area: 623, price: 19686087, priceLabel: "₹1.97 Cr" },
  { type: "2 BHK", area: 630, price: 19894470, priceLabel: "₹1.99 Cr" },
  { type: "2 BHK", area: 729, price: 22830801, priceLabel: "₹2.28 Cr" },
  { type: "2 BHK", area: 740, price: 23169060, priceLabel: "₹2.32 Cr" },
  { type: "3 BHK", area: 1007, price: 31117383, priceLabel: "₹3.11 Cr" },
  { type: "3 BHK", area: 1150, price: 35374350, priceLabel: "₹3.54 Cr" },
];

export const SPECS = [
  {
    category: "Plumbing (CP) fittings",
    spec: "Chromium plated (toilets & kitchen)",
    brand: "Jaquar / Kohler / Topson",
  },
  {
    category: "External pipes (UPVC)",
    spec: "Sewer / waste / rainwater pipes & terrace looping",
    brand: "Astral / Prince / Supreme",
  },
  {
    category: "Main door",
    spec: "35–45 mm, 100% pine wood, veneer FRD",
    brand: "Timex / Green / Century",
  },
  {
    category: "Kitchen sink",
    spec: "Flushed with kitchen platform",
    brand: "Diamond / Cera",
  },
  {
    category: "Flooring — lobby",
    spec: "Italian marble, artificial marble, granite",
    brand: "AGL / Kalinga / RAK",
  },
  {
    category: "Flooring — kitchen",
    spec: "Glazed tiles on dado per architect design",
    brand: "Octavia / Kajaria / NITCO",
  },
];

export const AMENITIES = [
  { name: "Multipurpose Lawn", tag: "Open air", icon: "trees" },
  { name: "Senior Citizen Corner", tag: "Quiet", icon: "armchair" },
  { name: "Sandpit Reflexology", tag: "Barefoot", icon: "footprints" },
  { name: "Sitting Corner", tag: "Landscaped", icon: "sofa" },
  { name: "Kids' Play Area", tag: "Fenced", icon: "toy-brick" },
  { name: "Outdoor Gym", tag: "Open sky", icon: "dumbbell" },
  { name: "Reading Corner", tag: "Nook", icon: "book-open" },
  { name: "Meditation Corner", tag: "Zen", icon: "flower" },
  { name: "Viewing Deck", tag: "Rooftop", icon: "mountain" },
  { name: "Multi-tier Security", tag: "24 × 7", icon: "shield-check" },
];

export const CONNECTIVITY = [
  { landmark: "NY Cinemas", time: "0 min" },
  { landmark: "Mulund Railway Station", time: "1 min" },
  { landmark: "Chintamani Garden", time: "3 min" },
  { landmark: "Kelkar College", time: "5 min" },
  { landmark: "Ashirwad Hospital", time: "5 min" },
  { landmark: "East–West Flyover", time: "6 min" },
  { landmark: "Raje Sambhaji Park", time: "7 min" },
  { landmark: "R-Mall", time: "8 min" },
  { landmark: "Orchid International School", time: "15 min" },
  { landmark: "IES School", time: "15 min" },
];

export const MANIFESTO = [
  {
    n: "01",
    title: "Trusted & Transparent",
    body: "Every commitment is honoured in writing and in spirit — from the first walkthrough to the final handover.",
  },
  {
    n: "02",
    title: "Delivered On Time",
    body: "A discipline of milestones, verified quarterly. We publish progress so you never have to ask.",
  },
  {
    n: "03",
    title: "Premium Craft",
    body: "German plumbing, Italian marble, Japanese sanitaryware — specified, not substituted.",
  },
  {
    n: "04",
    title: "Legally Clear",
    body: "Titles verified, approvals lodged, RERA registered. Your due diligence begins where ours ends.",
  },
  {
    n: "05",
    title: "Redevelopment Experts",
    body: "Two decades of neighbourhood knowledge — the reason existing societies choose Hariom Realty.",
  },
];

// Uploaded brand assets — bundled locally, no external CDN dependency
export const ASSETS = {
  oracleLogo: "/images/oracle-logo.webp",
  hariomLogo: "/images/hariom-logo.webp",
  // Exterior renders
  exteriorHero: "/images/exterior-hero.webp",
  exteriorAerial: "/images/exterior-aerial.webp",
  exteriorStreet: "/images/exterior-street.webp",
  exteriorStreet2: "/images/exterior-street2.webp",
  exteriorArrival: "/images/exterior-arrival.webp",
  // Interior sample flats
  sample1: "/images/sample-1.jpg",
  sample2: "/images/sample-2.jpg",
  sample3: "/images/sample-3.jpg",
};

export const IMAGES = {
  heroBg: ASSETS.exteriorHero,
  heroSecondary: ASSETS.exteriorStreet,
  aboutLiving: ASSETS.sample1,
  gallery: [
    ASSETS.sample1,
    ASSETS.exteriorStreet,
    ASSETS.sample2,
    ASSETS.sample3,
    ASSETS.exteriorArrival,
    ASSETS.exteriorStreet2,
  ],
  amenityBg: ASSETS.exteriorAerial,
  location: ASSETS.exteriorAerial,
};
