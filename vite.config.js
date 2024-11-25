import { defineConfig } from "vite";

const config = defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
  },
});

export default config;
