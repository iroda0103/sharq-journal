<template>
  <div class="publications-view">
    <!-- Page Header -->
    <!-- <section class="page-header">
      <v-container>
        <h1 class="page-title">Jurnal nashrlari</h1>
        <p class="page-subtitle">Barcha nashr etilgan sonlar</p>
      </v-container>
    </section> -->
<PageHeader
      :title="t('publications.pageTitle')"
      :subtitle="t('publications.pageSubtitle')"
    />
    <!-- Publications Grid -->
    <section class="publications-section">
      <v-container>
        <!-- Year Tabs -->
        <v-tabs v-model="selectedTab" color="primary" class="mb-8">
          <v-tab v-for="year in years" :key="year" :value="year">
            {{ year }}
          </v-tab>
        </v-tabs>

        <!-- Publications by Year -->
        <v-row>
          <v-col
            v-for="publication in filteredPublications"
            :key="publication.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="publication-card" elevation="3" hover>
              <div class="publication-cover">
                <img
                  :src="publication.cover"
                  :alt="publication.title"
                  class="cover-image"
                />
                <div class="publication-overlay">
                  <v-icon color="white" size="64">mdi-book-open-page-variant</v-icon>
                </div>
              </div>
              <v-card-title class="publication-title">
                {{ publication.title }}
              </v-card-title>
              <v-card-text>
                <div class="publication-meta">
                  <div class="meta-item">
                    <v-icon size="small" color="primary">mdi-calendar</v-icon>
                    <span>{{ publication.date }}</span>
                  </div>
                  <div class="meta-item">
                    <v-icon size="small" color="primary"
                      >mdi-file-document-multiple</v-icon
                    >
                    <span>{{ publication.articlesCount }} {{ t('publications.articlesCount') }}</span>
                  </div>
                  <div class="meta-item">
                    <v-icon size="small" color="primary">mdi-book</v-icon>
                    <span>{{ publication.pages }} {{ t('publications.pages') }}</span>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :to="`/nashrlar/${publication.year}`"
                  color="primary"
                  variant="text"
                  block
                >
                  {{ t('publications.details') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Empty State -->
        <v-row v-if="filteredPublications.length === 0">
          <v-col cols="12" class="text-center py-12">
            <v-icon size="80" color="grey">mdi-book-off</v-icon>
            <h3 class="mt-4 empty-text">
              {{ t('publications.noPublications') }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import PageHeader from "../components/PageHeader.vue";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { getPublications, getYears } from "@/data/publications.js";

const { t } = useI18n();

const selectedTab = ref(2026);
const allPublications = ref([]);
const years = ref([]);

onMounted(async () => {
  allPublications.value = await getPublications();
  years.value = await getYears();
  if (years.value.length > 0) {
    selectedTab.value = years.value[0];
  }
});

const filteredPublications = computed(() => {
  return allPublications.value.filter((p) => p.year === selectedTab.value);
});
</script>

<style scoped>
.publications-view {
  /* background-color: #f8f9fa; */
  min-height: 100vh;
  padding-top: 90px;
}

.publications-section {
  padding: 48px 0;
}

.publication-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.publication-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.publication-cover {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.publication-card:hover .cover-image {
  transform: scale(1.05);
}

.publication-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 75, 138, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.publication-card:hover .publication-overlay {
  opacity: 1;
}

.publication-title {
  font-size: 20px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  padding: 16px;
}

.publication-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-size: 14px;
}

.empty-text {
  color: rgba(var(--v-theme-on-surface), 0.5);
}

@media (max-width: 960px) {
  .page-title {
    font-size: 32px;
  }
}
</style>