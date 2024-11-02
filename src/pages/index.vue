<script setup>
import { useThemeStore } from "~/stores/themeStore.ts";

const themeStore = useThemeStore();

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>

<template>
  <p class="mt-5">start</p>
  <button class="btn btn-active btn-ghost">Ghost</button>
  <button class="btn btn-active btn-link">Link</button>
  <NuxtLink to="/body">body</NuxtLink>
  <button class="btn btn-info btn-sm">Info</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-error">Error</button>
  <button class="btn btn-active btn-primary btn-sm" @click="toggleTheme()">
    Primary
  </button>
</template>
