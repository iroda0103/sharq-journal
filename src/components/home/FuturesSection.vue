<template>
  <section class="features-section">
    <v-container>
      <div class="section-header">
        <h2 class="section-title">{{ t("home.whyUs") }}</h2>
        <p class="section-subtitle">
          Discover what makes our journal the best choice for your research
        </p>
      </div>

      <v-row class="features-row">
        <v-col
          v-for="(feature, index) in features"
          :key="feature.title"
          cols="12"
          md="4"
        >
          <div
            class="feature-card"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="feature-icon-wrapper" :style="{ background: feature.gradient }">
              <v-icon color="white" size="48">{{ feature.icon }}</v-icon>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
            <div class="feature-hover-effect"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const features = ref([
  {
    icon: "mdi-clock-fast",
    title: "Fast Review",
    description: "Articles are reviewed by specialists within 2-4 weeks, ensuring quick publication.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: "mdi-shield-check",
    title: "Quality Control",
    description: "All articles go through a rigorous two-stage peer-review process for excellence.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: "mdi-web",
    title: "Open Access",
    description: "All publications are freely available online, maximizing your research impact.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
]);
</script>

<style scoped>
.features-section {
  padding: 100px 0 120px;
  background: linear-gradient(180deg, 
    rgba(102, 126, 234, 0.03) 0%, 
    transparent 50%,
    rgba(102, 126, 234, 0.03) 100%
  );
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 900;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 20px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  margin: 0;
  line-height: 1.6;
}

.features-row {
  gap: 32px 0;
}

.feature-card {
  position: relative;
  background: rgb(var(--v-theme-surface));
  border-radius: 24px;
  padding: 48px 36px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.25);
  border-color: rgba(102, 126, 234, 0.3);
}

.feature-hover-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.feature-card:hover .feature-hover-effect {
  transform: scale(1);
}

.feature-icon-wrapper {
  width: 96px;
  height: 96px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.15) rotate(-5deg);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
}

.feature-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 2;
}

.feature-title {
  font-size: 26px;
  font-weight: 800;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
  line-height: 1.3;
}

.feature-description {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(var(--v-theme-on-surface), 0.7);
  margin: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .features-section {
    padding: 80px 0 100px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: clamp(28px, 6vw, 40px);
  }

  .section-subtitle {
    font-size: 18px;
  }

  .feature-card {
    padding: 40px 28px;
  }

  .feature-icon-wrapper {
    width: 80px;
    height: 80px;
  }

  .feature-title {
    font-size: 24px;
  }

  .feature-description {
    font-size: 15px;
  }
}

@media (max-width: 600px) {
  .features-section {
    padding: 60px 0 80px;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .feature-card {
    padding: 32px 24px;
  }

  .feature-icon-wrapper {
    width: 72px;
    height: 72px;
  }

  .feature-title {
    font-size: 22px;
  }
}
</style>
