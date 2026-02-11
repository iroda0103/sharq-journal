<template>
  <section class="latest-pub-section">
    <v-container>
      <div class="section-header">
        <h2 class="section-title">{{ t('home.latestPublications') }}</h2>
        <v-btn
          to="/nashrlar"
          variant="text"
          color="primary"
          size="large"
          class="view-all-btn"
          append-icon="mdi-arrow-right"
        >
          {{ t('home.viewAll') }}
        </v-btn>
      </div>

      <div v-if="publication" class="pub-card" @click="goToPublication">
        <div class="pub-cover">
          <img :src="publication.cover" :alt="publication.title" />
          <div class="pub-year-badge">
            <v-icon size="14" color="white">mdi-calendar</v-icon>
            {{ publication.year }}
          </div>
        </div>
        <div class="pub-info">
          <h3 class="pub-title">{{ publication.title }}</h3>
          <p class="pub-date">{{ publication.date }}</p>

          <div class="pub-stats">
            <div class="pub-stat">
              <v-icon size="18" color="primary">mdi-file-document-multiple</v-icon>
              <span>{{ publication.articlesCount }} {{ t('publications.articlesCount') }}</span>
            </div>
            <div class="pub-stat">
              <v-icon size="18" color="primary">mdi-book-open-page-variant</v-icon>
              <span>{{ publication.pages }} {{ t('publications.pages') }}</span>
            </div>
          </div>

          <v-btn
            :to="`/nashrlar/${publication.year}/${publication.id}`"
            color="primary"
            variant="elevated"
            class="pub-btn"
            append-icon="mdi-arrow-right"
          >
            {{ t('publications.details') }}
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { getPublications } from "@/data/publications.js";

const router = useRouter();
const { t } = useI18n();

const publication = ref(null);

onMounted(async () => {
  const pubs = await getPublications();
  if (pubs.length > 0) {
    publication.value = pubs[0];
  }
});

const goToPublication = () => {
  if (publication.value) {
    router.push(`/nashrlar/${publication.value.year}/${publication.value.id}`);
  }
};
</script>

<style scoped>
.latest-pub-section {
  padding: 80px 0;
  background: rgb(var(--v-theme-background));
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
  gap: 16px;
}

.section-title {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 900;
  color: rgb(var(--v-theme-primary));
  line-height: 1.2;
}

.view-all-btn {
  text-transform: none;
  font-weight: 700;
}

.pub-card {
  display: flex;
  gap: 24px;
  max-width: 560px;
  background: rgb(var(--v-theme-surface));
  border-radius: 14px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.pub-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(var(--v-theme-primary), 0.15);
  border-color: rgba(var(--v-theme-primary), 0.2);
}

.pub-cover {
  position: relative;
  flex-shrink: 0;
  width: 160px;
  overflow: hidden;
}

.pub-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.pub-card:hover .pub-cover img {
  transform: scale(1.05);
}

.pub-year-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(var(--v-theme-primary), 0.9);
  color: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(8px);
}

.pub-info {
  flex: 1;
  padding: 20px 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.pub-title {
  font-size: 18px;
  font-weight: 800;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.3;
}

.pub-date {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.5);
  font-weight: 500;
}

.pub-stats {
  display: flex;
  gap: 16px;
  margin: 4px 0;
}

.pub-stat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.pub-btn {
  align-self: flex-start;
  margin-top: 4px;
  text-transform: none;
  font-weight: 700;
  border-radius: 10px;
  font-size: 13px;
}

/* Responsive */
@media (max-width: 768px) {
  .latest-pub-section {
    padding: 60px 0;
  }

  .pub-card {
    flex-direction: column;
    gap: 0;
  }

  .pub-cover {
    width: 100%;
    max-height: 180px;
  }

  .pub-info {
    padding: 20px;
  }

  .pub-title {
    font-size: 18px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .latest-pub-section {
    padding: 48px 0;
  }

  .pub-stats {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
