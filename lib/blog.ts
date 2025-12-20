import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPostWithContent } from "./types";

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getBlogSlugs(): string[] {
	if (!fs.existsSync(blogDirectory)) {
		return [];
	}
	return fs
		.readdirSync(blogDirectory)
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPostWithContent | null {
	const fullPath = path.join(blogDirectory, `${slug}.mdx`);

	if (!fs.existsSync(fullPath)) {
		return null;
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);
	const stats = readingTime(content);

	const frontmatter = data as Record<string, unknown>;

	return {
		slug,
		title: (frontmatter.title as string) || "",
		excerpt: (frontmatter.excerpt as string) || "",
		date: (frontmatter.date as string) || "",
		tags: (frontmatter.tags as string[]) || [],
		readTime: `${Math.ceil(stats.minutes)} min read`,
		content,
		frontmatter,
	};
}

export function getAllBlogPosts() {
	const slugs = getBlogSlugs();
	const posts = slugs
		.map((slug) => getBlogPost(slug))
		.filter((post): post is NonNullable<typeof post> => post !== null)
		.sort((a, b) => {
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
			return dateB - dateA;
		});

	return posts;
}
