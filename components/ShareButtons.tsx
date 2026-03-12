"use client";

import { Check, Copy, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ShareButtonsProps = {
  title: string;
  url: string;
  className?: string;
};

const shareTargets = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    getUrl: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    label: "Facebook",
    icon: Facebook,
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    label: "Twitter / X",
    icon: Twitter,
    getUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
];

export default function ShareButtons({ title, url, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {shareTargets.map((target) => {
        const Icon = target.icon;

        return (
          <Button key={target.label} variant="outline" size="sm" asChild>
            <a
              href={target.getUrl(url, title)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Share on ${target.label}`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {target.label}
            </a>
          </Button>
        );
      })}

      <Button variant="outline" size="sm" onClick={copyLink} aria-label="Copy article link">
        {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
        Copy Link
      </Button>
    </div>
  );
}
