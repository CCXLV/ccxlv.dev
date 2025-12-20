import type { WorkExperience } from "./types";

export const EXP_LANGUAGES = ["Python", "TypeScript (JS)", "C++", "Rust"];

export const EXP_DEV_TOOLS = [
	"Flask",
	"FastAPI",
	"Django",
	"Node.js",
	"Express",
	"NestJS",
	"React",
	"Next.js",
	"Electron",
	"TailwindCSS",
	"ShadcnUI",
	"PostgreSQL",
	"MySQL",
	"SQLite",
	"Redis",
];

export const EXP_DESIGN_TOOLS = [
	"Figma",
	"Adobe Photoshop",
	"After Effects",
	"Illustrator",
];

export const WORK_EXPERIENCES: WorkExperience[] = [
	{
		title: "Founder & Lead Engineer",
		company: "LernaFlow",
		location: "Remote",
		period: "2025 - Present",
		tech: [
			"FastAPI",
			"Next.js",
			"PostgreSQL",
			"Gemini API",
			"OpenAI",
			"Langchain",
			"Qdrant",
			"Docker",
			"Nginx",
		],
		description: [
			"Architected a full-stack AI platform using **FastAPI** and **Next.js**.",
			"Integrated **Gemini** for advanced text processing and **OpenAI** for high-fidelity audio generation.",
			"Engineered a custom payment gateway integration with **Bank of Georgia (BOG)**",
			"and managed vector search using **Qdrant** and **Langchain**.",
		],
	},
	{
		title: "Backend Developer",
		company: "Hiera",
		location: "Remote",
		period: "2025",
		tech: ["NestJS", "Stripe", "TypeORM", "PostgreSQL"],
		description: [
			"Developed backend financial logic using **NestJS** and **PostgreSQL**.",
			"Integrated **Stripe** for subscription-based billing and built a real-time",
			"transaction monitoring system alongside a custom referral program to incentivize user growth.",
		],
	},
	{
		title: "Software Engineer & Lead Visual Designer",
		company: "Red Bull Gaming",
		location: "Hybrid (Remote & On-Site)",
		period: "2025",
		tech: [
			"TypeScript",
			"Python",
			"React",
			"Electron",
			"Flask",
			"Photoshop",
			"After Effects",
			"Lottie",
		],
		description: [
			"Designed the visual identity and community media assets for the **Red Bull M.E.O. 2025 Georgia** tournament,",
			"utilizing **Photoshop** and **After Effects** to create branding for the competitive scene.",
			"To power the live broadcast, I engineered a high-performance automation stack:",
			"a **React/Express** web application for on-stream displays, an **Electron** suite to control the event flow,",
			"and a **Flask** bridge (bundled via **PyInstaller**) to fetch real-time game data.",
			"I implemented **Lottie** to drive data-responsive animations, ensuring live match results",
			"were synchronized across the broadcast and venue screens.",
		],
	},
];
