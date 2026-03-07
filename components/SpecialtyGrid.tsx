import type { LucideIcon } from "lucide-react";
import SpecialtyCard from "@/components/SpecialtyCard";

export type SpecialtyItem = {
  title: string;
  icon: LucideIcon;
  slug: string;
  description?: string;
};

type SpecialtyGridProps = {
  items: SpecialtyItem[];
};

export default function SpecialtyGrid({ items }: SpecialtyGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <SpecialtyCard
          key={item.slug}
          title={item.title}
          icon={item.icon}
          slug={item.slug}
          description={item.description}
        />
      ))}
    </div>
  );
}

