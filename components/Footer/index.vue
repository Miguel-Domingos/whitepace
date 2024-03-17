<template>
  <footer class="w-full h-full pb-8 pt-20 bg-[#043873] text-white">
    <div class="container mx-auto px-4 text-center sm:text-left">
      <div
        class="flex justify-between flex-col items-center sm:items-start gap-24 lg:gap-0 lg:flex-row mb-16"
      >
        <div
          class="flex flex-col items-center sm:items-start gap-4 w-full sm:w-[63%] lg:w-full lg:mr-[100px]"
        >
          <Logo />
          <span class="font-thin text-wrap">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </span>
        </div>
        <div
          v-for="content in footerContent"
          class="flex flex-col items-center sm:items-start gap-4 w-full"
        >
          <span class="font-bold">{{ content.title }}</span>
          <ul class="flex flex-col gap-4">
            <li
              v-for="element in content.list"
              class="font-thin text-sm cursor-pointer"
              :class="element == 'Overview' ? 'text-[#FFE492]' : ''"
            >
              {{ element }}
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center sm:items-start gap-4 w-full sm:w-[30%] md:w-[25%] lg:w-full"
        >
          <span class="text-2xl font-bold">Try It Today</span>
          <span class="font-thin text-sm text-wrap"
            >Get started for free. Add your whole team as your needs grow.</span
          >
          <Button
            class="bg-[#4F9CF9] text-white"
            :icon="{ name: 'arrowRight', position: 'right' }"
            >Start today</Button
          >
        </div>
      </div>
      <div
        class="text-sm flex flex-col lg:flex-row justify-between items-center lg:border-t lg:border-[#2E4E73] pt-8"
      >
        <div
          class="flex flex-col sm:flex-row gap-10 font-thin w-full pb-[20px] lg:pb-0"
        >
          <span>Terms & privacy</span>
          <span>Security</span>
          <span>Status</span>
          <span>©2021 Whitepace LLC.</span>
        </div>
        <div
          class="flex justify-center sm:justify-start gap-8 w-full lg:w-auto border-t border-[#2E4E73] pt-[20px] lg:pt-0 lg:border-t-0"
        >
          <img src="/Facebook.svg" alt="" />
          <img src="/Twitter.svg" alt="" />
          <img src="/Linkedin.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Logo from "@/components/Logo/index.vue";

const footerContent = [
  {
    title: "Product",
    list: ["Overview", "Pricing", "Customer stories"],
  },
  {
    title: "Resources",
    list: ["Blog", "Guides & tutorials", "Help center"],
  },
  {
    title: "Company",
    list: ["About us", "Careers", "Media kit"],
  },
];
</script>
