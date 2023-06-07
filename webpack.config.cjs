"use strict";

const path = require("path");

module.exports = {
  mode: "production",

  entry: "./lib/esm/index.mjs",
  
  output: {
    path: path.resolve(__dirname, "lib/umd"),
    filename: "more-money.min.js",
    library: {
      name: "moreMoney",
      type: "umd",
    },
  },
};
