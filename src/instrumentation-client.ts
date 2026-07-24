import { initBotId } from "botid/client/core";

/**
 * BotID client instrumentation (BACKLOG-2226).
 *
 * Registers the endpoints that should be protected by Vercel BotID so the client
 * attaches a verification signal to those requests. The matching server check
 * lives in the route handler (src/app/api/download-link/route.ts).
 *
 * Only the email-sending endpoint is protected — it's the one that triggers a
 * real side effect (an M365 email). Static pages need no protection.
 */
initBotId({
  protect: [
    {
      path: "/api/download-link",
      method: "POST",
    },
  ],
});
