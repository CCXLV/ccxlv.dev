import { BlogGrid } from "@/components/blog-grid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { WorkExperience } from "@/components/work-experience";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<WorkExperience />
				<Skills />
				<BlogGrid />
			</main>
			<Footer />
		</div>
	);
}
