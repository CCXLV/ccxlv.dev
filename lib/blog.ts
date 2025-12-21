import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Metadata } from "next";
import readingTime from "reading-time";
import type { BlogFrontmatter, BlogPostWithContent } from "./types";

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

	const frontmatter = data as BlogFrontmatter;

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

export function generateBlogMetadata(post: BlogPostWithContent): Metadata {
	const { frontmatter, title, excerpt, tags, date } = post;

	const description = frontmatter.description || excerpt;
	const keywords = frontmatter.keywords || tags;
	const ogImage = frontmatter.ogImage || "/og-image.png";

	return {
		title,
		description,
		keywords: [...keywords, ...tags],
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime: date,
			authors: ["CCXLV"],
			tags,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
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
