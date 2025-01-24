<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps(['title'])

let phoneNumberInput = ref(null)
let number = ref(null)

function inputMask() {
  let completeNumber = [
    '+',
    '1',
    ' ',
    '(',
    phoneNumberInput.value.value[0] || '_',
    phoneNumberInput.value.value[1] || '_',
    phoneNumberInput.value.value[2] || '_',
    ')',
    ' ',
    phoneNumberInput.value.value[3] || '_',
    phoneNumberInput.value.value[4] || '_',
    phoneNumberInput.value.value[5] || '_',
    '-',
    phoneNumberInput.value.value[6] || '_',
    phoneNumberInput.value.value[7] || '_',
    '-',
    phoneNumberInput.value.value[8] || '_',
    phoneNumberInput.value.value[9] || '_',
  ]

  phoneNumberInput.value.value = phoneNumberInput.value.value.replace(/\D/g, '')
  number.value.innerHTML = completeNumber.toString().replaceAll(',', '')
}

let name = ref('')
let lastname = ref('')
let email = ref('')
let message = ref('')
let checkbox = ref(null)

function hasExactly11Digits(str) {
  const digits = str.match(/\d/g)
  return digits !== null && digits.length === 11
}
function sendForm() {
  if (
    name.value.length > 0 &&
    lastname.value.length > 0 &&
    email.value.length > 0 &&
    checkbox.value == true &&
    hasExactly11Digits(number.value.innerText)
  ) {
    // console.log()
    let templateMessage = `- Name: ${name.value} %0A- Lastname: ${lastname.value} %0A- Email: ${email.value} %0A- Contact: ${number.value.innerText} %0A- Message: ${message.value}`
    let token = '8151909769:AAGId6MbAbdegDp6Krk9rdldhdRcV2E7F_Q'
    let chat_id = -1002336973251
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${templateMessage}`

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email.value)) {
      let api = new XMLHttpRequest()
      api.open('GET', url, true)
      api.send()
      name.value = ''
      lastname.value = ''
      email.value = ''
      message.value = ''
      phoneNumberInput.value.value = '' // Assuming phoneNumberInput is a form element
      checkbox.value = false
      number.value.innerHTML = '+1 (___) ___-__-__'
    } else {
      alert('fill the email correctly')
    }
  } else {
    alert('Complete the form first')
  }
}
</script>
<template>
  <div class="py-16 flex gap-10 max-[1024px]:!flex-col">
    <div class="flex-1 max-[1024px]:text-center">
      <h1 class="max-[1024px]:text-4xl text-5xl font-semibold text-black" v-html="props.title"></h1>
      <p class="max-[1024px]:text-lg max-[1024px]:mt-0 text-xl mt-5">
        We offer better solutions for your company's needs.
      </p>
      <ul class="flex flex-col gap-1 mt-10 text-lg max-[1024px]:hidden">
        <li class="flex items-center gap-3">
          <i class="fa-solid fa-location-dot"></i
          ><a href="#">16192 Coastal Highway Lewes, Delaware 19958 USA</a>
        </li>
        <li class="flex items-center gap-3">
          <i class="fa-solid fa-phone"></i><a href="tel:#">+1 216 293 50 50</a>
        </li>
        <li class="flex items-center gap-3">
          <i class="fa-solid fa-message"></i><a href="mailto:#">algo.management1@gmail.com</a>
        </li>
      </ul>
    </div>
    <div class="flex-1 flex justify-center">
      <div class="max-w-[500px] space-y-5">
        <div class="flex gap-5 max-[550px]:flex-col">
          <div class="space-y-1 flex-1 max-[550px]:flex max-[550px]:flex-col">
            <label for="name" class="text-sm"
              >First name <span class="text-light-red">*</span></label
            >
            <input
              type="text"
              class="input rounded-md input-bordered w-full max-w-xs max-[550px]:max-w-full"
              autocomplete="off"
              id="name"
              v-model="name"
            />
          </div>
          <div class="space-y-1 flex-1 max-[550px]:flex max-[550px]:flex-col">
            <label for="lname" class="text-sm"
              >Last name <span class="text-light-red">*</span></label
            >
            <input
              type="text"
              class="input rounded-md input-bordered w-full max-w-xs max-[550px]:max-w-full"
              autocomplete="off"
              id="lname"
              v-model="lastname"
            />
          </div>
        </div>
        <div class="flex gap-5 max-[550px]:flex-col">
          <div class="space-y-1 flex-1 max-[550px]:flex max-[550px]:flex-col">
            <label for="email" class="text-sm">Email <span class="text-light-red">*</span></label>
            <input
              type="email"
              class="input rounded-md input-bordered w-full max-w-xs max-[550px]:max-w-full"
              autocomplete="off"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="space-y-1 flex-1 max-[550px]:flex max-[550px]:flex-col">
            <label for="phoneNumber" class="text-sm"
              >Phone number <span class="text-light-red">*</span></label
            >
            <div class="relative">
              <input
                ref="phoneNumberInput"
                class="caret-transparent input rounded-md input-bordered w-full max-w-xs max-[550px]:max-w-full"
                @input="inputMask"
                maxlength="10"
                id="phoneNumber"
              />
              <label
                for="phoneNumber"
                ref="number"
                class="flex items-center input rounded-md input-bordered w-full absolute top-0"
                >+1 (___) ___-__-__</label
              >
            </div>
          </div>
        </div>
        <div class="space-y-5">
          <div class="space-y-1">
            <label for="message" class="text-sm">Message</label>
            <textarea
              class="textarea textarea-bordered w-full h-[150px]"
              v-model="message"
            ></textarea>
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" id="checked" class="checkbox checkbox-info" v-model="checkbox" />
            <label for="checked">I have read and accept the Privace Policy</label>
          </div>
        </div>
        <button class="btn bg-dark-red hover:bg-light-red text-white" @click="sendForm">
          Success
        </button>
      </div>
    </div>
  </div>
</template>
