<template>
  <div class="not-found-view">
    <PageHeader :title="t('notFound.pageTitle')" />

    <section class="not-found-content">
      <v-container>
        <div class="not-found-center">
          <div class="error-code">404</div>
          <v-icon size="120" color="primary" class="mb-6">mdi-file-search-outline</v-icon>
          <h2 class="not-found-title">{{ t('notFound.title') }}</h2>
          <p class="not-found-text">{{ t('notFound.description') }}</p>
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
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/PageHeader.vue";

const { t } = useI18n();
</script>

<style scoped>
.not-found-view {
  background-color: rgb(var(--v-theme-surface));
  min-height: 100vh;
  padding-top: 90px;
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

@media (max-width: 600px) {
  .error-code {
    font-size: 100px;
  }

  .not-found-content {
    padding: 40px 0;
  }

  .not-found-actions {
    flex-direction: column;
    width: 100%;
  }
}
</style>
