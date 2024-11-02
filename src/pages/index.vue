<script setup>
import httpService from '~/services/httpService';

const request = async () => {
	const result = await httpService.get('https://yesno.wtf/api');
	console.log(result);
};
</script>

<template>
	<p class="mt-5">start</p>
	<button
		class="btn btn-active btn-primary btn-sm"
		@click="request()"
	>
		Primary
	</button>
	<NuxtLink to="/body">body</NuxtLink>
</template>
