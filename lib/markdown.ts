import { remark } from "remark";
import remarkHtml from "remark-html";

export type TableOfContentsItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^###{0,1}\s+/.test(line))
    .map((line) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^###?\s+/, "").trim();

      return {
        id: slugifyHeading(text),
        text,
        level: level as 2 | 3,
      };
    });
}

function injectHeadingIds(html: string, headings: TableOfContentsItem[]) {
  let headingIndex = 0;

  return html.replace(/<h([23])>(.*?)<\/h\1>/g, (match, level) => {
    const heading = headings[headingIndex];

    if (!heading || Number(level) !== heading.level) {
      return match;
    }

    headingIndex += 1;
    return `<h${level} id="${heading.id}">${heading.text}</h${level}>`;
  });
}

export async function renderMarkdown(markdown: string) {
  const headings = extractTableOfContents(markdown);
  const processed = await remark().use(remarkHtml).process(markdown);
  const html = injectHeadingIds(processed.toString(), headings);

  return {
    html,
    headings,
  };
}
