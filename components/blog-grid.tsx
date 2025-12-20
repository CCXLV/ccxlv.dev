import { BlogCard } from "@/components/blog-card";
import { getAllBlogPosts } from "@/lib/blog";

export const BlogGrid = async () => {
	const blogPosts = getAllBlogPosts();

	return (
		<section
			id="blog"
			className="container mx-auto px-6 py-16 border-t border-border/40"
		>
			<div className="mb-12">
				<h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
					Projects & Case Studies
				</h2>
				<p className="text-muted-foreground">
					How I built things, why I made certain decisions, and what I learned
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogPosts.map((post) => (
					<BlogCard key={post.slug} post={post} />
				))}
			</div>
		</section>
	);
};
