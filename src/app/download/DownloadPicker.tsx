"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { downloads, LATEST_VERSION } from "@/lib/site";

type OS = "mac" | "windows" | "unknown";

const col: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  alignItems: "center",
};

function Foot() {
  return (
    <p style={{ marginTop: 24, fontSize: 13, color: "#9AA0B4" }}>
      <a href={downloads.releasesPage} style={{ color: "#4F46E5" }}>
        All versions &amp; release notes
      </a>
      {"   ·   "}
      <Link href="/" style={{ color: "#4F46E5" }}>
        Back to home
      </Link>
    </p>
  );
}

export function DownloadPicker() {
  const [os, setOs] = useState<OS>("unknown");

  useEffect(() => {
    const ua = navigator.userAgent || "";
    let detected: OS = "unknown";
    if (/Windows/i.test(ua)) detected = "windows";
    else if (/Mac/i.test(ua)) detected = "mac";
    setOs(detected);

    // Auto-start the download for the detected OS (Mac → Apple Silicon, the app's
    // default build). Small delay so the page paints "your download will begin" first.
    const href =
      detected === "windows" ? downloads.windows : detected === "mac" ? downloads.macArm : null;
    if (href) {
      const t = setTimeout(() => window.location.assign(href), 500);
      return () => clearTimeout(t);
    }
  }, []);

  // Can't detect — let the visitor pick.
  if (os === "unknown") {
    return (
      <div style={col}>
        <p style={{ color: "#40465C", fontSize: 15, margin: "0 0 6px" }}>Choose your platform:</p>
        <a href={downloads.macArm} className="btn btn-primary btn-lg">
          Mac — Apple Silicon
        </a>
        <a href={downloads.macIntel} className="btn btn-ghost btn-lg">
          Mac — Intel
        </a>
        <a href={downloads.windows} className="btn btn-ghost btn-lg">
          Windows
        </a>
        <Foot />
      </div>
    );
  }

  const primaryHref = os === "windows" ? downloads.windows : downloads.macArm;
  const primaryLabel =
    os === "windows" ? "Download for Windows" : "Download for Mac (Apple Silicon)";

  return (
    <div style={col}>
      <p style={{ fontSize: 20, fontWeight: 650, margin: "0 0 4px", color: "#191B2E" }}>
        Your download will begin shortly…
      </p>
      <p style={{ color: "#666C82", fontSize: 14, margin: "0 0 22px" }}>
        Keepr for {os === "windows" ? "Windows" : "Mac"} · v{LATEST_VERSION} · Free to download &amp;
        set up
      </p>

      <p style={{ color: "#9AA0B4", fontSize: 13.5, margin: 0 }}>Didn&apos;t start automatically?</p>
      <a href={primaryHref} className="btn btn-primary btn-lg">
        {primaryLabel}
      </a>
      {os === "mac" && (
        <a href={downloads.macIntel} style={{ fontSize: 13, color: "#4F46E5", marginTop: 2 }}>
          Using an Intel Mac? Get that build instead
        </a>
      )}
      <Foot />
    </div>
  );
}
