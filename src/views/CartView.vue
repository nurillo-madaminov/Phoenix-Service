<script setup>
import router from '@/router'
import { useOrderFromStore } from '@/stores/store'
import { computed } from 'vue'

const useCart = useOrderFromStore()
const cartItems = computed(() => useCart.cart)
// const totalPrice = computed(() => {
//   cartItems.reduce((sum, item) = sum +price, 0)
// })

// console.log(totalPrice.value)
</script>

<template>
  <div class="h-32 bg-cblack"></div>
  <div class="flex justify-center">
    <div class="container py-28">
      <h1 class="font-semibold text-2xl mb-4">Shopping Cart</h1>
      <div>
        <div v-if="cartItems.length == 0" class="min-h-[30vh]">
          <p class="mt-6">You have nothing in your shopping cart.</p>
          <button
            @click="router.push('/store')"
            class="bg-light-red text-white py-4 px-5 mt-10 rounded-2 text-lg mt inline-block hover:bg-red-500 duration-200 rounded"
          >
            Continue Shopping
          </button>
        </div>
        <div v-else class="min-h-[30vh]">
          <div
            v-for="cartItem in cartItems"
            :key="cartItem.id"
            class="flex justify-between items-center mt-5 border-b border-gray-400 text-xl"
          >
            <div class="flex items-center gap-5 flex-1">
              <img :src="cartItem.product.thumbnil" alt="" class="w-32" />
              <h1 class="font-semibold">{{ cartItem.product.title }}</h1>
            </div>
            <div class="flex justify-center items-center flex-1 gap-3">
              <i class="fa-solid fa-minus" @click="useCart.decreaseAmount(cartItem.id)"></i>
              <span class="min-w-10 text-center">{{ cartItem.amount }}</span>
              <i class="fa-solid fa-plus" @click="useCart.increaseAmount(cartItem.id)"></i>
            </div>
            <div class="flex items-center flex-1 justify-end gap-3">
              <span>{{ cartItem.product.price * cartItem.amount }}$</span>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="mt-5">
              <div class="flex items-center justify-between">
                <p class="text-lg">Subtotal</p>
                <p class="text-xl font-semibold">$999.99</p>
              </div>
              <button
                @click="router.push('/store')"
                class="bg-light-red text-white py-4 px-16 mt-5 rounded-2 text-lg mt inline-block hover:bg-red-500 duration-200 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>

        <!-- <div v-for="cartItem in cartItems" :key="cartItem.id" ></div> -->
      </div>
    </div>
  </div>
</template>
