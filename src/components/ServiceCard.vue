<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['title', 'headerTxt', 'price', 'img', 'id'])
</script>

<template>
  <router-link
    :to="{ name: 'serviceDetails', params: { id: props.id } }"
    class="block active:!text-white hover:!text-white"
  >
    <div
      class="service-card relative w-[450px] h-[280px] z-10 border border-t-4 rounded-xl overflow-hidden service-card before:content-[''] before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,0)] before:top-0 before:-z-10 before:left-0 before:duration-200"
    >
      <img class="absolute opacity-0 duration-200 -z-20" :src="props.img" alt="" />
      <div class="px-7 pt-7">
        <h1 class="text-xl font-bold">{{ props.title }}</h1>
        <p class="mt-7">{{ props.headerTxt }}</p>
      </div>
      <div class="duration-300 service-info absolute bottom-[calc(-50px)] w-full">
        <div class="flex justify-between items-end px-7 py-1.5 mb-3">
          <div>
            <h3 class="text-2xl font-bold">From</h3>
            <p>{{ props.price }}</p>
          </div>
          <i class="fa-solid fa-arrow-up text-xl"></i>
        </div>
        <div class="px-7 py-3 text-white">Show More</div>
      </div>
    </div>
  </router-link>
</template>

<style>
.service-card:hover {
  border: 1px solid #8e1616;
  border-top: 4px solid #8e1616;
}
.service-card:hover > img {
  opacity: 1;
}
.service-card:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
}
.service-card:hover > .service-info {
  bottom: 0;
}
.service-card:hover > .service-info div:nth-child(2) {
  background-color: #8e1616;
}
</style>
