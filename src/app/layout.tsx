import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

export const metadata: Metadata = {
  title: "Aryan Delawadia | Portfolio Revitalized",
  description: "A cinematic one-page developer portfolio for Aryan Delawadia, featuring full-stack projects, skills, experience, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
