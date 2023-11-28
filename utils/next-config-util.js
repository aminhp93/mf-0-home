const packageJson = require("../package.json");

const { dependencies } = packageJson;

// Function that creates the configuration for shared dependencies.
const createSharedDependencies = () => {
  return {
    "mf-packages": {
      singleton: true,
      eager: false,
      requiredVersion: dependencies["mf-packages"],
    },
    zustand: {
      singleton: true,
      eager: false,
      requiredVersion: dependencies.zustand,
    },
    immer: {
      singleton: true,
      eager: false,
      requiredVersion: dependencies.immer,
    },
    "@mui/material": {
      singleton: true,
      eager: false,
      requiredVersion: dependencies["@mui/material"],
    },
    "@mui/icons-material": {
      singleton: true,
      eager: false,
      requiredVersion: dependencies["@mui/icons-material"],
    },
    "@emotion/styled": {
      singleton: true,
      eager: false,
      requiredVersion: dependencies["@emotion/styled"],
    },
  };
};

module.exports = {
  createSharedDependencies,
};
