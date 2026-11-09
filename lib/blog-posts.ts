type BlogPostSection = {
  heading: string
  body: string
}

type BlogPost = {
  slug: string
  title: string
  date: string
  category: string
  image: string
  excerpt: string
  sections: BlogPostSection[]
}

const blogPosts: BlogPost[] = [
  {
    slug: "where-modern-architecture-meets-everyday-living",
    title: "Where Modern Architecture Meets Everyday Living",
    date: "Dec 25, 2024",
    category: "Architecture",
    image:
      "https://framerusercontent.com/images/V0eV8oumH1anDzlcJFgiLNJns.png?width=1506&height=1008",
    excerpt:
      "A closer look at how refined architecture can support daily routines without losing warmth, clarity, or long-term value.",
    sections: [
      {
        heading: "Design that supports the day",
        body: "Modern architecture feels strongest when every decision supports the way people actually live. Clear circulation, calm transitions, and useful zones help a home feel open without becoming cold or empty.",
      },
      {
        heading: "Warmth inside restraint",
        body: "Texture, daylight, and carefully placed materials soften minimal forms. The result is a home that feels composed at first glance, then more personal and comfortable as the day unfolds.",
      },
      {
        heading: "Long-term value",
        body: "A well-planned residence does not chase one visual moment. It keeps its value through durable materials, flexible rooms, and details that continue to serve the people who live there.",
      },
    ],
  },
  {
    slug: "designing-homes-that-feel-open-and-connected",
    title: "Designing Homes That Feel Open and Connected",
    date: "Jan 15, 2025",
    category: "Interior",
    image:
      "https://framerusercontent.com/images/NIwKzBqNA0MGwNartuU7lqOzbE.png?width=1056&height=706",
    excerpt:
      "Open living is more than removing walls. It is about circulation, proportion, sightlines, and rooms that breathe together.",
    sections: [
      {
        heading: "Connection with purpose",
        body: "Open layouts work best when they still give each activity a clear place. Furniture placement, ceiling height, and material shifts can define spaces without closing them off.",
      },
      {
        heading: "Sightlines and movement",
        body: "Connected homes rely on easy movement and considered views. From the entry to the living area, each sightline should reveal enough to feel generous while preserving moments of privacy.",
      },
      {
        heading: "Everyday flexibility",
        body: "The strongest open spaces adapt naturally. They can host guests, support quiet routines, and stay organized because storage and circulation are planned from the beginning.",
      },
    ],
  },
  {
    slug: "the-balance-between-comfort-and-minimal-design",
    title: "The Balance Between Comfort and Minimal Design",
    date: "Feb 12, 2025",
    category: "Design",
    image:
      "https://framerusercontent.com/images/5IZjBs8QGwoyIYHT38yaZO0vA.png?width=1056&height=706",
    excerpt:
      "Minimal spaces work best when restraint is paired with texture, softness, and practical decisions made for real life.",
    sections: [
      {
        heading: "Minimal does not mean empty",
        body: "A restrained home still needs comfort, tactility, and a sense of welcome. Soft seating, layered surfaces, and natural materials give simple rooms emotional weight.",
      },
      {
        heading: "Editing with care",
        body: "The goal is not to remove everything. It is to keep what matters, organize what remains, and let each piece contribute to the room's calm rhythm.",
      },
      {
        heading: "Practical calm",
        body: "Minimal design succeeds when daily life has a place to land. Built-in storage, durable finishes, and easy maintenance protect the quiet feeling over time.",
      },
    ],
  },
  {
    slug: "how-space-planning-shapes-better-living",
    title: "How Space Planning Shapes Better Living",
    date: "Apr 24, 2025",
    category: "Planning",
    image:
      "https://framerusercontent.com/images/vEKq1NZFIiPN3lONQRLmVFHoEiw.png?width=1584&height=1059",
    excerpt:
      "Thoughtful planning turns floor area into daily usefulness by aligning privacy, movement, storage, and natural light.",
    sections: [
      {
        heading: "Use before size",
        body: "A larger home is not automatically a better home. Strong planning makes every meter useful by matching room proportions to real routines and everyday movement.",
      },
      {
        heading: "Privacy and flow",
        body: "Public, private, and service areas need clear relationships. Good planning lets people gather easily while keeping bedrooms, workspaces, and storage calm and protected.",
      },
      {
        heading: "Light as structure",
        body: "Natural light helps organize the plan. Placing openings, courtyards, and transitions with intention can make a home feel larger, softer, and more intuitive.",
      },
    ],
  },
  {
    slug: "creating-homes-with-natural-light-and-flow",
    title: "Creating Homes with Natural Light and Flow",
    date: "Aug 26, 2025",
    category: "Living",
    image:
      "https://framerusercontent.com/images/77QJUL5zaZFFOo44Vdf5K4t2k.png?width=1056&height=706",
    excerpt:
      "Light and flow guide how a home feels throughout the day, from quiet mornings to open evenings with family and guests.",
    sections: [
      {
        heading: "Light changes the mood",
        body: "Daylight gives rooms a living quality. Morning brightness, soft afternoon shadows, and evening warmth can each support different routines inside the same home.",
      },
      {
        heading: "Movement that feels natural",
        body: "Flow is created by openings, thresholds, and proportions that guide people without effort. The best homes feel easy to understand before anyone explains them.",
      },
      {
        heading: "Comfort through orientation",
        body: "A thoughtful orientation balances view, shade, privacy, and ventilation. These choices make spaces feel comfortable while reducing the need for visual clutter.",
      },
    ],
  },
  {
    slug: "the-future-of-luxury-living-spaces",
    title: "The Future of Luxury Living Spaces",
    date: "Nov 28, 2025",
    category: "Luxury",
    image:
      "https://framerusercontent.com/images/3mngzlNO8cW6nDdMLJOvEvBdyV8.png?width=1056&height=706",
    excerpt:
      "The next expression of luxury is calm, adaptable, and deeply personal, with design choices that stay useful over time.",
    sections: [
      {
        heading: "Luxury becomes personal",
        body: "The future of luxury is less about excess and more about fit. Homes feel elevated when they understand the owner's routines, pace, and need for calm.",
      },
      {
        heading: "Adaptive spaces",
        body: "Flexible rooms, integrated technology, and quiet storage allow a home to shift over time. Luxury is the ability to change without losing coherence.",
      },
      {
        heading: "A calmer expression",
        body: "Materials, proportions, and light now carry more weight than ornament. The most refined spaces feel grounded, durable, and deeply considered.",
      },
    ],
  },
  {
    slug: "designing-outdoor-spaces-that-feel-connected",
    title: "Designing Outdoor Spaces That Feel Connected",
    date: "Dec 12, 2025",
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Outdoor living works best when terraces, gardens, shade, and interior rooms feel like one continuous experience.",
    sections: [
      {
        heading: "The threshold matters",
        body: "Outdoor spaces become more useful when the transition from inside to outside feels natural. Floor levels, door openings, and covered edges can turn a terrace into an everyday room.",
      },
      {
        heading: "Comfort before decoration",
        body: "Shade, privacy, seating depth, and lighting shape whether an outdoor space is actually used. The best designs begin with comfort and let the visual character follow.",
      },
      {
        heading: "A complete living rhythm",
        body: "Connected outdoor areas extend how a home works throughout the day. They give quiet mornings, family meals, and evening gatherings a place that feels intentional and easy.",
      },
    ],
  },
]

function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export { blogPosts, getBlogPostBySlug }
export type { BlogPost }
