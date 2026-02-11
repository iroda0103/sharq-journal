<template>
  <div class="contact-info">
    <div
      v-for="contact in contacts"
      :key="contact.text"
      class="contact-item"
    >
      <v-icon size="20">{{ contact.icon }}</v-icon>
      <span>{{ contact.text }}</span>
    </div>
  </div>
</template>

<script setup>
const contacts = [
  { icon: "mdi-map-marker", text: "Navoiy viloyati, O'zbekiston" },
  { icon: "mdi-phone", text: "+998 (79) 222-07-00" },
  { icon: "mdi-email", text: "journal@sharqedu.uz" },
  { icon: "mdi-web", text: "www.sharqedu.uz" },
];
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.contact-item:hover {
  opacity: 1;
}
</style>