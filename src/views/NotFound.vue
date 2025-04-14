<script></script>
<template>
  <div>
    <div class="h-32 bg-cblack"></div>
    <div class="flex justify-center py-28 min-h-[30vh]">
      <div class="container flex justify-center flex-col items-center py-10">
        <h1 class="text-[150px] tracking-widest font-bold leading-none">404</h1>
        <p class="text-2xl">Page not found!</p>
        <p class="mt-5">
          Click
          <router-link :to="{ name: 'home' }" class="underline text-blue-600">here</router-link> to
          return to the home page.
        </p>
      </div>
    </div>
  </div>
</template>
