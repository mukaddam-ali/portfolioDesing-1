import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Almoukaddam - Software Engineering Student | Full Stack Developer",
  description: "Computer Science student at Sam Houston State University specializing in full-stack web development. Passionate about building scalable applications and solving complex problems.",
  keywords: ["Ali Almoukaddam", "Software Engineer", "Full Stack Developer", "Next.js", "React", "TypeScript", "SHSU", "Computer Science", "Web Development"],
  authors: [{ name: "Ali Almoukaddam" }],
  icons: {
    icon: "/Logo.jpeg",
    shortcut: "/Logo.jpeg",
    apple: "/Logo.jpeg",
  },
  openGraph: {
    title: "Ali Almoukaddam - Software Engineering Portfolio",
    description: "Computer Science student specializing in full-stack development with React, Next.js, and Node.js",
    url: "https://alialmoukaddam.dev",
    siteName: "Ali Almoukaddam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Almoukaddam - Software Engineering Portfolio",
    description: "Computer Science student specializing in full-stack development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
