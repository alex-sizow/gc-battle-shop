export default {
  head: {
    title: "Битва",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },

      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content: "Более 200 веселых игр для вашей вечеринки",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Битва",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Более 200 веселых игр для вашей вечеринки",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/opengraph.png",
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png",
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "830",
      },
      {
        hid: "og:height",
        property: "og:height",
        content: "356",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  css: ["./assets/scss/main.scss", "swiper/css/swiper.css"],
  styleResources: {
    scss: ["./assets/scss/mixins.scss", "./assets/scss/variables.scss"],
  },

  plugins: [
    "~/plugins/axios.js",
    {
      src: "@/plugins/v-click-outside",
      ssr: false,
    },
    "@/plugins/vue-js-modal.js",
    {
      src: "@/plugins/vue-awesome-swiper",
      ssr: false,
    },
    "@/plugins/v-mask.js",
    "@/plugins/vue-kinesis.js",
  ],

  components: ["~/components/global/"],

  buildModules: [],

  modules: [
    "@nuxtjs/svg",
    "@nuxtjs/style-resources",
    [
      "@nuxtjs/axios",
      {
        baseURL: process.env.API_BASE_URL,
        proxyHeaders: false,
        credentials: false,
      },
    ],
    "vue-scrollto/nuxt",
    "cookie-universal-nuxt",
    [
      "@nuxtjs/gtm",
      {
        id: "GTM-WDD8P94",
      },
    ],
    "@nuxt/content",
    "@nuxtjs/proxy",
  ],
  content: {
    documentDriven: true,
  },
  axios: {
    baseURL: process.env.API_BASE_URL,
    proxyHeaders: false,
    credentials: false,
  },
  env: {
    baseApi: process.env.API_BASE_URL,
  },

  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ],
    },
  },
};
