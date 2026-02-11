<template>
  <transition name="search-slide">
    <div v-if="show" class="search-bar-wrapper">
      <div class="search-bar">
        <v-text-field
          v-model="searchQuery"
          :placeholder="t('nav.search')"
          prepend-inner-icon="mdi-magnify"
          variant="solo"
          density="comfortable"
          hide-details
          autofocus
          class="search-input"
          @keyup.enter="handleSearch"
        >
          <template #append-inner>
            <v-btn
              icon="mdi-close"
              variant="text"
              size="small"
              @click="$emit('close')"
            />
          </template>
        </v-text-field>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

defineProps({
  show: Boolean,
});

const emit = defineEmits(["close"]);

const searchQuery = ref("");

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: "/maqolalar", query: { q: searchQuery.value } });
    emit("close");
    searchQuery.value = "";
  }
};
</script>

<style scoped>
.search-bar-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  padding: 24px;
  background: rgba(var(--v-theme-surface), 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 1098;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.search-bar {
  max-width: 800px;
  margin: 0 auto;
}

.search-input :deep(.v-field) {
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.search-input :deep(.v-field__input) {
  font-size: 16px;
  padding: 8px 0;
}

.search-slide-enter-active,
.search-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.search-slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@media (max-width: 600px) {
  .search-bar-wrapper {
    top: 70px;
    padding: 16px;
  }
}
</style>