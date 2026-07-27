import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "tech" | "whatsapp" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  id?: string;
  target?: string;
  rel?: string;
}

const variantStyles = {
  primary:
    "bg-chess-green text-white font-bold hover:bg-chess-green-light active:bg-chess-green-dark shadow-lg shadow-chess-green/20 border-b-4 border-chess-green-dark hover:border-chess-green active:border-b-0",
  secondary:
    "bg-surface-elevated text-foreground font-semibold border border-border hover:bg-surface-hover hover:border-border-hover",
  gold:
    "bg-gold text-black font-bold hover:bg-gold-light active:bg-gold-dark shadow-lg shadow-gold/20 border-b-4 border-gold-dark hover:border-gold active:border-b-0",
  tech:
    "bg-tech-blue text-slate-950 font-bold hover:bg-tech-blue-light active:bg-tech-blue-dark shadow-lg shadow-tech-blue/20 border-b-4 border-tech-blue-dark hover:border-tech-blue active:border-b-0",
  whatsapp:
    "bg-whatsapp text-white font-bold hover:brightness-110 active:brightness-95 shadow-lg shadow-whatsapp/20 border-b-4 border-emerald-700 hover:border-whatsapp active:border-b-0",
  outline:
    "bg-transparent text-foreground font-semibold border border-border hover:border-chess-green hover:text-chess-green-light hover:bg-chess-green/10",
  ghost:
    "bg-transparent text-foreground-secondary font-medium hover:text-foreground hover:bg-surface",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-2xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  id,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 transition-all duration-150 cursor-pointer whitespace-nowrap active:translate-y-0.5";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} id={id} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} id={id}>
      {children}
    </button>
  );
}
