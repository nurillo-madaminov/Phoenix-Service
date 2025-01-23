<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterPart from './components/FooterPart.vue'
</script>

<template>
  <NavigationBar />
  <div>
    <RouterView></RouterView>
  </div>
  <FooterPart />
</template>
