// NXChess — Shared Type Definitions
// Agent scope: Shared (all agents may read and extend)

/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
}

/** Product item (V1: static, V2: from Supabase) */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
}

/** Coach profile */
export interface Coach {
  id: string;
  name: string;
  bio: string;
  rating: number;
  specialties: string[];
  imageUrl: string;
  hourlyRate: number;
}

/** Contact form submission */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** Booking request (V2) */
export interface Booking {
  id: string;
  coachId: string;
  studentName: string;
  studentEmail: string;
  date: string;
  timeSlot: string;
  status: "pending" | "confirmed" | "cancelled";
}
