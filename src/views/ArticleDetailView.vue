<template>
  <div class="article-detail-view">
    <!-- Breadcrumbs -->
    <section class="breadcrumbs-section">
      <div>
        <v-btn
          variant="text"
          prepend-icon="mdi-arrow-left"
          class="back-btn"
          @click="$router.back()"
        >
          Orqaga qaytish
        </v-btn>
      </div>
    </section>

    <!-- Article Header -->
    <section class="article-header-section">
      <div>
        <div class="article-header">
          <v-chip color="primary" size="small" class="category-badge">
            {{ article.category }}
          </v-chip>

          <h1 class="article-title">{{ article.title }}</h1>

          <div class="article-meta-bar">
            <div class="meta-stats">
              <div class="stat-item">
                <v-icon>mdi-eye</v-icon>
                <span>{{ article.views }}</span>
              </div>
              <div class="stat-item">
                <v-icon>mdi-heart</v-icon>
                <span>{{ article.likes }}</span>
              </div>
              <div class="stat-item">
                <v-icon>mdi-download</v-icon>
                <span>{{ article.downloads }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="article-content-section">
      <div>
        <v-row>
          <!-- Main Content -->
          <v-col cols="12" lg="8">
            <v-card class="content-card" elevation="0">
              <v-card-text class="content-body">
                <!-- Mualliflar -->
                <div class="section-block">
                  <h2 class="section-heading">Muallif(lar)</h2>
                  <div class="authors-list">
                    <div class="author-item">
                      <v-icon color="primary">mdi-account-circle</v-icon>
                      <span>{{ article.authors }}</span>
                    </div>
                  </div>
                </div>

                <!-- Annotatsiya -->
                <div class="section-block">
                  <h2 class="section-heading">Annotatsiya</h2>
                  <p class="section-text">{{ article.abstract }}</p>
                </div>

                <!-- Kalit so'zlar -->
                <div class="section-block">
                  <h2 class="section-heading">Kalit so'zlar</h2>
                  <div class="keywords-list">
                    <v-chip
                      v-for="keyword in article.keywords"
                      :key="keyword"
                      color="primary"
                      variant="outlined"
                      size="small"
                    >
                      {{ keyword }}
                    </v-chip>
                  </div>
                </div>

                <!-- Maqola tili -->
                <div class="section-block">
                  <h2 class="section-heading">Maqola tili</h2>
                  <p class="section-text">{{ article.language }}</p>
                </div>

                <!-- DOI -->
                <div class="section-block" v-if="article.doi">
                  <h2 class="section-heading">DOI</h2>
                  <p class="section-text">{{ article.doi }}</p>
                </div>

                <!-- PDF Viewer -->
                <div class="section-block">
                  <h2 class="section-heading">Iqtibos olish uchun</h2>
                  <div class="pdf-viewer">
                    <div class="pdf-placeholder">
                      <v-icon size="80" color="primary">mdi-file-pdf-box</v-icon>
                      <p>PDF ko'rish vositasi</p>
                      <v-btn
                        color="primary"
                        size="large"
                        prepend-icon="mdi-download"
                        @click="downloadArticle"
                      >
                        PDF yuklash
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Sidebar -->
          <v-col cols="12" lg="4">
            <div class="sidebar-sticky">
              <!-- Article Info Card -->
              <v-card class="info-card" elevation="0">
                <v-card-title class="info-card-title">
                  Maqola ma'lumotlari
                </v-card-title>
                <v-card-text>
                  <div class="info-items">
                    <div class="info-item">
                      <span class="info-label">Sahifalar:</span>
                      <span class="info-value">{{ article.pages }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Til:</span>
                      <span class="info-value">{{ article.language }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Kategoriya:</span>
                      <span class="info-value">{{ article.category }}</span>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <div class="action-btns">
                    <v-btn
                      color="primary"
                      block
                      prepend-icon="mdi-download"
                      @click="downloadArticle"
                    >
                      Yuklab olish
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      color="primary"
                      block
                      prepend-icon="mdi-share-variant"
                    >
                      Ulashish
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      color="primary"
                      block
                      prepend-icon="mdi-bookmark"
                    >
                      Saqlash
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Related Articles -->
              <v-card class="related-card" elevation="0">
                <v-card-title class="related-card-title">
                  O'xshash maqolalar
                </v-card-title>
                <v-card-text>
                  <div class="related-articles">
                    <div
                      v-for="related in relatedArticles"
                      :key="related.id"
                      class="related-item"
                      @click="goToArticle(related.id)"
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const article = ref({
  id: 1,
  title: "QISHLOQ XO'JALIGIDA RAQAMLI EGIZAKLAR: ASOSIY TRENDLAR TAHLILI",
  authors: "Eshpo'latov Dostonbek Boxodir o'g'li",
  category: "Raqamli iqtisodiyot",
  abstract: "Obyektlarni real vaqtda virtual tasvirlash kontseptsiyasi raqamli egizaklarni qishloq xo'jaligini raqamlashtrishda katta imkoniyatlar ochib beradi. Ushbu tadqiqot ishida raqamli egizaklar va uning imkoniyatlari to'g'risida xabardorlikni oshirish va uni to'liqroq tushunish maqsadida zamonaviy tendentsiyalar va ochiq savollarni belgilovchi adabiyotlarni tizimli ravishda ko'rib chiqiladi",
  views: 253,
  likes: 6,
  downloads: 198,
  pages: "41-52",
  language: "Rus",
  keywords: ["qishloq xo'jaligi", "raqamli iqtisodiyot", "raqamli egizaklar texnologiyasi"],
  doi: "10.1234/example.doi.2023.001",
});

const relatedArticles = ref([
  {
    id: 2,
    title: "SUN'IY INTELLEKT ASOSIDA QISHLOQ XO'JALIGI",
    authors: "Karimov J.A.",
  },
  {
    id: 3,
    title: "BLOCKCHAIN TEXNOLOGIYASI VA OZIQ-OVQAT",
    authors: "Rahimova M.K.",
  },
]);

const downloadArticle = () => {
  console.log("Downloading article...");
};

const goToArticle = (slug) => {
  router.push(`/maqola/${slug}`);
};

onMounted(() => {
  console.log("Article ID:", route.params.id);
});
</script>

<style scoped>
.article-detail-view {
  background-color: rgb(var(--v-theme-surface));
  min-height: 100vh;
   padding-top: 90px;
}


.breadcrumbs-section {
  padding: 32px 0 16px;
}

.back-btn {
  text-transform: none;
  font-weight: 600;
}

.article-header-section {
  padding: 24px 0 48px;
}

.article-header {
  max-width: 1400px;
}

.category-badge {
  font-weight: 700;
  margin-bottom: 24px;
}

.article-title {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 32px;
  color: rgb(var(--v-theme-on-surface));
}


.article-meta-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: rgb(var(--v-theme-surface));
  border-radius: 16px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}


.meta-stats {
  display: flex;
  gap: 32px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}


.article-content-section {
  padding: 0 0 80px;
}

.content-card {
  border-radius: 20px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  background: rgb(var(--v-theme-surface));
}


.content-body {
  padding: 48px;
}

.section-block {
  margin-bottom: 48px;
}

.section-heading {
  font-size: 24px;
  font-weight: 800;
  color: #1b4b8a;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid #1b4b8a;
  display: inline-block;
}

.section-text {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(var(--v-theme-on-surface), 0.7);
}


.authors-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.author-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
}


.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.pdf-viewer {
  background: rgb(var(--v-theme-surface));
  border-radius: 16px;
  padding: 60px 24px;
  border: 2px dashed rgba(var(--v-theme-on-surface), 0.1);
}


.pdf-placeholder {
  text-align: center;
}

.pdf-placeholder p {
  margin: 16px 0 24px;
  font-size: 16px;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.sidebar-sticky {
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card,
.related-card {
  border-radius: 20px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  background: rgb(var(--v-theme-surface));
}


.info-card-title,
.related-card-title {
  font-weight: 800;
  font-size: 20px;
  color: rgb(var(--v-theme-on-surface));
  padding: 24px 24px 16px;
}


.info-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-label {
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.6);
}


.info-value {
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}


.action-btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-btns .v-btn {
  text-transform: none;
  font-weight: 700;
}

.related-articles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.related-item {
  padding: 16px;
  border-radius: 12px;
  background: rgb(var(--v-theme-surface));
  cursor: pointer;
  transition: all 0.3s ease;
}


.related-item:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateX(4px);
}

.related-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.4;
}


.related-authors {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin: 0;
}


@media (max-width: 1264px) {
  .sidebar-sticky {
    position: relative;
    top: 0;
  }
}

@media (max-width: 600px) {
  .content-body {
    padding: 24px;
  }

  .section-heading {
    font-size: 20px;
  }

  .meta-stats {
    gap: 16px;
  }

  .stat-item {
    font-size: 16px;
  }
}
</style>