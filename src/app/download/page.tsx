import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LATEST_VERSION } from "@/lib/site";
import { DownloadPicker } from "./DownloadPicker";

export const metadata: Metadata = {
  title: "Download Keepr",
  description: "Download Keepr for Mac and Windows — free to download and set up.",
};

export default function DownloadPage() {
  return (
    <>
      <Nav />
      <main>
        <div
          className="wrap"
          style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", padding: "72px 22px 96px" }}
        >
          <h1 style={{ fontSize: 34, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 10px" }}>
            Download Keepr
          </h1>
          <p style={{ color: "#666C82", margin: "0 0 30px", fontSize: 15 }}>
            Free to download &amp; set up · Mac &amp; Windows · v{LATEST_VERSION}
          </p>
          <DownloadPicker />
        </div>
      </main>
      <Footer />
    </>
  );
}
