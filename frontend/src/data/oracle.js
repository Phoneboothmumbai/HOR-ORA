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
  altPhones: ["7567906906", "7567784784"],
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
  { name: "Multipurpose Lawn", icon: "trees" },
  { name: "Senior Citizen Corner", icon: "armchair" },
  { name: "Sandpit Reflexology", icon: "footprints" },
  { name: "Sitting Corner", icon: "sofa" },
  { name: "Kids' Play Area", icon: "toy-brick" },
  { name: "Outdoor Gym", icon: "dumbbell" },
  { name: "Reading Corner", icon: "book-open" },
  { name: "Meditation Corner", icon: "flower" },
  { name: "Viewing Deck", icon: "mountain" },
  { name: "Multi-tier Security", icon: "shield-check" },
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
    title: "Trusted &\u00a0Transparent",
    body: "Every commitment is honoured in writing and in spirit — from the first walkthrough to the final handover.",
  },
  {
    n: "02",
    title: "Delivered\u00a0On\u00a0Time",
    body: "A discipline of milestones, verified quarterly. We publish progress so you never have to ask.",
  },
  {
    n: "03",
    title: "Premium\u00a0Craft",
    body: "German plumbing, Italian marble, Japanese sanitaryware — specified, not substituted.",
  },
  {
    n: "04",
    title: "Legally\u00a0Clear",
    body: "Titles verified, approvals lodged, RERA registered. Your due diligence begins where ours ends.",
  },
  {
    n: "05",
    title: "Redevelopment\u00a0Experts",
    body: "Two decades of neighbourhood knowledge — the reason existing societies choose Hariom Realty.",
  },
];

export const FLOOR_PLANS = [
  { id: "ground", label: "Ground Floor", meta: "Entrance · Shops · Parking" },
  { id: "commercial", label: "1st & 2nd Floor", meta: "Commercial · Offices" },
  { id: "f3", label: "3rd Floor", meta: "Residential" },
  { id: "f4", label: "4th Floor", meta: "Residential" },
  { id: "f5-6", label: "5th & 6th Floor", meta: "Residential" },
  { id: "f7", label: "7th Floor", meta: "Refuge" },
  { id: "f8", label: "8th Floor", meta: "Residential" },
  { id: "f9-10", label: "9th & 10th Floor", meta: "Residential" },
  { id: "f11", label: "11th Floor", meta: "Residential" },
  { id: "f12-19", label: "12th, 13th & 15th–19th", meta: "Residential" },
  { id: "f14", label: "14th Floor", meta: "Refuge" },
  { id: "service", label: "Service Floor", meta: "MEP · Services" },
];

// Curated Unsplash imagery — luxury interior / architecture / Mumbai skyline
export const IMAGES = {
  heroBg:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
  heroSecondary:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
  aboutLiving:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1600&q=80",
  ],
  amenityBg:
    "https://images.unsplash.com/photo-1600585154154-cbdcd35ac2ba?auto=format&fit=crop&w=1800&q=80",
  founder:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
  location:
    "https://images.unsplash.com/photo-1567604130959-7ea7ab2a7ea6?auto=format&fit=crop&w=1800&q=80",
  floorPlan:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
};
