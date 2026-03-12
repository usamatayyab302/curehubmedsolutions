import type { ServiceFeatureItem } from "./service-features-grid";
import ServiceFeaturesGrid from "./service-features-grid";

type BenefitsSectionProps = {
  label: string;
  title: string;
  description?: string;
  items: readonly ServiceFeatureItem[];
  columns?: 2 | 3 | 4 | 5;
  tone?: "white" | "soft";
};

export default function BenefitsSection({
  label,
  title,
  description,
  items,
  columns = 5,
  tone = "white",
}: BenefitsSectionProps) {
  return (
    <ServiceFeaturesGrid
      label={label}
      title={title}
      description={description}
      items={items}
      columns={columns}
      tone={tone}
    />
  );
}
