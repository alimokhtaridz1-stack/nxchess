// NXChess — Site-wide Constants, Trust Signals & Frameworks
// Agent scope: Shared (all agents may read, coordinate writes)

export const SITE_NAME = "NXChess";
export const SITE_SLOGAN = "The Next Generation of Chess";
export const SITE_DESCRIPTION =
  "The Next Generation of Chess. Premier chess academy combining structured 8-level piece curriculum, master coaching, self-learning digital modules, and tournament equipment.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nxchess.com";

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Coaching & Plans", href: "/coaching" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// 8-Level Progressive Curriculum Framework (Piece Themed)
export const CURRICULUM_LEVELS = [
  { level: 1, name: "Pawn Level", title: "Fundamentals & Rules", icon: "♙", desc: "Board setup, piece movement, basic checkmates, and sportsmanship." },
  { level: 2, name: "Knight Level", title: "Basic Tactics & Forks", icon: "♘", desc: "Forks, pins, skewers, and essential tactical patterns." },
  { level: 3, name: "Bishop Level", title: "Opening Principles", icon: "♗", desc: "Center control, piece development, king safety, and open files." },
  { level: 4, name: "Double Bishop Level", title: "Combination Tactics", icon: "♗♗", desc: "Decoy, deflection, discovered attacks, and calculation depth." },
  { level: 5, name: "Rook Level", title: "Middlegame Strategy", icon: "♖", desc: "Pawn structure, weak squares, piece activity, and planning." },
  { level: 6, name: "Double Rook Level", title: "Endgame Technique", icon: "♖♖", desc: "King & pawn endgames, opposition, rook endgames, and conversion." },
  { level: 7, name: "Queen Level", title: "Master Calculation", icon: "♕", desc: "Complex dynamic sacrifices, prophylactic thinking, and deep analysis." },
  { level: 8, name: "King Level", title: "Grandmaster Preparation", icon: "♔", desc: "Elite tournament preparation, opening repertoire, and psychological readiness." },
] as const;

// Verifiable Master Coaches (Detailed Trust Data)
export const VERIFIABLE_COACHES = [
  {
    id: "coach-petrov",
    name: "GM Alexander Petrov",
    title: "Grandmaster & Head Coach",
    rating: "2580 FIDE",
    fideLink: "https://ratings.fide.com",
    experience: "18+ Years Coaching",
    languages: ["English", "Russian"],
    achievements: "National Champion, Trainer of 4 IMs & 100+ rated prodigies",
    specialty: "Positional Strategy & Grandmaster Repertoire",
    bio: "Certified FIDE Senior Trainer with almost two decades of experience training international medalists.",
    icon: "♔",
  },
  {
    id: "coach-chen",
    name: "IM Sofia Chen",
    title: "International Master",
    rating: "2410 FIDE",
    fideLink: "https://ratings.fide.com",
    experience: "12+ Years Coaching",
    languages: ["English", "Mandarin"],
    achievements: "Women's Olympiad Gold Medalist, Certified Youth Educator",
    specialty: "Tactical Sharpness & Dynamic Openings",
    bio: "Renowned tactical specialist who crafts intuitive puzzle systems for fast rating breakthroughs.",
    icon: "♕",
  },
  {
    id: "coach-torres",
    name: "FM David Torres",
    title: "FIDE Master & Youth Director",
    rating: "2320 FIDE",
    fideLink: "https://ratings.fide.com",
    experience: "10+ Years Coaching",
    languages: ["English", "Spanish"],
    achievements: "Coached 300+ Youth State & National Medalists",
    specialty: "Pawn-to-Knight Fundamentals & Kids Development",
    bio: "Passionate educator specializing in early childhood cognitive development through interactive chess activities.",
    icon: "♗",
  },
] as const;

// Student Case Studies (Rating Gain Proof)
export const RATING_CASE_STUDIES = [
  {
    name: "Rayan K.",
    age: "11 years old",
    location: "Dubai, UAE",
    initialRating: "1120 FIDE",
    currentRating: "1640 FIDE",
    gain: "+520 Elo in 6 Months",
    program: "Kids Program + Monthly Private Session",
    quote: "The structured Pawn-to-King curriculum helped me stop blundering and win my first U-12 UAE regional tournament!",
  },
  {
    name: "Marcus B.",
    age: "28 years old",
    location: "Online (UK)",
    initialRating: "1350 Lichess",
    currentRating: "1910 Lichess",
    gain: "+560 Elo in 8 Months",
    program: "$45/mo Self-Learning Membership",
    quote: "Having 1 live GM session every month to review my mistakes kept me accountable while I worked through the video modules.",
  },
  {
    name: "Elena V.",
    age: "14 years old",
    location: "Online (USA)",
    initialRating: "1600 USCF",
    currentRating: "2050 USCF",
    gain: "+450 Elo in 1 Year",
    program: "Private Grandmaster Coaching",
    quote: "GM Petrov completely rebuilt my opening repertoire. I earned my Candidate Master title last month!",
  },
] as const;

