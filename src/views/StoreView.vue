<script setup>
import { RouterLink } from 'vue-router'
import img from '@/assets/pics/services/image_2024-10-31_16-23-37_RLXauhf.png'

import { computed, onMounted } from 'vue'
import { useProductsStore } from '@/stores/store'

const useProducts = useProductsStore()
const products = computed(() => useProducts.products)
const loading = computed(() => useProducts.loading)

onMounted(() => {
  if (useProducts.products.length == 0) {
    useProducts.fetchProducts()
  }
})
</script>

<template>
  <div
    :style="{
      '--bg-image-url': `url(${img})`,
    }"
    class="z-10 bg-cover bg-[image:--bg-image-url] bg-[position:left_center] h-[40vh] before:absolute before:-z-10 before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] relative flex justify-center items-center flex-col text-white"
  >
    <div class="text-center">
      <h1 class="text-4xl font-semibold tracking-wide">Store</h1>
      <p class="text-xl"><router-link :to="{ name: 'home' }">Home</router-link> / Store</p>
    </div>
  </div>
  <div class="flex justify-center py-16">
    <!-- <div class="container">
      <div class="grid grid-cols-3 gap-y-10 px-20 place-items-center">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" v-for="product in products" :key="product.id">
          <div class="card bg-base-100 w-96 shadow-sm border relative overflow-hidden">
            <figure>
              <img
                src="https://images.squarespace-cdn.com/content/v1/63a38c1293202a2319aea5e2/1671730374768-ATL8O4IM71YWTEY63H1H/1.jpg"
                alt="PT30"
              />
            </figure>
            <div class="card-body !text-center absolute w-full bottom-0">
              <h2 class="font-bold text-xl">PT30 ELD Device</h2>
              <p>$159.99</p>
            </div>
          </div>
        </router-link>
      </div>
    </div> -->
    <div class="container flex justify-center py-10" v-if="loading">
      <span class="loading loading-dots w-20"></span>
    </div>
    <div class="container" v-else>
      <div
        class="grid grid-cols-3 gap-10 px-20 place-items-center max-[1280px]:grid-cols-2 max-[1024px]:gap-5 max-[1024px]:px-10 max-[769px]:grid-cols-1 max-[769px]:px-8"
      >
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          v-for="product in products"
          :key="product.id"
        >
          <div
            class="card bg-base-100 h-[500px] max-[1280px]:h-[480px] max-[1024px]:h-[400px] flex justify-center shadow-sm border relative overflow-hidden"
          >
            <figure class="rounded-none">
              <img :src="product.thumbnil" alt="PT30" />
            </figure>
            <div class="card-body !text-center absolute w-full bottom-0">
              <h2 class="font-bold text-xl">{{ product.title }}</h2>
              <p>${{ product.price }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
