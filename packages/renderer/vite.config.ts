import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { chrome } from "../../.electron-vendors.cache.json";
import { join } from "path";
import { builtinModules } from "module";

const PACKAGE_ROOT = __dirname;

export default defineConfig({
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      "/@/": join(PACKAGE_ROOT, "src") + "/",
    },
  },
  plugins: [react()],
  base: "",
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: "dist",
    assetsDir: ".",
    rollupOptions: {
      external: [...builtinModules],
    },
    emptyOutDir: true,
    brotliSize: false,
  },
  test: {
    environment: "happy-dom",
  },
});
