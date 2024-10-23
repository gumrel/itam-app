<script setup lang="ts">
import { ref } from "vue";
import type { IComments } from "../services/commentsTypes.ts";

const props = defineProps<{
  comments: IComments;
}>();

const localComments = ref([...props.comments.comments]);

const deleteComment = (id: number) => {
  localComments.value = localComments.value.filter(
    (comment) => comment.id !== id
  );
};
</script>

<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />

    <div class="w-5/12 mt-3">
      <p class="font-semibold text-3xl mt-10">
        {{ localComments.length }} комментарий(ев)
      </p>

      <div
        v-for="(comment, index) in localComments"
        :key="comment.id"
        class="flex mt-5"
      >
        <img class="h-12" src="~public/image.png" alt="" />
        <div class="ml-5">
          <p class="font-bold text-lg">{{ comment.user.fullName }}</p>
          <p class="text-lg">{{ comment.body }}</p>
          <div class="flex">
            <p class="text-sm text-gray-300">Today</p>
            <p
              class="text-sm ml-3 text-red-500 cursor-pointer"
              @click="deleteComment(comment.id)"
            >
              delete
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
