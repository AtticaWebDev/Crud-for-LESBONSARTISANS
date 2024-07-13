// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  // Autres configurations...
  extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
});
