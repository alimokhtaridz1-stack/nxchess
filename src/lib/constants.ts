// NXChess — Site-wide Constants
// Agent scope: Shared (all agents may read, coordinate writes)

export const SITE_NAME = "NXChess";
export const SITE_DESCRIPTION =
  "A modern chess platform combining chess coaching, products, and technology.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nxchess.com";

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Coaching", href: "/coaching" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
] as const;

// Social Links (update when ready)
export const SOCIAL_LINKS = {
  twitter: "#",
  instagram: "#",
  youtube: "#",
} as const;

// Contact Info (update when ready)
export const CONTACT_INFO = {
  email: "info@nxchess.com",
  phone: "",
  address: "",
} as const;
