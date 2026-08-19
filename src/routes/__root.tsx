import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { THEME_SCRIPT } from "../components/site/ThemeToggle";
import { WhatsAppFloat, MobileContactBar } from "../components/site/FloatingContact";

const TITLE =
  "Modern Edge — Multidisciplinary Engineering Consultancy in Nepal";
const DESCRIPTION =
  "Modern Edge Architects & Engineers Pvt. Ltd. — architecture, civil engineering, construction and bank-grade property valuation for homeowners, businesses, banks, industries and government across Nepal.";

const CORE_DISCIPLINES = [
  "Architecture",
  "Civil Engineering",
  "Construction Services",
  "Property Valuation",
  "Municipal Drawings",
  "DPR Preparation",
  "Interior Design",
  "Landscape Design",
  "Real Estate Consultancy",
];

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "GeneralContractor"],
  name: "Modern Edge Architects & Engineers Pvt. Ltd.",
  alternateName: "Modern Edge",
  description: DESCRIPTION,
  url: "/",
  telephone: "+977-9852059599",
  email: "info@modernedge.com.np",
  areaServed: { "@type": "Country", name: "Nepal" },
  knowsAbout: CORE_DISCIPLINES,
  founder: [
    {
      "@type": "Person",
      name: "Kiran Neupane",
      jobTitle: "Director & Co-Founder",
    },
    {
      "@type": "Person",
      name: "Md. Samir Hussain",
      jobTitle: "Director & Co-Founder",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Duhabi-06",
      addressLocality: "Sunsari",
      addressRegion: "Koshi",
      addressCountry: "NP",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Biratnagar-10",
      addressLocality: "Morang",
      addressRegion: "Koshi",
      addressCountry: "NP",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering & Design Services",
    itemListElement: CORE_DISCIPLINES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
  },
  sameAs: [
    "https://www.facebook.com/meae.np/",
    "https://www.linkedin.com/company/meaenp",
    "https://www.instagram.com/meae.np",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-ink">404</h1>
        <h2 className="mt-4 text-xl text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-ink-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-hairline bg-background px-5 py-2.5 text-sm font-medium text-ink hover:bg-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "Modern Edge Architects & Engineers Pvt. Ltd." },
      { property: "og:site_name", content: "Modern Edge" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "theme-color", content: "#004AAD" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/90592416-d6df-47c7-8453-8e6f00d15841/id-preview-0b9065ac--acafc277-f740-40c9-a7a0-418cad362e26.lovable.app-1783356311314.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/90592416-d6df-47c7-8453-8e6f00d15841/id-preview-0b9065ac--acafc277-f740-40c9-a7a0-418cad362e26.lovable.app-1783356311314.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen pb-16 md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <MobileContactBar />
    </QueryClientProvider>
  );
}
