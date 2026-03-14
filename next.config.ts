import type { NextConfig } from "next";

// Pre-build Environment Variable Validation
if (process.env.NODE_ENV !== "development") {
  const requiredEnvs = ["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY", "CLERK_SECRET_KEY"];
  for (const env of requiredEnvs) {
    if (!process.env[env]) {
      throw new Error(`❌ Missing required environment variable: ${env}. Please check your Vercel settings.`);
    }
  }
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
