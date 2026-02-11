<template>
  <div class="dashboard-view">
    <!-- Dashboard Header -->
    <section class="dashboard-header">
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col cols="auto">
            <h1 class="dashboard-title">Admin Panel</h1>
            <p class="dashboard-subtitle">Jurnal boshqaruv paneli</p>
          </v-col>
          <v-col cols="auto">
            <v-btn color="error" variant="outlined" @click="logout">
              <v-icon left>mdi-logout</v-icon>
              Chiqish
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Stats Cards -->
    <section class="stats-section">
      <v-container>
        <v-row>
          <v-col
            v-for="stat in stats"
            :key="stat.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="stat-card" :color="stat.color" dark>
              <v-card-text>
                <div class="stat-content">
                  <v-icon size="48">{{ stat.icon }}</v-icon>
                  <div class="stat-text">
                    <h2 class="stat-number">{{ stat.value }}</h2>
                    <p class="stat-title">{{ stat.title }}</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Main Content -->
    <section class="content-section">
      <v-container>
        <v-row>
          <!-- Pending Articles -->
          <v-col cols="12" lg="8">
            <v-card class="content-card" elevation="2">
              <v-card-title class="card-header">
                <v-icon class="mr-2" color="#1b4b8a">mdi-clock-outline</v-icon>
                Ko'rib chiqish kutilayotgan maqolalar
                <v-spacer />
                <v-chip color="warning" size="small">
                  {{ pendingArticles.length }}
                </v-chip>
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="article in pendingArticles"
                    :key="article.id"
                    class="article-item"
                  >
                    <template #prepend>
                      <v-avatar color="#1b4b8a">
                        <v-icon color="white">mdi-file-document</v-icon>
                      </v-avatar>
                    </template>

                    <v-list-item-title class="article-item-title">
                      {{ article.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ article.author }} • {{ article.submittedDate }}
                    </v-list-item-subtitle>

                    <template #append>
                      <div class="article-actions">
                        <v-btn
                          icon="mdi-eye"
                          size="small"
                          variant="text"
                          color="#1b4b8a"
                          @click="viewArticle(article.id)"
                        />
                        <v-btn
                          icon="mdi-check"
                          size="small"
                          variant="text"
                          color="success"
                          @click="approveArticle(article.id)"
                        />
                        <v-btn
                          icon="mdi-close"
                          size="small"
                          variant="text"
                          color="error"
                          @click="rejectArticle(article.id)"
                        />
                      </div>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>

            <!-- Recent Activity -->
            <v-card class="content-card mt-6" elevation="2">
              <v-card-title class="card-header">
                <v-icon class="mr-2" color="#1b4b8a">mdi-history</v-icon>
                So'nggi faoliyat
              </v-card-title>
              <v-card-text>
                <v-timeline side="end" density="compact">
                  <v-timeline-item
                    v-for="activity in recentActivities"
                    :key="activity.id"
                    :dot-color="activity.color"
                    size="small"
                  >
                    <div class="activity-item">
                      <strong>{{ activity.action }}</strong>
                      <p class="activity-detail">{{ activity.detail }}</p>
                      <span class="activity-time">{{ activity.time }}</span>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Quick Actions -->
          <v-col cols="12" lg="4">
            <v-card class="content-card" elevation="2">
              <v-card-title class="card-header">
                <v-icon class="mr-2" color="#1b4b8a">mdi-flash</v-icon>
                Tezkor harakatlar
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="action in quickActions"
                    :key="action.title"
                    class="quick-action-item"
                    @click="action.action"
                  >
                    <template #prepend>
                      <v-avatar :color="action.color">
                        <v-icon color="white">{{ action.icon }}</v-icon>
                      </v-avatar>
                    </template>
                    <v-list-item-title>{{ action.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ action.subtitle }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>

            <!-- Statistics Chart -->
            <v-card class="content-card mt-6" elevation="2">
              <v-card-title class="card-header">
                <v-icon class="mr-2" color="#1b4b8a">mdi-chart-line</v-icon>
                Oylik statistika
              </v-card-title>
              <v-card-text>
                <div class="chart-placeholder">
                  <v-icon size="64" color="#bdc3c7">mdi-chart-areaspline</v-icon>
                  <p class="text-center mt-4" style="color: #7f8c8d">
                    Statistika diagrammasi
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="confirmDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">
          {{ confirmAction === "approve" ? "Tasdiqlash" : "Rad etish" }}
        </v-card-title>
        <v-card-text>
          Maqolani {{ confirmAction === "approve" ? "tasdiqlashni" : "rad etishni" }}
          xohlaysizmi?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="confirmDialog = false">Bekor qilish</v-btn>
          <v-btn
            :color="confirmAction === 'approve' ? 'success' : 'error'"
            variant="text"
            @click="confirmActionHandler"
          >
            Tasdiqlash
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const stats = ref([
  {
    title: "Kutilayotgan",
    value: 8,
    icon: "mdi-clock-outline",
    color: "#f39c12",
  },
  {
    title: "Tasdiqlangan",
    value: 42,
    icon: "mdi-check-circle",
    color: "#2ecc71",
  },
  {
    title: "Nashr etilgan",
    value: 156,
    icon: "mdi-book-open-variant",
    color: "#1b4b8a",
  },
  {
    title: "Rad etilgan",
    value: 12,
    icon: "mdi-close-circle",
    color: "#e74c3c",
  },
]);

const pendingArticles = ref([
  {
    id: 1,
    title: "Zamonaviy ta'limda sun'iy intellekt",
    author: "Aliyev A.A.",
    submittedDate: "20.01.2024",
    category: "Pedagogika",
  },
  {
    id: 2,
    title: "Iqtisodiy o'sishda innovatsiyalar",
    author: "Karimov B.S.",
    submittedDate: "19.01.2024",
    category: "Iqtisodiyot",
  },
  {
    id: 3,
    title: "O'zbek adabiyotida modernizm",
    author: "Rahimova M.K.",
    submittedDate: "18.01.2024",
    category: "Filologiya",
  },
]);

const recentActivities = ref([
  {
    id: 1,
    action: "Maqola tasdiqlandi",
    detail: '"Raqamli iqtisodiyot" - Toshmatov B.S.',
    time: "2 soat oldin",
    color: "success",
  },
  {
    id: 2,
    action: "Yangi maqola yuborildi",
    detail: '"Pedagogik texnologiyalar" - Usmonova D.F.',
    time: "5 soat oldin",
    color: "info",
  },
  {
    id: 3,
    action: "Maqola rad etildi",
    detail: '"Tarixiy tadqiqot" - Mahmudov I.S.',
    time: "1 kun oldin",
    color: "error",
  },
  {
    id: 4,
    action: "Yangi son nashr etildi",
    detail: "1-son, 2024",
    time: "3 kun oldin",
    color: "primary",
  },
]);

const quickActions = ref([
  {
    title: "Yangi nashr yaratish",
    subtitle: "Yangi jurnal soni",
    icon: "mdi-plus-circle",
    color: "#1b4b8a",
    action: () => console.log("Create publication"),
  },
  {
    title: "Maqolalarni ko'rish",
    subtitle: "Barcha maqolalar",
    icon: "mdi-file-document-multiple",
    color: "#3498db",
    action: () => router.push("/admin/articles"),
  },
  {
    title: "Foydalanuvchilar",
    subtitle: "Mualliflar ro'yxati",
    icon: "mdi-account-group",
    color: "#9b59b6",
    action: () => router.push("/admin/users"),
  },
  {
    title: "Sozlamalar",
    subtitle: "Tizim sozlamalari",
    icon: "mdi-cog",
    color: "#95a5a6",
    action: () => router.push("/admin/settings"),
  },
]);

const confirmDialog = ref(false);
const confirmAction = ref("");
const selectedArticleId = ref(null);

const viewArticle = (id) => {
  router.push(`/admin/articles/${id}`);
};

const approveArticle = (id) => {
  selectedArticleId.value = id;
  confirmAction.value = "approve";
  confirmDialog.value = true;
};

const rejectArticle = (id) => {
  selectedArticleId.value = id;
  confirmAction.value = "reject";
  confirmDialog.value = true;
};

const confirmActionHandler = () => {
  if (confirmAction.value === "approve") {
    console.log("Approving article:", selectedArticleId.value);
    // API chaqiruvi: articleService.updateArticleStatus(selectedArticleId.value, 'approved')
  } else {
    console.log("Rejecting article:", selectedArticleId.value);
    // API chaqiruvi: articleService.updateArticleStatus(selectedArticleId.value, 'rejected')
  }
  confirmDialog.value = false;
};

const logout = () => {
  localStorage.removeItem("auth_token");
  router.push("/");
};
</script>

<style scoped>
.dashboard-view {
  background-color: #f8f9fa;
  min-height: 100vh;
   padding-top: 90px;
}

.dashboard-header {
  background: linear-gradient(135deg, #1b4b8a 0%, #2c3e50 100%);
  padding: 40px 0;
  color: white;
}

.dashboard-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
}

.dashboard-subtitle {
  font-size: 16px;
  opacity: 0.9;
}

.stats-section {
  padding: 32px 0;
}

.stat-card {
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-text {
  flex: 1;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4px;
}

.stat-title {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

.content-section {
  padding: 0 0 48px;
}

.content-card {
  border-radius: 12px;
}

.card-header {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  padding: 20px 24px;
  border-bottom: 1px solid #ecf0f1;
}

.article-item {
  border-bottom: 1px solid #ecf0f1;
  padding: 16px 0;
}

.article-item:last-child {
  border-bottom: none;
}

.article-item-title {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.article-actions {
  display: flex;
  gap: 4px;
}

.quick-action-item {
  border-bottom: 1px solid #ecf0f1;
  cursor: pointer;
  transition: background-color 0.2s;
}

.quick-action-item:hover {
  background-color: #f8f9fa;
}

.quick-action-item:last-child {
  border-bottom: none;
}

.activity-item {
  padding: 8px 0;
}

.activity-detail {
  color: #7f8c8d;
  font-size: 14px;
  margin: 4px 0;
}

.activity-time {
  color: #bdc3c7;
  font-size: 12px;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 8px;
}
</style>