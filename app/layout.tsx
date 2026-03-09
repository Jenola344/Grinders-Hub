import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import FloatingChat from "@/components/ui/FloatingChat";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "The Grinders Hub | Learn Skills That Pay",
    description: "Join the community of ambitious individuals learning AI, copywriting, and more. Stop scrolling, start building.",
    keywords: ["learn skills", "ai automation", "copywriting", "digital marketing", "freelancing", "financial independence"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${cormorantGaramond.variable} font-sans bg-bg-main text-text-primary antialiased relative`}>
                {children}
                <FloatingChat />
            </body>
        </html>
    );
}
