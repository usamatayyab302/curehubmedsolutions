import Link from "next/link";

import SectionHeader from "@/components/SectionHeader";

export default function IntroSection() {
  return (
    <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Introduction"
          title="Common Questions About Medical Billing Services"
          align="center"
          description="Healthcare providers often ask important questions when considering outsourced medical billing and revenue cycle management."
        />
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-relaxed text-muted-text sm:text-base">
          The following answers explain how Cure Hub Med Solutions helps healthcare providers improve billing accuracy, reduce claim denials, and optimize revenue cycle performance.
        </p>
        <p className="mx-auto mt-3 max-w-4xl text-center text-sm leading-relaxed text-muted-text">
          Learn more about our{" "}
          <Link href="/services/medical-billing-services" className="font-medium text-primary hover:underline">
            medical billing services
          </Link>{" "}
          and{" "}
          <Link href="/services/revenue-cycle-management" className="font-medium text-primary hover:underline">
            revenue cycle management solutions
          </Link>{" "}
          for healthcare providers.
        </p>
      </div>
    </section>
  );
}




