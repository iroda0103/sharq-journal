<template>
  <div class="article-detail-view">
    <!-- Not Found State -->
    <template v-if="articleNotFound">
      <PageHeader :title="t('notFound.articleNotFound')" />
      <section class="not-found-content">
        <v-container>
          <div class="not-found-center">
            <div class="error-code">404</div>
            <v-icon size="120" color="primary" class="mb-6">mdi-file-search-outline</v-icon>
            <h2 class="not-found-title">{{ t('notFound.articleNotFound') }}</h2>
            <p class="not-found-text">{{ t('notFound.articleNotFoundDesc') }}</p>
            <div class="not-found-actions">
              <v-btn
                color="primary"
                size="large"
                prepend-icon="mdi-home"
                :to="{ name: 'home' }"
              >
                {{ t('notFound.goHome') }}
              </v-btn>
              <v-btn
                variant="outlined"
                color="primary"
                size="large"
                prepend-icon="mdi-file-document-multiple"
                :to="{ name: 'articles' }"
              >
                {{ t('notFound.goArticles') }}
              </v-btn>
            </div>
          </div>
        </v-container>
      </section>
    </template>

    <!-- Normal Article View -->
    <template v-else>
    <PageHeader
      :title="article.title"
    />

    <!-- Article Content -->
    <section class="article-content">
      <v-container>
        <!-- Back Button -->
        <v-btn
          variant="text"
          prepend-icon="mdi-arrow-left"
          class="back-btn mb-4"
          @click="$router.back()"
        >
          {{ t('articleDetail.back') }}
        </v-btn>

        <v-row>
          <!-- Main Content -->
          <v-col cols="12" lg="8">
            <!-- Article Meta -->
            <div class="article-meta-bar">
              <v-chip size="small" color="primary">
                {{ t(`categories.${article.category}`) }}
              </v-chip>
              <div class="meta-stats">
                <span class="stat-item">
                  <v-icon size="small">mdi-eye</v-icon>
                  {{ article.views }}
                </span>
                <span class="stat-item">
                  <v-icon size="small">mdi-heart</v-icon>
                  {{ article.likes }}
                </span>
                <span class="stat-item">
                  <v-icon size="small">mdi-download</v-icon>
                  {{ article.downloads }}
                </span>
              </div>
            </div>

            <!-- Content Card -->
            <v-card class="content-card" elevation="1">
              <v-card-text class="content-body">
                <!-- Authors -->
                <div class="content-section">
                  <h2 class="section-heading">{{ t('articleDetail.authors') }}</h2>
                  <div class="authors-list">
                    <div class="author-item">
                      <v-icon color="primary">mdi-account-circle</v-icon>
                      <span>{{ article.authors }}</span>
                    </div>
                  </div>
                </div>

                <!-- Abstract -->
                <div class="content-section">
                  <h2 class="section-heading">{{ t('articleDetail.abstract') }}</h2>
                  <p class="section-text">{{ article.abstract }}</p>
                </div>

                <!-- Keywords -->
                <div class="content-section">
                  <h2 class="section-heading">{{ t('articleDetail.keywords') }}</h2>
                  <div class="keywords-list">
                    <v-chip
                      v-for="keyword in article.keywords"
                      :key="keyword"
                      size="small"
                      color="primary"
                      variant="outlined"
                    >
                      {{ keyword }}
                    </v-chip>
                  </div>
                </div>

                <!-- Language & DOI -->
                <div class="content-section">
                  <v-row>
                    <v-col cols="12" md="6">
                      <h2 class="section-heading">{{ t('articleDetail.language') }}</h2>
                      <p class="section-text">{{ article.language }}</p>
                    </v-col>
                    <v-col cols="12" md="6" v-if="article.doi">
                      <h2 class="section-heading">{{ t('articleDetail.doi') }}</h2>
                      <p class="section-text">{{ article.doi }}</p>
                    </v-col>
                  </v-row>
                </div>

                <!-- PDF Preview -->
                <div class="content-section mb-0">
                  <h2 class="section-heading">{{ t('articleDetail.articlePdf') }}</h2>
                  <div class="pdf-preview">
                    <v-icon size="60" color="primary">mdi-file-document</v-icon>
                    <p>{{ t('articleDetail.pdfDownloadHint') }}</p>
                    <v-btn
                      color="primary"
                      size="large"
                      prepend-icon="mdi-download"
                      :href="article.file"
                      target="_blank"
                    >
                      {{ t('articleDetail.downloadFile') }}
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Sidebar -->
          <v-col cols="12" lg="4">
            <div class="sidebar-sticky">
              <!-- Info Card -->
              <v-card class="info-card" elevation="1">
                <v-card-text class="info-card-body">
                  <h3 class="info-card-title">
                    <v-icon size="small" color="primary">mdi-information</v-icon>
                    {{ t('articleDetail.info') }}
                  </h3>
                  <div class="info-items">
                    <div class="info-item" v-if="article.doi">
                      <span class="info-label">DOI</span>
                      <a :href="`https://doi.org/${article.doi}`" target="_blank" class="info-value doi-link">{{ article.doi }}</a>
                    </div>
                    <div class="info-item">
                      <span class="info-label">ISSN</span>
                      <span class="info-value">{{ journalConfig.issn }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Volume / Issue</span>
                      <span class="info-value">Vol. {{ article.volume }}, No. {{ article.issue }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">{{ t('articleDetail.pagesLabel') }}</span>
                      <span class="info-value">{{ article.pages }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">{{ t('articleDetail.languageLabel') }}</span>
                      <span class="info-value">{{ article.language }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">{{ t('articleDetail.categoryLabel') }}</span>
                      <span class="info-value">{{ t(`categories.${article.category}`) }}</span>
                    </div>
                  </div>

                  <v-divider class="my-3" />

                  <div class="action-btns">
                    <v-btn
                      color="primary"
                      block
                      size="small"
                      prepend-icon="mdi-download"
                      :href="article.file"
                      target="_blank"
                    >
                      {{ t('articleDetail.download') }}
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      color="primary"
                      block
                      size="small"
                      prepend-icon="mdi-share-variant"
                    >
                      {{ t('articleDetail.share') }}
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Related Articles -->
              <v-card class="related-card" elevation="1">
                <v-card-text class="related-card-body">
                  <h3 class="related-card-title">
                    <v-icon size="small" color="primary">mdi-file-document-multiple</v-icon>
                    {{ t('articleDetail.relatedArticles') }}
                  </h3>
                  <div class="related-list">
                    <div
                      v-for="related in relatedArticles"
                      :key="related.id"
                      class="related-item"
                      @click="goToArticle(related.slug)"
                    >
                      <h4 class="related-title">{{ related.title }}</h4>
                      <p class="related-authors">{{ related.authors }}</p>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/PageHeader.vue";
import { getArticleBySlug, getRelatedArticles, journalConfig } from "@/data/articles.js";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const articleNotFound = ref(false);

const article = ref({
  id: 0,
  title: "",
  authors: "",
  category: "",
  abstract: "",
  views: 0,
  likes: 0,
  downloads: 0,
  pages: "",
  language: "",
  keywords: [],
  file: "",
});

const relatedArticles = ref([]);

const setMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const updateMetaTags = (data) => {
  document.title = `${data.title} | ${journalConfig.title}`;
  const pageUrl = window.location.href;
  const [firstPage, lastPage] = (data.pages || '').split('-');

  // Asosiy SEO meta taglar
  setMeta('name', 'description', data.abstract);
  setMeta('name', 'keywords', (data.keywords || []).join(', '));
  setMeta('name', 'author', data.authors);

  // Open Graph
  setMeta('property', 'og:title', data.title);
  setMeta('property', 'og:description', data.abstract);
  setMeta('property', 'og:type', 'article');
  setMeta('property', 'og:url', pageUrl);

  // Google Scholar / Crossref citation meta taglar
  setMeta('name', 'citation_title', data.title);
  setMeta('name', 'citation_author', data.authors);
  setMeta('name', 'citation_publication_date', data.publishDate);
  setMeta('name', 'citation_journal_title', journalConfig.title);
  setMeta('name', 'citation_issn', journalConfig.issn);
  setMeta('name', 'citation_volume', String(data.volume || ''));
  setMeta('name', 'citation_issue', String(data.issue || ''));
  setMeta('name', 'citation_firstpage', firstPage);
  setMeta('name', 'citation_lastpage', lastPage);
  setMeta('name', 'citation_language', data.language);
  if (data.doi) {
    setMeta('name', 'citation_doi', data.doi);
  }
  if (data.file) {
    setMeta('name', 'citation_pdf_url', `${journalConfig.siteUrl}${data.file}`);
  }

  // JSON-LD Structured Data (Schema.org) - Google uchun
  let jsonLd = document.querySelector('script[data-article-jsonld]');
  if (!jsonLd) {
    jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.setAttribute('data-article-jsonld', 'true');
    document.head.appendChild(jsonLd);
  }
  jsonLd.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": data.title,
    "author": { "@type": "Person", "name": data.authors },
    "datePublished": data.publishDate,
    "description": data.abstract,
    "keywords": (data.keywords || []).join(', '),
    "inLanguage": data.language,
    "pageStart": firstPage,
    "pageEnd": lastPage,
    "isPartOf": {
      "@type": "PublicationIssue",
      "issueNumber": data.issue,
      "isPartOf": {
        "@type": "PublicationVolume",
        "volumeNumber": data.volume,
        "isPartOf": {
          "@type": "Periodical",
          "name": journalConfig.title,
          "issn": journalConfig.issn,
          "publisher": { "@type": "Organization", "name": journalConfig.publisher }
        }
      }
    },
    "url": pageUrl,
    ...(data.doi ? { "identifier": { "@type": "PropertyValue", "propertyID": "DOI", "value": data.doi } } : {})
  });
};

const loadArticle = async (slug) => {
  const data = await getArticleBySlug(slug);
  if (data) {
    articleNotFound.value = false;
    article.value = data;
    updateMetaTags(data);
    relatedArticles.value = await getRelatedArticles(data.id);
  } else {
    articleNotFound.value = true;
  }
};

const goToArticle = (slug) => {
  router.push(`/maqola/${slug}`);
};

onMounted(() => {
  loadArticle(route.params.slug);
});

watch(() => route.params.slug, (newSlug) => {
  if (newSlug) loadArticle(newSlug);
});
</script>

<style scoped>
.article-detail-view {
  background-color: rgb(var(--v-theme-surface));
  min-height: 100vh;
   padding-top: 90px;
}


.article-content {
  padding: 32px 0;
}

.back-btn {
  text-transform: none;
  font-weight: 600;
}

.article-meta-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: rgb(var(--v-theme-surface));
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  margin-bottom: 20px;
}


.meta-stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.content-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}


