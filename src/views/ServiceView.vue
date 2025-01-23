<script setup>
import { services } from '@/stores/services'

import HeaderPart from '@/components/HeaderPart.vue'
import ServiceCard from '@/components/ServiceCard.vue'
</script>

<template>
  <div>
    <HeaderPart title="Services" />
    <div class="py-10">
      <h1 class="text-center text-3xl font-bold text-light-red">Services</h1>
      <div class="flex justify-center py-16">
        <div
          class="max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1 container grid grid-cols-3 place-items-center gap-y-8"
        >
          <ServiceCard
            v-for="service in services"
            :key="service"
            :title="service.title"
            :img="service.img"
            :header-txt="service.headerTxt"
            :price="service.price"
            :id="service.id"
            class="hover:text-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>
