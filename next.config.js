/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

let host = "http://localhost:3001";

if (process.env.NODE_ENV === "production") {
  host = "https://common-omega.vercel.app";
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
          common: `common@${host}/_next/static/chunks/remoteEntry.js`,
          // authentication:
          //   "authentication@http://localhost:3002/_next/static/chunks/remoteEntry.js",
        },
        exposes: {},
        shared: {},
      })
    );
    // }

    return config;
  },
};

module.exports = nextConfig;
