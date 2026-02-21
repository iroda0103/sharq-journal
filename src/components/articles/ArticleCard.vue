<template>
  <v-card class="article-card" elevation="0" @click="goToArticle">
    <v-card-text class="article-content">
      <div class="article-header">
        <v-chip color="primary" size="small" class="category-chip">
          {{ article.category }}
        </v-chip>
      </div>

      <h3 class="article-title">{{ localizedTitle }}</h3>

      <div class="article-authors">
        <v-icon size="small" color="primary">mdi-account</v-icon>
        <span>{{ article.authors }}</span>
      </div>

      <p class="article-abstract">{{ localizedAbstract }}</p>

      <div class="article-footer">
        <div class="article-stats">
          <div class="stat-item">
            <v-icon size="small">mdi-eye</v-icon>
            <span>{{ article.views }}</span>
          </div>
          <div class="stat-item">
            <v-icon size="small">mdi-heart</v-icon>
            <span>{{ article.likes }}</span>
          </div>
          <div class="stat-item">
            <v-icon size="small">mdi-download</v-icon>
            <span>{{ article.downloads }}</span>
          </div>
        </div>

        <div class="article-meta-tags">
          <v-chip
            v-for="keyword in localizedKeywords.slice(0, 3)"
            :key="keyword"
            size="x-small"
            variant="outlined"
            class="keyword-chip"
          >
            {{ keyword }}
          </v-chip>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { getLocalized } from "@/data/articles.js";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const { locale } = useI18n();

const lang = computed(() => {
  const l = locale.value;
  if (l === "ru") return "ru";
  if (l === "en") return "en";
  return "uz";
});

const localizedTitle    = computed(() => getLocalized(props.article.title,    lang.value));
const localizedAbstract = computed(() => getLocalized(props.article.abstract, lang.value));
const localizedKeywords = computed(() => {
  const kw = props.article.keywords;
  if (!kw || Array.isArray(kw)) return kw || [];
  for (const l of [lang.value, 'uz', 'ru', 'en']) {
    if (kw[l]?.length) return kw[l];
  }
  return [];
});

const goToArticle = () => {
  router.push(`/maqola/${props.article.slug}`);
};
</script>

<style scoped>
.article-card {
  border-radius: 16px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  background: rgb(var(--v-theme-surface));
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
}

.article-content {
  padding: 32px;
}

.article-header {
  margin-bottom: 16px;
}

.category-chip {
  font-weight: 700;
}

.article-title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.4;
  color: rgb(var(--v-theme-on-surface));
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


.article-authors {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.article-abstract {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.08);
  flex-wrap: wrap;
  gap: 16px;
}

.article-stats {
  display: flex;
  gap: 24px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.article-meta-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.keyword-chip {
  font-size: 11px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .article-content {
    padding: 24px;
  }

  .article-title {
    font-size: 20px;
  }

  .article-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>