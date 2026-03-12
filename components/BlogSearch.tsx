import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type BlogSearchProps = {
  defaultValue?: string;
  action?: string;
};

export default function BlogSearch({ defaultValue, action = "/blog" }: BlogSearchProps) {
  return (
    <form action={action} className="rounded-[1.5rem] border border-primary/10 bg-white p-4 shadow-sm">
      <label htmlFor="blog-search" className="text-sm font-semibold text-heading">
        Search articles
      </label>
      <div className="mt-3 flex gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-text" />
          <Input
            id="blog-search"
            name="q"
            defaultValue={defaultValue}
            placeholder="Search blog posts..."
            className="rounded-full border-primary/15 bg-background pl-10"
          />
        </div>
        <Button type="submit" size="sm" className="rounded-full px-5">
          Search
        </Button>
      </div>
    </form>
  );
}
