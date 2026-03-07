import { CheckCircle2, type LucideIcon } from "lucide-react";

type FeatureListProps = {
  items: string[];
  icon?: LucideIcon;
  columns?: string;
};

export default function FeatureList({
  items,
  icon: Icon = CheckCircle2,
  columns = "grid-cols-1 sm:grid-cols-2",
}: FeatureListProps) {
  return (
    <div className={`grid gap-3 ${columns}`}>
      {items.map((item) => (
        <div key={item} className="rounded-xl border border-primary/15 bg-white p-4">
          <Icon className="mr-2 inline h-4 w-4 text-accent" />
          <span className="text-sm text-heading">{item}</span>
        </div>
      ))}
    </div>
  );
}

