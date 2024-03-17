// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  image: {
    format: ["webp"],
  },
  app: {
    head: {
      title: "Whitepace",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Whitepace, SaaS Landing Page Application",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [300, 400, 500, 600, 700],
        },
        display: "swap",
      },
    ],
    "@nuxt/image",
  ],
});
