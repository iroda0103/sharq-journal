<template>
  <div class="page-sidebar">
    <!-- Search Widget -->
    <!-- <v-card class="sidebar-card" elevation="1" v-if="showSearch">
      <v-card-text class="sidebar-card-body">
        <h3 class="sidebar-title">
          <v-icon size="small" color="primary">mdi-magnify</v-icon>
          Qidirish
        </h3>
        <v-text-field
          v-model="searchQuery"
          placeholder="Qidirish..."
          variant="outlined"
          density="compact"
          hide-details
          prepend-inner-icon="mdi-magnify"
          @input="$emit('search', searchQuery)"
        />
      </v-card-text>
    </v-card> -->

    <!-- Categories Widget -->
    <v-card class="sidebar-card" elevation="1" v-if="showCategories">
      <v-card-text class="sidebar-card-body">
        <h3 class="sidebar-title">
          <v-icon size="small" color="primary">mdi-shape</v-icon>
          {{ t('sidebar.categories') }}
        </h3>
        <div class="category-list">
          <div
            v-for="category in categories"
            :key="category.value"
            class="category-item"
            :class="{ active: selectedCategory === category.value }"
            @click="$emit('category-change', category.value)"
          >
            <span>{{ category.title }}</span>
            <v-chip size="x-small" variant="flat">{{ category.count }}</v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Years Filter -->
    <v-card class="sidebar-card" elevation="1" v-if="showYears">
      <v-card-text class="sidebar-card-body">
        <h3 class="sidebar-title">
          <v-icon size="small" color="primary">mdi-calendar</v-icon>
          {{ t('sidebar.years') }}
        </h3>
        <v-select
          v-model="selectedYear"
          :items="years"
          variant="outlined"
          density="compact"
          hide-details
          @update:model-value="$emit('year-change', selectedYear)"
        />
      </v-card-text>
    </v-card>

    <!-- Popular Articles -->
    <v-card class="sidebar-card" elevation="1" v-if="showPopular">
      <v-card-text class="sidebar-card-body">
        <h3 class="sidebar-title">
          <v-icon size="small" color="primary">mdi-fire</v-icon>
          {{ t('sidebar.popularArticles') }}
        </h3>
        <div class="popular-list">
          <div
            v-for="article in popularArticles"
            :key="article.id"
            class="popular-item"
            @click="$emit('article-click', article.id)"
          >
            <h4 class="popular-title">{{ article.title }}</h4>
            <div class="popular-meta">
              <v-icon size="x-small">mdi-eye</v-icon>
              <span>{{ article.views }}</span>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Tags -->
    <v-card class="sidebar-card" elevation="1" v-if="showTags">
      <v-card-text class="sidebar-card-body">
        <h3 class="sidebar-title">
          <v-icon size="small" color="primary">mdi-tag-multiple</v-icon>
          {{ t('sidebar.tags') }}
        </h3>
        <div class="tags-list">
          <v-chip
            v-for="tag in tags"
            :key="tag"
            size="small"
            variant="outlined"
            color="primary"
            class="tag-chip"
            @click="$emit('tag-click', tag)"
          >
            {{ tag }}
          </v-chip>
        </div>
      </v-card-text>
    </v-card>

    <!-- Contact Info -->
    <v-card class="sidebar-card contact-card" elevation="1" v-if="showContact">
      <v-card-text class="sidebar-card-body">
        <h3 class="sidebar-title">
          <v-icon size="small" color="primary">mdi-information</v-icon>
          {{ t('sidebar.contact') }}
        </h3>
        <div class="contact-list">
          <div class="contact-item">
            <v-icon size="small" color="primary">mdi-email</v-icon>
            <span>journal@sharqedu.uz</span>
          </div>
          <div class="contact-item">
            <v-icon size="small" color="primary">mdi-phone</v-icon>
            <span>+998 (90) 123-45-67</span>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  showSearch: { type: Boolean, default: false },
  showCategories: { type: Boolean, default: false },
  showYears: { type: Boolean, default: false },
  showPopular: { type: Boolean, default: false },
  showTags: { type: Boolean, default: false },
  showContact: { type: Boolean, default: true },
  categories: { type: Array, default: () => [] },
  years: { type: Array, default: () => [] },
  popularArticles: { type: Array, default: () => [] },
  tags: { type: Array, default: () => [] },
  selectedCategory: { type: String, default: '' },
});

defineEmits(['search', 'category-change', 'year-change', 'article-click', 'tag-click']);

const searchQuery = ref('');
const selectedYear = ref('Hammasi');
</script>

<style scoped>
.page-sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}


.sidebar-card-body {
  padding: 20px !important;
}

.sidebar-title {
  font-size: 16px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}


.category-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: rgba(var(--v-theme-on-surface), 0.02);
}


.category-item:hover {
  background: rgba(27, 75, 138, 0.1);
  transform: translateX(4px);
}

.category-item.active {
  background: rgba(27, 75, 138, 0.15);
  font-weight: 600;
}

.popular-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.popular-item {
  cursor: pointer;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}


.popular-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.popular-item:hover .popular-title {
  color: #1b4b8a;
}


.popular-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 8px;
  transition: color 0.2s;
}

.popular-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-chip {
  cursor: pointer;
}

.contact-card {
  background: linear-gradient(135deg, rgba(27, 75, 138, 0.05) 0%, rgba(44, 62, 80, 0.05) 100%);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

@media (max-width: 1264px) {
  .page-sidebar {
    position: relative;
    top: 0;
  }
}
</style>