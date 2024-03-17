<template>
  <Section class="bg-[#043873]">
    <div
      class="container mx-auto px-4 flex flex-col items-start lg:items-center gap-6"
    >
      <Heading class="text-white lg:text-center w-full lg:w-[38%]"
        >Try Whitepace today</Heading
      >

      <span class="text-xl lg:text-center text-white font-light">
        Get started for free. <br />
        Add your whole team as your needs grow.
      </span>
      <Button
        class="bg-[#4F9CF9] text-white"
        :icon="{ name: 'arrowRight', position: 'right' }"
        >Try Taskey free</Button
      >
      <span class="text-xl text-center text-white font-light">
        On a big team? Contact sales
      </span>
      <div class="flex gap-5">
        <img src="@/assets/icons/apple-logo.svg" alt="Apple Logo" />
        <img src="@/assets/icons/windows-logo.svg" alt="Windows Logo" />
        <img src="@/assets/icons/android-logo.svg" alt="Android Logo" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "../../Components/Section/index.vue";
import Heading from "@/components/Heading/index.vue";
import Button from "@/components/Button/index.vue";
</script>
