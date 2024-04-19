// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    awsAmplify: {
      // catchAllStaticFallback: true,
      // imageOptimization: { "/_image", cacheControl: "public, max-age=3600, immutable" },
      // imageSettings: { ... },
    }
  }
})
