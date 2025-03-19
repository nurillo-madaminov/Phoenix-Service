<script setup>
import HeaderPart from '@/components/HeaderPart.vue'
// import { posts, loading } from '@/stores/posts'
import { onMounted, computed } from 'vue'

import { usefetchPostsStore } from '@/stores/store'
const fetchPosts = usefetchPostsStore()

const posts = computed(() => fetchPosts.posts)
// const loading = computed(() => fetchPosts.loading)

onMounted(() => {
  if (fetchPosts.posts.length == 0) {
    fetchPosts.fetchPosts()
  }
})
</script>

<template>
  <HeaderPart title="Blog" />

  <div class="flex justify-center py-16">
    <div class="container flex justify-center py-10" v-if="fetchPosts.loading">
      <span class="loading loading-dots w-20"></span>
    </div>
    <div class="container" v-else>
      <div v-if="posts.length == 0">
        <h1 class="text-center text-5xl font-bold text-gray-400 py-10">¯\_(ツ)_/¯</h1>
        <p class="text-center text-xl font-semibold text-gray-400">No posts yet</p>
      </div>
      <div class="grid grid-cols-3 gap-x-12 gap-y-5">
        <div class="card bg-base-100 w-full shadow-xl border" v-for="post in posts" :key="post.id">
          <figure>
            <img :src="post.thumbnail" :alt="post.thumbnail" class="h-[300px] w-full" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <div class="card-actions justify-end">
              <router-link
                :to="{ name: 'postDetails', params: { id: post.id } }"
                class="btn btn-primary"
                >See more</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
