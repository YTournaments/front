import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import path from "path";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      sourcemap: true,
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,gif,svg,woff2}"],
        globDirectory: "dist",
        globIgnores: ["**/node_modules/**/*"],
        swDest: "dist/sw.js",
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Ytournaments",
        short_name: "Ytournaments",
        description: "Ytournaments",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    viteCompression(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 3000,
    host: true,
  },
  preview: {
    host: true,
  },
  build: {
    sourcemap: false,
    brotliSize: false,
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    robots: true,
    modulePreload: true,
    cssCodeSplit: true,
  },
});
