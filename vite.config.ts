import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: "production", // Menentukan mode (development atau production)
      registerType: "autoUpdate", // Service worker otomatis diupdate saat ada versi baru
      devOptions: {
        enabled: true, // Aktifkan PWA di mode development
      },
      manifest: {
        name: "PURT Kabupaten karo",
        short_name: "PUTR",
        description:
          "Portal Dinas Pekerjaan Umum dan Tata Ruang Kabupaten Karo.",
        theme_color: "#000000",
        icons: [
          {
            src: "/img/logo2.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
