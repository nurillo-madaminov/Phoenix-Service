<script setup>
import HeaderPart from '@/components/HeaderPart.vue'
import { stats } from '@/stores/mainStore'
import DynamicForm from '@/components/DynamicForm.vue'
</script>

<template>
  <div>
    <HeaderPart title="About" />
    <div class="flex flex-col items-center py-32">
      <div class="max-w-[900px] text-center space-y-5 mb-[100px]">
        <h3 class="text-light-red text-xl font-semibold">Why Choose us</h3>
        <h1 class="text-4xl font-bold text-black text-center">
          See our team's experience and successful actions with your own eyes.
        </h1>
        <p class="text-gray-600">
          Our company has accumulated over 7 years of experience and proficiency, solving numerous
          problems and gaining extensive knowledge. Now, we want to share these skills with you.
        </p>
      </div>
      <div class="container">
        <div
          class="overflow-hidden relative about before:max-[1024px]:hidden before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-600 before:h-full before:w-[0.3px]"
        >
          <div class="max-[1024px]:flex-col max-[1024px]:gap-y-10 row flex">
            <div class="col flex-1 px-16" data-aos="fade-up-right">
              <h1 class="max-[640px]:text-2xl text-4xl font-bold text-black mb-5">
                Our team's experience and successful actions guarantee that your MC achieves the
                desired results.
              </h1>
              <p class="text-[#666] leading-7">
                Our company is made up of experienced and professional experts in the trucking
                industry who excel at providing top-notch Dispatch, Safety, Accounting, and Hiring
                services. We serve the transportation sector both in the USA and worldwide.
              </p>
            </div>
            <div class="col flex-1 px-16" data-aos="fade-up-left">
              <div class="stats flex flex-wrap gap-y-10 rounded-none">
                <div
                  class="max-[640px]:w-full max-[640px]:max-w-[300px] w-1/2 border-none px-5"
                  v-for="stat in stats"
                  :key="stat"
                >
                  <h1 class="text-[46px] font-[300]">{{ stat.number }}+</h1>
                  <h3 class="text-xl mt-4 mb-2">{{ stat.title }}</h3>
                  <p class="text-[#666] text-sm">{{ stat.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DynamicForm
          title="Contact Us for Safety <br class='max-[1280px]:hidden' />Services"
          class="mt-24"
        />
      </div>
    </div>
  </div>
</template>
