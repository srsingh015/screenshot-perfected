// Verified facts only. Anything unconfirmed lives in `pending` and renders
// as a visible ConfirmPending chip — never as a plausible guess.

export const site = {
  listedName: "Dolce Bistro & Pâtisserie By 21st Century",
  displayName: "Dolce Bistro & Pâtisserie",
  wordmark: "DOLCE",
  subLockup: "Bistro & Pâtisserie",
  parentBrand: "21st Century",
  devanagari: "डोल्से",
  address: {
    line1: "39, Shop 1, Ground Floor",
    line2: "Sumangal Business Court, Shraddha Mall Marg",
    landmark: "Near Shraddha Petrol Pump",
    locality: "Krishi Nagar, Sharanpur",
    city: "Nashik",
    state: "Maharashtra",
    pin: "422005",
    country: "India",
  },
  lat: 20.0021396,
  lng: 73.7622339,
  phoneDisplay: "+91 78757 52100",
  phoneHref: "tel:+917875752100",
  instagram: "https://www.instagram.com/dolceby21st/",
  fssai: "11524027000422",
  diet: "100% Vegetarian",
  cuisines: [
    "Italian",
    "Continental",
    "Patisserie",
    "Coffee",
    "Thai",
    "Indo-Chinese",
    "North Indian",
    "Desserts",
    "Pizza",
    "Salads",
  ],
  priceBand: "₹400 – ₹1,200 per person",
  priceBandSource: "Google, reported by 212 people, August 2026",
  priceForTwo: "approx. ₹1,000 for two",
  facilities: [
    "Lunch",
    "Dinner",
    "Vegetarian only",
    "Free parking",
    "Indoor seating",
    "Air conditioned",
    "Wifi",
    "Kid friendly",
    "Family friendly",
    "Live sports screening",
    "Home delivery",
  ],
} as const;

export const ratings = [
  { platform: "Google", score: "4.3", count: "405 reviews", read: "August 2026" },
  {
    platform: "Zomato — dining",
    score: "4.8",
    count: "126 ratings",
    read: "August 2026",
    sub: "Food 4.8 · Service 4.8 · Ambience 4.7",
  },
  {
    platform: "Zomato — delivery",
    score: "3.6",
    count: "407 ratings",
    read: "August 2026",
  },
] as const;

export const SERVES_ALCOHOL = false;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${site.lat},${site.lng}`;

export const imageDisclosure =
  "Some images on this site are representative. Photography of our kitchen and dishes is being shot now.";

export const allergenLine =
  "Allergen information is being verified with our kitchen. Please tell your server about any allergy before ordering.";
