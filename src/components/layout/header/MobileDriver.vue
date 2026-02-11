<template>
  <v-navigation-drawer
    v-model="drawerModel"
    temporary
    location="right"
    width="300"
    class="mobile-drawer"
  >
    <div class="drawer-header">
      <img :src="logo" alt="Sharq University" class="drawer-logo" />
      <v-btn
        icon="mdi-close"
        variant="text"
        @click="drawerModel = false"
      />
    </div>

    <v-divider />

    <v-list class="drawer-list">
      <v-list-item
        v-for="item in navigation"
        :key="item.path"
        :to="item.path"
        class="drawer-item"
        @click="drawerModel = false"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template #append>
      <div class="drawer-footer">
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from "vue";
import logo from "@/assets/logo_sharq_blue.png";
import ThemeToggle from "../../common/ThemeToggle.vue";
import LanguageSelector from "../../common/LanguageSelector.vue";

const props = defineProps({
  modelValue: Boolean,
  navigation: Array,
});

const emit = defineEmits(["update:modelValue"]);

const drawerModel = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<style scoped>
.mobile-drawer {
  border-radius: 24px 0 0 24px;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
}

.drawer-logo {
  height: 40px;
  width: auto;
}

.drawer-list {
  padding: 16px 0;
}

.drawer-item {
  margin: 4px 8px;
  border-radius: 12px;
  font-weight: 600;
}

.drawer-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>