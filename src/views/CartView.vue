<script setup>
import { useOrderFromStore, useProductsStore } from '@/stores/store'
const useCart = useOrderFromStore()
const useProducts = useProductsStore()
// const filterProducts = useProducts.getProductById()
const cartItems = useCart.cart
import router from '@/router'

const Cart = []

cartItems.forEach((items) => {
  // console.log(items.id)
  const singleCartItem = useProducts.getProductById(items.id)

  const cartItem = {
    thumbnil: singleCartItem.thumbnil,
    title: singleCartItem.title,
    amount: items.amount,
    price: singleCartItem.price,
  }

  Cart.push(cartItem)
})

console.log(Cart)

// theres something KALAVANI UCHI
</script>

<template>
  <div class="h-32 bg-cblack"></div>
  <div class="flex justify-center">
    <div class="container py-28">
      <h1 class="font-semibold text-2xl mb-4">Shopping Cart</h1>
      <div>
        <div v-if="cartItems.length == 0">
          <p class="mt-6">You have nothing in your shopping cart.</p>
          <button
            @click="router.push('/store')"
            class="bg-light-red text-white py-4 px-5 mt-10 rounded-2 text-lg mt inline-block hover:bg-red-500 duration-200 rounded"
          >
            Continue Shopping
          </button>
        </div>
        <div v-else>
          <div
            v-for="cartItem in Cart"
            :key="cartItem.id"
            class="flex justify-between items-center mt-5 border-b border-gray-400 text-xl"
          >
            <div class="flex items-center gap-5 flex-1">
              <img :src="cartItem.thumbnil" alt="" class="w-32" />
              <h1 class="font-semibold">{{ cartItem.title }}</h1>
            </div>
            <div class="flex justify-center items-center flex-1 gap-3">
              <i class="fa-solid fa-minus"></i>
              <span>{{ cartItem.amount }}</span>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="flex items-center flex-1 justify-end gap-3">
              <span>{{ cartItem.price * cartItem.amount }}</span>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>

        <!-- <div v-for="cartItem in cartItems" :key="cartItem.id" ></div> -->
      </div>
    </div>
  </div>
</template>
