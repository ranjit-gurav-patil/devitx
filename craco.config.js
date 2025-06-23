// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const minimizer = webpackConfig.optimization.minimizer;

      if (Array.isArray(minimizer)) {
        webpackConfig.optimization.minimizer = minimizer.filter(
          (plugin) => plugin.constructor.name !== 'CssMinimizerPlugin'
        );
      }

      return webpackConfig;
    },
  },
};
