interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        ${align === "center" ? "text-center" : "text-left"}
        ${className}
      `}
    >
      {label && (
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
