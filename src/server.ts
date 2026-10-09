import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const ROBOTS_DIRECTIVE = "noindex, nofollow, noarchive";
const PRODUCTION_ROBOTS = "User-agent: *\nAllow: /\n\nSitemap: https://modernedge.com.np/sitemap.xml\n";
const PREVIEW_ROBOTS = "User-agent: *\nDisallow: /\n";

function isLovableHost(request: Request): boolean {
  const host = (request.headers.get("x-forwarded-host") ?? new URL(request.url).hostname)
    .split(":")[0]
    .toLowerCase();
  return host.endsWith(".lovable.app");
}

async function applyPreviewNoindex(response: Response): Promise<Response> {
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", ROBOTS_DIRECTIVE);
  const type = headers.get("content-type") ?? "";
  if (!type.includes("text/html")) {
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }
  const html = await response.text();
  const tags = `<meta name="robots" content="${ROBOTS_DIRECTIVE}"/><meta name="googlebot" content="${ROBOTS_DIRECTIVE}"/>`;
  const out = html.includes("</head>") ? html.replace("</head>", `${tags}</head>`) : html;
  headers.delete("content-length");
  return new Response(out, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const preview = isLovableHost(request);
      if (new URL(request.url).pathname === "/robots.txt") {
        return new Response(preview ? PREVIEW_ROBOTS : PRODUCTION_ROBOTS, {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            ...(preview ? { "X-Robots-Tag": ROBOTS_DIRECTIVE } : {}),
          },
        });
      }
      const handler = await getServerEntry();
      const response = await normalizeCatastrophicSsrResponse(
        await handler.fetch(request, env, ctx),
      );
      return preview ? await applyPreviewNoindex(response) : response;
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
