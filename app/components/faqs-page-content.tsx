import HeroSection from "./faqs/hero-section";
import IntroSection from "./faqs/intro-section";
import FAQAccordion from "./faqs/faq-accordion";
import SalesSection from "./faqs/sales-section";
import CTASection from "./faqs/cta-section";
import { faqItems } from "./faqs/faq-data";

export default function FaqsPageContent() {
  return (
    <section className="overflow-x-hidden bg-background">
      <HeroSection />
      <IntroSection />
      <FAQAccordion items={faqItems} />
      <SalesSection />
      <CTASection />
    </section>
  );
}




