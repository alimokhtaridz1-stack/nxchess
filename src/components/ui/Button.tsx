import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  id?: string;
}

const variantStyles = {
  primary:
    "bg-gold text-black font-semibold hover:bg-gold-light active:bg-gold-dark",
  secondary:
    "bg-surface text-foreground font-medium border border-border hover:bg-surface-hover hover:border-border-hover",
  outline:
    "bg-transparent text-gold font-medium border border-gold/30 hover:border-gold hover:bg-gold/5",
  ghost:
    "bg-transparent text-foreground-secondary font-medium hover:text-foreground hover:bg-surface",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
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
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} id={id}>
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
