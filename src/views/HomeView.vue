<script setup>
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import { onMounted, ref } from 'vue'

import { stats } from '@/stores/mainStore'
import { services } from '@/stores/services'
import ServiceCard from '@/components/ServiceCard.vue'

import img1 from '@/assets/pics/slider-images/55_0XU6UTY_8NRDJBb.png'
import img2 from '@/assets/pics/slider-images/58585_TMIjL8n.png'
import img3 from '@/assets/pics/slider-images/888810411_3TAf4wF_8hnExmj.png'
import img4 from '@/assets/pics/slider-images/8888104111111_1.png'
// import img5 from '@/assets/pics/smth.png'

let modules = [Autoplay]

let pov = ref(null)
let offsetTop = ref(null)

function animateText() {
  setInterval(() => {
    offsetTop.value -= 70
    pov.value.style = `top: ${offsetTop.value}px;`

    if (offsetTop.value == -280) {
      offsetTop.value = 0
    }
  }, 3000)
}

onMounted(() => {
  if (window.innerWidth > 550) {
    animateText()
  }
})

function perViewChanger1() {
  return innerWidth <= 541 ? 1 : innerWidth <= 768 ? 2 : innerWidth <= 1024 ? 3 : 4
}

function perViewChanger2() {
  return innerWidth <= 1024 ? 1 : innerWidth <= 1535 ? 2 : 3
}
</script>
<template>
  <div>
    <!-- Hero section -->
    <div
      class="max-[768px]:!text-center h-screen flex justify-center bg-[url('https://prraelogistics.com/blog/wp-content/uploads/2024/10/66e9c79fa2639c86730e46c9_Top-Trends-Facing-the-Trucking-Industry-in-2025-1920x1080_c.jpg')] bg-cover before:content-[''] before:absolute before:w-full before:h-screen before:bg-gradient-to-tr from-black to-transparent"
    >
      <div class="container z-10 poppins-medium" data-aos="fade-in">
        <div class="row h-screen poppins-regular flex items-center">
          <div class="col text-white">
            <div class="font-[600] mb-5 max-[410px]:mb-1">
              <h1 class="max-[410px]:text-4xl max-[768px]:text-6xl text-7xl mb-4 max-[410px]:mb-1">
                Experience the <br />
                power of
              </h1>

              <div class="h-[70px] max-[550px]:h-[60px] max-[410px]:h-[50px] overflow-hidden">
                <div ref="pov" class="relative top-0 duration-500 space-y-3 text-[#D84040]">
                  <h1 class="text-6xl font-[500] max-[550px]:!text-5xl max-[410px]:!text-4xl">Industry Experts</h1>
                  <h1 class="text-6xl font-[500] max-[550px]:!text-5xl max-[410px]:!text-4xl">
                    <span class="max-[768px]:hidden">Cost</span> Optimization
                  </h1>
                  <h1 class="text-6xl font-[500] max-[550px]:!text-5xl max-[410px]:!text-4xl">Phoenix Service</h1>
                  <h1 class="text-6xl font-[500] max-[550px]:!text-5xl max-[410px]:!text-4xl">Business Transformation</h1>
                  <h1 class="text-6xl font-[500] max-[550px]:!text-5xl max-[410px]:!text-4xl">Trust & Safety</h1>
                </div>
              </div>
            </div>
            <p class="text-xl mb-5 max-[550px]:text-base">
              Empowering carriers with innovative outsourcing solutions to optimize operations
              <br />
              and drive growth.
            </p>
            <p class="text-xl mb-5 font-[500]">All from Phoenix SERVICE One Partner</p>
            <router-link :to="{name: 'about'}"
              class="btn bg-[#8E1616] border-none text-lg font-normal text-white hover:bg-[#D84040]"
            >
              About us
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero section -->

    <!-- Slider section -->
    <div class="flex justify-center py-16 bg-[rgb(29,22,22)]">
      <div class="container">
        <h2
          data-aos="fade-up"
          class="max-[896px]:text-2xl text-3xl text-center text-white font-[500] leading-[50px]"
        >
          Empowering <span class="text-[#8E1616]">3,000+</span> logistics companies to enhance
          <br />
          operational efficiency and drive significant growth with <br />
          our trusted and innovative services.
        </h2>
        <div class="container">
          <swiper
            :slidesPerView="perViewChanger1()"
            :spaceBetween="30"
            :modules="modules"
            :loop="true"
            :autoplay="{ delay: 1500 }"
            data-aos="fade-out"
            class="mySwiper mt-10"
            :pagination="true"
          >
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img1" alt=""
            /></swiper-slide>
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img2" alt=""
            /></swiper-slide>
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img3" alt=""
            /></swiper-slide>
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img4" alt=""
            /></swiper-slide>
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img1" alt=""
            /></swiper-slide>
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img2" alt=""
            /></swiper-slide>
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img3" alt=""
            /></swiper-slide>
            <swiper-slide class="border rounded-xl"
              ><img class="w-[300px] h-[200px] m-auto" :src="img4" alt=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- Slider section -->

    <!-- Something section -->
    <div class="flex justify-center py-16">
      <div class="container overflow-hidden">
        <h1
          class="max-[896px]:text-2xl max-w-[1024px] text-center m-auto text-3xl font-semibold mb-14"
          data-aos="fade-up"
        >
          <span class="text-green-700">With Phoenix</span> , your company becomes more effective,
          solving every challenge across all departments.
          <span class="text-red-700">Without Phoenix</span>, you risk inefficiency, delays, and
          missed opportunities.
        </h1>
        <div class="row max-[1024px]:flex-col flex">
          <div class="col flex-1 flex justify-center items-center" data-aos="fade-up-right">
            <div>
              <h2 class="text-2xl font-bold mb-5">Without Phoenix</h2>
              <ul class="list-[circle] text-lg">
                <li>HOS Violations and Fines Inconsistent</li>
                <li>Driver Communication</li>
                <li>Inefficient Vehicle Monitoring</li>
                <li>Cheap Load Rate</li>
              </ul>
            </div>
          </div>
          <div
            class="col flex-1 max-[1024px]:flex max-[1024px]:justify-center max-[1024px]:my-10"
            data-aos="fade-out"
          >
            <img
              src="https://media.istockphoto.com/id/1157569047/photo/red-arrow-moving-up-over-graph-paper-background.jpg?s=612x612&w=0&k=20&c=h_mHs726U_Osy2IapdLYJCfZHQoh8oxfG_lJoG4SwXI="
              alt=""
              class="max-[1024px]:w-[400px] rounded-xl"
            />
          </div>
          <div class="col flex-1 flex justify-center items-center" data-aos="fade-up-left">
            <div>
              <h2 class="text-2xl font-bold mb-5">Without Phoenix</h2>
              <ul class="list-[circle] text-lg">
                <li>Improved Safety Scores</li>
                <li>24/7 Expert Support</li>
                <li>Real-Time Tracking and Monitoring</li>
                <li>High-Paying Loads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Something section -->

    <!-- Service section -->
    <div class="flex justify-center py-16 bg-cblack">
      <div class="container">
        <h1 class="text-center text-3xl font-bold text-light-red">Services</h1>
        <swiper
          :slidesPerView="perViewChanger2()"
          :spaceBetween="20"
          :modules="modules"
          :autoplay="{ delay: 2000 }"
          :loop="true"
          class="mySwiper mt-10 scale"
        >
          <swiper-slide class="grid place-items-center" v-for="service in services" :key="service">
            <ServiceCard
              :title="service.title"
              :price="service.price"
              :img="service.img"
              :id="service.id"
              :header-txt="service.headerTxt"
              class="text-white"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Service section -->

    <!-- About section -->
    <div class="flex justify-center py-32 overflow-hidden">
      <div
        class="container relative about before:max-[1024px]:hidden before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-600 before:h-full before:w-[0.3px]"
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
    </div>
    <!-- About section -->
  </div>
</template>
