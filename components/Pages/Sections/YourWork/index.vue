<template>
  <Section class="bg-[#043873]">
    <template v-slot:background>
      <img
        src="/BACKGROUND.svg"
        class="translate-y-[-30%] w-[70%] hidden lg:block"
        alt=""
      />
    </template>
    <div class="container mx-auto px-4 flex flex-col items-center gap-6">
      <Heading class="text-white text-center w-full md:w-[70%] lg:w-full"
        >Your work, everywhere you are</Heading
      >

      <span
        class="w-full xl:w-[70%] text-lg text-center text-white font-light mt-10 lg:mt-6 mb-16"
      >
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </span>
      <Button
        class="bg-[#4F9CF9] mb-20 lg:mb-0 text-white"
        :icon="{ name: 'arrowRight', position: 'right' }"
        >Try Taskey</Button
      >
    </div>
    <div class="absolute hidden xl:block scale-[0.90] bottom-[-18%] right-0">
      <img src="@/assets/girl.png" alt="" />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "../../Components/Section/index.vue";
import Heading from "@/components/Heading/index.vue";
import Button from "@/components/Button/index.vue";
</script>
