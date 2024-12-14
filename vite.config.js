import path from "node:path";
import { fileURLToPath, URL } from "node:url";

import { globSync } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { peerDependencies } from "./package.json";

const input = Object.fromEntries(
  globSync("src/**/*.tsx").map((file) => {
    const entry = path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length),
    );

    const url = fileURLToPath(new URL(file, import.meta.url));

    return [entry, url];
  }),
);

const config = defineConfig({
  plugins: [dts({ tsconfigPath: "./tsconfig.json" })],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(import.meta.dirname, "src/index.tsx"),
      formats: ["es"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      input,
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});

export default config;
