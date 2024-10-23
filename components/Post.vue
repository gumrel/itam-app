<script setup lang="ts">
import type { IPost } from "../services/commentsTypes.ts";

import { ref } from "vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import getComments from "~/services/getComments.ts";

const props = defineProps<{
  comment: IPost;
}>();

const fetchComments = async (id: Number) => {
  const url = `/comment/${id}`;
  window.open(url, "_blank");
};
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <div class="mt-4 flex">
    <button
      class="flex items-center px-2 py-1 bg-gray-200 text-black font-light rounded-xl shadow-md hover:bg-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-opacity-75"
    >
      <HeartIcon class="w-5 h-5 mr-2" />
      Like
      <p class="ml-2 text-center font-thin text-gray-600">
        {{ props?.comment?.reactions?.likes }}
      </p>
    </button>

    <button
      class="flex items-center px-2 py-1 ml-1 bg-gray-200 text-black font-light rounded-xl shadow-md hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-75"
    >
      <img src="~public/dislike.png" class="w-4 mr-2" />
      Trash
      <p class="ml-2 text-center font-thin text-gray-600">
        {{ props?.comment?.reactions?.dislikes }}
      </p>
    </button>

    <p
      @click="fetchComments(props?.comment?.id)"
      style="color: #ff6b00"
      class="pt-1 ml-2 cursor-pointer"
    >
      Open Comments
    </p>
    <p class="pt-1 ml-2 text-gray-300">Today</p>

    <div v-for="(tag, i) in props.comment.tags" :key="index" class="flex">
      <p class="pt-1 p-1 ml-2 text-black font-light bg-gray-100">{{ tag }}</p>
    </div>
  </div>
</template>
