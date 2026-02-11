<template>
  <div class="quick-links">
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="quick-link"
    >
      <v-icon size="small">mdi-chevron-right</v-icon>
      {{ link.label }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const links = computed(() => [
  { label: t("nav.home"), path: "/" },
  { label: t("nav.publications"), path: "/nashrlar" },
  { label: t("nav.articles"), path: "/maqolalar" },
  { label: t("nav.editorial"), path: "/tahririyat" },
  { label: t("nav.about"), path: "/jurnal-haqida" },
  { label: t("nav.submit"), path: "/submit" },
]);
</script>

<style scoped>
.quick-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
  opacity: 0.9;
}

.quick-link:hover {
  opacity: 1;
  transform: translateX(5px);
}
</style>