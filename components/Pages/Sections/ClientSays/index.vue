<template>
  <Section class="overflow-hidden">
    <div
      class="container mx-auto px-4 flex flex-col items-center gap-16 text-[#212529]"
    >
      <Heading class="text-[#212529]">What Our Clients Say</Heading>

      <Carousel v-bind="settingsClientSays" :breakpoints="breakpoints">
        <Slide :key="index" v-for="(slide, index) in 3">
          <div
            class="card border max-w-xs rounded-xl text-left divide-y px-7 py-14 font-thin bg-[#4F9CF9]"
          >
            <div class="flex flex-col gap-6 text-sm mb-[40px]">
              <img src="/Quote.svg" class="w-[40px]" alt="" />
              <span class="text-white"
                >Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.</span
              >
            </div>
            <div class="pt-[40px] flex justify-between items-center gap-4">
              <div>
                <div class="rounded-full w-[60px] h-[60px] overflow-hidden">
                  <img src="/luffy.jpg" alt="" />
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[#043873] font-semibold"
                  >Oberon Shaw, MCH</span
                >
                <span class="text-white text-xs"
                  >Head of Talent Acquisition, North America</span
                >
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { breakpoints, settingsClientSays } from "@/utils/carossel";
import Section from "../../Components/Section/index.vue";
import Heading from "@/components/Heading/index.vue";
</script>

<style scoped>
.carousel__slide {
  padding: 0 20px;
}
</style>
