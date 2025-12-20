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
		default: "CCXLV | Technical Broadcast Engineer & Developer",
		template: "%s | ccxlv",
	},
	description:
		"Technical Broadcast Engineer and Developer specializing in automated live stream infrastructure, real-time data integration, and high-performance web tools.",
	keywords: [
		"Broadcast Engineering",
		"Technical Production",
		"Next.js Developer",
		"Red Bull MEO Georgia",
		"PUBG Mobile Automation",
		"Lottie Live Data",
		"TypeScript",
		"Flask",
	],
	authors: [{ name: "CCXLV" }],
	creator: "CCXLV",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://ccxlv.dev",
		siteName: "ccxlv.dev",
		title: "CCXLV | Technical Broadcast Engineer & Developer",
		description:
			"Building automated broadcast systems and high-level technical infrastructure for major esports events.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "CCXLV Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CCXLV | Technical Broadcast Engineer & Developer",
		description:
			"Automated broadcast systems and real-time data infrastructure.",
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
