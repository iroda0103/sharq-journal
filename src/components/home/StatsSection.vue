<template>
  <section class=" stats-section container">
    <div>
      <v-row class="stats-row">
        <v-col
          v-for="(stat, index) in stats"
          :key="stat.key"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="stat-card"
            :style="{ 
              animationDelay: `${index * 0.1}s`,
              '--gradient': stat.gradient 
            }"
            elevation="0"
          >
            <div class="stat-content">
              <div class="stat-icon-container">
                <div class="stat-icon-bg" :style="{ background: stat.gradient }">
                  <v-icon :icon="stat.icon" size="32" color="white" />
                </div>
              </div>
              
              <div class="stat-details">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-title">{{ t(`stats.${stat.key}`) }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";

const { t } = useI18n();
const theme = useTheme();

const isDark = computed(() => theme.global.current.value.dark);

const stats = ref([
  {
    key: "articles",
    value: "28",
    icon: "mdi-file-document-multiple",
    gradient: "linear-gradient(135deg, #052281 0%, #0a3aa8 100%)",
  },
  {
    key: "authors",
    value: "30+",
    icon: "mdi-account-group",
    gradient: "linear-gradient(135deg, #052281 0%, #073596 100%)",
  },
  {
    key: "publications",
    value: "1",
    icon: "mdi-book-open-variant",
    gradient: "linear-gradient(135deg, #0a3aa8 0%, #0d4dbf 100%)",
  },
]);
</script>

<style scoped>
.stats-section {
  padding: 80px 0;
  position: relative;
  background: transparent;
}

.stats-row {
  gap: 20px;
  flex-wrap: nowrap;
}

.stat-card {
  background: rgb(var(--v-theme-surface));
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(var(--v-theme-primary), 0.2);
  border-color: rgba(var(--v-theme-primary), 0.3);
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat-icon-container {
  flex-shrink: 0;
}

.stat-icon-bg {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(5, 34, 129, 0.2);
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon-bg {
  transform: scale(1.05);
}

.stat-details {
  flex: 1;
  min-width: 0;
}

.stat-value {
  font-size: 36px;
  font-weight: 800;
  color: rgb(var(--v-theme-primary));
  line-height: 1.2;
  margin-bottom: 4px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.stat-title {
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--v-theme-on-surface), 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.4;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 960px) {
  .stats-section {
    padding: 60px 0;
  }

  .stat-card {
    padding: 28px 20px;
  }

  .stat-icon-bg {
    width: 56px;
    height: 56px;
  }

  .stat-value {
    font-size: 32px;
  }

  .stat-title {
    font-size: 13px;
  }
}

@media (max-width: 600px) {
  .stats-section {
    padding: 48px 0;
  }

  .stat-card {
    padding: 24px 20px;
  }

  .stat-content {
    gap: 16px;
  }

  .stat-icon-bg {
    width: 52px;
    height: 52px;
  }

  .stat-value {
    font-size: 28px;
  }

  .stat-title {
    font-size: 12px;
  }
}

@media (max-width: 400px) {
  .stat-value {
    font-size: 24px;
  }
  
  .stat-icon-bg {
    width: 48px;
    height: 48px;
  }
}
</style>