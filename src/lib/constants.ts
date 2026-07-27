// NXChess — Site-wide Constants
// Agent scope: Shared (all agents may read, coordinate writes)

export const SITE_NAME = "NXChess";
export const SITE_SLOGAN = "The Next Generation of Chess";
export const SITE_DESCRIPTION =
  "The Next Generation of Chess Learning. Combining self-paced digital courses, 1-on-1 expert coaching, and premium equipment.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nxchess.com";

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Coaching & Plans", href: "/coaching" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Social Links & External Contacts
export const SOCIAL_LINKS = {
  twitter: "#",
  instagram: "#",
  youtube: "#",
  whatsapp: "https://wa.me/15551234567?text=Hello%20NXChess%2C%20I%20am%20interested%20in...",
} as const;

// Contact Info
export const CONTACT_INFO = {
  email: "info@nxchess.com",
  phone: "+1 (555) 123-4567",
  whatsappNumber: "+1 (555) 123-4567",
  address: "Global Online Platform",
} as const;