.content-body {
  padding: 24px !important;
}

.content-section {
  margin-bottom: 28px;
}

.section-heading {
  font-size: 18px;
  font-weight: 700;
  color: #1b4b8a;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #1b4b8a;
  display: inline-block;
}

.section-text {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(var(--v-theme-on-surface), 0.7);
}


.authors-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.author-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
}


.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pdf-preview {
  text-align: center;
  padding: 40px 20px;
  background: rgb(var(--v-theme-surface));
  border-radius: 12px;
  border: 2px dashed rgba(var(--v-theme-on-surface), 0.1);
}


.pdf-preview p {
  margin: 16px 0 20px;
  font-size: 14px;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.sidebar-sticky {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card,
.related-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}


.info-card-body,
.related-card-body {
  padding: 20px !important;
}

.info-card-title,
.related-card-title {
  font-size: 16px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}


.info-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.info-label {
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.info-value {
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.doi-link {
  color: #1b4b8a;
  text-decoration: none;
  word-break: break-all;
}

.doi-link:hover {
  text-decoration: underline;
}


.action-btns {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.related-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.related-item {
  padding: 12px;
  border-radius: 8px;
  background: rgba(var(--v-theme-on-surface), 0.02);
  cursor: pointer;
  transition: all 0.2s;
}


.related-item:hover {
  background: rgba(27, 75, 138, 0.1);
  transform: translateX(4px);
}

.related-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  line-height: 1.4;
  color: rgb(var(--v-theme-on-surface));
}


.related-authors {
  font-size: 12px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin: 0;
}

.not-found-content {
  padding: 60px 0;
}

.not-found-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.error-code {
  font-size: 140px;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.not-found-title {
  font-size: 24px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 12px;
}

.not-found-text {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin-bottom: 32px;
}

.not-found-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 1264px) {
  .sidebar-sticky {
    position: relative;
    top: 0;
  }
}

@media (max-width: 600px) {
  .article-content {
    padding: 24px 0;
  }

  .content-body {
    padding: 16px !important;
  }

  .article-meta-bar {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .meta-stats {
    gap: 16px;
  }
}
</style>