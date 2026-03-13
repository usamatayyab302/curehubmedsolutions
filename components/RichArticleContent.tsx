import type { ReactNode } from "react";

import MotionReveal from "@/components/services/motion-reveal";

type RichArticleContentProps = {
  html: string;
  slots?: Record<string, ReactNode>;
};

const SLOT_PATTERN = /<p>\s*\[\[(.*?)\]\]\s*<\/p>/g;

export default function RichArticleContent({
  html,
  slots = {},
}: RichArticleContentProps) {
  const content: ReactNode[] = [];
  let lastIndex = 0;
  let revealIndex = 0;

  function appendHtmlBlock(segment: string) {
    if (!segment.trim()) {
      return;
    }

    content.push(
      <div
        key={`html-${revealIndex}`}
        className="blog-prose max-w-none"
        dangerouslySetInnerHTML={{ __html: segment }}
      />
    );
    revealIndex += 1;
  }

  let match = SLOT_PATTERN.exec(html);

  while (match) {
    const [fullMatch, slotName] = match;
    const markerStart = match.index;
    const markerEnd = markerStart + fullMatch.length;
    const slot = slots[slotName.trim()];

    if (slot) {
      appendHtmlBlock(html.slice(lastIndex, markerStart));
      content.push(
        <MotionReveal
          key={`slot-${revealIndex}`}
          delay={Math.min(revealIndex * 0.04, 0.18)}
          amount={0.08}
          y={18}
        >
          {slot}
        </MotionReveal>
      );
    } else {
      appendHtmlBlock(html.slice(lastIndex, markerEnd));
    }

    revealIndex += 1;
    lastIndex = markerEnd;
    match = SLOT_PATTERN.exec(html);
  }

  appendHtmlBlock(html.slice(lastIndex));

  return <div className="space-y-10">{content}</div>;
}
