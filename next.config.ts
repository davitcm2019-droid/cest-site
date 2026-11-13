import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy.
 *
 * `script-src` carries `'unsafe-inline'` deliberately: every page here is
 * statically prerendered, and Next injects the hydration/RSC payload as inline
 * `<script>` tags. Replacing that with a nonce requires middleware, which would
 * force every page into dynamic rendering — a real cost for a static marketing
 * site, in exchange for little here (the site renders no user-supplied HTML).
 * The valuable restrictions are kept strict: no external script origins, no
 * framing, no plugins, no base-tag hijacking, and `connect-src 'self'` so an
 * injected payload has nowhere to exfiltrate to.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  // next/font self-hosts Google Fonts at build time, so no external font origin.
  "font-src 'self' data:",
  "img-src 'self' data: blob:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "manifest-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // 2 years, preload-eligible. Only meaningful over HTTPS; browsers ignore it on HTTP.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Redundant with frame-ancestors above, kept for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework/version to attackers scanning for known CVEs.
  poweredByHeader: false,

  experimental: {
    cpus: 1,
    // Tree-shake icon barrel imports so a single `lucide-react` import doesn't
    // pull the whole icon set into the client bundle.
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    // Serve modern formats; both are far smaller than PNG for photographic content.
    formats: ["image/avif", "image/webp"],
    // Next 16 only honours qualities declared here. The hero photograph is the
    // LCP element and holds up better at 85 than at the 75 default.
    qualities: [75, 85],
    // No remote images are used — keep the optimizer from being an open proxy.
    remotePatterns: [],
    // Block SVG through the optimizer (SVGs can carry scripts).
    dangerouslyAllowSVG: false,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      /*
        Production only. Dev chunk filenames are not content-addressed the way
        build output is, so an immutable max-age pins stale JavaScript and CSS
        in the browser across edits — which shows up as hydration mismatches
        against a server that is actually serving the current code. Next warns
        about exactly this on boot. In production the filenames carry a build
        hash, so the long cache is both safe and worth having.
      */
      ...(isDev
        ? []
        : [
            {
              source: "/_next/static/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]),
    ];
  },
};

export default nextConfig;
