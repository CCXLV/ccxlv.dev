import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { generateBlogMetadata, getBlogPost, getBlogSlugs } from "@/lib/blog";

export async function generateStaticParams() {
	const slugs = getBlogSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = getBlogPost(slug);

	if (!post) {
		return {};
	}

	return generateBlogMetadata(post);
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getBlogPost(slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="min-h-screen">
			<Header />
			<main className="container mx-auto px-6 py-12">
				<Link
					href="/#blog"
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to all posts
				</Link>
				<article className="container mx-auto pb-6 pt-2 py-16">
					<header className="mb-8">
						<time className="text-sm text-muted-foreground">{post.date}</time>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4 text-balance">
							{post.title}
						</h1>
						<div className="flex gap-4 flex-col md:flex-row md:items-center">
							<span className="text-sm text-muted-foreground">
								{post.readTime}
							</span>
							<div className="flex flex-wrap gap-2">
								{post.tags.map((tag) => (
									<Badge key={tag} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>
						</div>
					</header>
					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<MDXRemote source={post.content} />
					</div>
				</article>
			</main>
			<Footer />
		</div>
	);
}
