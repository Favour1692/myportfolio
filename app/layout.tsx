import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { headings, textfont, logofont } from "@/font";
import AosInit from "@/components/AosInit";

export const metadata: Metadata = {
  title: "faytechh",
  description: "my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${headings.variable} ${textfont.variable} ${logofont}`}
    >
      <body className="overflow-x-clip">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosInit />
          <Navbar />
          <main
            className={`${textfont.className} antialiased bg-lightbg text-lighttext dark:bg-darkbg dark:text-darktext`}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
