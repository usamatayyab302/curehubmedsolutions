import Image from "next/image";
import { cn } from "@/lib/utils";

type IntegrationLogo = {
  name: string;
  src: string;
};

type IntegrationLogoCarouselProps = {
  logos?: IntegrationLogo[];
  className?: string;
  durationSeconds?: number;
};

const defaultLogos: IntegrationLogo[] = [
  { name: "Practice Fusion", src: "/sof-logo/1.svg" },
  { name: "Tebra", src: "/sof-logo/8.svg" },
  { name: "AdvancedMD", src: "/sof-logo/10.svg" },
  { name: "Kareo", src: "/sof-logo/eclinicalworks.svg" },
  { name: "Athenahealth", src: "/sof-logo/9.svg" },
];

export default function IntegrationLogoCarousel({
  logos = defaultLogos,
  className,
  durationSeconds = 28,
}: IntegrationLogoCarouselProps) {
  const loopItems = [...logos, ...logos];

  return (
    <div className={cn("group w-full overflow-hidden", className)}>
      <div
        className="process-loop-track flex w-max items-center gap-4 group-hover:[animation-play-state:paused] sm:gap-5"
        style={{ ["--process-duration" as string]: `${durationSeconds}s` }}
      >
        {loopItems.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-background px-4 shadow-sm"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={110}
              height={34}
              className="h-8 w-auto object-contain grayscale transition-[filter,opacity,transform] duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
