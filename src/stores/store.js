import supabase from '@/supabaseClient'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const req = await axios.get('https://052b-195-158-24-172.ngrok-free.app/api/products/') ///all good with code 
        this.products = req.data
        this.loading = true
        console.log(req.data);
      } catch (err) {
        console.log('fetch products error : ', err)
      }
    },
  },
})

export const usefetchPostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    error: '',
    loading: false,
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      try {
        const { data, error } = await supabase.from('posts').select()
        if (error) {
          console.error('Error fetching data: 1 ', error)
          this.error = error.message
        } else {
          this.posts = data
          console.log(data)
          console.log(this.error)
        }
      } catch (err) {
        console.error('Error fetching data: 2 ', err)
        this.error = err
      } finally {
        this.loading = true
      }
    },
  },
})

// const binID = '678c3a55e41b4d34e47a5b8d'
// const XAccessKey = '$2a$10$x8BZ5T6mMEf7AAxKbEiqVufcon3S6eyGLpMxEFen5q9eb62WK08yW'

// const response = await axios.get(`https://api.jsonbin.io/v3/b/${binID}`, {
//   headers: {
//     'X-Access-Key': XAccessKey,
//   },
// })
// this.posts = response.data.record
// posts.value = response.data.record
// loading.value = false
