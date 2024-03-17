<template>
  <Section>
    <div
      class="container mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse gap-20 w-full h-full items-center pt-10 lg:-mt-10"
    >
      <div
        class="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <Heading class="text-[#212529] text-wrap lg:max-w-[75%]">
          Customise it to your needs</Heading
        >
        <span class="text-lg text-[#212529] font-light mt-10 lg:mt-6 mb-16"
          >Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </span>
        <Button
          class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
          :icon="{ name: 'arrowRight', position: 'right' }"
          >Let's Go</Button
        >
      </div>
      <div class="w-[90%] flex justify-center items-center">
        <img src="@/assets/Fixed.svg" alt="Settings Concept" />
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Button from "@/components/Button/index.vue";
import Heading from "@/components/Heading/index.vue";
import Section from "../../Components/Section/index.vue";
</script>
