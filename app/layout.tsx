import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://ccxlv.dev"),
	title: {
		default: "CCXLV | Software Engineer & Builder",
		template: "%s | ccxlv",
	},
	description:
		"Software Engineer and Builder focused on logic, performance, and building clean solutions for complex systems-from document-to-audio platforms to real-time broadcast tools.",
	keywords: [
		"Software Engineer",
		"Product Design",
		"Systems Architecture",
		"Next.js Developer",
		"TypeScript",
		"Linux",
		"LernaFlow",
		"Red Bull MEO Georgia",
		"Georgia Tech Scene",
	],
	authors: [{ name: "CCXLV" }],
	creator: "CCXLV",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://ccxlv.dev",
		siteName: "ccxlv.dev",
		title: "CCXLV | Software Engineer & Builder",
		description:
			"Engineering high-performance software and clean systems with a logic-first approach.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "ccxlv.dev | Software Engineer & Builder",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CCXLV | Software Engineer & Builder",
		description: "Engineering high-performance software and clean systems.",
		images: ["/og-image.png"],
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
