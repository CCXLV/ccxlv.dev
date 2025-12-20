import { Mail } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

export const Footer = () => {
	return (
		<footer className="border-t border-border/40 mt-24">
			<div className="container mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex flex-col items-center md:items-start gap-2">
						<p className="text-sm text-muted-foreground">© 2025 CCXLV</p>
					</div>
					<div className="flex gap-6">
						<Link
							href="https://github.com/ccxlv"
							target="_blank"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="GitHub"
						>
							<GithubIcon className="h-5 w-5 fill-muted-foreground" />
						</Link>
						<Link
							href="https://x.com/ccxlv11"
							target="_blank"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="X"
						>
							<XIcon className="h-5 w-5 fill-muted-foreground" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/mereba11/"
							target="_blank"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="LinkedIn"
						>
							<LinkedinIcon className="h-5 w-5 fill-muted-foreground" />
						</Link>
						<Link
							href="mailto:mereba2627@gmail.com"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Email"
						>
							<Mail className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
