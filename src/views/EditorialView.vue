<template>
  <div class="editorial-view">
    <PageHeader
      :title="t('editorial.pageTitle')"
      :subtitle="t('editorial.pageSubtitle')"
    />

    <section class="editorial-content">
      <v-container>
        <!-- Intro text -->
        <p class="intro-text">{{ t('editorial.introText') }}</p>

        <!-- Leadership -->
        <h2 class="section-title">{{ t('editorial.chiefEditor') }}</h2>
        <div class="leadership-row">
          <!-- Chief Editor - left, larger -->
          <v-card class="chief-card" elevation="1">
            <div class="chief-inner">
              <v-avatar size="80" class="chief-avatar">
                <img src="/img/sherzod_atamuradov.JPG" alt="Bosh muharrir" />
              </v-avatar>
              <div class="chief-info">
                <h3 class="person-name">{{ chiefEditor.name }}</h3>
                <p class="person-degree" v-if="chiefEditor.degree">{{ chiefEditor.degree }}</p>
                <p class="person-role">{{ chiefEditor.organization }}</p>
              </div>
            </div>
          </v-card>

          <!-- Deputy & Secretary - right, stacked -->
          <div class="deputies-stack">
            <v-card class="person-card" elevation="1">
              <div class="person-inner">
                <v-avatar size="40" color="primary">
                  <v-icon size="20" color="white">mdi-account</v-icon>
                </v-avatar>
                <div>
                  <p class="person-role-label">{{ t('editorial.deputyEditor') }}</p>
                  <h4 class="person-name-sm">{{ deputyEditor.name }}</h4>
                </div>
              </div>
            </v-card>
            <v-card class="person-card" elevation="1">
              <div class="person-inner">
                <v-avatar size="40" color="primary">
                  <v-icon size="20" color="white">mdi-account</v-icon>
                </v-avatar>
                <div>
                  <p class="person-role-label">{{ t('editorial.secretary') }}</p>
                  <h4 class="person-name-sm">{{ secretary.name }}</h4>
                </div>
              </div>
            </v-card>
          </div>
        </div>

        <!-- Editorial Board -->
        <h2 class="section-title mt-10">{{ t('editorial.boardMembers') }}</h2>
        <p class="section-desc">{{ t('editorial.boardDesc') }}</p>

        <div class="board-list">
          <v-card
            v-for="member in boardMembers"
            :key="member.id"
            class="board-item"
            elevation="0"
          >
            <v-avatar size="36" color="primary" class="board-avatar">
              <v-icon size="18" color="white">mdi-account</v-icon>
            </v-avatar>
            <div class="board-info">
              <span class="board-name">{{ member.name }}</span>
              <span class="board-degree">{{ member.degree }}</span>
            </div>
          </v-card>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import PageHeader from "../components/PageHeader.vue";
import {
  getChiefEditor,
  getDeputyEditor,
  getSecretary,
  getBoardMembers,
} from "@/data/editorial.js";

const { t } = useI18n();

const chiefEditor = ref({});
const deputyEditor = ref({});
const secretary = ref({});
const boardMembers = ref([]);

onMounted(async () => {
  chiefEditor.value = await getChiefEditor();
  deputyEditor.value = await getDeputyEditor();
  secretary.value = await getSecretary();
  boardMembers.value = await getBoardMembers();
});
</script>

<style scoped>
.editorial-view {
  min-height: 100vh;
  padding-top: 90px;
}

.editorial-content {
  padding: 32px 0 60px;
}

.intro-text {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(var(--v-theme-on-surface), 0.7);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
}

/* Section Title */
.section-title {
  font-size: 22px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(var(--v-theme-primary), 0.2);
}

.section-desc {
  font-size: 14px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin-bottom: 20px;
}

/* Leadership Row */
.leadership-row {
  display: flex;
  gap: 16px;
  align-items: stretch;
  margin-bottom: 16px;
}

/* Chief Editor Card */
.chief-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  flex: 0 0 42%;
  display: flex;
  align-items: center;
}

.chief-inner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
}

.chief-avatar {
  flex-shrink: 0;
  border: 3px solid rgba(var(--v-theme-primary), 0.3);
}

.chief-avatar img {
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
}

.chief-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.person-name {
  font-size: 18px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.person-degree {
  font-size: 14px;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}

.person-role {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

/* Deputies Stack */
.deputies-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

/* Person Card (Deputy / Secretary) */
.person-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}

.person-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
}

.person-role-label {
  font-size: 12px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.person-name-sm {
  font-size: 15px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.person-degree-sm {
  font-size: 13px;
  color: rgb(var(--v-theme-primary));
}

/* Board Members List */
.board-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.board-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(var(--v-theme-on-surface), 0.02);
  border: 1px solid rgba(var(--v-theme-on-surface), 0.04);
  transition: background 0.2s;
}

.board-item:hover {
  background: rgba(var(--v-theme-primary), 0.04);
}

.board-avatar {
  flex-shrink: 0;
}

.board-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.board-name {
  font-size: 14px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.board-degree {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  .leadership-row {
    flex-direction: column;
  }

  .chief-card {
    flex: none;
  }

  .chief-inner {
    flex-direction: column;
    text-align: center;
  }

  .section-title {
    font-size: 20px;
  }
}
</style>
