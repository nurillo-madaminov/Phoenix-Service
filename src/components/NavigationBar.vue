<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useOrderFromStore } from '@/stores/store'
const orderStore = useOrderFromStore()

let scrolledDown = ref(false)

const checkScroll = () => {
  scrolledDown.value = window.scrollY >= 20
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

// window.onload = () => innerWidth.value = window.innerWidth
// window.onresize = () => innerWidth.value = window.innerWidth

onUnmounted(() => {
  window.removeEventListener('scroll')
})
</script>

<template>
  <div
    class="flex justify-center w-full fixed top-8 z-20 duration-300"
    :class="{
      '!top-0 bg-[#1d1616] !shadow-[0px_2px_50px_0px_black] !py-2.5': scrolledDown,
    }"
  >
    <div
      class="navbar container rounded-3xl py-2 px-4 text-white duration-300"
      :class="{
        '!p-0': scrolledDown,
      }"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-gray-700 rounded-box z-[1] mt-3 w-36 p-2 shadow:"
          >
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'services' }">Service</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
            <li><router-link :to="{ name: 'questions' }">FAQ</router-link></li>
          </ul>
        </div>
        <router-link
          :to="{ name: 'home' }"
          class="btn btn-ghost text-2xl hover:bg-transparent uppercase"
          >Phoenix Service</router-link
        >
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <router-link
              :to="{ name: 'home' }"
              class="hover:!bg-transparent hover:text-gray-400 duration-[.4s] active:!bg-transparent text-lg"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'services' }"
              class="hover:!bg-transparent hover:text-gray-400 duration-[.4s] active:!bg-transparent text-lg"
              >Service</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'store' }"
              class="hover:!bg-transparent hover:text-gray-400 duration-[.4s] active:!bg-transparent text-lg"
              >Store</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'about' }"
              class="hover:!bg-transparent hover:text-gray-400 duration-[.4s] active:!bg-transparent text-lg"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'blog' }"
              class="hover:!bg-transparent hover:text-gray-400 duration-[.4s] active:!bg-transparent text-lg"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'questions' }"
              class="hover:!bg-transparent hover:text-gray-400 duration-[.4s] active:!bg-transparent text-lg"
              >FAQ</router-link
            >
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <router-link :to="{ name: 'cart' }" :class="{'before:hidden': !orderStore.cart.length}"  class="p-3 relative before:absolute before:w-2 before:h-2 before:bg-light-red before:rounded-full before:right-2 before:top-3"><i class="fa-solid fa-cart-shopping"></i></router-link>
        <a href="tel:#" class="btn btn-ghost hover:bg-transparent hidden md:flex"
          >+1 216 293 50 50</a
        >
      </div>
    </div>
  </div>
</template>
