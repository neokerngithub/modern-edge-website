# Hide the lovable.app address from search engines (custom domain stays unchanged)

## How it works
`modern-edge-website.lovable.app` and `modernedge.com.np` serve the same build. The site will check which web address each visitor used:
- **lovable.app address** → tells search engines not to index it, follow its links, or keep a cached copy.
- **modernedge.com.np** → keeps the current search settings unchanged.

Nothing visible on the site changes.

## Changes
1. **Page-level robots signal (lovable.app only)**
   - Add an `X-Robots-Tag: noindex, nofollow, noarchive` header to every response from `*.lovable.app`. Google treats this header the same as a meta tag, and it also covers images and files.
   - Add `<meta name="robots">` and `<meta name="googlebot">` tags with `noindex, nofollow, noarchive` to the page HTML for lovable.app requests only.
2. **Separate robots.txt by address**
   - Replace the fixed `public/robots.txt` file with a robots.txt that is generated on each request:
     - lovable.app: `User-agent: *` / `Disallow: /`, with no sitemap line.
     - modernedge.com.np: the current file, unchanged (`Allow: /` plus a sitemap line).
   - Note: a `Disallow` stops crawlers from loading pages, so they would never see the noindex. For that reason, the noindex header is the main protection.
3. **Social and sharing tags**
   - Canonical links and `og:url` already point to `https://modernedge.com.np`, so link previews never promote the lovable.app address. Check that this holds on every page.
4. **Stronger access control (checked, not applied)**
   - The site's public/private visibility setting applies to the whole site, including the custom domain. Making it private would block real visitors to modernedge.com.np, so this plan will not change it. The noindex header is the strongest option that won't break the live site.
5. **Verification**
   - Locally, send test requests with a `lovable.app` host and a `modernedge.com.np` host, then confirm the correct header, meta tags and robots.txt for each.
   - Changes reach the live lovable.app address only after the next publish. After you publish, request the live URL and confirm the noindex header and meta tags are there.

## Technical details
- Detect the host in `src/server.ts` (the Worker fetch entry): wrap the response to add the `X-Robots-Tag` header when the host ends with `.lovable.app`.
- Add `src/routes/robots[.]txt.ts` as a server route that branches on `new URL(request.url).hostname`, and delete `public/robots.txt` so the static file doesn't take priority.
- For meta tags, inject them into the HTML in the same server wrapper by inserting before `</head>` on HTML responses, so route `head()` code and the production SEO setup stay untouched.
- Preview/editor URLs (`id-preview--*.lovable.app`) also match the rule, so they are covered.
- No changes to design, content, routes, sitemap or the GitHub workflow.
