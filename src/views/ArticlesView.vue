<template>
  <div class="articles-view">
    <!-- Page Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title">Ilmiy maqolalar</h1>
        <p class="page-subtitle">
          Jurnalda nashr etilgan barcha ilmiy maqolalar
        </p>
      </v-container>
    </section>

    <!-- Filters -->
    <section class="filters-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              v-model="selectedYear"
              :items="years"
              label="Yil"
              variant="outlined"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="selectedCategory"
              :items="categories"
              label="Kategoriya"
              variant="outlined"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="searchQuery"
              label="Maqola qidirish..."
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              density="comfortable"
              clearable
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Articles List -->
    <section class="articles-section">
      <v-container>
        <v-row>
          <v-col
            v-for="article in filteredArticles"
            :key="article.id"
            cols="12"
          >
            <v-card class="article-card" elevation="2" hover>
              <v-card-text>
                <v-row align="center">
                  <v-col cols="12" md="9">
                    <div class="article-meta">
                      <v-chip size="small" color="#1b4b8a" class="mr-2">
                        {{ article.category }}
                      </v-chip>
                      <v-chip size="small" variant="outlined">
                        {{ article.year }}
                      </v-chip>
                    </div>
                    <h2 class="article-title">{{ article.title }}</h2>
                    <p class="article-authors">{{ article.authors }}</p>
                    <p class="article-abstract">{{ article.abstract }}</p>
                    <div class="article-info">
                      <span>
                        <v-icon size="small">mdi-book-open-variant</v-icon>
                        {{ article.pages }} bet
                      </span>
                      <span>
                        <v-icon size="small">mdi-calendar</v-icon>
                        {{ article.publishDate }}
                      </span>
                      <span>
                        <v-icon size="small">mdi-eye</v-icon>
                        {{ article.views }} ko'rilgan
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3" class="text-center">
                    <v-btn
                      color="#1b4b8a"
                      block
                      class="mb-2"
                      prepend-icon="mdi-file-pdf-box"
                    >
                      PDF yuklash
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      color="#1b4b8a"
                      block
                      prepend-icon="mdi-link-variant"
                    >
                      Havola
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Pagination -->
        <div class="text-center mt-8">
          <v-pagination
            v-model="page"
            :length="totalPages"
            :total-visible="7"
            color="#1b4b8a"
          />
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const selectedYear = ref("Hammasi");
const selectedCategory = ref("Hammasi");
const page = ref(1);

const years = ["Hammasi", "2024", "2023", "2022", "2021"];
const categories = [
  "Hammasi",
  "Iqtisodiyot",
  "Pedagogika",
  "Tarix",
  "Tilshunoslik",
  "Falsafa",
];

const articles = ref([
  {
    id: 1,
    title: "Zamonaviy ta'lim tizimida raqamli texnologiyalarning o'rni",
    authors: "Aliyev A.A., Karimova M.K.",
    category: "Pedagogika",
    year: "2024",
    abstract:
      "Ushbu maqolada zamonaviy ta'lim tizimida raqamli texnologiyalarning ahamiyati, ularning samaradorligi va joriy etish yo'llari ko'rib chiqilgan...",
    pages: "15-22",
    publishDate: "15.01.2024",
    views: 145,
  },
  {
    id: 2,
    title: "O'zbekiston iqtisodiyotida innovatsiyalarning rivojlanishi",
    authors: "Rahimov B.S., Toshmatova N.R.",
    category: "Iqtisodiyot",
    year: "2024",
    abstract:
      "Maqolada O'zbekiston Respublikasi iqtisodiyotida innovatsion jarayonlarning joriy holati tahlil qilingan va rivojlantirish yo'llari taklif etilgan...",
    pages: "23-31",
    publishDate: "15.01.2024",
    views: 203,
  },
  {
    id: 3,
    title: "O'zbek tilida so'z yasalish usullari va ularning tasnifi",
    authors: "Usmonova D.F.",
    category: "Tilshunoslik",
    year: "2023",
    abstract:
      "Tadqiqotda o'zbek tilida so'z yasalishning asosiy usullari, ularning turlari va zamonaviy tilshunoslikdagi o'rni ko'rib chiqilgan...",
    pages: "42-50",
    publishDate: "10.12.2023",
    views: 189,
  },
  {
    id: 4,
    title: "Sharq falsafasi tarixidagi insonparvarlik g'oyalari",
    authors: "Mahmudov I.S., Sobirova L.A.",
    category: "Falsafa",
    year: "2023",
    abstract:
      "Maqolada Sharq falsafasi tarixida shakllangan insonparvarlik g'oyalari va ularning zamonaviy ahamiyati tadqiq etilgan...",
    pages: "51-59",
    publishDate: "10.12.2023",
    views: 167,
  },
]);

const filteredArticles = computed(() => {
  let filtered = articles.value;

  if (selectedYear.value !== "Hammasi") {
    filtered = filtered.filter((a) => a.year === selectedYear.value);
  }

  if (selectedCategory.value !== "Hammasi") {
    filtered = filtered.filter((a) => a.category === selectedCategory.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.authors.toLowerCase().includes(query) ||
        a.abstract.toLowerCase().includes(query)
    );
  }

  return filtered;
});

const totalPages = computed(() => Math.ceil(filteredArticles.value.length / 10));
</script>

<style scoped>
.articles-view {
  background-color: #f8f9fa;
  min-height: 100vh;
   padding-top: 90px;
}

.page-header {
  background: linear-gradient(135deg, #1b4b8a 0%, #2c3e50 100%);
  background-image: url('../assets/banner.jpg');
  background-position: center;
  background-size: cover;
  background-color: #2120209a;
      background-color: rgba(255, 255, 255, 0.877);
      
position: relative;
  padding: 40px 0;
  color: white;
  z-index: 1;
}
.page-header::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(1, 2, 3, 0.2) 0%, #162347 100%);
    z-index: -1;
}

.page-title {
  font-size: 42px;
  /* text-align: center; */
  font-weight: 700;
  margin-bottom: 12px;
}

.page-subtitle {
  /* text-align: center; */
  font-size: 18px;
  opacity: 0.9;
}

.filters-section {
  padding: 32px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.articles-section {
  padding: 48px 0;
}

.article-card {
  border-radius: 12px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.article-meta {
  margin-bottom: 12px;
}

.article-title {
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
  line-height: 1.4;
}

.article-authors {
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 12px;
  font-style: italic;
}

.article-abstract {
  font-size: 15px;
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 16px;
}

.article-info {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  color: #7f8c8d;
  font-size: 14px;
}

.article-info span {
  display: flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 960px) {
  .page-title {
    font-size: 32px;
  }

  .article-title {
    font-size: 20px;
  }
}
</style>