import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { defineConfig } from "rollup";

import path from "node:path";
import { fileURLToPath } from "node:url";
import glob from "glob";
function bundleCss() {
  const __dirnameNew = path.dirname(fileURLToPath(import.meta.url));
  let cssConfigs = [];
  const files = glob.sync(path.resolve(__dirnameNew, "./src/styles/*.scss"));
  files.forEach((file) => {
    const reg = new RegExp(/\w+.scss/, "g");
    const filename = file.match(reg)[0];
    cssConfigs.push(
      postcss({
        include: file,
        extract: `themes/${filename}`,
        minimize: true,
        extensions: [".css"],
      })
    );
  });
  return cssConfigs;
}

export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [...bundleCss(), typescript(), json(), commonjs(), resolve()],
  },
]);
