<template>
  <div class="publication-detail-view">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <v-btn
          to="/nashrlar"
          variant="text"
          prepend-icon="mdi-arrow-left"
          class="back-btn"
        >
          {{ t('nav.publications') }}
        </v-btn>
      </v-container>
    </section>

    <!-- Main Layout: Content (left) + Sidebar (right) -->
    <section class="main-section">
      <v-container>
        <v-row class="content-row">
          <!-- Main Content -->
          <v-col cols="12" lg="8">
            <!-- PDF Reader -->
            <div ref="readerSection" class="pdf-viewer">
              <iframe
                v-if="publication.file"
                :src="`${publication.file}#toolbar=0&navpanes=0&scrollbar=0`"
                loading="lazy"
              />
            </div>

            <!-- Articles List -->
            <div class="articles-block">
              <h2 class="section-title">{{ t('publications.articlesList') }}</h2>
              <div class="articles-list">
                <ArticleCard
                  v-for="article in articles"
                  :key="article.id"
                  :article="article"
                />
              </div>
            </div>
          </v-col>

          <!-- Sidebar (RIGHT - sticky) -->
          <v-col cols="12" lg="4">
            <div class="sidebar-sticky">
              <!-- Cover -->
              <!-- <div class="cover-wrapper">
                <img
                  :src="publication.cover"
                  :alt="publication.title"
                  class="cover-image"
                />
              </div> -->

              <!-- Info Card -->
              <v-card class="info-card" elevation="1">
                <v-card-text class="info-card-body">
                  <h2 class="publication-title">{{ publication.title }}</h2>

                  <div class="info-items">
                    <div class="info-item">
                      <v-icon size="small" color="primary">mdi-calendar</v-icon>
                      <span class="info-label">{{ t('publications.publishDate') }}</span>
                      <span class="info-value">{{ publication.date }}</span>
                    </div>
                    <div class="info-item">
                      <v-icon size="small" color="primary">mdi-file-document</v-icon>
                      <span class="info-label">{{ t('publications.pageCount') }}</span>
                      <span class="info-value">{{ publication.pages }}</span>
                    </div>
                    <div class="info-item">
                      <v-icon size="small" color="primary">mdi-text-box-multiple</v-icon>
                      <span class="info-label">{{ t('publications.articleCount') }}</span>
                      <span class="info-value">{{ publication.articlesCount }}</span>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Stats -->
                  <div class="publication-stats">
                    <div class="stat-item">
                      <v-icon size="small">mdi-eye</v-icon>
                      <span>{{ publication.views }}</span>
                    </div>
                    <div class="stat-item">
                      <v-icon size="small">mdi-heart</v-icon>
                      <span>{{ publication.likes }}</span>
                    </div>
                    <div class="stat-item">
                      <v-icon size="small">mdi-download</v-icon>
                      <span>{{ publication.downloads }}</span>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <!-- Action Buttons -->
                  <div class="action-buttons">
                    <v-btn
                      color="primary"
                      block
                      prepend-icon="mdi-download"
                      :href="publication.file"
                      target="_blank"
                    >
                      {{ t('publications.download') }}
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      color="primary"
                      block
                      prepend-icon="mdi-bookmark"
                      @click="scrollToReader"
                    >
                      {{ t('publications.read') }}
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import ArticleCard from "@/components/articles/ArticleCard.vue";
import { getPublicationById } from "@/data/publications.js";
import { getArticles } from "@/data/articles.js";

const { t } = useI18n();
const route = useRoute();

const readerSection = ref(null);

const scrollToReader = () => {
  readerSection.value?.scrollIntoView({ behavior: "smooth" });
};

const publication = ref({
  id: 0,
  title: "",
  date: "",
  pages: 0,
  articlesCount: 0,
  views: 0,
  likes: 0,
  downloads: 0,
  cover: "",
  file: "",
  issn: "",
});

const articles = ref([]);

onMounted(async () => {
  const pubs = await getPublicationById(route.params.id || 1);
  if (pubs) {
    publication.value = pubs;
  }
  articles.value = await getArticles();
});
</script>

<style scoped>
.publication-detail-view {
  background-color: rgb(var(--v-theme-surface));
  min-height: 100vh;
  padding-top: 90px;
}

/* Page Header */
.page-header {
  padding: 24px 0 8px;
}

.back-btn {
  text-transform: none;
  font-weight: 600;
}

/* Main Section */
.main-section {
  padding: 16px 0 60px;
}


/* PDF Viewer */
.pdf-viewer {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
  background: rgb(var(--v-theme-surface));
  margin-bottom: 40px;
}

.pdf-viewer iframe {
  width: 100%;
  height: 70vh;
  min-height: 500px;
  display: block;
  border: none;
}

/* Articles Block */
.articles-block {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 24px;
  color: rgb(var(--v-theme-on-surface));
  position: relative;
  padding-bottom: 12px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Sidebar */
.sidebar-sticky {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 16px;
}

.cover-wrapper {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.cover-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Info Card */
.info-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}

.info-card-body {
  padding: 20px !important;
}

.publication-title {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 16px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.info-label {
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-weight: 600;
}

.info-value {
  margin-left: auto;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.publication-stats {
  display: flex;
  justify-content: space-around;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-buttons .v-btn {
  text-transform: none;
  font-weight: 700;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 1264px) {
  .sidebar-sticky {
    position: relative;
    top: 0;
    padding-left: 0;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cover-wrapper {
    flex: 0 0 200px;
  }

  .info-card {
    flex: 1;
    min-width: 280px;
  }
}

@media (max-width: 600px) {
  .sidebar-sticky {
    flex-direction: column;
  }

  .cover-wrapper {
    flex: none;
  }

  .pdf-viewer iframe {
    height: 50vh;
    min-height: 350px;
  }

  .sidebar-sticky {
    padding-left: 0;
  }
}
</style>
