/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

let hostCommon = "http://localhost:3001";
let hostItems = "http://localhost:3002";
let hostProperty = "http://localhost:3003";

if (process.env.NODE_ENV === "production") {
  hostCommon = "https://common-omega.vercel.app";
  hostItems = "https://items-lilac.vercel.app";
  hostProperty = "https://property-tau.vercel.app";
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
        exposes: {},
        shared: {
          "next/image": {
            eager: false,
            requiredVersion: false,
            singleton: false,
            import: undefined,
          },
        },
      })
    );
    // }

    return config;
  },
};

module.exports = nextConfig;
