const { defineConfig } = require("@vue/cli-service");

module.exports = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const config = { };

  // if (isProduction) {
  //   Object.assign(config, {
  //     configureWebpack: {
  //       entry: {
  //         useVuex: "./src/hooks/useVuex.js"
  //       },
  //       output: {
  //         filename: "index.js"
  //       }
  //     }
  //   });
  // }

  return defineConfig({
    transpileDependencies: true,
    ...config
  });
};
