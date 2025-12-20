import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	tags: string[];
}

export const BlogCard = ({ post }: { post: BlogPost }) => {
	return (
		<Link href={`/blog/${post.slug}`} className="group">
			<Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent/50">
				<CardHeader>
					<div className="flex items-start justify-between mb-2">
						<time className="text-xs text-muted-foreground">{post.date}</time>
						<ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
					</div>
					<h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug text-balance">
						{post.title}
					</h3>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
						{post.excerpt}
					</p>
				</CardContent>
				<CardFooter className="flex flex-col items-start gap-3">
					<div className="flex flex-wrap gap-2">
						{post.tags.map((tag: string) => (
							<Badge key={tag} variant="outline" className="text-xs">
								{tag}
							</Badge>
						))}
					</div>
					<span className="text-xs text-muted-foreground">{post.readTime}</span>
				</CardFooter>
			</Card>
		</Link>
	);
};
