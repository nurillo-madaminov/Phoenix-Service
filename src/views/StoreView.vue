<script setup>
import { RouterLink } from 'vue-router'
import img from '@/assets/pics/services/image_2024-10-31_16-23-37_RLXauhf.png'
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
      <p class="text-xl">
        <router-link :to="{ name: 'home' }">Home</router-link> / Store
      </p>
    </div>
  </div>
  <div class="flex justify-center py-16">
    <div class="container">
      <div class="grid grid-cols-3 gap-y-10 px-20 place-items-center">
        <router-link :to="{ name: 'ProductDetails', params: { id: a } }" v-for="a in 4" :key="a">
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
    </div>
  </div>
</template>
