import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // This is not recommended unless you have a separate linting step in your workflow.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
