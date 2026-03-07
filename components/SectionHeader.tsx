type SectionHeaderProps = {
  label: string;
  title: string;
  align?: "left" | "center";
  description?: string;
};

export default function SectionHeader({
  label,
  title,
  align = "left",
  description,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto max-w-3xl" : "";

  return (
    <div className={alignClass}>
      <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
        {label}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

