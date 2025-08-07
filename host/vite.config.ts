import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:5001/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
        },
      },
      dts: {
        consumeTypes: true,
      },
    }),
  ],
  server: {
    port: 5000,
    strictPort: true,
    cors: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});

