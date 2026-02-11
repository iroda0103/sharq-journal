<template>
  <footer class="app-footer">
    <v-container>
      <v-row>
        <!-- University Info -->
        <v-col cols="12" md="4">
          <div class="footer-section">
            <img :src="logo" alt="Sharq University" class="footer-logo" />
            <p class="footer-description">
              {{ t("footer.description") }}
            </p>
            <SocialLinks />
          </div>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="12" sm="6" md="4">
          <div class="footer-section">
            <h3 class="footer-title">{{ t("footer.quickLinks") }}</h3>
            <QuickLinks />
          </div>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" sm="6" md="4">
          <div class="footer-section">
            <h3 class="footer-title">{{ t("footer.contact") }}</h3>
            <ContactInfo />
          </div>
        </v-col>
      </v-row>

      <v-divider class="footer-divider" />

      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} {{ t("footer.university") }}. {{ t("footer.allRights") }}
        </p>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import logo from "@/assets/logo_sharq_blue.png";
import SocialLinks from "../../common/SocialLinks.vue";
import QuickLinks from "../../common/QuickLinks.vue";
import ContactInfo from "../../common/ContactInfo.vue";

const { t } = useI18n();
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background: linear-gradient(135deg, #171a1d 0%, #1D2939 100%);

  color: white;
  padding: 60px 0 20px;
  margin-top: 80px;
}

.theme--dark .app-footer {
  background: linear-gradient(135deg, #171a1d 0%, #1D2939 100%);
}

.footer-section {
  padding: 0 16px;
}

.footer-logo {
  height: 50px;
  width: auto;
  margin-bottom: 20px;
  filter: brightness(0) invert(1);
}

.footer-description {
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 24px;
}

.footer-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 12px;
}

.footer-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

.footer-divider {
  margin: 40px 0 24px;
  opacity: 0.2;
}

.footer-bottom {
  text-align: center;
}

.copyright {
  font-size: 14px;
  opacity: 0.8;
  margin: 0;
}

@media (max-width: 960px) {
  .app-footer {
    padding: 40px 0 20px;
  }
}
</style>