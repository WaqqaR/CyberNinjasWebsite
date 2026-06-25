import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Power Platform dojo track is hidden for now. Redirect its routes to the Dojo
  // landing page — the page source under src/app/dojo/power-platform is kept
  // intact, so restoring the track is just removing these two entries.
  async redirects() {
    return [
      { source: "/dojo/power-platform", destination: "/dojo", permanent: false },
      { source: "/dojo/power-platform/programme", destination: "/dojo", permanent: false },
    ];
  },
};

export default nextConfig;
