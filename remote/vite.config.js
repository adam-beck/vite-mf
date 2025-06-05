import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
	plugins: [
		react({ reactRefreshHost: "http://localhost:5000" }),
		federation({
			name: "remote",
			filename: "remoteEntry.js",
			exposes: {
				"./Button": "./src/Button.jsx",
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
		}),
	],
	server: {
		port: 5001,
		strictPort: true,
		cors: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
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
