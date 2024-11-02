<script setup lang="ts">
const route = useRoute();

if (!route.path.includes("/auth")) {
  // console.log("auth");
}

useHead({
  title: "itam-app",
});
</script>

<template>
  <div id="#app">
    <div>hi</div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtLayout> -->
    <NuxtPage />
    <!-- </NuxtLayout> -->
  </div>
</template>
