import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Fetouh — Fullstack Developer & Software Engineer",
  description:
    "Ahmed Fetouh is a Fullstack Developer building fast and scalable web applications using Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Ahmed Fetouh",
    "Fullstack Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Frontend Engineer",
    "Backend Developer",
    "React Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Ahmed Fetouh", url: "https://ahmedfetouh.dev" }],
  creator: "Ahmed Fetouh",
  publisher: "Ahmed Fetouh",
  metadataBase: new URL("https://ahmedfetouh.dev"),
  openGraph: {
    title: "Ahmed Fetouh — Fullstack Developer & Software Engineer",
    description:
      "Explore the work and projects of Ahmed Fetouh, a developer specializing in fullstack web development using Next.js and modern technologies.",
    url: "https://ahmedfetouh.dev",
    siteName: "Ahmed Fetouh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Fetouh — Fullstack Developer",
    description:
      "Discover Ahmed Fetouh's personal portfolio and web development projects.",
    // creator: "@your_twitter_handle", // لو عندك
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${firaCode.variable}`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
