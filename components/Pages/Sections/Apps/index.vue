<template>
  <Section class="bg-[#043873] overflow-hidden">
    <template v-slot:background>
      <img
        class="opacity-60 scale-[2] md:scale-[1.5] lg:scale-[1] rotate-[50deg] sm:rotate-0"
        src="/wave.svg"
        alt="wave background"
      />
    </template>
    <div
      class="container mx-auto px-4 flex flex-col lg:flex-row-reverse w-full h-full items-center pt-10 gap-20"
    >
      <div
        class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <Heading class="text-white text-wrap w-[90%]">
          Work with Your Favorite Apps Using whitepace</Heading
        >
        <span class="text-lg text-white font-light mt-10 lg:mt-6 mb-16"
          >Whitepace teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your project
          success.
        </span>
        <Button
          class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
          :icon="{ name: 'arrowRight', position: 'right' }"
          >Read more</Button
        >
      </div>
      <div class="w-full flex justify-center items-center">
        <img src="/Apps.svg" alt="Favorite Apps illustration" />
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Heading from "@/components/Heading/index.vue";
import Section from "../../Components/Section/index.vue";
</script>
