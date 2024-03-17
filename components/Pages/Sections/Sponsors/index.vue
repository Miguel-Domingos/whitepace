<template>
  <Section>
    <div class="container mx-auto px-4 flex flex-col items-center gap-24">
      <Heading class="text-[#212529]">Our Sponsors</Heading>
      <div
        class="w-full flex flex-col gap-20 lg:flex-row flex-wrap justify-around items-center lg:gap-10"
      >
        <img src="@/assets/sponsors/Apple.svg" alt="" />
        <img class="" src="@/assets/sponsors/Microsoft.svg" alt="" />
        <img src="@/assets/sponsors/Slack.svg" alt="" />
        <img src="@/assets/sponsors/Google.svg" alt="" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "../../Components/Section/index.vue";
import Heading from "@/components/Heading/index.vue";
</script>
