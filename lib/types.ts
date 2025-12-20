export interface WorkExperience {
	title: string;
	company: string;
	location: string;
	period: string;
	tech: string[];
	description: string[];
}

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	tags: string[];
	content?: string;
}

export interface BlogPostWithContent extends BlogPost {
	content: string;
	frontmatter: Record<string, unknown>;
}
