<template>
  <div class="header-wrapper">
    <v-app-bar :elevation="isScrolled ? 4 : 0" :class="['app-header', { scrolled: isScrolled }]" :color="headerColor"
      app>
      <v-container class="header-container">
        <div class="header-content">
          <!-- Logo -->
          <router-link to="/" class="logo-wrapper" :style="logoFilterStyle">
            <img :src="logo" alt="Sharq University" class="logo" />
          </router-link>


          <!-- Desktop Navigation -->
          <nav class="desktop-nav d-none d-lg-flex">
            <v-btn v-for="item in navigation" :key="item.path" :to="item.path" variant="text" class="nav-btn"
              :ripple="false">
              {{ item.label }}
            </v-btn>
          </nav>

          <!-- Actions -->
          <div class="header-actions">
            <!-- Search Toggle -->
            <v-btn icon variant="text" class="action-btn" @click="toggleSearch">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <!-- Language Selector -->
            <LanguageSelector />

            <!-- Theme Toggle -->
            <ThemeToggle />

            <!-- Mobile Menu -->
            <v-btn icon variant="text" class="action-btn d-lg-none" @click="drawer = true">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </div>
        </div>
      </v-container>

      <!-- Mobile Drawer -->
      <MobileDrawer v-model="drawer" :navigation="navigation" />
    </v-app-bar>

    <!-- Search Bar -->
    <SearchBar :show="showSearch" @close="showSearch = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";
import logo from "@/assets/logo_sharq_blue.png";
// import logo from "@/assets/logo_sharq.webp";
import SearchBar from "./SearchBar.vue";
import ThemeToggle from "../../common/ThemeToggle.vue";
import LanguageSelector from "../../common/LanguageSelector.vue";
import MobileDrawer from "./MobileDriver.vue";

const { t } = useI18n();
const theme = useTheme();

const drawer = ref(false);
const showSearch = ref(false);
const isScrolled = ref(false);

const navigation = computed(() => [
  { label: t("nav.home"), path: "/" },
  { label: t("nav.about"), path: "/jurnal-haqida" },
  { label: t("nav.publications"), path: "/nashrlar" },
  { label: t("nav.articles"), path: "/maqolalar" },
  { label: t("nav.editorial"), path: "/tahririyat" },
  { label: t("nav.submit"), path: "/submit" },
]);

const logoFilterStyle = computed(() => ({
  filter: theme.global.current.value.dark ? "brightness(0) invert(1)" : "none",
}));

const headerColor = computed(() => {
  if (!isScrolled.value) return "transparent";
  return theme.global.current.value.dark ? "#1D2939" : "#ffffff";
});

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.header-wrapper {
  position: relative;
}

.app-header {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 15px 0;
  /* backdrop-filter: blur(10px); */
}

.app-header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.header-container {
  /* max-width: 1400px; */
  /* padding: 20px 24px; */
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 80px; */
  /* padding: 40px 0; */
  gap: 32px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-wrapper:hover {
  transform: scale(1.05);
}

.logo {
  /* height: 45px; */
  width: 170px;
  /* width: auto; */
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.nav-btn {
  font-weight: 500;
  font-size: 15px;
  text-transform: none;
  /* letter-spacing: 0; */
  position: relative;
  padding: 10px 30px;
  transition: all 0.3s ease;
}

.nav-btn::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  top: 0;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.nav-btn:hover::after,
.nav-btn.v-btn--active::after {
  transform: translateX(-50%) scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-btn {
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 1264px) {
  .header-content {
    /* height: 70px; */
  }

  .logo {
    /* height: 40px; */
  }
}

@media (max-width: 600px) {
  .header-container {
    /* padding: 0 16px; */
  }
}
</style>