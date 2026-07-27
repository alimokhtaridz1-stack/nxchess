// NXChess — Site-wide Constants & Curriculum Framework
// Agent scope: Shared (all agents may read, coordinate writes)

export const SITE_NAME = "NXChess";
export const SITE_SLOGAN = "The Next Generation of Chess";
export const SITE_DESCRIPTION =
  "The Next Generation of Chess. Premier chess academy combining structured 8-level curriculum, master coaching, seasonal camps, and tournament preparation.";
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
  whatsapp: "https://wa.me/971565959034?text=Hello%20NXChess%2C%20I%20am%20interested%20in...",
} as const;

export const CONTACT_INFO = {
  email: "info@nxchess.com",
  phone: "+971 4 244 0905 / +971 56 595 9034",
  whatsappNumber: "+971 56 595 9034",
  locations: [
    { city: "Dubai - Onyx Tower 2", detail: "The Greens (SZR), Dubai, UAE" },
    { city: "Dubai - Sports City", detail: "Emirates Sports Hotel, Dubai Sports City" },
    { city: "Global Online Platform", detail: "Worldwide Live Classroom" },
  ],
} as const;
