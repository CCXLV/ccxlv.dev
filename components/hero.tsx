export const Hero = () => {
	return (
		<section id="about" className="container mx-auto px-6 py-24 md:py-32">
			<div className="max-w-3xl">
				<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
					Software Engineer
				</h1>
				<p className="text-xl text-muted-foreground leading-relaxed mb-8">
					I build software with a fixation on clean architecture and developer
					experience. Currently building on a startup and contributing to
					open-source from time to time.
				</p>
				<p className="text-lg text-muted-foreground leading-relaxed">
					Whether I’m working on systems-level infrastructure or architecting
					full-stack applications, my goal is always the same: highly reusable,
					DRY-compliant code that is as readable as it is efficient. I value the
					craft of turning complex logic into elegant, well-structured solutions
					that other developers actually enjoy using.
				</p>
			</div>
		</section>
	);
};
