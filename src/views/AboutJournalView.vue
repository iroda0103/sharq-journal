<template>
  <div class="about-journal-view">
    <PageHeader
      :title="t('about.pageTitle')"
      :subtitle="t('about.pageSubtitle')"
    />

    <section class="about-content">
      <v-container>
        <v-row>
          <!-- Main Content -->
          <v-col cols="12" lg="8">
            <!-- Journal Info Card -->
            <v-card class="info-card mb-6" elevation="1">
              <v-card-text class="info-card-body">
                <h2 class="card-title">
                  <v-icon color="primary" class="mr-2">mdi-information</v-icon>
                  {{ t('about.journalInfo') }}
                </h2>

                <div class="info-table">
                  <div class="info-row">
                    <span class="info-label">{{ t('about.journalName') }}</span>
                    <span class="info-value">{{ t('about.journalNameValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.publisher') }}</span>
                    <span class="info-value">{{ t('about.publisherValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.publisherAddress') }}</span>
                    <span class="info-value">{{ t('about.publisherAddressValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.founder') }}</span>
                    <span class="info-value">{{ t('about.founderValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.languages') }}</span>
                    <span class="info-value">{{ t('about.languagesValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.yearEstablished') }}</span>
                    <span class="info-value">{{ t('about.yearEstablishedValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.periodicity') }}</span>
                    <span class="info-value">{{ t('about.periodicityValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.specialization') }}</span>
                    <span class="info-value">{{ t('about.specializationValue') }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">{{ t('about.medium') }}</span>
                    <span class="info-value">{{ t('about.mediumValue') }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>

            <!-- About Text -->
            <v-card class="info-card mb-6" elevation="1">
              <v-card-text class="info-card-body">
                <h2 class="card-title">
                  <v-icon color="primary" class="mr-2">mdi-text-box</v-icon>
                  {{ t('about.aboutJournal') }}
                </h2>
                <p class="about-text">{{ t('about.aboutText') }}</p>
              </v-card-text>
            </v-card>

            <!-- Editorial Team -->
            <v-card class="info-card mb-6" elevation="1">
              <v-card-text class="info-card-body">
                <h2 class="card-title">
                  <v-icon color="primary" class="mr-2">mdi-account-group</v-icon>
                  {{ t('about.editorialTeam') }}
                </h2>

                <!-- Chief Editor -->
                <div class="editor-section">
                  <h3 class="editor-role">{{ t('editorial.chiefEditor') }}</h3>
                  <div class="editor-item chief">
                    <v-icon color="primary" size="large">mdi-account-circle</v-icon>
                    <div>
                      <span class="editor-name">{{ chief.name }}</span>
                      <span class="editor-degree" v-if="chief.degree">{{ chief.degree }}</span>
                    </div>
                  </div>
                </div>

                <!-- Deputy Editor -->
                <div class="editor-section">
                  <h3 class="editor-role">{{ t('editorial.deputyEditor') }}</h3>
                  <div class="editor-item chief">
                    <v-icon color="primary" size="large">mdi-account-circle</v-icon>
                    <div>
                      <span class="editor-name">{{ deputy.name }}</span>
                      <span class="editor-degree" v-if="deputy.degree">{{ deputy.degree }}</span>
                    </div>
                  </div>
                </div>

                <!-- Secretary -->
                <div class="editor-section">
                  <h3 class="editor-role">{{ t('editorial.secretary') }}</h3>
                  <div class="editor-item chief">
                    <v-icon color="primary" size="large">mdi-account-circle</v-icon>
                    <div>
                      <span class="editor-name">{{ secr.name }}</span>
                      <span class="editor-degree" v-if="secr.degree">{{ secr.degree }}</span>
                    </div>
                  </div>
                </div>

                <!-- Board Members -->
                <div class="editor-section">
                  <h3 class="editor-role">{{ t('editorial.boardMembers') }}</h3>
                  <div class="editors-list">
                    <div
                      v-for="member in board"
                      :key="member.id"
                      class="editor-item"
                    >
                      <v-icon size="small" color="primary">mdi-account</v-icon>
                      <div>
                        <span class="editor-name">{{ member.name }}</span>
                        <span class="editor-degree">{{ member.degree }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>

            <!-- Certificate -->
            <v-card class="info-card" elevation="1">
              <v-card-text class="info-card-body">
                <h2 class="card-title">
                  <v-icon color="primary" class="mr-2">mdi-certificate</v-icon>
                  {{ t('about.certificate') }}
                </h2>
                <div class="certificate-viewer">
                  <iframe
                    src="/files/guvohnoma.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    loading="lazy"
                  />
                </div>
                <v-btn
                  color="primary"
                  class="mt-4"
                  prepend-icon="mdi-download"
                  href="/files/guvohnoma.pdf"
                  target="_blank"
                >
                  {{ t('about.downloadCertificate') }}
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Sidebar -->
          <v-col cols="12" lg="4">
            <div class="sidebar-sticky">
              <!-- Quick Nav -->
              <v-card elevation="1" class="sidebar-card">
                <v-card-text class="sidebar-card-body">
                  <h3 class="sidebar-title">
                    <v-icon size="small" color="primary">mdi-link-variant</v-icon>
                    {{ t('about.quickNav') }}
                  </h3>
                  <div class="quick-nav-links">
                    <router-link to="/nashrlar" class="nav-link">
                      <v-icon size="small">mdi-chevron-right</v-icon>
                      {{ t('nav.publications') }}
                    </router-link>
                    <router-link to="/maqolalar" class="nav-link">
                      <v-icon size="small">mdi-chevron-right</v-icon>
                      {{ t('nav.articles') }}
                    </router-link>
                    <router-link to="/tahririyat" class="nav-link">
                      <v-icon size="small">mdi-chevron-right</v-icon>
                      {{ t('nav.editorial') }}
                    </router-link>
                    <router-link to="/jurnal-haqida" class="nav-link">
                      <v-icon size="small">mdi-chevron-right</v-icon>
                      {{ t('nav.about') }}
                    </router-link>
                    <router-link to="/submit" class="nav-link">
                      <v-icon size="small">mdi-chevron-right</v-icon>
                      {{ t('nav.submit') }}
                    </router-link>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Contact -->
              <v-card elevation="1" class="sidebar-card">
                <v-card-text class="sidebar-card-body">
                  <h3 class="sidebar-title">
                    <v-icon size="small" color="primary">mdi-phone</v-icon>
                    {{ t('sidebar.contact') }}
                  </h3>
                  <div class="contact-items">
                    <div class="contact-row">
                      <v-icon size="small" color="primary">mdi-map-marker</v-icon>
                      <span>Navoiy viloyati, O'zbekiston</span>
                    </div>
                    <div class="contact-row">
                      <v-icon size="small" color="primary">mdi-phone</v-icon>
                      <span>+998 (79) 222-07-00</span>
                    </div>
                    <div class="contact-row">
                      <v-icon size="small" color="primary">mdi-email</v-icon>
                      <span>journal@sharqedu.uz</span>
                    </div>
                    <div class="contact-row">
                      <v-icon size="small" color="primary">mdi-web</v-icon>
                      <span>www.sharqedu.uz</span>
                    </div>
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
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/PageHeader.vue";
import { getChiefEditor, getDeputyEditor, getSecretary, getBoardMembers } from "@/data/editorial.js";

const { t } = useI18n();

const chief = ref({ name: "", degree: "" });
const deputy = ref({ name: "", degree: "" });
const secr = ref({ name: "", degree: "" });
const board = ref([]);

onMounted(async () => {
  chief.value = await getChiefEditor();
  deputy.value = await getDeputyEditor();
  secr.value = await getSecretary();
  board.value = await getBoardMembers();
});
</script>

<style scoped>
.about-journal-view {
  background-color: rgb(var(--v-theme-surface));
  min-height: 100vh;
  padding-top: 90px;
}

.about-content {
  padding: 32px 0 60px;
}

/* Info Cards */
.info-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}

.info-card-body {
  padding: 24px !important;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(var(--v-theme-primary), 0.2);
}

/* Info Table */
.info-table {
  display: flex;
  flex-direction: column;
}

.info-row {
  display: flex;
  padding: 14px 0;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  gap: 16px;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-size: 14px;
  font-weight: 700;
  color: rgba(var(--v-theme-on-surface), 0.6);
  min-width: 180px;
  flex-shrink: 0;
}

.info-value {
  font-size: 15px;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.5;
}

/* About Text */
.about-text {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(var(--v-theme-on-surface), 0.8);
}

/* Editorial Team */
.editor-section {
  margin-bottom: 24px;
}

.editor-section:last-child {
  margin-bottom: 0;
}

.editor-role {
  font-size: 16px;
  font-weight: 700;
  color: rgba(var(--v-theme-on-surface), 0.7);
  margin-bottom: 12px;
}

.editors-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.editor-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  background: rgba(var(--v-theme-on-surface), 0.02);
}

.editor-item.chief {
  background: rgba(var(--v-theme-primary), 0.05);
  padding: 14px 16px;
}

.editor-item > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.editor-name {
  font-size: 14px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.editor-degree {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

/* Certificate */
.certificate-viewer {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.certificate-viewer iframe {
  width: 100%;
  height: 500px;
  display: block;
  border: none;
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

.sidebar-card {
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}

.sidebar-card-body {
  padding: 20px !important;
}

.sidebar-title {
  font-size: 16px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quick-nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.7);
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 8px;
  transition: all 0.2s;
}

.nav-link:hover {
  background: rgba(var(--v-theme-primary), 0.08);
  color: rgb(var(--v-theme-primary));
  transform: translateX(4px);
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

/* Responsive */
@media (max-width: 1264px) {
  .sidebar-sticky {
    position: relative;
    top: 0;
    padding-left: 0;
  }
}

@media (max-width: 600px) {
  .info-row {
    flex-direction: column;
    gap: 4px;
  }

  .info-label {
    min-width: unset;
  }

  .certificate-viewer iframe {
    height: 350px;
  }
}
</style>
