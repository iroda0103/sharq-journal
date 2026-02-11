<template>
  <div class="submit-view">
  <PageHeader
      :title=" t('submit.title') "
      :subtitle=" t('submit.subtitle') "
    />
    <!-- Requirements -->
    <section class="requirements-section">
      <v-container>
        <v-card class="requirements-card" elevation="2">
          <v-card-title class="requirements-title">
            <v-icon color="#1b4b8a" class="mr-2">mdi-information</v-icon>
            {{ t('submit.guidelines.title') }}
          </v-card-title>
          <v-card-text>
            <!-- About Journal -->
            <div class="guideline-block">
              <h4 class="guideline-heading">{{ t('submit.guidelines.about') }}</h4>
              <p class="guideline-text">{{ t('submit.guidelines.aboutText') }}</p>
            </div>

            <!-- Article Requirements -->
            <div class="guideline-block">
              <h4 class="guideline-heading">{{ t('submit.guidelines.requirements') }}</h4>
              <ul class="requirements-list">
                <li>{{ t('submit.guidelines.req1') }}</li>
                <li>{{ t('submit.guidelines.req2') }}</li>
                <li>{{ t('submit.guidelines.req3') }}</li>
                <li>{{ t('submit.guidelines.req4') }}</li>
              </ul>
            </div>

            <!-- Technical Requirements -->
            <div class="guideline-block">
              <h4 class="guideline-heading">{{ t('submit.guidelines.technical') }}</h4>
              <div class="tech-requirements">
                <v-chip size="small" variant="outlined" color="#1b4b8a" class="mr-2 mb-2">
                  <v-icon left size="small">mdi-format-font</v-icon>
                  {{ t('submit.guidelines.font') }}: Times New Roman, 14
                </v-chip>
                <v-chip size="small" variant="outlined" color="#1b4b8a" class="mr-2 mb-2">
                  <v-icon left size="small">mdi-format-line-spacing</v-icon>
                  {{ t('submit.guidelines.spacing') }}: 1.5
                </v-chip>
                <v-chip size="small" variant="outlined" color="#1b4b8a" class="mr-2 mb-2">
                  <v-icon left size="small">mdi-page-layout-body</v-icon>
                  {{ t('submit.guidelines.margins') }}: 2 cm
                </v-chip>
                <v-chip size="small" variant="outlined" color="#1b4b8a" class="mr-2 mb-2">
                  <v-icon left size="small">mdi-file-document</v-icon>
                  {{ t('submit.guidelines.pages') }}: 8-13 bet
                </v-chip>
              </div>
            </div>

            <!-- IMRAD Structure -->
            <div class="guideline-block">
              <h4 class="guideline-heading">{{ t('submit.guidelines.structure') }}</h4>
              <div class="structure-chips">
                <v-chip size="small" color="#1b4b8a" class="mr-2 mb-2">
                  {{ t('submit.structure.intro') }}
                </v-chip>
                <v-chip size="small" color="#1b4b8a" class="mr-2 mb-2">
                  {{ t('submit.structure.literature') }}
                </v-chip>
                <v-chip size="small" color="#1b4b8a" class="mr-2 mb-2">
                  {{ t('submit.structure.methodology') }}
                </v-chip>
                <v-chip size="small" color="#1b4b8a" class="mr-2 mb-2">
                  {{ t('submit.structure.results') }}
                </v-chip>
                <v-chip size="small" color="#1b4b8a" class="mr-2 mb-2">
                  {{ t('submit.structure.conclusion') }}
                </v-chip>
                <v-chip size="small" color="#1b4b8a" class="mr-2 mb-2">
                  {{ t('submit.structure.references') }}
                </v-chip>
              </div>
            </div>

            <!-- Download Template -->
            <div class="guideline-block mb-0">
              <v-alert type="info" variant="tonal" density="compact">
                <div class="d-flex align-center">
                   <span
                    size="small"
                    variant="text"
                    @click="downloadTemplate"
                    class="d-flex align-center cursor-pointer"
                  >
                    <!-- {{ t('submit.downloadTemplate') }} -->
                      <v-icon class="mr-3">mdi-download</v-icon>
                  </span>
                  
                  <span>{{ t('submit.guidelines.template') }}</span>
                  <v-spacer />
                 
                </div>
              </v-alert>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <!-- Submission Form -->
    <section class="form-section">
      <v-container>
        <v-card class="form-card" elevation="2">
          <v-card-title class="form-title">
            {{ t('submit.form.title') }}
          </v-card-title>
          <v-card-text>
            <v-form ref="formRef" v-model="valid">
              <!-- Author Information -->
              <h3 class="section-heading">
                {{ t('submit.form.authorInfo') }}
              </h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.firstName"
                    :label="t('submit.form.firstName') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.lastName"
                    :label="t('submit.form.lastName') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    :label="t('submit.form.email') + ' *'"
                    variant="outlined"
                    type="email"
                    :rules="emailRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.phone"
                    :label="t('submit.form.phone') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.organization"
                    :label="t('submit.form.organization') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.position"
                    :label="t('submit.form.position') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.orcid"
                    label="ORCID"
                    variant="outlined"
                    placeholder="0000-0000-0000-0000"
                    density="comfortable"
                    :hint="t('submit.guidelines.orcidHint')"
                    persistent-hint
                  />
                </v-col>
              </v-row>

              <v-divider class="my-6" />

              <!-- Article Information -->
              <h3 class="section-heading">
                {{ t('submit.form.articleDetails') }}
              </h3>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.title"
                    :label="t('submit.form.articleTitle') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="form.category"
                    :items="categories"
                    :label="t('submit.form.category') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="form.language"
                    :items="languages"
                    :label="t('submit.form.language') + ' *'"
                    variant="outlined"
                    :rules="requiredRules"
                    density="comfortable"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.abstractUz"
                    :label="t('submit.form.abstractUz') + ' *'"
                    variant="outlined"
                    rows="4"
                    :rules="requiredRules"
                    counter="200"
                    hint="150-200 so'z"
                    persistent-hint
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-combobox
                    v-model="form.keywords"
                    :label="t('submit.form.keywords') + ' *'"
                    variant="outlined"
                    :rules="keywordsRules"
                    chips
                    multiple
                    closable-chips
                    density="comfortable"
                    hint="10-15 ta kalit so'z"
                    persistent-hint
                    required
                  />
                </v-col>
              </v-row>

              <v-divider class="my-6" />

              <!-- File Upload -->
              <h3 class="section-heading">
                {{ t('submit.form.fileUpload') }}
              </h3>
              <v-row>
                <v-col cols="12">
                  <v-file-input
                    v-model="form.articleFile"
                    :label="t('submit.form.manuscript') + ' *'"
                    variant="outlined"
                    accept=".docx,.doc,.pdf"
                    prepend-icon="mdi-file-document"
                    :rules="fileRules"
                    show-size
                    density="comfortable"
                    hint="DOC, DOCX, PDF (max 10MB)"
                    persistent-hint
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    v-model="form.supplementaryFiles"
                    :label="t('submit.form.supplementary')"
                    variant="outlined"
                    multiple
                    accept=".pdf,.doc,.docx,.xlsx,.zip"
                    prepend-icon="mdi-paperclip"
                    show-size
                    density="comfortable"
                    hint="Qo'shimcha fayllar (ixtiyoriy)"
                    persistent-hint
                  />
                </v-col>
              </v-row>

              <v-divider class="my-6" />

              <!-- Agreement -->
              <v-checkbox
                v-model="form.agreement"
                :rules="agreementRules"
                color="#1b4b8a"
                required
              >
                <template #label>
                  <div class="agreement-text">
                    {{ t('submit.form.agreementText') }}
                    <a href="#" class="agreement-link" @click.prevent>
                      {{ t('submit.form.agreementLink') }}
                    </a>
                  </div>
                </template>
              </v-checkbox>

              <!-- Submit Button -->
              <div class="text-center mt-6">
                <v-btn
                  color="#1b4b8a"
                  size="large"
                  :loading="loading"
                  :disabled="!valid"
                  @click="submitArticle"
                >
                  <v-icon left>mdi-send</v-icon>
                  {{ t('submit.form.submitButton') }}
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <!-- Success Dialog -->
    <v-dialog v-model="successDialog" max-width="500">
      <v-card>
        <v-card-title class="text-center success-title">
          <v-icon color="success" size="64">mdi-check-circle</v-icon>
          <div class="mt-4">{{ t('submit.success.title') }}</div>
        </v-card-title>
        <v-card-text class="text-center">
          <p>{{ t('submit.success.message') }}</p>
          <p class="mt-4">
            <strong>{{ t('submit.success.trackingId') }}:</strong>
            <v-chip color="#1b4b8a" class="ml-2">{{ trackingId }}</v-chip>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="#1b4b8a" variant="text" @click="resetForm">
            Yangi maqola yuborish
          </v-btn>
          <v-btn color="#1b4b8a" @click="successDialog = false">
            {{ t('submit.success.close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const formRef = ref(null);
const valid = ref(false);
const loading = ref(false);
const successDialog = ref(false);
const trackingId = ref("");

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  position: "",
  orcid: "",
  title: "",
  category: "",
  language: "",
  abstractUz: "",
  keywords: [],
  articleFile: null,
  supplementaryFiles: [],
  agreement: false,
});

const categories = computed(() => [
  t('categories.economics'),
  t('categories.digitalEconomy'),
  t('categories.innovation'),
  t('categories.business'),
  t('categories.management'),
]);

const languages = computed(() => [
  { title: "O'zbek", value: 'uz' },
  { title: 'Русский', value: 'ru' },
  { title: 'English', value: 'en' }
]);

const requiredRules = [
  (v) => !!v || t('validation.required')
];

const emailRules = [
  (v) => !!v || t('validation.required'),
  (v) => /.+@.+\..+/.test(v) || t('validation.emailInvalid')
];

const keywordsRules = [
  (v) => v.length >= 10 || t('validation.minKeywords')
];

const fileRules = [
  (v) => !!v || t('validation.fileRequired'),
  (v) => !v || v.size < 10485760 || t('validation.fileSize')
];

const agreementRules = [
  (v) => !!v || t('validation.agreementRequired')
];

const submitArticle = async () => {
  const { valid: isValid } = await formRef.value.validate();
  if (!isValid) return;

  loading.value = true;

  // Simulate API call
  setTimeout(() => {
    trackingId.value = `ART-${Date.now().toString().slice(-8)}`;
    successDialog.value = true;
    loading.value = false;
  }, 2000);
};

const resetForm = () => {
  formRef.value.reset();
  successDialog.value = false;
};

const downloadTemplate = () => {
  const link = document.createElement('a');
  link.href = '/files/Замонавий_иқтисодиёт_ва_интеллектуал_технологиялар_журналига_қўйиладиган.docx';
  link.download = 'Замонавий_иқтисодиёт_ва_интеллектуал_технологиялар_журналига_қўйиладиган.docx';
  link.click();
};
</script>

<style scoped>
.submit-view {
  /* background-color: #f8f9fa; */
  min-height: 100vh;
   padding-top: 90px;
}



/* Requirements Section */
.requirements-section {
  padding: 48px 0 24px;
}

.requirements-card {
  border-radius: 12px;
  border-left: 4px solid #1b4b8a;
  background: rgb(var(--v-theme-surface));
}


.requirements-title {
  font-size: 20px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  padding: 20px 24px;
}


.guideline-block {
  margin-bottom: 24px;
}

.guideline-heading {
  font-size: 16px;
  font-weight: 700;
  color: #1b4b8a;
  margin-bottom: 12px;
}


.guideline-text {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(var(--v-theme-on-surface), 0.8);
  margin: 0;
}


.requirements-list {
  padding-left: 24px;
  margin: 0;
}

.requirements-list li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: rgba(var(--v-theme-on-surface), 0.8);
}


.tech-requirements {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.structure-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Form Section */
.form-section {
  padding: 24px 0 48px;
}

.form-card {
  border-radius: 12px;
  background: rgb(var(--v-theme-surface));
}


.form-title {
  font-size: 24px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  padding: 24px;
}


.section-heading {
  font-size: 18px;
  font-weight: 700;
  color: #1b4b8a;
  margin-bottom: 16px;
}


.agreement-text {
  font-size: 14px;
  line-height: 1.6;
  color: rgb(var(--v-theme-on-surface));
}


.agreement-link {
  color: #1b4b8a;
  text-decoration: none;
  font-weight: 600;
}


.agreement-link:hover {
  text-decoration: underline;
}

/* Success Dialog */
.success-title {
  padding: 32px 24px 16px;
  font-size: 24px;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  flex-direction: column;
}


/* Responsive */
@media (max-width: 600px) {
  .page-header {
    padding: 40px 0;
  }

  .page-title {
    font-size: 32px;
  }

  .page-subtitle {
    font-size: 16px;
  }

  .requirements-section {
    padding: 32px 0 16px;
  }

  .form-section {
    padding: 16px 0 40px;
  }
}
</style>