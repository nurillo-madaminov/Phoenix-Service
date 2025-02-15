import { defineStore } from 'pinia'
import axios from 'axios'

export const usefetchPostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      try {
        const binID = '678c3a55e41b4d34e47a5b8d'
        const XAccessKey = '$2a$10$x8BZ5T6mMEf7AAxKbEiqVufcon3S6eyGLpMxEFen5q9eb62WK08yW'

        const response = await axios.get(`https://api.jsonbin.io/v3/b/${binID}`, {
          headers: {
            'X-Access-Key': XAccessKey,
          },
        })
        this.posts = response.data.record
        this.loading = true
        // posts.value = response.data.record
        // loading.value = false
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    },
  },
})
