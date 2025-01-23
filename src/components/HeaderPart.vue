<script setup>
import { onMounted, ref } from 'vue'
import { defineProps } from 'vue'

import img from '@/assets/pics/iStock-1164049276-min_RgsJ0rS.jpg'

let props = defineProps(['title', 'customTemp'])

let header = ref(null)

onMounted(() => {
  header.value.style = `
        background-image: url(${img});
        background-size: cover;    
        background-position: center left;
    `
})
</script>

<template>
  <div
    ref="header"
    class="z-10 h-[40vh] before:absolute before:-z-10 before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] relative flex justify-center items-center flex-col text-white"
  >
    <div class="text-center" v-if="!props.customTemp">
      <h1 class="text-4xl font-semibold tracking-wide">{{ props.title }}</h1>
      <p class="text-xl">
        <router-link :to="{ name: 'home' }">Home</router-link> / {{ props.title }}
      </p>
    </div>
    <slot v-if="props.customTemp"></slot>
  </div>
</template>
