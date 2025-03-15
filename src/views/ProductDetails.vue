<script setup>
import img from '@/assets/pics/services/image_2024-10-31_16-23-37_RLXauhf.png'
import { useRoute, RouterLink } from 'vue-router'
import { useProductsStore } from '@/stores/store'
import { onMounted, ref } from 'vue'

const route = useRoute()
const useProducts = useProductsStore()
//useProducts.getProductById(route.params.id).content
const product = ref(useProducts.getProductById(route.params.id))

onMounted(() => {
  useProducts.fetchProducts()
})
</script>

<template>
  <div
    :style="{
      '--bg-image-url': `url(${img})`,
    }"
    class="z-10 bg-cover bg-[image:--bg-image-url] bg-[position:left_center] h-[40vh] before:absolute before:-z-10 before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] relative flex justify-center items-center flex-col text-white"
  >
    <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
  </div>

  <div>
    <div class="navbar flex justify-center">
      <div class="container"></div>
    </div>
    <div class="flex justify-center">
      <div class="container flex justify-center pb-16">
        <div class="max-w-[1200px] grid grid-cols-10 gap-20">
          <div class="col-span-10 flex items-center gap-3 text-xl">
            <RouterLink :to="{ name: 'store' }">Store</RouterLink>
            <i class="fa-solid fa-chevron-right text-lg"></i>
            <RouterLink to="#">{{ product.title }}</RouterLink>
          </div>
          <div class="text-justify col-span-5">
            <div class="w-[500px] h-[500px] border"></div>
          </div>
          <div class="text-justify col-span-5">
            <div v-html="product.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
