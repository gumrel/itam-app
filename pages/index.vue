<script setup lang="ts">
import Comments from "~/components/Comments.vue";

useHead({
  title: "ikakprosto.ru",
});
// const route = useRoute();
// const authStore = useAuthStore();
</script>

<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <NuxtRouteAnnouncer />
    <h1 style="color: #ff6b00" class="text-4xl font-bold text-center mt-5">
      ikakprosto.ru
    </h1>
    <Posts />
  </div>
</template>
