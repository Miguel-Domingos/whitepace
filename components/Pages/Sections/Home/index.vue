<template>
  <Section class="bg-[#043873]">
    <template v-slot:background>
      <img
        class="opacity-60 scale-[2] md:scale-[1.5] lg:scale-[1] rotate-[50deg] sm:rotate-0"
        src="/wave.svg"
        alt=""
      />
    </template>
    <div
      class="z-50 container mx-auto px-4 flex flex-col lg:flex-row w-full h-full items-center pt-10 lg:-mt-10"
    >
      <div
        class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <Heading class="text-white text-wrap max-w-[90%]">
          Get More Done with whitepace</Heading
        >
        <span class="text-lg text-white font-light mt-10 lg:mt-6 mb-16"
          >Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </span>
        <Button
          class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
          :icon="{ name: 'arrowRight', position: 'right' }"
          >Try Whitepace free</Button
        >
      </div>
      <div class="w-full flex justify-center items-center">
        <img src="@/assets/Business.png" alt="" srcset="" />
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Heading from "@/components/Heading/index.vue";
import Section from "../../Components/Section/index.vue";
</script>
