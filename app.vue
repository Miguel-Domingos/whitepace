<template>
  <Header />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<style>
* {
  font-family: "Inter";
}

body {
  overflow-x: hidden;
}
</style>
