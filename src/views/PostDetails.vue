<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import img from '@/assets/pics/bg.webp'

import { usefetchPostsStore } from '@/stores/store'
import router from '@/router'
const getPosts = usefetchPostsStore()

const header = ref(null)

const post = computed(() => {
  return getPosts.getPostById(route.params.id)
})

onMounted(() => {
  if (getPosts.posts.length == 0) {
    getPosts.fetchPosts()
  }
  header.value.style = `
    background-image: url(${img});
    background-size: cover;    
    background-position: center left;
  `
})
</script>

<template>
  <div>
    <div v-if="getPosts.loading" class="flex justify-center min-h-[80vh] bg-gray-300">
      <span class="loading loading-dots w-20"></span>
    </div>
    <div v-else>
      <div
        class="h-[40vh] flex justify-center items-center relative before:content-[''] before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-black before:to-[rgba(0,0,0,.5)]"
        ref="header"
      >
        <h1 class="text-4xl font-bold text-white z-10 text-center max-[769px]:text-3xl max-[468px]:text-2xl">{{ post?.title }}</h1>
      </div>
      <div class="flex justify-center py-16">
        <div class="w-full max-w-[1000px] px-5">
          <div class="flex justify-between mb-8">
            <div
              class="w-12 h-12 flex justify-center items-center border-2 rounded-full active:outline active:outline-[gray]"
              @click="router.go(-1)"
            >
              <i class="fa-solid fa-arrow-left"></i>
            </div>

            <div>
              <p>{{ post?.updated_at.substring(0, 10) }}</p>
            </div>
          </div>
          <div class="mt-5 text-lg text-justify  m-auto" v-html="post?.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
