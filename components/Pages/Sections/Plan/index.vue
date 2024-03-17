<template>
  <Section>
    <div
      class="container mx-auto px-4 flex flex-col items-center gap-6 text-[#212529]"
    >
      <Heading class="text-center w-full">Choose Your Plan</Heading>

      <span
        class="text-lg text-center text-[#212529] font-light w-full lg:w-[80%]"
      >
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </span>

      <Carousel v-bind="settingsPlan" :breakpoints="breakpoints">
        <Slide v-for="(plan, index) in plans" :key="index">
          <Card
            :borderColor="plan.title == 'Personal' ? '' : '#FFE492'"
            class="carousel__item max-w-[280px]"
            :class="
              plan.title == 'Personal'
                ? 'bg-[#043873] text-white py-16'
                : 'text-[#212529] py-8'
            "
          >
            <div class="flex flex-col gap-10">
              <div class="flex flex-col justify-start gap-3">
                <span class="font-semibold text-2xl">{{ plan.title }}</span>
                <span
                  class="text-3xl font-bold"
                  :class="plan.title == 'Personal' ? 'text-[#FFE492]' : ''"
                  >{{ plan.price }}</span
                >
                <span class="font-medium text-lg">{{ plan.description }}</span>
              </div>
              <div class="flex flex-col gap-5">
                <div
                  v-for="benefit in plan.benefits"
                  class="flex items-center gap-3.5"
                >
                  <Icon
                    :type="benefit.icon"
                    :class="plan.title == 'Personal' ? 'text-[#FFE492]' : ''"
                  />
                  <span class="text-left">
                    {{ benefit.text }}
                  </span>
                </div>
              </div>
              <div>
                <Button
                  :class="
                    plan.title == 'Personal'
                      ? 'bg-[#4F9CF9]'
                      : 'border border-[#FFE492]'
                  "
                  >Get Started</Button
                >
              </div>
            </div>
          </Card>
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
import { breakpoints, settingsPlan } from "@/utils/carossel";
import Section from "../../Components/Section/index.vue";
import Heading from "@/components/Heading/index.vue";
import Button from "@/components/Button/index.vue";
import Card from "@/components/Card/index.vue";
import Icon from "@/components/Icon/index.vue";

const plans = [
  {
    title: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    benefits: [
      {
        icon: "check",
        text: "Sync unlimited devices",
      },
      {
        icon: "check",
        text: "10 GB monthly uploads",
      },
      {
        icon: "check",
        text: "200 MB max. note size",
      },
      {
        icon: "check",
        text: "Customize Home dashboard and access extra widgets",
      },
      {
        icon: "check",
        text: "Connect primary Google Calendar account",
      },
      {
        icon: "check",
        text: "Add due dates, reminders, and notifications to your tasks",
      },
    ],
  },
  {
    title: "Personal",
    price: "$11.99",
    description: "Keep home and family on track",
    benefits: [
      {
        icon: "check",
        text: "Sync unlimited devices",
      },
      {
        icon: "check",
        text: "10 GB monthly uploads",
      },
      {
        icon: "check",
        text: "200 MB max. note size",
      },
      {
        icon: "check",
        text: "Customize Home dashboard and access extra widgets",
      },
      {
        icon: "check",
        text: "Connect primary Google Calendar account",
      },
      {
        icon: "check",
        text: "Add due dates, reminders, and notifications to your tasks",
      },
    ],
  },
  {
    title: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    benefits: [
      {
        icon: "check",
        text: "Sync unlimited devices",
      },
      {
        icon: "check",
        text: "10 GB monthly uploads",
      },
      {
        icon: "check",
        text: "200 MB max. note size",
      },
      {
        icon: "check",
        text: "Customize Home dashboard and access extra widgets",
      },
      {
        icon: "check",
        text: "Connect primary Google Calendar account",
      },
      {
        icon: "check",
        text: "Add due dates, reminders, and notifications to your tasks",
      },
    ],
  },
];
</script>

<style scoped>
.carousel__slide {
  padding: 0 20px;
}
</style>
