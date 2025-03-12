<script setup>
import router from '@/router'

import img from '@/assets/pics/services/image_2024-10-31_16-23-37_RLXauhf.png'
</script>

<template>
  <div
    :style="{
      '--bg-image-url': `url(${img})`,
    }"
    class="z-10 bg-cover bg-[image:--bg-image-url] bg-[position:left_center] h-[40vh] before:absolute before:-z-10 before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] relative flex justify-center items-center flex-col text-white"
  >
    <h1 class="text-2xl font-semibold">hello world</h1>
  </div>

  <div>
    <div class="navbar flex justify-center">
      <div class="container">
        <div
          class="w-12 h-12 flex justify-center items-center border-2 rounded-full active:outline active:outline-[gray]"
          @click="router.go(-1)"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="container">
        <h1>Product Details</h1>
      </div>
    </div>
  </div>
</template>
