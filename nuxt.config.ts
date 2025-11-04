import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxt/eslint", "@nuxt/content", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    dir: "~/assets/landing",
    provider: "ipx",
  },
});
