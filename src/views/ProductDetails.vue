<script setup>
import img from '@/assets/pics/services/image_2024-10-31_16-23-37_RLXauhf.png'
import { useRoute, RouterLink } from 'vue-router'
import { useProductsStore } from '@/stores/store'
import { onMounted, onUpdated, ref, computed } from 'vue'

const route = useRoute()
const useProducts = useProductsStore()
//useProducts.getProductById(route.params.id).content
// const product = ref()
const product = computed(() => {
  return useProducts.getProductById(route.params.id)
})
const count = ref(0)

onMounted(() => {
  if (useProducts.products.length == 0) {
    useProducts.fetchProducts()
  }
})

onUpdated(() => {
  if (count.value < 0) {
    count.value = 0
  }
})
</script>

<template>
  <div>
    <div v-if="useProducts.loading" class="flex justify-center min-h-[80vh] bg-gray-300">
      <span class="loading loading-dots w-20"></span>
    </div>
    <div v-else>
      <div
        :style="{
          '--bg-image-url': `url(${img})`,
        }"
        class="z-10 bg-cover bg-[image:--bg-image-url] bg-[position:left_center] h-[40vh] before:absolute before:-z-10 before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] relative flex justify-center items-center flex-col text-white"
      >
        <h1 class="text-2xl font-semibold">{{ product?.title }}</h1>
      </div>
      <div>
        <div class="flex justify-center">
          <div class="container flex justify-center pb-16">
            <div class="max-w-[1200px] grid grid-cols-10 gap-20">
              <div class="col-span-10 flex items-center gap-3 text-xl mt-10">
                <RouterLink :to="{ name: 'store' }">Store</RouterLink>
                <i class="fa-solid fa-chevron-right text-lg"></i>
                <RouterLink to="#">{{ product?.title }}</RouterLink>
              </div>
              <div class="text-justify col-span-5">
                <div class="w-[500px] h-[500px] border overflow-hidden">
                  <img :src="product?.thumbnil" :alt="product?.title" />
                </div>
              </div>
              <div class="text-justify col-span-5">
                <div v-html="product?.content"></div>
                <div class="flex items-center gap-5 mt-10">
                  <div class="flex gap-3 border w-fit rounded-lg px-4 py-1">
                    <div class="min-w-10 flex justify-center items-center">
                      <h1 class="text-lg">{{ count }}</h1>
                    </div>
                    <div class="flex flex-col">
                      <i class="fa-solid fa-chevron-up px-2 py-1" @click="count++"></i>
                      <i class="fa-solid fa-chevron-down px-2 py-1" @click="count--"></i>
                    </div>
                  </div>
                  <button
                    class="btn btn-neutral bg-light-red hover:bg-light-red active:bg-dark-red border-none text-white"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
