"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { navLinks } from "@/lib/constants";

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
			<nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="text-lg sm:text-xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
					>
						Giorgi Merebashvili
					</Link>
					{/* Desktop Navigation */}
					<div className="hidden md:flex gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={(e) => handleHashClick(e, link.href)}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>
					{/* Mobile Navigation */}
					<SidebarTrigger className="md:hidden cursor-pointer" />
				</div>
			</nav>
		</header>
	);
};
