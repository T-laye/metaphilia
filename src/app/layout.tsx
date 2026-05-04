import type { Metadata } from "next";
// import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Providers from "../components/providers";

const figtree = localFont({
	src: [
		{
			path: "../../public/fonts/figtree/Figtree-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/figtree/Figtree-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/figtree/Figtree-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/figtree/Figtree-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/figtree/Figtree-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/figtree/Figtree-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/figtree/Figtree-Black.ttf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-figtree",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
	),

	title: "Metaphilia",
	description:
		"Professional, safe and accessible mental health counselling and consulting built around you. We help you understand yourself better, improve relationships, and live a healthier, more balanced life.",

	keywords: [
		"mental health",
		"therapy",
		"counselling",
		"wellness",
		"psychology",
		"self improvement",
	],

	openGraph: {
		title: "Metaphilia",
		description:
			"Professional, safe and accessible mental health counselling and consulting built around you. We help you understand yourself better, improve relationships, and live a healthier, more balanced life.",
		type: "website",
		url: "https://www.metaphilia.com",
		images: [
			{
				url: "/images/metaphilia.webp",
				width: 1200,
				height: 630,
				alt: "Metaphilia",
			},
		],
		siteName: "Metaphilia",
	},

	twitter: {
		card: "summary_large_image",
		title: "Metaphilia",
		description:
			"Professional, safe and accessible mental health counselling and consulting built around you.",
		images: ["/images/metaphilia.webp"],
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${figtree.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
