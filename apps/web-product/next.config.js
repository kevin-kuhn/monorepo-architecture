const withTM = require("next-transpile-modules")(["ui", "core"]);

module.exports = withTM({
  reactStrictMode: true,
});
