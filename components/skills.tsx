import { Badge } from "@/components/ui/badge";

import {
	EXP_DESIGN_TOOLS,
	EXP_DEV_TOOLS,
	EXP_LANGUAGES,
} from "@/lib/constants";

export const Skills = () => {
	return (
		<section
			id="skills"
			className="container mx-auto px-6 py-16 border-t border-border/40"
		>
			<div className="max-w-3xl">
				<h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
					Skills & Tools
				</h2>
				<p className="text-muted-foreground leading-relaxed mb-8">
					My technical and creative stack. A curated list of languages and tools
					I use to solve problems across the full development and design
					lifecycle.
				</p>
				<div className="space-y-6">
					<div>
						<h3 className="text-sm font-medium text-muted-foreground mb-3">
							Languages:
						</h3>
						<div className="flex flex-wrap gap-2">
							{EXP_LANGUAGES.map((tool) => (
								<Badge
									key={tool}
									variant="secondary"
									className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors"
								>
									{tool}
								</Badge>
							))}
						</div>
					</div>
					<div>
						<h3 className="text-sm font-medium text-muted-foreground mb-3">
							Dev Tools:
						</h3>
						<div className="flex flex-wrap gap-2">
							{EXP_DEV_TOOLS.map((tool) => (
								<Badge
									key={tool}
									variant="secondary"
									className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors"
								>
									{tool}
								</Badge>
							))}
						</div>
					</div>
					<div>
						<h3 className="text-sm font-medium text-muted-foreground mb-3">
							Design Tools:
						</h3>
						<div className="flex flex-wrap gap-2">
							{EXP_DESIGN_TOOLS.map((tool) => (
								<Badge
									key={tool}
									variant="secondary"
									className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors"
								>
									{tool}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
