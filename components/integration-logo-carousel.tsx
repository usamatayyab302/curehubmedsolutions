import Image from "next/image";
import { cn } from "@/lib/utils";

type IntegrationLogo = {
  name: string;
  src: string;
  scale?: number;
};

type IntegrationLogoCarouselProps = {
  logos?: IntegrationLogo[];
  className?: string;
  durationSeconds?: number;
};

const defaultLogos: IntegrationLogo[] = [
  { name: "AdvancedMD", src: "/sof-logo/AdvancedMD.svg", scale: 0.98 },
  { name: "Athenahealth", src: "/sof-logo/athenahealth.svg", scale: 0.96 },
  { name: "Cerner", src: "/sof-logo/Cerner.svg", scale: 0.96 },
  { name: "Chiro8000", src: "/sof-logo/Chiro8000.svg", scale: 0.94 },
  { name: "Chirotouch", src: "/sof-logo/Chirotouch.svg", scale: 0.98 },
  { name: "eClinicalWorks", src: "/sof-logo/eclinicalworks.svg", scale: 0.95 },
  { name: "Epic", src: "/sof-logo/Epic.svg", scale: 0.94 },
  { name: "Health Fusion", src: "/sof-logo/Health Fusion.svg", scale: 1.02 },
  { name: "MyClients Plus", src: "/sof-logo/MyClients plus.svg", scale: 0.94 },
  { name: "Office Ally", src: "/sof-logo/Office Ally.svg", scale: 0.98 },
  { name: "PayDC", src: "/sof-logo/Paydc.svg", scale: 0.94 },
  { name: "SimplePractice", src: "/sof-logo/SimplePractice.svg", scale: 0.94 },
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
            className="flex h-16 w-48 shrink-0 items-center justify-center px-4"
          >
            <div className="relative h-11 w-36">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                sizes="144px"
                className="object-contain object-center grayscale contrast-200 opacity-95 mix-blend-multiply transition-transform duration-300"
                style={{ transform: `scale(${logo.scale ?? 1})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
