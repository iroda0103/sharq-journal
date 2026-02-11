<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="gradient-overlay"></div>
        <!-- Floating Animation Elements -->
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
          <div class="shape shape-6"></div>
        </div>
      </div>
      <v-container class="hero-container">
        <v-row align="center" justify="center">
          <v-col cols="12" lg="6" class="hero-content">
            <h1 class="hero-title fade-in">
              {{ t("home.title") }}
            </h1>
            <p class="hero-subtitle fade-in">
              {{ t("home.subtitle") }}
            </p>
            <div class="hero-actions fade-in">
              <v-btn
                to="/maqolalar"
                color="white"
                size="x-large"
                elevation="0"
                class="hero-btn primary-btn"
              >
                {{ t("home.viewArticles") }}
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                to="/submit"
                variant="outlined"
                size="x-large"
                color="white"
                class="hero-btn secondary-btn"
              >
                {{ t("home.submitArticle") }}
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" lg="6" class="hero-image-col">
            <div class="hero-image-wrapper fade-in">
              <div class="image-glow"></div>
              <img
                src="@/assets/main-img.png"
                alt="Journal"
                class="hero-image"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Stats Section -->
    <StatsSection />

    <!-- Latest Publications -->
    <LatestPublications />

    <!-- Features Section -->
    <!-- <FeaturesSection /> -->
    <FuturedArticles></FuturedArticles>

  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import StatsSection from "../components/home/StatsSection.vue";
import LatestPublications from "../components/home/LatestPublications.vue";
import FeaturesSection from "../components/home/FuturesSection.vue";
import FuturedArticles from "../components/home/FuturedArticles.vue";

const { t } = useI18n();
</script>

<style>
.home-view {
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(var(--v-theme-surface), 0.3) 0%, rgba(var(--v-theme-surface), 0.5) 100%);
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
}

/* Floating Shapes Animation */
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  background: rgba(var(--v-theme-on-surface), 0.02);
  border-radius: 50%;
  filter: blur(2px);
  animation: float-around 20s infinite ease-in-out;
}

.shape-1 {
  width: 400px;
  height: 400px;
  top: -50px;
  left: -100px;
  animation-duration: 25s;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  top: 40%;
  right: -50px;
  animation-duration: 20s;
  animation-delay: 2s;
}

.shape-3 {
  width: 200px;
  height: 200px;
  bottom: 10%;
  left: 10%;
  animation-duration: 22s;
  animation-delay: 4s;
}

.shape-4 {
  width: 350px;
  height: 350px;
  top: 20%;
  right: 10%;
  animation-duration: 28s;
  animation-delay: 1s;
}

.shape-5 {
  width: 250px;
  height: 250px;
  bottom: 20%;
  right: 25%;
  animation-duration: 24s;
  animation-delay: 3s;
}

.shape-6 {
  width: 180px;
  height: 180px;
  top: 60%;
  left: 30%;
  animation-duration: 26s;
  animation-delay: 5s;
}

@keyframes float-around {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translate(50px, -50px) rotate(90deg);
    opacity: 0.5;
  }
  50% {
    transform: translate(-30px, 30px) rotate(180deg);
    opacity: 0.4;
  }
  75% {
    transform: translate(30px, 50px) rotate(270deg);
    opacity: 0.6;
  }
}

.hero-container {
  max-width: 1400px;
  position: relative;
  z-index: 1;
  padding: 60px 24px;
}

.hero-content {
  color: white;
  padding: 40px 0;
  color: #052281FF;
}

.hero-title {
  font-size: clamp(30px, 6vw, 62px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 32px;
  color: rgb(var(--v-theme-primary));
  /* color: rgba(2, 2, 179, 0.71); */
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}
.hero-subtitle {
  font-size: clamp(18px, 2.5vw, 22px);
  line-height: 1.7;
  margin-bottom: 48px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-btn {
  text-transform: none;
  font-weight: 700;
  /* letter-spacing: 0; */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  padding: 14px 40px !important;
  height: 56px !important;
  font-size: 16px;
}

.primary-btn {
  background: white !important;
  color: #667eea !important;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.2);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.3);
}

.secondary-btn {
  border: 2px solid white !important;
  color: white !important;
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px);
}

.secondary-btn:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.2);
}

.hero-image-col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}

.hero-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px;
  z-index: 2;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  filter: blur(40px);
  z-index: -1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4));
  animation: float-smooth 6s ease-in-out infinite;
}

@keyframes float-smooth {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(2deg);
  }
}

/* Fade in animation */
.fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in:nth-child(1) {
  animation-delay: 0.2s;
}

.fade-in:nth-child(2) {
  animation-delay: 0.4s;
}

.fade-in:nth-child(3) {
  animation-delay: 0.6s;
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
@media (max-width: 1264px) {
  .hero-section {
    min-height: auto;
    padding-top: 70px;
  }

  .hero-container {
    padding: 40px 24px;
  }

  .hero-title {
    font-size: clamp(36px, 8vw, 56px);
  }

  .hero-subtitle {
    font-size: clamp(16px, 3vw, 20px);
  }
}

@media (max-width: 960px) {
  .hero-content {
    text-align: center;
    padding: 20px 0;
  }

  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .shape {
    opacity: 0.3;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding-top: 60px;
  }

  .hero-container {
    padding: 30px 16px;
  }

  .hero-title {
    margin-bottom: 24px;
  }

  .hero-subtitle {
    margin-bottom: 32px;
  }

  .hero-btn {
    width: 100%;
    justify-content: center;
  }

  .hero-actions {
    flex-direction: column;
    gap: 16px;
  }
}
</style>