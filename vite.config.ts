import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/errorburner",
  resolve: {
    alias: {
      // Add aliases for your project directories here
      '@': '/src', // Example: Map "@" to your "src" directory
    },
  },
});
