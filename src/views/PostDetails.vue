<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import img from '@/assets/pics/bg.webp'

import { usefetchPostsStore } from '@/stores/store'
import router from '@/router'
const fetchPosts = usefetchPostsStore()

const header = ref(null)

const posts = computed(() => fetchPosts.posts)
const filteredPost = ref([])

onMounted(() => {
  filteredPost.value = posts.value.find((item) => item.id == route.params.id)
  header.value.style = `
    background-image: url(${img});
    background-size: cover;    
    background-position: center left;
  `
})
</script>

<template>
  <div
    class="h-[40vh] flex justify-center items-center relative before:content-[''] before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-black before:to-[rgba(0,0,0,.5)]"
    ref="header"
  >
    <h1 class="text-4xl font-bold text-white z-10">{{ filteredPost.title }}</h1>
  </div>
  <div class="flex justify-center py-16">
    <div class="container">
      <div class="flex justify-between">
        <div class="w-12 h-12 flex justify-center items-center border-2 rounded-full active:outline active:outline-[gray]" @click="router.go(-1)">
          <i class="fa-solid fa-arrow-left"></i>
        </div>

        <div>
          <h1 class="font-semibold">{{ filteredPost.author }}</h1>
          <p>{{ filteredPost.publishedAt }}</p>
        </div>
      </div>
      <p class="mt-5 text-lg text-justify">{{ filteredPost.content }}</p>
    </div>
  </div>
</template>
