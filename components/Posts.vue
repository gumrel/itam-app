<script setup lang="ts">
import { ref } from "vue";
import getPosts from "~/services/getPosts.ts";

const comments = ref([]);
const count = ref<Number>(5);

const fetchMorePosts = async () => {
  count.value += 5;
  fetchPosts(count.value);
};

const fetchPosts = async (limit: Number) => {
  const result = await getPosts(limit);
  comments.value = result.posts;
};

await fetchPosts(count.value);
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <div class="w-5/12 mx-auto mt-14">
    <div
      v-for="(comment, index) in comments"
      :key="index"
      class="flex justify-center mb-4 flex-col"
    >
      <p class="font-semibold text-3xl">{{ comment.title }}</p>
      <p class="text-xl font-light pt-2">{{ comment.body }}</p>
      <Post :comment="comment" />
    </div>
    <button
      class="mt-5 mb-5 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      @click="fetchMorePosts()"
    >
      load more
    </button>
  </div>
</template>
