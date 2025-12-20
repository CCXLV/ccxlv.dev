import { Link } from "./link";

export const Hero = () => {
	return (
		<section id="about" className="container mx-auto px-6 py-24 md:py-32">
			<div className="max-w-3xl">
				<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
					Software Engineer & Builder
				</h1>
				<p className="text-xl text-muted-foreground leading-relaxed mb-8">
					I build specialized software and write about the engineering behind
					them. Currently, I am a Computer Science student at SANGU and the
					founder of <Link href="https://lernaflow.com" text="LernaFlow" />, a
					Document-to-Audio Platform.
				</p>
				<p className="text-lg text-muted-foreground leading-relaxed">
					Beyond my own projects, I've engineered real-time broadcast tools for
					Red Bull Gaming tournaments and developed custom open-source SDKs. I
					value logic, performance, and turning complex systems into clean,
					functional solutions.
				</p>
			</div>
		</section>
	);
};