// Audience Segmentation Data
export const AUDIENCE_SEGMENTS = [
  {
    id: "parents",
    title: "For Kids & Parents (Ages 5-15)",
    icon: "🧸",
    headline: "Build Focus, Logic & Confidence Early",
    description: "Fun, gamified lessons with small group sizes, safety guidelines, and weekly progress reports sent directly to parents.",
    highlight: "$350 Package or $45/mo Self-Learning",
    ctaText: "Book Kids Assessment",
  },
  {
    id: "adults",
    title: "For Adult Learners (18+)",
    icon: "🧠",
    headline: "Break Rating Plateaus on Your Schedule",
    description: "Flexible self-learning video courses combined with 1 monthly live master session designed for busy professionals.",
    highlight: "$45/mo Self-Learning Membership",
    ctaText: "Start Self-Learning ($45/mo)",
  },
  {
    id: "competitive",
    title: "For Tournament Competitors",
    icon: "🏆",
    headline: "Elite Preparation for Title Seekers",
    description: "1-on-1 Grandmaster analysis, opening prep database, dynamic sacrifices, and psychological tournament readiness.",
    highlight: "$650 Intensive Master Coaching",
    ctaText: "Book GM Consultation",
  },
] as const;

// Expanded FAQs for High Trust
export const EXPANDED_FAQS = [
  {
    question: "Is there online match playing on NXChess?",
    answer: "No. NXChess is dedicated exclusively to chess learning, 1-on-1 coaching, self-paced courses, and premium equipment. We do not host public match playing servers.",
  },
  {
    question: "What is included in the $45/month Self-Learning Membership?",
    answer: "For $45/month, you get full access to our digital self-learning video library, interactive tactical modules, study roadmaps, AND 1 live 1-on-1 coaching session with a master instructor every month!",
  },
  {
    question: "What is the duration of live coaching classes?",
    answer: "Standard 1-on-1 private sessions are 60 minutes long. Kids group classes run for 60 minutes twice per week, and intensive master sessions can be booked in 90-minute blocks.",
  },
  {
    question: "What is your refund & makeup class policy?",
    answer: "If you cancel a scheduled private session with at least 24 hours notice, you receive a 100% free reschedule. For monthly memberships, you can cancel anytime with no lock-in contracts.",
  },
  {
    question: "How do you determine my or my child's starting level?",
    answer: "We conduct a free 15-minute diagnostic assessment call to evaluate tactical vision, opening knowledge, and board awareness, placing the student in the exact Pawn-to-King level.",
  },
  {
    question: "Are your master coaches verified?",
    answer: "Yes! All NXChess coaches hold verified FIDE titles (GM, IM, FM) and background checks for youth instruction. You can view their official FIDE ratings and credentials.",
  },
] as const;

// Store Operational Policies
export const STORE_POLICIES = {
  deliveryUae: "1 - 2 Business Days (Express Courier across UAE)",
  deliveryGlobal: "3 - 7 Business Days (DHL Express Worldwide)",
  returns: "30-Day Money-Back Guarantee (Unopened items)",
  paymentMethods: ["Apple Pay", "Visa", "Mastercard", "Cash on Delivery (UAE)"],
  guarantee: "⚡ Guaranteed 2-hour response time for sales & support during business hours.",
} as const;

// Brain & Development Benefits of Chess
export const CHESS_BENEFITS = [
  { icon: "🧠", title: "Memory & IQ", desc: "Enhances spatial memory, cognitive capacity, and IQ performance." },
  { icon: "🎯", title: "Analytical Sharpness", desc: "Sharpens pattern recognition, logical reasoning, and precision." },
  { icon: "💡", title: "Problem Solving", desc: "Teaches students how to break down complex challenges step-by-step." },
  { icon: "⚡", title: "Critical Thinking", desc: "Encourages foresight, consequence evaluation, and deep calculation." },
  { icon: "🎨", title: "Creativity & Intuition", desc: "Fosters imaginative tactical ideas and artistic board vision." },
  { icon: "⚖️", title: "Decision Making", desc: "Builds confidence in high-pressure decision making under time limits." },
] as const;

// Social Links & Contact Info
export const SOCIAL_LINKS = {
  twitter: "#",
  instagram: "#",
  youtube: "#",
  whatsapp: "https://wa.me/971565959034?text=Hello%20NXChess%2C%20I%20would%20like%20to%20book%20a%20free%20assessment...",
} as const;

export const CONTACT_INFO = {
  email: "info@nxchess.com",
  phone: "+971 4 244 0905 / +971 56 595 9034",
  whatsappNumber: "+971 56 595 9034",
  hours: "Monday – Saturday: 9:00 AM – 8:00 PM (GST)",
  responsePromise: "⚡ Guaranteed response within 2 hours during business hours.",
  locations: [
    { city: "Dubai - Onyx Tower 2", detail: "Suite 809, Onyx Tower 2, The Greens (SZR), Dubai, UAE" },
    { city: "Dubai - Sports City", detail: "Emirates Sports Hotel, Dubai Sports City, Dubai, UAE" },
    { city: "Global Online Platform", detail: "Worldwide Live Interactive Classroom" },
  ],
} as const;
