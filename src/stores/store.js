// import supabase from '@/supabaseClient'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    },
  },
  actions: {
    async fetchProducts() {
      try {
        this.loading = true
        const req = await axios.get('https://phoenix.serveo.net/api/products/') ///all good with code
        this.products = req.data
        // console.log(req.data)
        this.loading = false
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
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id == id)
    },
  },
  actions: {
    async fetchPosts() {
      try {
        this.loading = true
        const req = await axios.get('https://phoenix.serveo.net/api/blogs')
        this.posts = req.data
        // console.log(req.data)
        this.loading = false
      } catch (err) {
        console.error('Error fetching data: 2 ', err)
        this.error = err
      }
    },
  },
})

export const useOrderFromStore = defineStore('orderProduct', {
  state: () => ({
    cartProduct: {
      amount: null,
      id: '',
      product: null,
    },
    cart: [],
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.cart.find((item) => item.id == id)
    },
  },
  actions: {
    createOrUpdate(amount, id) {
      const product = this.getProductById(id);
      if (product){ product.amount += amount ; return }

      
      this.cartProduct.amount = amount.value
      this.cartProduct.id = id
      const product = userProduct(id);
    
      this.cart.push({ ...this.cartProduct })
      // console.log('cart', this.cart)
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
