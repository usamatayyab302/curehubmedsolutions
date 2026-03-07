"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/lib/site-content";

export default function BlogPageContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    []
  );

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCategory = category === "All" || post.category === category;
      const matchQuery =
        query.trim().length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  const recent = blogPosts.slice(0, 3);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-medical-very-light-bg to-medical-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.12),transparent_32%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-heading">Blogs</h1>
          <p className="mt-4 max-w-3xl text-base text-muted-text">
            Insights on medical billing services USA, revenue cycle management, credentialing
            services, and AR recovery strategies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-text" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search blog posts..."
                  className="pl-9"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      category === item
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-primary/20 text-heading hover:bg-primary/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {filtered.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Card className="h-full border-primary/15 bg-white/85 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader>
                      <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                        {post.category}
                      </p>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm leading-relaxed text-muted-text">{post.excerpt}</p>
                      <p className="mt-3 text-xs text-muted-text">{post.date}</p>
                      <Link
                        href="/contact-us"
                        className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                      >
                        Read more
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <aside>
            <Card className="border-primary/15 bg-white/90">
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {recent.map((post) => (
                  <div key={post.slug} className="border-b border-primary/10 pb-3 last:border-0">
                    <p className="m-0 text-sm font-semibold text-heading">{post.title}</p>
                    <p className="m-0 mt-1 text-xs text-muted-text">{post.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  );
}



