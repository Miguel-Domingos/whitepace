<template>
  <Section class="bg-[#043873]">
    <div
      class="container mx-auto px-4 flex flex-col lg:flex-row w-full h-full items-center pt-10 lg:-mt-10"
    >
      <div
        class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <Heading class="text-wrap text-white"> Use as Extension</Heading>
        <span class="text-lg text-white font-light mt-10 lg:mt-6 mb-16"
          >Use the web clipper extension, available on Chrome and Firefox, to
          save web pages or take screenshots as notes.
        </span>
        <Button
          class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
          :icon="{ name: 'arrowRight', position: 'right' }"
          >Let's Go</Button
        >
      </div>
      <div class="w-full flex justify-center items-center">
        <img
          src="@/assets/puzzle.png"
          alt="Business Team Putting Together Puzzle"
        />
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Heading from "@/components/Heading/index.vue";
import Section from "../../Components/Section/index.vue";
</script>
