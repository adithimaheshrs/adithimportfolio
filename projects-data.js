/* ─── PROJECT CRM ───
   Add, remove, or reorder projects here — the page rerenders itself from this list.
   featured: true marks the one project shown in the large hero card (only one should be true).
   thumb: one of t-warm | t-blue | t-clay | t-rose | t-sage (or set image:"path.jpg" for a real photo).
*/
window.PROJECTS = [
  {
    id: "fashion-ecommerce",
    featured: true,
    cat: "mobile",
    thumbLabel: "cover · e-commerce · 2026",
    kickerBits: ["Research Project | Web Design", "Research"],
    title: "Inclusive Female Fashion E-Commerce Design",
    titleIt: "Body-Centered UX Design",
    titleStyle: "width: 525px; font-size: 35px; font-family: Fraunces;",
    lede: "Online fashion retail has spent decades polishing its interface but not its relationship with the women who use it most. Through a <span class=\"em\">feminist HCI</span> lens and a multi-method study spanning probes, co-design, prototyping, and body maps, this research uncovers why 'shopping online' still feels, for so many women, like trying to fit into someone else's body.",
    meta: { Role: "Assistant Student Researcher", Type: "Research", Year: "2026", Outcome: "Accepted to CHI 2026" },
    href: "case-study-fashion.html",
    imageSlotId: "featured-cover",
    image: "assets/featured-cover.png",
    imagePlaceholder: "Drop a photo of a woman shopping online"
  },
  {
    id: "ux4ux",
    cat: "research",
    year: "2025",
    readMins: 6,
    thumb: "t-warm",
    image: "assets/ux4ux-cover.png",
    kickerLabel: "Web tool design",
    title: "UX4UX",
    titleIt: "Guiding Researchers on Choosing the Right Usability Tests",
    sub: "Helping researchers pick the right usability test for wearables and other medical equipment. One-stop guide for tests to be conducted.",
    href: "case-study-ux4ux.html"
  },
  {
    id: "feminist-smart-city",
    cat: "research",
    year: "2025",
    readMins: 8,
    thumb: "t-blue",
    image: "assets/feminist-smart-city-cover.png",
    kickerLabel: "Research",
    title: "Smart Cities for Bridging the Urban-Rural Divide:",
    titleIt: "Designing Small-Town Smart City Visions through a Speculative Design Approach Led by Feminist HCI Values",
    sub: "A speculative design study grounded in feminist HCI, inclusive of gender, ability, and everything in between. Workshops held, concepts sketched, presented at Summaery and Mindtrek '24.",
    href: "case-study-smartcity.html"
  },
  {
    id: "db-dilemmaa",
    cat: "research",
    year: "2024",
    readMins: 7,
    thumb: "t-clay",
    image: "assets/db-dilemmaa-cover.png",
    kickerLabel: "App redesign",
    title: "DB Dilemmaa",
    titleIt: "Redesigning the Deutsch Bahn App",
    sub: "A user-centered design study on Deutsche Bahn's app. Contextual inquiry with real commuters, one redesigned navigation flow shipped.",
    href: "case-study-dbdilemma.html"
  },
  {
    id: "postmark",
    cat: "mobile",
    year: "2023",
    readMins: 5,
    thumb: "t-rose",
    image: "assets/bentro-cover.png",
    kickerLabel: "Mobile app design",
    title: "Bentro",
    titleIt: "Redesigning Bangalore Metro app",
    sub: "Bengaluru's metro riders deserve better navigation. This redesign rethinks the app's booking and wayfinding flow from the ground up.",
    href: "case-study-bentro.html"
  },
  {
    id: "new-project",
    cat: "web",
    year: "2023",
    readMins: 5,
    thumb: "t-sage",
    image: "assets/unsub-cover.png",
    kickerLabel: "Brand Design",
    title: "UnSub",
    titleIt: "Manage your Subscriptions",
    sub: "A UX case study on subscription management. User pain points mapped, one unified dashboard designed for tracking and canceling with ease.",
    href: "case-study-unsub.html"
  },
  {
    id: "quiet-hours-essay",
    cat: "mobile",
    year: "2022",
    readMins: 6,
    thumb: "t-sage",
    image: "assets/plantacura-cover.png",
    kickerLabel: "Mobile app design",
    title: "PlantaCura",
    titleIt: "Helping plant lovers care for their greens with ease",
    sub: "A self-driven UX case study on plant care. Competitive analysis, user profiles, and wireframes led to one app designed to track, remind, and connect.",
    href: "case-study-plantacura.html"
  },
  {
    id: "new-project-2",
    cat: "brand",
    year: "2023",
    readMins: 5,
    thumb: "t-warm",
    image: "assets/chakram-cover.png",
    kickerLabel: "Brand Design",
    title: "Chakram",
    titleIt: "Trusted partner for financial wellness",
    sub: "A solo branding project for Chakram, a financial advising company. One cohesive identity designed across print and web, tailored to their exact needs.",
    comingSoon: true,
    href: "case-study.html"
  },
  {
    id: "confidential-project",
    cat: "web",
    year: "2026",
    readMins: 4,
    thumb: "t-blue",
    image: "assets/confidential-cover.png",
    kickerLabel: "Masters Thesis",
    title: "A Centralized UX Process Management tool integrating DesignOps and AI assistance.",
    locked: true,
    sub: "Master's thesis was done with Dräger Safety AG &amp; Co. KGaA",
    href: "case-study.html"
  }
];
