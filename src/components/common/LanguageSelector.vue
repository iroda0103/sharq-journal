<template>
  <v-menu offset-y>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
        class="language-btn"
      >
        <v-icon left>mdi-web</v-icon>
        <span class="d-none d-md-inline">{{ currentLang.label }}</span>
        <v-icon right size="small">mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list class="language-menu">
      <v-list-item
        v-for="lang in languages"
        :key="lang.code"
        :active="currentLocale === lang.code"
        @click="changeLanguage(lang.code)"
      >
        <template #prepend>
          <span class="flag-icon">{{ lang.flag }}</span>
        </template>
        <v-list-item-title>{{ lang.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { computed } from "vue";
import { useLanguage } from "@/i18n";

const { currentLocale, changeLanguage } = useLanguage();

const languages = [
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

const currentLang = computed(() => {
  return languages.find((lang) => lang.code === currentLocale.value) || languages[0];
});
</script>

<style scoped>
.language-btn {
  text-transform: none;
  font-weight: 600;
}

.language-menu {
  min-width: 180px;
  border-radius: 12px;
}

.flag-icon {
  font-size: 20px;
  margin-right: 8px;
}
</style>