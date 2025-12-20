import { Calendar, MapPin } from "lucide-react";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { WORK_EXPERIENCES } from "@/lib/constants";

export function WorkExperience() {
	return (
		<section
			id="work-experience"
			className="container mx-auto px-6 py-16 border-t border-border/40"
		>
			<div className="max-w-3xl">
				<h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
					Work Experience
				</h2>
				<p className="text-muted-foreground leading-relaxed mb-8">
					My professional journey building products and solving problems.
				</p>
				<div className="space-y-8">
					{WORK_EXPERIENCES.map((exp) => (
						<div
							key={`${exp.company}-${exp.period}`}
							className="group relative pl-6 border-l-2 border-border/40 hover:border-accent/50 transition-colors"
						>
							<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-border/40 group-hover:border-accent transition-colors" />
							<div className="space-y-2">
								<h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
									{exp.title}
								</h3>
								<div className="text-sm font-medium text-muted-foreground">
									{exp.company}
								</div>
								<div className="flex flex-wrap gap-4 text-sm text-muted-foreground/80">
									<div className="flex items-center gap-1.5">
										<Calendar className="h-4 w-4" />
										<span>{exp.period}</span>
									</div>
									<div className="flex items-center gap-1.5">
										<MapPin className="h-4 w-4" />
										<span>{exp.location}</span>
									</div>
								</div>
								<div className="flex flex-wrap gap-2 text-sm text-muted-foreground/80 mt-3">
									{exp.tech.map((tech) => (
										<Badge key={tech}>{tech}</Badge>
									))}
								</div>
								<div className="text-muted-foreground leading-relaxed pt-2">
									<Markdown>{exp.description.join(" ")}</Markdown>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
