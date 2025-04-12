<script setup>
import HeaderPart from '@/components/HeaderPart.vue'
import { FAQs } from '@/stores/FAQ'
</script>

<template>
  <HeaderPart title="FAQ" />
  <div class="flex justify-center">
    <div class="container py-16">
      <h1 class="text-center text-[42px] max-[769px]:text-3xl font-semibold">
        Common <span class="text-light-red ">Questions</span>
      </h1>
      <div class="space-y-4 mt-5 px-5">
        <div
          class="collapse collapse-arrow bg-base-200 max-w-[1000px] m-auto"
          v-for="FAQ in FAQs"
          :key="FAQ"
        >
          <input type="checkbox" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            {{ FAQ.question }}
          </div>
          <div class="collapse-content">
            <p>{{ FAQ.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
