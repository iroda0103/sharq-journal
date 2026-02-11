import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";
import "./assets/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: localStorage.getItem("theme") || "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#667eea",
          secondary: "#764ba2",
          accent: "#1b4b8a",
          error: "#ef4444",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          background: "#f8fafc",
          surface: "#ffffff",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#667eea",
          secondary: "#764ba2",
          accent: "#1b4b8a",
          error: "#ef4444",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          background: "#1D2939",
          surface: "#273144",
        },
      },
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount("#app");