<template>
  <div class="social-links">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
      :aria-label="social.name"
    >
      <v-icon>{{ social.icon }}</v-icon>
    </a>
  </div>
</template>

<script setup>
const socialLinks = [
  { name: "Facebook", icon: "mdi-facebook", url: "https://www.facebook.com/sharquniversiteti" },
  { name: "Instagram", icon: "mdi-instagram", url: "https://www.instagram.com/sharquniversiteti" },
  { name: "Telegram", icon: "mdi-telegram", url: "https://t.me/sharquniversiteti" },
  { name: "YouTube", icon: "mdi-youtube", url: "https://www.youtube.com/@sharquniversiteti" },
  { name: "LinkedIn", icon: "mdi-linkedin", url: "https://linkedin.com/in/sharquniversiteti" },
];
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}
</style>