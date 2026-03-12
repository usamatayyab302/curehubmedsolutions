import { PenSquare } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type AuthorBoxProps = {
  author: string;
  authorRole?: string;
  authorBio?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function AuthorBox({
  author,
  authorRole,
  authorBio,
}: AuthorBoxProps) {
  return (
    <Card className="border-primary/10 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
        <Avatar className="h-16 w-16 border border-primary/15">
          <AvatarFallback className="bg-primary/10 font-semibold text-primary">
            {getInitials(author)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <PenSquare className="h-3.5 w-3.5" />
            Author
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-heading">{author}</h2>
          <p className="mt-1 text-sm font-medium text-primary/85">
            {authorRole ?? "Healthcare revenue cycle editorial team"}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-text">
            {authorBio ??
              "Cure Hub Med Solutions publishes practical guidance for healthcare providers focused on medical billing, reimbursement operations, denial prevention, and front-office workflow improvement."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
