import { ref, watch } from "vue";
import { useTheme } from "vuetify";

const isDarkMode = ref(localStorage.getItem("theme") === "dark");

export function useThemeMode() {
  const theme = useTheme();

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    theme.global.name.value = isDarkMode.value ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDarkMode.value = savedTheme === "dark";
      theme.global.name.value = savedTheme;
    }
  };

  return {
    isDarkMode,
    toggleTheme,
    initTheme,
  };
}