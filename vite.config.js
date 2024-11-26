import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { peerDependencies } from "./package.json";

const config = defineConfig({
  plugins: [dts({})],
  build: {
    lib: {
      entry: "./src/index.tsx",
      formats: ["es"],
    },
    rollupOptions: {
      external: [peerDependencies.react, peerDependencies["react-dom"]],
    },
  },
});

export default config;
