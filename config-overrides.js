const { alias } = require("react-app-rewire-alias");

const aliasMap = {
  "@": "./src",
};

module.exports = alias(aliasMap);
