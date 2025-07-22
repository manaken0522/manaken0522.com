import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import { visit } from "unist-util-visit";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  extractTextFromMarkdown(content).then((text) => {
    data.excerpt = text.slice(0, 25) + "...";
  });

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts().filter((post) => post.tags?.includes(tag));
  return posts;
}

export async function extractTextFromMarkdown(markdown: string) {
  const tree = await remark().parse(markdown);
  let textContent = "";

  visit(tree, "text", (node) => {
    textContent += node.value + " ";
  });

  return textContent.trim();
}
