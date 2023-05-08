const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  //add this option
  experimental: {
    esmExternals: false,
  },
});
