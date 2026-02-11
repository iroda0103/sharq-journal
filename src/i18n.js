import { createI18n } from "vue-i18n";
import uz from "./locales/uz.js";
import en from "./locales/en.js";
import ru from "./locales/ru.js";

const messages = { uz, en, ru };

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "uz",
  fallbackLocale: "en",
  messages,
});

export function useLanguage() {
  const changeLanguage = (lang) => {
    i18n.global.locale.value = lang;
    localStorage.setItem("locale", lang);
  };

  return {
    currentLocale: i18n.global.locale,
    changeLanguage,
  };
}