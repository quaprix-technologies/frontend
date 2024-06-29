/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import environment from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    environment([
      "VITE_BASE_URL",
      "VITE_APP_CONTACT_FORM_EMAIL_RECEIVER",
      "VITE_APP_CAREERS_FORM_EMAIL_RECEIVER",
      "VITE_APP_CLOUDINARY_CLOUD_NAME",
    ]),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
  },
});
