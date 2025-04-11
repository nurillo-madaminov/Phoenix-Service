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
      id: '',
      amount: null,
      price: null,
      type: null,
      typeLabel: null,
      product: null,
    },
    cart: [],
  }),
  getters: {
    getProductById: (state) => (id, type) => {
      // return state.cart.find((item) => item.id == id)
      return state.cart.find((item) => item.id === id && item.type === type)
    },
  },
  actions: {
    increaseAmount(id, type) {
      const product = this.getProductById(id, type)
      if (product) {
        product.amount++
      }
      product.price = product.amount * product.product.price
    },

    decreaseAmount(id, type) {
      const product = this.getProductById(id, type)
      if (product) {
        product.amount--
        product.price = product.amount * product.product.price
        if (product.amount <= 0) {
          this.cart = this.cart.filter((item) => !(item.id === id && item.type === type))
        }
      }
    },

    createOrUpdate(amount, id, type, typeLabel) {
      const products = useProductsStore()
      const product = this.getProductById(id, type)

      if (product) {
        product.amount += amount
        product.price = product.amount * product.product.price
        return
      }

      this.cartProduct.id = id
      this.cartProduct.amount = amount
      this.cartProduct.type = type
      this.cartProduct.typeLabel = typeLabel
      this.cartProduct.product = {
        title: products.getProductById(id).title,
        thumbnil: products.getProductById(id).thumbnil,
        price: products.getProductById(id).price,
      }
      this.cartProduct.price = this.cartProduct.amount * products.getProductById(id).price

      this.cart.push({ ...this.cartProduct })
    },
  },
  persist: true,
})

// amount * products.getProductById(id).price
