<template>
  <div class="articles-view">
    <!-- Page Header -->
    <PageHeader
      :title="t('articles.pageTitle')"
      :subtitle="t('articles.pageSubtitle')"
    />

    <!-- Articles Content -->
    <section class="articles-content">
      <v-container>
        <v-row>
          <!-- Main Content -->
          <v-col cols="12" lg="8">
            <!-- Filters Bar -->
            <div class="filters-bar">
              <v-chip-group v-model="selectedFilter" color="primary">
                <v-chip value="all" filter>{{ t('articles.all') }}</v-chip>
                <v-chip value="recent" filter>{{ t('articles.recent') }}</v-chip>
                <v-chip value="popular" filter>{{ t('articles.popular') }}</v-chip>
              </v-chip-group>
              <v-select
                v-model="sortBy"
                :items="sortOptions"
                density="compact"
                variant="outlined"
                hide-details
                style="max-width: 200px"
              />
            </div>

            <!-- Articles List -->
            <div class="articles-list">
              <v-card
                v-for="article in paginatedArticles"
                :key="article.id"
                class="article-card"
                elevation="1"
                hover
              >
                <v-card-text class="article-card-body">
                  <div class="article-meta-tags">
                    <v-chip size="small" color="primary">
                      {{ t(`categories.${article.category}`) }}
                    </v-chip>
                    <v-chip size="small" variant="outlined">
                      {{ article.year }}
                    </v-chip>
                  </div>

                  <h2 class="article-title" @click="goToArticle(article.slug)">
                    {{ getLocalized(article.title, lang) }}
                  </h2>

                  <p class="article-authors">
                    <v-icon size="small">mdi-account</v-icon>
                    {{ article.authors }}
                  </p>

                  <p class="article-abstract">{{ getLocalized(article.abstract, lang) }}</p>

                  <div class="article-footer">
                    <div class="article-stats">
                      <span class="stat-item">
                        <v-icon size="small">mdi-book-open-variant</v-icon>
                        {{ article.pages }} {{ t('articles.pages') }}
                      </span>
                      <span class="stat-item">
                        <v-icon size="small">mdi-calendar</v-icon>
                        {{ article.publishDate }}
                      </span>
                      <span class="stat-item">
                        <v-icon size="small">mdi-eye</v-icon>
                        {{ article.views }}
                      </span>
                    </div>

                    <div class="article-actions">
                      <v-btn
                        size="small"
                        color="primary"
                        prepend-icon="mdi-download"
                        :href="article.file"
                        target="_blank"
                      >
                        {{ t('articles.download') }}
                      </v-btn>
                      <v-btn
                        size="small"
                        variant="outlined"
                        color="primary"
                        icon="mdi-arrow-right"
                        @click="goToArticle(article.slug)"
                      />
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </div>

            <!-- Pagination -->
            <div class="pagination-wrapper">
              <v-pagination
                v-model="page"
                :length="totalPages"
                :total-visible="5"
                color="primary"
                density="compact"
              />
            </div>
          </v-col>

          <!-- Sidebar -->
          <v-col cols="12" lg="4">
            <PageSidebar
              show-search
              show-categories
              show-years
              show-popular
              show-tags
              :categories="categories"
              :years="years"
              :popular-articles="popularArticles"
              :tags="tags"
              @search="handleSearch"
              @category-change="handleCategoryChange"
              @year-change="handleYearChange"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import PageHeader from "../components/PageHeader.vue";
import PageSidebar from "@/components/PageSidebar.vue";
import { getArticles, getLocalized } from "@/data/articles.js";

const router = useRouter();
const { t, locale } = useI18n();

const lang = computed(() => {
  const l = locale.value;
  if (l === "ru") return "ru";
  if (l === "en") return "en";
  return "uz";
});

const selectedFilter = ref('all');
const sortBy = ref('date');
const page = ref(1);
const perPage = 10;
const searchQuery = ref("");
const selectedCategory = ref("");
const selectedYear = ref("");
const allArticles = ref([]);

onMounted(async () => {
  allArticles.value = await getArticles();
});

const sortOptions = computed(() => [
  { title: t('articles.sortByDate'), value: 'date' },
  { title: t('articles.sortByViews'), value: 'views' },
  { title: t('articles.sortByTitle'), value: 'title' },
]);

