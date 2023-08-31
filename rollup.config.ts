import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import postcss from "rollup-plugin-postcss";
const rollupConfig = defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
  ],
  plugins: [json(), resolve(), typescript(), postcss()],
});

export default rollupConfig;
