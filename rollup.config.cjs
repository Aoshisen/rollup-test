const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const path = require("path");
path.resolve(__dirname, "dist");

exports.default = {
  input: "src/index.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [typescript(), json(), postcss(), commonjs(), resolve()],
};
