/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// const withPWA = require("next-pwa");
const { i18n } = require("./next-i18next.config");

const nextConfig =
  // withBundleAnalyzer(
  // withPWA(
  {
    i18n,
    images: {
      domains: ["upload.wikimedia.org"],
    },
    reactStrictMode: true,
    experimental: {
      outputStandalone: true,
    },
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
      register: true,
      skipWaiting: true,
      sw: "/sw.js",
    },
    // styledComponents: true,
  };
// );
// );

module.exports = nextConfig;
