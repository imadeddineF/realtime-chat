import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsApp Clone",
  description: "Generated by create next app",
  // icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
