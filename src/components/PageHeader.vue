<template>
  <section class="page-header">
    <div class="header-overlay"></div>
    <v-container>
      <div class="header-content">
        <div class="breadcrumb" v-if="showBreadcrumb">
          <router-link to="/" class="breadcrumb-link">
            <v-icon size="small">mdi-home</v-icon>
          </router-link>
          <v-icon size="small" class="breadcrumb-divider">mdi-chevron-right</v-icon>
          <span class="breadcrumb-current">{{ title }}</span>
        </div>
        <h1 class="page-title">{{ title }}</h1>
        <p class="page-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
    </v-container>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  showBreadcrumb: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1b4b8a 0%, #2c3e50 100%);
  background-image: url('@/assets/banner.jpg');
  background-position: center;
  background-size: cover;
  position: relative;
  /* padding: 30px 0; */
  height: 170px;
  color: white;
  z-index: 1;
}

.header-overlay {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(1, 2, 3, 0.4) 0%, #162347 100%);
  z-index: -1;
}

.header-content {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 30px;
  text-align: center;
  gap: 10px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  /* margin-bottom: 16px; */
  font-size: 14px;
  opacity: 0.9;
}

.breadcrumb-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
}

.breadcrumb-link:hover {
  opacity: 0.8;
}

.breadcrumb-divider {
  opacity: 0.6;
}

.breadcrumb-current {
  opacity: 0.9;
}

.page-title {
  font-size: 30px;
  /* font-size: clamp(28px, 5vw, 38px); */
  font-weight: 700;
  /* margin-bottom: 8px; */
  line-height: 1.2;
}

.page-subtitle {
  font-size: 16px;
  opacity: 0.95;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .page-header {
    padding: 40px 0 30px;
  }
}
</style>