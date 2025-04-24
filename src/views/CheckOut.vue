<script setup>
import { computed, watchEffect, ref, reactive, onUpdated } from 'vue'
import { useOrderFromStore } from '@/stores/store'
const useCart = useOrderFromStore()

function removeProduct(id, type) {
  useCart.removeProduct(id, type)
}

const cartItems = computed(() => useCart.cart)

const subtotalPrice = ref(0)

const taxArray = [
  { state: 'AL', tax: 4.0 },
  { state: 'AZ', tax: 5.6 },
  { state: 'AR', tax: 6.5 },
  { state: 'CA', tax: 7.25 },
  { state: 'CO', tax: 2.9 },
  { state: 'CT', tax: 6.35 },
  { state: 'DE', tax: 0.0 },
  { state: 'FL', tax: 6.0 },
  { state: 'GA', tax: 4.0 },
  { state: 'ID', tax: 6.0 },
  { state: 'IL', tax: 6.25 },
  { state: 'IN', tax: 7.0 },
  { state: 'IA', tax: 6.0 },
  { state: 'KS', tax: 6.5 },
  { state: 'KY', tax: 6.0 },
  { state: 'LA', tax: 4.45 },
  { state: 'ME', tax: 5.5 },
  { state: 'MD', tax: 6.0 },
  { state: 'MA', tax: 6.25 },
  { state: 'MI', tax: 6.0 },
  { state: 'MN', tax: 6.875 },
  { state: 'MS', tax: 7.0 },
  { state: 'MO', tax: 4.225 },
  { state: 'MT', tax: 0.0 },
  { state: 'NE', tax: 5.5 },
  { state: 'NV', tax: 6.85 },
  { state: 'NH', tax: 0.0 },
  { state: 'NJ', tax: 6.625 },
  { state: 'NM', tax: 4.875 },
  { state: 'NY', tax: 4.0 },
  { state: 'NC', tax: 4.75 },
  { state: 'ND', tax: 5.0 },
  { state: 'OH', tax: 5.75 },
  { state: 'OK', tax: 4.5 },
  { state: 'OR', tax: 0.0 },
  { state: 'PA', tax: 6.0 },
  { state: 'RI', tax: 7.0 },
  { state: 'SC', tax: 6.0 },
  { state: 'SD', tax: 4.2 },
  { state: 'TN', tax: 7.0 },
  { state: 'TX', tax: 6.25 },
  { state: 'UT', tax: 6.1 },
  { state: 'VT', tax: 6.0 },
  { state: 'VA', tax: 5.3 },
  { state: 'WA', tax: 6.5 },
  { state: 'WV', tax: 6.0 },
  { state: 'WI', tax: 5.0 },
  { state: 'WY', tax: 4.0 },
]

const fullInfo = reactive({
  first_name: '',
  last_name: '',
  email: '',
  address: '',
  zip: null,
  city: '',
  state: '',
})

const taxPercent = ref(null)
const tax = computed(() => subtotalPrice.value * (taxPercent.value / 100))
const totalPrice = computed(() => subtotalPrice.value + tax.value)

watchEffect(() => {
  subtotalPrice.value = 0 // ✅ reset first
  cartItems.value.forEach((item) => {
    subtotalPrice.value += item.price
  })
  console.log('State is now:', fullInfo.state.tax)
  taxPercent.value = fullInfo.state.tax
})

onUpdated(() => {
  console.log(taxPercent.value)
  console.log(tax.value)
})

</script>
<template>
  <div class="h-32 bg-cblack"></div>
  <div class="flex justify-center">
    <div class="container flex justify-center items-start py-10 gap-8">
      <div class="w-full max-w-[420px] border p-5">
        <h1 class="text-lg font-semibold mb-5">Shipping address</h1>
        <form>
          <div class="flex gap-2">
            <div class="flex flex-col items-start">
              <label for="fname" class="text-xs tracking-wide mb-1 text-[#666] uppercase"
                >First name</label
              >
              <input
                type="text"
                id="fname"
                class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
                v-model="fullInfo.first_name"
              />
            </div>
            <div class="flex flex-col items-start">
              <label for="lname" class="text-xs tracking-wide mb-1 text-[#666] uppercase"
                >Last name</label
              >
              <input
                type="text"
                id="lname"
                class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
                v-model="fullInfo.last_name"
              />
            </div>
          </div>
          <div class="flex flex-col items-start mt-4">
            <label for="Email" class="text-xs tracking-wide mb-1 text-[#666] uppercase"
              >Email</label
            >
            <input
              type="text"
              id="Email"
              class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
              v-model="fullInfo.email"
            />
          </div>
          <div class="flex flex-col items-start mt-4">
            <label for="address" class="text-xs tracking-wide mb-1 text-[#666] uppercase"
              >Address</label
            >
            <input
              type="text"
              id="address"
              class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
              v-model="fullInfo.address"
            />
          </div>
          <div class="flex gap-2 mt-2">
            <input
              type="text"
              class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
              placeholder="ZIP"
              v-model="fullInfo.zip"
            />
            <input
              type="text"
              class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
              placeholder="City"
              v-model="fullInfo.city"
            />
            <select
              name=""
              class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
              v-model="fullInfo.state"
            >
              <option value="" class="text-[#666]">State</option>
              <option :value="state" v-for="state in taxArray" :key="state" class="font-sans">
                {{ state.state }}
              </option>
            </select>
          </div>
          <div class="flex flex-col items-start mt-4">
            <label for="phone" class="text-xs tracking-wide mb-1 text-[#666] uppercase"
              >Phone number</label
            >
            <input
              type="text"
              id="phone"
              class="border bg-[#f2f2f2] w-full px-2 py-1 border-b-2 border-gray-200"
              v-model="fullInfo.phone"
            />
          </div>
        </form>
      </div>
      <div class="w-full max-w-[420px] border p-5">
        <h1 class="text-lg font-semibold mb-5">Order Summary</h1>
        <div class="space-y-5">
          <div
            v-for="cartItem in useCart.cart"
            :key="cartItem.id"
            class="flex items-start gap-3 cursor-default"
          >
            <img :src="cartItem.product.thumbnil" alt="image" class="w-20 border" />
            <div class="flex-1">
              <h1 class="text-sm">{{ cartItem.product.title }}</h1>
              <p class="text-xs text-[#666]" v-if="cartItem.typeLabel">
                Type: {{ cartItem.typeLabel }}
              </p>
            </div>
            <div class="text-sm w-24 text-right">
              <h1>${{ cartItem.price }}</h1>
              <h2 class="text-[#666]">${{ cartItem.product.price }} each</h2>
              <div class="w-full flex justify-between bg-gray-100 p-2 mt-2">
                <span>Qty:</span>
                <span>{{ cartItem.amount }}</span>
              </div>
              <div
                class="text-[#666] underline cursor-pointer mt-2"
                @click="removeProduct(cartItem.id, cartItem.type)"
              >
                Remove
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 text-sm">
          <div class="flex items-center justify-between py-1">
            <h1>Subtotal:</h1>
            <p>${{ subtotalPrice.toFixed(2) }}</p>
          </div>
          <div class="flex items-center justify-between py-1 border-b">
            <h1>Tax:</h1>
            <p>${{ tax.toFixed(2) }}</p>
          </div>
          <div class="flex items-center justify-between py-2 font-semibold border-b">
            <h1>Total:</h1>
            <p class="text-base">${{totalPrice.toFixed(2)}}</p>
          </div>
          <div class="flex items-center justify-center gap-2 mt-5">
            <i class="fa-solid fa-shield-halved"></i>
            <p class="text-sm">Secure SSL Checkout</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
