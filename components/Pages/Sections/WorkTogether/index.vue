<template>
  <Section>
    <div
      class="container mx-auto px-4 flex flex-col lg:flex-row-reverse w-full h-full items-center pt-10 lg:-mt-10"
    >
      <div
        class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <Heading class="text-[#212529] text-wrap lg:max-w-[50%]">
          Work together</Heading
        >
        <span class="text-lg text-[#212529] font-light mt-10 lg:mt-6 mb-16"
          >With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </span>
        <Button
          class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
          :icon="{ name: 'arrowRight', position: 'right' }"
          >Try it now</Button
        >
      </div>
      <div
        class="w-full flex justify-center items-center lg:w-[800px] lg:mr-10"
      >
        <img src="/WorkTogetherImage.svg" alt="Work Together Image" />
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Heading from "@/components/Heading/index.vue";
import Section from "../../Components/Section/index.vue";
</script>
