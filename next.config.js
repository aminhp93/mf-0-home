/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const {
  createSharedDependencies,
} = require("./@core/configs/next-config-util.js");

let hostCommon = process.env.HOST_COMMON_LOCAL;
let hostItems = process.env.HOST_ITEMS_LOCAL;
let hostProperty = process.env.HOST_PROPERTY_LOCAL;

if (process.env.NODE_ENV === "production") {
  hostCommon = process.env.HOST_COMMON_PRODUCTION;
  hostItems = process.env.HOST_ITEMS_PRODUCTION;
  hostProperty = process.env.HOST_PROPERTY_PRODUCTION;
}

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // if (!options.isServer) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          common: `common@${hostCommon}/_next/static/chunks/remoteEntry.js`,
          items: `items@${hostItems}/_next/static/chunks/remoteEntry.js`,
          property: `property@${hostProperty}/_next/static/chunks/remoteEntry.js`,
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
};

module.exports = nextConfig;
