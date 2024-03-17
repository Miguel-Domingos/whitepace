<template>
  <Section>
    <template v-slot:background>
      <img
        src="/Group.svg"
        class="opacity-50 translate-y-[30%] w-[60%] hidden lg:block"
        alt=""
      />
    </template>
    <div
      class="container mx-auto px-4 flex flex-col lg:flex-row w-full h-full items-center pt-10 lg:-mt-10"
    >
      <div
        class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <Heading class="text-[#212529] text-wrap lg:max-w-[50%]">
          Project Management</Heading
        >
        <span class="text-lg text-[#212529] font-light mt-10 lg:mt-6 mb-16"
          >Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </span>
        <Button
          class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
          :icon="{ name: 'arrowRight', position: 'right' }"
          >Get Started</Button
        >
      </div>
      <div class="w-full flex justify-center items-center">
        <img src="@/assets/project.png" alt="" srcset="" />
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Heading from "@/components/Heading/index.vue";
import Section from "../../Components/Section/index.vue";
</script>
