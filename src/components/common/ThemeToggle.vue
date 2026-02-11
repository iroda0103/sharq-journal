<template>
  <v-btn
    icon
    variant="text"
    class="theme-toggle"
    @click="toggleTheme"
  >
    <v-icon class="theme-icon">
      {{ isDarkMode ? "mdi-weather-sunny" : "mdi-weather-night" }}
    </v-icon>
  </v-btn>
</template>

<script setup>
import { useThemeMode } from "../../composables/useTheme";

const { isDarkMode, toggleTheme } = useThemeMode();
</script>

<style scoped>
.theme-toggle {
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: rotate(20deg) scale(1.1);
}

.theme-icon {
  transition: all 0.3s ease;
}
</style>