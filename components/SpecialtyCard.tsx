import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

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
      className="h-full"
    >
      <Link href={slug} className="block h-full">
        <Card className="group relative h-full overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:border-primary/25 md:hover:shadow-xl md:hover:shadow-primary/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,163,165,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(114,196,189,0.16),transparent_36%)]" />
          <CardContent className="relative flex h-full min-h-[290px] flex-col items-center p-6 text-center">
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 md:group-hover:bg-primary md:group-hover:text-white"
            >
              <Icon className="h-7 w-7" />
            </motion.span>
            <div className="relative z-10 mt-5 min-w-0 flex-1">
              <h3 className="m-0 text-xl font-semibold text-heading">
                {title}
              </h3>
              {description ? (
                <p className="mt-3 text-sm leading-6 text-muted-text">
                  {description}
                </p>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
