import type { NextConfig } from "next";
import path from "node:path";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this project so a stray lockfile elsewhere on the
  // machine (e.g. in a parent directory) can't be mistaken for the workspace root.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Safety net for the domain cutover: once keeprcompliance.com (apex + www) points
  // at this landing project, the broker portal stays on app.keeprcompliance.com.
  // Forward any stray login traffic (old bookmarks, invite/magic-link emails that
  // used the apex/www host) to the portal so it never 404s on the marketing site.
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://app.keeprcompliance.com/login",
        permanent: false,
      },
      {
        source: "/login/:path*",
        destination: "https://app.keeprcompliance.com/login/:path*",
        permanent: false,
      },
    ];
  },
};

// Wrap with BotID so its verification challenge is served first-party (via proxy
// rewrites), which keeps it out of ad-blocker/tracker lists. See BACKLOG-2226.
export default withBotId(nextConfig);
