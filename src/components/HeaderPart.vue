<script setup>
import img from '@/assets/pics/iStock-1164049276-min_RgsJ0rS.jpg'

let props = defineProps(['title'])
</script>

<template>
  <div :style="{
    '--bg-image-url': `url(${img})`
  }"
    class="z-10 bg-cover bg-[image:--bg-image-url] bg-[position:left_center] h-[40vh] before:absolute before:-z-10 before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] relative flex justify-center items-center flex-col text-white">
    <!-- giving default template for slot.
          gets replaced by given slot content -->
    <slot>
      <div class="text-center">
        <h1 class="text-4xl font-semibold tracking-wide">{{ props.title }}</h1>
        <p class="text-xl">
          <router-link :to="{ name: 'home' }">Home</router-link> / {{ props.title }}
        </p>
      </div>
    </slot>
  </div>
</template>
