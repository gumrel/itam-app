<script setup lang="ts">
import { useThemeStore } from '~/stores/themeStore.ts';

const route = useRoute();
const themeStore = useThemeStore();

onMounted(() => {
	document.documentElement.setAttribute('data-theme', themeStore.themeName || 'dark');
});

if (route.path.includes('/adminPanel')) {
	// console.log('check');
}

useHead({
	title: 'itam-app',
});
</script>

<template>
	<div id="#app">
		<TopBar />

		<NuxtRouteAnnouncer />
		<!-- <NuxtLayout> -->
		<NuxtPage />
		<!-- </NuxtLayout> -->
	</div>
</template>
