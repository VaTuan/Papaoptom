const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

// next.js configuration

const nextConfig = (phase, { defaultConfig }) => {
  let publicEnv = {};
  for (let key in process.env) {
    if (key.includes("NEXT_PUBLIC")) {
      publicEnv = {
        ...publicEnv,
        key: process.env[key],
      };
    }
  }
  return {
    ...defaultConfig,
    publicRuntimeConfig: publicEnv,
    async redirects() {
      return [
        {
          source: "/",
          destination: "/shoes",
          permanent: true,
        },
      ];
    },
  };
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
