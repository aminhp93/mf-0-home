/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const {
  createSharedDependencies,
} = require("./@core/configs/next-config-util.js");

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // if (!options.isServer) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          common: `common@${process.env.WEBPMP_V5_COMMON_URL}/_next/static/chunks/remoteEntry.js`,
          items: `items@${process.env.WEBPMP_V5_ITEMS_BASIC_URL}/_next/static/chunks/remoteEntry.js`,
          property: `property@${process.env.WEBPMP_V5_PROPERTIES_URL}/_next/static/chunks/remoteEntry.js`,
        },
        exposes: {
          "./index": "./pages/index.tsx",
        },
        shared: createSharedDependencies(),
      })
    );
    // }

    return config;
  },
  eslint: {
    dirs: ["."], //or ['pages', 'hooks']
  },
};

module.exports = nextConfig;
