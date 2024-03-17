<template>
  <Section>
    <div
      class="container mx-auto px-4 flex flex-col-reverse lg:flex-row w-full h-full items-center gap-20 lg:gap-0"
    >
      <div
        class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <Heading class="text-[#212529] text-wrap"> 100% your data</Heading>
        <span class="text-lg text-[#212529] font-light mt-10 lg:mt-6 mb-16"
          >The app is open source and your notes are saved to an open format, so
          you'll always have access to them. Uses End-To-End Encryption (E2EE)
          to secure your notes and ensure no-one but yourself can access them.
        </span>
        <Button
          class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
          :icon="{ name: 'arrowRight', position: 'right' }"
          >Read more</Button
        >
      </div>
      <div class="w-full flex justify-center items-center">
        <img src="/Element.svg" alt="Data process" />
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Heading from "@/components/Heading/index.vue";
import Section from "../../Components/Section/index.vue";
</script>
