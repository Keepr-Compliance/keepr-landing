import type { Metadata } from "next";
import "./globals.css";
import { ConsentProvider } from "@/components/consent/ConsentProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://keeprcompliance.com"),
  title: "Keepr — Keep every deal, without keeping track",
  description:
    "Keepr pulls every text and email from a real estate transaction and hands you a finished, audit-ready package — export-ready in 90 seconds. Local-first and encrypted on your device.",
  openGraph: {
    title: "Keepr — Keep every deal, without keeping track",
    description:
      "Every text and email from a deal, assembled into a finished audit package. Just click Export.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