const categories = computed(() => {
  const counts = {};
  allArticles.value.forEach((a) => {
    counts[a.category] = (counts[a.category] || 0) + 1;
  });
  return [
    { title: t('categories.all'), value: '', count: allArticles.value.length },
    { title: t('categories.economics'), value: 'economics', count: counts.economics || 0 },
    { title: t('categories.digitalEconomy'), value: 'digitalEconomy', count: counts.digitalEconomy || 0 },
    { title: t('categories.innovation'), value: 'innovation', count: counts.innovation || 0 },
    { title: t('categories.pedagogy'), value: 'pedagogy', count: counts.pedagogy || 0 },
    { title: t('categories.psychology'), value: 'psychology', count: counts.psychology || 0 },
    { title: t('categories.business'), value: 'business', count: counts.business || 0 },
    { title: t('categories.linguistics'), value: 'linguistics', count: counts.linguistics || 0 },
    { title: t('categories.informationSecurity'), value: 'informationSecurity', count: counts.informationSecurity || 0 },
    { title: t('categories.management'), value: 'management', count: counts.management || 0 },
    { title: t('categories.history'), value: 'history', count: counts.history || 0 },
    { title: t('categories.literature'), value: 'literature', count: counts.literature || 0 },
    { title: t('categories.engineering'), value: 'engineering', count: counts.engineering || 0 },
    { title: t('categories.sports'), value: 'sports', count: counts.sports || 0 },
  ].filter((c) => c.value === '' || c.count > 0);
});

const years = computed(() => {
  const uniqueYears = [...new Set(allArticles.value.map((a) => a.year))].sort((a, b) => b - a);
  return [t('categories.all'), ...uniqueYears];
});

const popularArticles = computed(() =>
  [...allArticles.value].sort((a, b) => b.views - a.views).slice(0, 5)
);

const tags = computed(() => {
  const allTags = allArticles.value.flatMap((a) => {
    const kw = a.keywords;
    if (!kw || Array.isArray(kw)) return kw || [];
    for (const l of [lang.value, 'uz', 'ru', 'en']) {
      if (kw[l]?.length) return kw[l];
    }
    return [];
  });
  return [...new Set(allTags)].slice(0, 10);
});

const filteredArticles = computed(() => {
  let result = [...allArticles.value];

  if (selectedCategory.value) {
    result = result.filter((a) => a.category === selectedCategory.value);
  }

  if (selectedYear.value && selectedYear.value !== t('categories.all')) {
    result = result.filter((a) => a.year === selectedYear.value);
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(
      (a) =>
        getLocalized(a.title, lang.value).toLowerCase().includes(q) ||
        a.authors.toLowerCase().includes(q) ||
        getLocalized(a.abstract, lang.value).toLowerCase().includes(q)
    );
  }

  if (selectedFilter.value === 'recent') {
    result.sort((a, b) => b.id - a.id);
  } else if (selectedFilter.value === 'popular') {
    result.sort((a, b) => b.views - a.views);
  }

  if (sortBy.value === 'views') {
    result.sort((a, b) => b.views - a.views);
  } else if (sortBy.value === 'title') {
    result.sort((a, b) =>
      getLocalized(a.title, lang.value).localeCompare(getLocalized(b.title, lang.value))
    );
  }

  return result;
});

const totalPages = computed(() => Math.ceil(filteredArticles.value.length / perPage));
const paginatedArticles = computed(() => {
  const start = (page.value - 1) * perPage;
  return filteredArticles.value.slice(start, start + perPage);
});

const goToArticle = (slug) => {
  router.push(`/maqola/${slug}`);
};

const handleSearch = (query) => {
  searchQuery.value = query;
  page.value = 1;
};

const handleCategoryChange = (category) => {
  selectedCategory.value = category;
  page.value = 1;
};

const handleYearChange = (year) => {
  selectedYear.value = year;
  page.value = 1;
};
</script>

<style scoped>
.articles-view {
  background-color: rgb(var(--v-theme-surface));
  min-height: 100vh;
   padding-top: 90px;
}


.articles-content {
  padding: 32px 0;
}

.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 20px;
  background: rgb(var(--v-theme-surface));
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}


.articles-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  transition: all 0.3s ease;
}


.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: rgba(27, 75, 138, 0.3);
}

.article-card-body {
  padding: 20px !important;
}

.article-meta-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.article-title {
  font-size: 20px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 10px;
  line-height: 1.4;
  cursor: pointer;
  transition: color 0.2s;
}


.article-title:hover {
  color: #1b4b8a;
}


.article-authors {
  font-size: 14px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.article-abstract {
  font-size: 15px;
  color: rgba(var(--v-theme-on-surface), 0.7);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}


.article-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.article-actions {
  display: flex;
  gap: 8px;
}

.pagination-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

@media (max-width: 960px) {
  .filters-bar {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .article-footer {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .article-actions {
    justify-content: stretch;
  }

  .article-actions .v-btn {
    flex: 1;
  }
}

@media (max-width: 600px) {
  .articles-content {
    padding: 24px 0;
  }

  .article-card-body {
    padding: 16px !important;
  }

  .article-title {
    font-size: 18px;
  }
}
</style>