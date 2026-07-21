"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { downloads } from "@/lib/site";

type OS = "mac" | "windows" | "unknown";

const col: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  alignItems: "center",
};

export function DownloadPicker() {
  const [os, setOs] = useState<OS>("unknown");
  const [autoStarted, setAutoStarted] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    let detected: OS = "unknown";
    if (/Windows/i.test(ua)) detected = "windows";
    else if (/Mac/i.test(ua)) detected = "mac";
    setOs(detected);
    // Only auto-start the unambiguous case (Windows = one installer).
    // Mac has two architectures we can't reliably tell apart, so we let the user pick.
    if (detected === "windows") {
      setAutoStarted(true);
      window.location.assign(downloads.windows);
    }
  }, []);

  return (
    <div style={col}>
      {os === "windows" && (
        <>
          {autoStarted && (
            <p style={{ color: "#40465C", fontSize: 14 }}>Your download should start automatically…</p>
          )}
          <a href={downloads.windows} className="btn btn-primary btn-lg">
            Download for Windows
          </a>
        </>
      )}

      {os === "mac" && (
        <>
          <a href={downloads.macArm} className="btn btn-primary btn-lg">
            Download for Mac — Apple Silicon
          </a>
          <a href={downloads.macIntel} className="btn btn-ghost btn-lg">
            Intel Mac
          </a>
          <p style={{ color: "#9AA0B4", fontSize: 13, marginTop: 2 }}>
            Most Macs from 2020 onward are Apple Silicon (M-series).
          </p>
        </>
      )}

      {os === "unknown" && (
        <>
          <a href={downloads.macArm} className="btn btn-primary btn-lg">
            Mac — Apple Silicon
          </a>
          <a href={downloads.macIntel} className="btn btn-ghost btn-lg">
            Mac — Intel
          </a>
          <a href={downloads.windows} className="btn btn-ghost btn-lg">
            Windows
          </a>
        </>
      )}

      <p style={{ marginTop: 24, fontSize: 13.5, color: "#9AA0B4" }}>
        Trouble downloading?{" "}
        <a href={downloads.releasesPage} style={{ color: "#4F46E5" }}>
          All versions &amp; release notes
        </a>
        {"   ·   "}
        <Link href="/" style={{ color: "#4F46E5" }}>
          Back to home
        </Link>
      </p>
    </div>
  );
}
