import { defineStore } from 'pinia'
import axios from 'axios'

const binID = '678c3a55e41b4d34e47a5b8d'
const accessKey = '$2a$10$x8BZ5T6mMEf7AAxKbEiqVufcon3S6eyGLpMxEFen5q9eb62WK08yW'

// axios
//   .get(`https://api.jsonbin.io/v3/b/${binID}`, {
//     headers: {
//       'X-Access-Key': accessKey,
//     },
//   })
//   .then((response) => console.log(response.data.record))
//   .catch((error) => console.log(error))

export const useFetchedPosts = defineStore('fetchPosts', {
  state: () => ({
    posts: [],
    isLoading: false,
    error: null,
  }),
  getters: {
    userCount: (state) => state.users.length,
  },
  actions: {
    fetchPosts() {
      axios
        .get(`https://api.jsonbin.io/v3/b/${binID}`, {
          headers: {
            'X-Access-Key': accessKey,
          },
        })
        .then((response) => (this.posts = response.records))
        .catch((error) => console.log(error))
      //   this.isLoading = true
      //   try {
      //     const response = await fetch(`https://api.jsonbin.io/v3/b/${binID}`, header)
      //     this.users = response.json()
      //   } catch (err) {
      //     this.error = err.message
      //   } finally {
      //     this.isLoading = false
      //   }
    },
  },
})
