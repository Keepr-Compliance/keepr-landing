/**
 * Inline SVG icon set used across the landing page. Icons are inlined (no external
 * icon font/CDN) so the site is fully self-contained. Each accepts standard SVG
 * props; stroke/size come from CSS on the parent where the prototype relied on it.
 */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P): P => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...props,
});

export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const XIcon = (p: P) => (
  <svg {...base({ strokeWidth: 2.4, ...p })}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const LockIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const ChatIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const DocIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

export const PeopleIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const HomeIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v10h14V10" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClipIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

export const DownloadIcon = (p: P) => (
  <svg {...base({ strokeWidth: 2.2, ...p })}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
  </svg>
);

export const ChevronLeftIcon = (p: P) => (
  <svg {...base({ strokeWidth: 2.4, ...p })}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const BuildingIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-6h4v6" />
  </svg>
);

export const DocCheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 15l2 2 4-4" />
  </svg>
);

export const InfoIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5l3 2" />
  </svg>
);

export const AlertIcon = (p: P) => (
  <svg {...base({ strokeWidth: 2.4, ...p })}>
    <path d="M12 9v4M12 17h.01" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const ShieldCheckIcon = (p: P) => (
  <svg {...base({ strokeWidth: 2.4, ...p })}>
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const HouseSmallIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m3 11 9-8 9 8" />
    <path d="M5 9.5V21h14V9.5" />
  </svg>
);

/** A generic "house photo" placeholder used as an attachment thumbnail. */
export const HousePhoto = () => (
  <svg viewBox="0 0 200 130" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="200" height="130" fill="#D6ECFB" />
    <circle cx="168" cy="26" r="12" fill="#FBE2A0" />
    <rect y="92" width="200" height="38" fill="#C7E6AC" />
    <polygon points="56,54 100,26 144,54" fill="#C0532F" />
    <rect x="70" y="54" width="60" height="40" fill="#F4F1EB" />
    <rect x="93" y="70" width="15" height="24" fill="#9A7B58" />
    <rect x="76" y="61" width="11" height="11" fill="#8FC7E8" />
    <rect x="113" y="61" width="11" height="11" fill="#8FC7E8" />
  </svg>
);

/** A generic "interior photo" placeholder used as an attachment thumbnail. */
export const RoomPhoto = () => (
  <svg viewBox="0 0 200 130" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="200" height="130" fill="#E7E2DA" />
    <rect y="86" width="200" height="44" fill="#CFC7BB" />
    <rect x="58" y="40" width="84" height="52" fill="#B7A597" />
    <rect x="70" y="52" width="26" height="26" fill="#8FA6B8" />
    <rect x="104" y="52" width="26" height="26" fill="#8FA6B8" />
  </svg>
);
