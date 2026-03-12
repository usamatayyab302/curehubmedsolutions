import { CalendarDays, Clock3, User2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type BlogHeroProps =
  | {
      variant: "listing";
      title: string;
      subtitle: string;
    }
  | {
      variant: "post";
      title: string;
      subtitle: string;
      author: string;
      date: string;
      readingTime: string;
      category: string;
      children?: React.ReactNode;
    };

export default function BlogHero(props: BlogHeroProps) {
  const isPost = props.variant === "post";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#015d67_0%,#00a3a5_55%,#72c4bd_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
            Cure Hub Journal
          </p>
          {isPost ? (
            <div className="mb-4">
              <Badge className="border-white/20 bg-white/12 text-white hover:bg-white/12">
                {props.category}
              </Badge>
            </div>
          ) : null}
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {props.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">{props.subtitle}</p>

          {isPost ? (
            <>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/85">
                <span className="inline-flex items-center gap-2">
                  <User2 className="h-4 w-4" />
                  {props.author}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(props.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {props.readingTime}
                </span>
              </div>
              {props.children ? <div className="mt-6">{props.children}</div> : null}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
