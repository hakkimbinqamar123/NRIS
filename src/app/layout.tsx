import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PageTransition } from "@/animations/PageTransition";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NRIS - National Resources Insurance Services",
  description: "Your Safety, Our Priority. Comprehensive insurance policies giving you peace of mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased min-h-screen flex flex-col font-sans text-foreground bg-background`}
      >
        <ThemeProvider>
          <LenisProvider>
            <ReduxProvider>
              <Header />
              <PageTransition>
                {children}
              </PageTransition>
              <FloatingContact />
              <Footer />
            </ReduxProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
