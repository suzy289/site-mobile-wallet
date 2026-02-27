import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site MW",
  description: "Site web créé avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
