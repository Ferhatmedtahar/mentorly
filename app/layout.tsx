import Footer from "@/components/general/Footer";
import Navbar from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";

import { AuthProvider } from "@/providers/auth-provider";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: "../fonts/work-sans-latin-900-normal.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-800-normal.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-700-normal.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-600-normal.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-500-normal.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-400-normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-300-normal.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-200-normal.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/work-sans-latin-100-normal.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Mentorly",
  description: "Mentorly is a platform for connecting mentors and mentees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.className} antialiased   `}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="sticky top-0 z-50 ">
              <Navbar />
            </header>
            {children}
            <Toaster expand={false} richColors />
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
