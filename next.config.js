const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

// next.js configuration

const nextConfig = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    async redirects() {
      return [
        {
          source: "/",
          destination: "/shoes",
          permanent: true,
        },
      ];
    },
    // async rewrites() {
    //   return [
    //     {
    //       source: "/shoes/:level01",
    //       destination: "/shoes/:level01",
    //     },
    //   ];
    // },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      let env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});
      config.plugins.push(new webpack.DefinePlugin(env));
      return config;
    },
  };
};

module.exports = withPlugins([withOptimizedImages], nextConfig);

// module.exports = {
//   basePath: "/shoes",
// };
