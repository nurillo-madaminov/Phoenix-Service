<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { services } from '@/stores/services'
import DynamicForm from '@/components/DynamicForm.vue'

const route = useRoute()
const header = ref(null)

const filteredService = services.find((item) => item.id == route.params.id)

onMounted(() => {
  // console.log(filteredService.img)
  header.value.style = `
    background-image: url(${filteredService.img});
    background-size: cover;
    background-position: center;
  `
})
</script>

<template>
  <div>
    <div
      ref="header"
      class="h-[50vh] relative before:absolute before:w-full -z-10 before:h-full before:bg-[rgba(0,0,0,0.6)] flex items-center justify-center"
    >
      <div class="container z-10 text-white">
        <h1 class="text-[50px] font-semibold">{{ filteredService.title }}</h1>
        <p class="text-xl max-w-[700px]">{{ filteredService.headerTxt }}</p>
      </div>
    </div>
    <div class="flex justify-center py-16">
      <div class="container space-y-5">
        <div
          class="collapse collapse-arrow bg-base-200 max-w-[1000px] m-auto"
          v-for="filteredService in filteredService.levels"
          :key="filteredService"
        >
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium flex justify-between py-5">
            <div>
              <h1 class="text-[28px] font-semibold">{{ filteredService.title }}</h1>
              <p class="text-sm mt-4 text-gray-500 font-normal">{{ filteredService.status }}</p>
            </div>
            <div class="flex flex-col gap-3">
              <p class="text-xs font-light text-gray-500">{{ filteredService.priceStatus }}</p>
              <h1 class="text-[40px] font-normal self-end">{{ filteredService.price }}</h1>
            </div>
          </div>
          <div class="collapse-content" v-html="filteredService.description"></div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="container">
        <DynamicForm title="Tell us your interests about our services" />
      </div>
    </div>
  </div>
</template>
