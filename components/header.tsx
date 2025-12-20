"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === "/" && window.location.hash) {
			const hash = window.location.hash.substring(1);
			const element = document.getElementById(hash);
			if (element) {
				// Small delay to ensure page is fully rendered
				setTimeout(() => {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 100);
			}
		}
	}, [pathname]);

	const handleHashClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		const hash = href.split("#")[1];
		if (!hash) return;

		// If we're already on the home page, prevent default and scroll smoothly
		if (pathname === "/") {
			e.preventDefault();
			const element = document.getElementById(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
		// If we're on a different page, let Next.js navigate first
		// The useEffect will handle the smooth scroll after navigation
	};

	return (
		<header className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<nav className="container mx-auto px-6 py-6">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="text-xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
					>
						Giorgi Merebashvili
					</Link>
					<div className="flex gap-8">
						<Link
							href="/#about"
							onClick={(e) => handleHashClick(e, "/#about")}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							About
						</Link>
						<Link
							href="/#work-experience"
							onClick={(e) => handleHashClick(e, "/#work-experience")}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Work Experience
						</Link>
						<Link
							href="/#skills"
							onClick={(e) => handleHashClick(e, "/#skills")}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Skills
						</Link>
						<Link
							href="/#blog"
							onClick={(e) => handleHashClick(e, "/#blog")}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Blog
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};
