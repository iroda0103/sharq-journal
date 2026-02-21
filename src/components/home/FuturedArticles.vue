<template>
  <section class="featured-articles-section">
    <v-container>
      <div class="section-header">
        <h2 class="section-title">{{ t('home.latestArticles') }}</h2>
        <v-btn to="/maqolalar" variant="text" color="primary" size="large" class="view-all-btn"
          append-icon="mdi-arrow-right">
          {{ t('home.viewAll') }}
        </v-btn>
      </div>

      <v-row class="ga-2  ">
        <v-col v-for="article in articles" :key="article.id" class="d-flex flex-grow-1 article-col">
          <v-card class="featured-article-card w-100" @click="goToArticle(article.slug)" elevation="2" hover>
            <v-card-text class="pa-6">
              <v-chip color="primary" size="small" class="mb-4">
                {{ t(`categories.${article.category}`) }}
              </v-chip>

              <h3 class="article-title mb-3">{{ getLocalized(article.title, lang) }}</h3>

              <div class="article-authors mb-3">
                <v-icon size="small" color="primary" class="mr-2">mdi-account</v-icon>
                <span>{{ article.authors }}</span>
              </div>

              <p class="article-abstract">{{ replaceText(getLocalized(article.abstract, lang)) }}</p>

              <v-divider class="my-4"></v-divider>

              <div class="article-footer">
                <div class="article-stats">
                  <div class="stat">
                    <v-icon size="small">mdi-eye</v-icon>
                    <span>{{ article.views }}</span>
                  </div>
                  <div class="stat">
                    <v-icon size="small">mdi-download</v-icon>
                    <span>{{ article.downloads }}</span>
                  </div>
                </div>

                <v-btn icon="mdi-arrow-right" variant="text" color="primary" size="small"
                  @click.stop="goToArticle(article.slug)"></v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { getFeaturedArticles, getLocalized } from "@/data/articles.js";

const router = useRouter();
const { t, locale } = useI18n();

const lang = computed(() => {
  const l = locale.value;
  if (l === "ru") return "ru";
  if (l === "en") return "en";
  return "uz";
});

const articles = ref([]);

onMounted(async () => {
  articles.value = await getFeaturedArticles(4);
});
const replaceText = ((txt) => {
  if (!txt || typeof txt !== 'string') return '';
  return (txt.length < 130) ? txt : (txt.slice(0, 130) + '...');
});

const goToArticle = (slug) => {
  router.push(`/maqola/${slug}`);
};
</script>
<style scoped>
.featured-articles-section {
  padding: 100px 0;
  background: rgb(var(--v-theme-background));
}

.article-col {
  max-width: 50%;
  min-width: 40%;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 64px;
  gap: 32px;
}

.section-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.view-all-btn {
  text-transform: none;
  font-weight: 700;
}

.featured-article-card {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  width: 100%;
  /* max-width: 30%; */
}

.featured-article-card:hover {
  transform: translateY(-8px);
}

.article-title {
  font-size: 20px;
  font-weight: 800;
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
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.article-abstract {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(var(--v-theme-on-surface), 0.6);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-stats {
  display: flex;
  gap: 20px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

@media (max-width: 960px) {
  .featured-articles-section {
    padding: 80px 0;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 48px;
  }
}

@media (max-width: 600px) {
  .featured-articles-section {
    padding: 60px 0;
  }

  .article-title {
    font-size: 18px;
  }
}
</style>
