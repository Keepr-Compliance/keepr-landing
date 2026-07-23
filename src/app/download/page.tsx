import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getLatestVersion } from "@/lib/site";
import { DownloadPicker } from "./DownloadPicker";

export const metadata: Metadata = {
  title: "Download Keepr",
  description: "Download Keepr for Mac and Windows — free to download and set up.",
};

export default async function DownloadPage() {
  const version = await getLatestVersion();
  return (
    <>
      <Nav />
      <main>
        <div
          className="wrap"
          style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", padding: "72px 22px 96px" }}
        >
          <h1 style={{ fontSize: 34, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 28px" }}>
            Download Keepr
          </h1>
          <DownloadPicker version={version} />
        </div>
      </main>
      <Footer />
    </>
  );
}
