<script setup lang="ts">
import getPostId from "~/services/getPostId.ts";
import getComments from "~/services/getComments.ts";
import { useRoute } from "vue-router";

const route = useRoute();
const commentId = Number(route.params.id);

const posts = ref([]);
const comments = ref([]);

if (!isNaN(commentId) && commentId > 0) {
  const fetchPosts = async (limit: number) => {
    const result = await getPostId(limit);
    posts.value = result;

    const get_comments = await getComments(limit);
    comments.value = get_comments;
    console.log(comments);
  };

  await fetchPosts(commentId);
} else {
  console.error("ID комментария не число");
}
</script>
<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="flex justify-center mt-5 mb-14">
      <NuxtLink to="/" style="color: #ff6b00" class="text-4xl font-bold"
        >ikakprosto.ru</NuxtLink
      >
    </div>
    <div class="w-5/12 mx-auto">
      <div class="flex justify-center mb-4 flex-col">
        <p class="font-semibold text-3xl">{{ posts.title }}</p>
        <p class="text-xl font-light pt-2">{{ posts.body }}</p>

        <Post :comment="posts" />
        <Comment :comments="comments" />
      </div>
    </div>
  </div>
</template>
