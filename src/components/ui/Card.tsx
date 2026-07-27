interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  id?: string;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  id,
}: CardProps) {
  return (
    <div
      id={id}
      className={`
        rounded-2xl border border-border bg-surface p-6
        ${hover ? "transition-all duration-300 hover:border-border-hover hover:bg-surface-hover hover:-translate-y-1" : ""}
        ${glow ? "glow-gold border-gold/20" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
