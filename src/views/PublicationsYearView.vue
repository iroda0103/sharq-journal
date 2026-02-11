<template>
  <div class="publications-year-view">
    <PageHeader
      :title="t('publications.pageTitle')"
      :subtitle="`${route.params.year} ${t('nav.publications').toLowerCase()}`"
    />

    <section class="publications-section">
      <v-container>
        <v-btn
          to="/nashrlar"
          variant="text"
          prepend-icon="mdi-arrow-left"
          class="back-btn mb-6"
        >
          {{ t('nav.publications') }}
        </v-btn>

        <v-row>
          <v-col
            v-for="publication in filteredPublications"
            :key="publication.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="publication-card" hover>
              <div class="card-cover">
                <img
                  :src="publication.cover"
                  :alt="publication.title"
                  class="cover-img"
                />
              </div>
              <v-card-text>
                <h3 class="pub-title">{{ publication.title }}</h3>
                <div class="pub-meta">
                  <div class="meta-item">
                    <v-icon size="small" color="#1b4b8a">mdi-calendar</v-icon>
                    <span>{{ publication.date }}</span>
                  </div>
                  <div class="meta-item">
                    <v-icon size="small" color="#1b4b8a">mdi-file-document-multiple</v-icon>
                    <span>{{ publication.articlesCount }} {{ t('publications.articlesCount') }}</span>
                  </div>
                  <div class="meta-item">
                    <v-icon size="small" color="#1b4b8a">mdi-book</v-icon>
                    <span>{{ publication.pages }} {{ t('publications.pages') }}</span>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :to="`/nashrlar/${publication.year}/${publication.id}`"
                  color="#1b4b8a"
                  variant="text"
                  block
                >
                  {{ t('publications.details') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row v-if="filteredPublications.length === 0">
          <v-col cols="12" class="text-center py-12">
            <v-icon size="80" color="#bdc3c7">mdi-book-off</v-icon>
            <h3 class="mt-4" style="color: #7f8c8d">
              {{ t('publications.noPublications') }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import PageHeader from "../components/PageHeader.vue";
import { getPublicationsByYear } from "@/data/publications.js";

const route = useRoute();
const { t } = useI18n();

const allPublications = ref([]);

onMounted(async () => {
  allPublications.value = await getPublicationsByYear(route.params.year);
});

const filteredPublications = computed(() => allPublications.value);
</script>

<style scoped>
.publications-year-view {
  min-height: 100vh;
  padding-top: 90px;
}

.publications-section {
  padding: 32px 0 80px;
}

.back-btn {
  text-transform: none;
  font-weight: 600;
}

.publication-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  transition: all 0.3s ease;
}

.publication-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.card-cover {
  aspect-ratio: 3/4;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pub-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: rgb(var(--v-theme-on-surface));
}

.pub-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(var(--v-theme-on-surface), 0.7);
}
</style>
