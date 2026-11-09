type Property = {
  bathrooms: string
  bedrooms: string
  completionYear: string
  description: string
  floors: string
  gallery: string[]
  highlights: string[]
  image: string
  livingSpace: string
  location: string
  overview: string
  price: string
  slug: string
  status: string
  title: string
  type: string
}

const properties: Property[] = [
  {
    slug: "aurora-hills-residence",
    title: "Aurora Hills Residence",
    location: "Allentown Hills District",
    price: "$340,000",
    type: "Residence",
    status: "For Sale",
    image:
      "https://framerusercontent.com/images/IJF85eel5jY9ATqamnG4Wo5kg.png?width=1170&height=798",
    description:
      "A modern hillside residence designed for comfort, privacy, and refined everyday living.",
    overview:
      "From materials to layout, every detail reflects quality, clarity, and a lifestyle built around ease and refined living.",
    livingSpace: "2,650 sq.ft",
    completionYear: "2025",
    floors: "2",
    bedrooms: "4",
    bathrooms: "3",
    highlights: [
      "Open-plan living with warm natural finishes",
      "Private hillside setting with generous daylight",
      "Integrated storage, quiet bedrooms, and flexible gathering spaces",
    ],
    gallery: [
      "https://framerusercontent.com/images/CkaM66Zkm0LXoCMI9RZoNkxheS4.png?width=796&height=840",
      "https://framerusercontent.com/images/cMylzFzNKO84RFa0LGzJCqsk.png?width=1332&height=840",
      "https://framerusercontent.com/images/kHF0FhrUc0btaZowtNWRMgAVmzE.png?width=2160&height=1200",
    ],
  },
  {
    slug: "ocean-curve-villa",
    title: "Ocean Curve Villa",
    location: "Pacific Coastline, California",
    price: "$1,850,000",
    type: "Villa",
    status: "For Sale",
    image:
      "https://framerusercontent.com/images/cbxZT8mochuW0d3rWl3uuQ3uvus.png?width=698&height=928",
    description:
      "A coastal-inspired luxury villa crafted with flowing architectural lines, open interiors, and panoramic ocean-facing views.",
    overview:
      "The villa blends sculptural form with calm interiors, creating a soft coastal rhythm from the entry sequence through the main living spaces.",
    livingSpace: "3,100 sq.ft",
    completionYear: "2026",
    floors: "3",
    bedrooms: "5",
    bathrooms: "5",
    highlights: [
      "Ocean-facing glazing and sculptural exterior profile",
      "Layered terraces for dining, lounging, and sunset views",
      "Light-filled interiors with quiet private suites",
    ],
    gallery: [
      "https://framerusercontent.com/images/A4LqIKYPhjICLdeg6wbX4MoPbo.png?width=750&height=931",
      "https://framerusercontent.com/images/cV3fXrR2rqoJXX0ozEoHemqPTAw.png?width=750&height=996",
      "https://framerusercontent.com/images/8Xz92PrAWGeV1Yc0biTDwWb78.png?width=1500&height=1500",
    ],
  },
  {
    slug: "cliffside-modern-retreat",
    title: "Cliffside Modern Retreat",
    location: "Sunset Ridge, Malibu",
    price: "$5,100,000",
    type: "Retreat",
    status: "For Sale",
    image:
      "https://framerusercontent.com/images/Pr7J3OSbp1vpGqEGTkFZG5i7LDw.png?width=700&height=928",
    description:
      "A contemporary hillside retreat designed to combine privacy, nature, and elegant architectural simplicity.",
    overview:
      "Positioned for long views and quiet living, the retreat uses clean horizontal planes, shaded outdoor rooms, and calm material transitions.",
    livingSpace: "2,850 sq.ft",
    completionYear: "2025",
    floors: "2",
    bedrooms: "4",
    bathrooms: "4",
    highlights: [
      "Private cliffside orientation with protected outdoor areas",
      "Minimal architectural language with warm interior contrast",
      "Generous main suite and flexible guest spaces",
    ],
    gallery: [
      "https://framerusercontent.com/images/VVKneikHZoxyLG2ZtxXhj7oeFc.png?width=1500&height=844",
      "https://framerusercontent.com/images/yrJviyFC1O9DBIwXxTU6uX8GKU.png?width=1500&height=2250",
      "https://framerusercontent.com/images/hZBaYPWAIl1bxEdJOZ07nnDVE.png?width=1500&height=1500",
    ],
  },
  {
    slug: "horizon-glass-villa",
    title: "Horizon Glass Villa",
    location: "Beverly Hills, Los Angeles",
    price: "$340,000",
    type: "Villa",
    status: "For Sale",
    image:
      "https://framerusercontent.com/images/Zsv8rU2VqEHO28ezhWCZnTk0.png?width=698&height=928",
    description:
      "A striking modern villa defined by transparent architecture, open living spaces, and uninterrupted horizon views.",
    overview:
      "Its balanced layout creates an atmosphere that feels both elegant and welcoming for everyday living.",
    livingSpace: "3,450 sq.ft",
    completionYear: "2027",
    floors: "3",
    bedrooms: "5",
    bathrooms: "6",
    highlights: [
      "Glass-led architecture with expansive horizon views",
      "Open living zones connected to outdoor terraces",
      "Refined private wing with spa-like bathrooms",
    ],
    gallery: [
      "https://framerusercontent.com/images/k4lEhLH7VCGCEalbJVnCkDL6UbQ.png?width=1500&height=1000",
      "https://framerusercontent.com/images/l2aNxVlA8tVPT0wgjpGYeehxQ.png?width=1500&height=2676",
      "https://framerusercontent.com/images/HK9SMUHP7cWoWVFMZsVgHeZN7I.png?width=1500&height=2250",
    ],
  },
  {
    slug: "sunset-wave-residence",
    title: "Sunset Wave Residence",
    location: "Laguna Beach, California",
    price: "$340,000",
    type: "Residence",
    status: "For Sale",
    image:
      "https://framerusercontent.com/images/v4iNY25KvIwyW7pnwQ3zpy2Spc.png?width=698&height=928",
    description:
      "A modern residence inspired by soft architectural curves and warm sunset-toned living environments.",
    overview:
      "Every detail is designed to support comfort while maintaining a refined visual identity throughout the residence.",
    livingSpace: "2,720 sq.ft",
    completionYear: "2025",
    floors: "2",
    bedrooms: "4",
    bathrooms: "3",
    highlights: [
      "Curved architectural language inspired by coastal light",
      "Warm living spaces with direct access to open terraces",
      "Comfortable family layout with considered storage",
    ],
    gallery: [
      "https://framerusercontent.com/images/qXjfsvtyhSIORVNRHlBpzEKmiEo.png?width=1500&height=1875",
      "https://framerusercontent.com/images/a3C4UcnntMtlX626iiVjxTxgUPw.png?width=1500&height=2250",
      "https://framerusercontent.com/images/TucOzHaMWhkZCAsLmDmLgWP8.png?width=1500&height=2400",
    ],
  },
  {
    slug: "skyline-edge-penthouse",
    title: "Skyline Edge Penthouse",
    location: "Downtown Miami, Florida",
    price: "$4,600,000",
    type: "Penthouse",
    status: "For Sale",
    image:
      "https://framerusercontent.com/images/QcA0bmaAlLTxTUv9KWCt0KAwBw.png?width=698&height=928",
    description:
      "A luxury penthouse residence offering elevated city views, refined interiors, and contemporary urban living.",
    overview:
      "The penthouse is planned for effortless city living, with generous entertaining areas, quiet private suites, and a strong connection to the skyline.",
    livingSpace: "3,800 sq.ft",
    completionYear: "2024",
    floors: "1",
    bedrooms: "3",
    bathrooms: "4",
    highlights: [
      "Panoramic city views from the main living areas",
      "Refined entertaining layout with private bedroom wing",
      "High-floor privacy with contemporary interior detailing",
    ],
    gallery: [
      "https://framerusercontent.com/images/HuNQzwi7UFcUq0Qr1It3JQr4o.png?width=1500&height=1500",
      "https://framerusercontent.com/images/nNsWS1CBCTafj7ikF5pPSg7Kpw.png?width=1500&height=2250",
      "https://framerusercontent.com/images/N03TEnPLk5lO3clVJ8s0irqhKAE.png?width=1500&height=1500",
    ],
  },
]

function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug)
}

export { getPropertyBySlug, properties }
export type { Property }
