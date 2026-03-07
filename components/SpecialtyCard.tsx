import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

type SpecialtyCardProps = {
  title: string;
  icon: LucideIcon;
  description?: string;
  slug: string;
};

export default function SpecialtyCard({
  title,
  icon: Icon,
  description,
  slug,
}: SpecialtyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Card
        isPressable
        as={Link}
        href={slug}
        radius="lg"
        shadow="sm"
        className="group relative h-full overflow-hidden rounded-3xl border border-primary/15 bg-white transition-all duration-300 hover:bg-primary hover:shadow-xl hover:shadow-primary/25"
      >
        <CardBody className="relative flex min-h-[190px] items-center justify-center gap-3 p-6 text-center">
          <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-colors duration-300 group-hover:bg-white/20" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-teal/15 blur-2xl transition-colors duration-300 group-hover:bg-white/15" />
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white"
          >
            <Icon className="h-7 w-7" />
          </motion.span>
          <div className="relative z-10 min-w-0">
            <h3 className="m-0 text-base font-semibold text-heading transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>
            {description ? (
              <p className="mx-auto mt-2 max-w-[22ch] text-xs leading-relaxed text-muted-text transition-colors duration-300 group-hover:text-white/90">
                {description}
              </p>
            ) : null}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
