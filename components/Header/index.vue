<template>
  <header class="sticky z-50 top-0 w-full bg-[#043873]">
    <div class="flex flex-col justify-center items-center">
      <div class="w-full relative">
        <div class="container w-full mx-auto px-4">
          <div
            class="flex w-full justify-center items-center gap-6 h-14 md:h-[66px] lg:h-[92px]"
          >
            <nav class="w-full h-full flex justify-between items-center">
              <div>
                <Logo />
              </div>
              <div class="gap-8 hidden xl:flex">
                <Link
                  v-for="link in links"
                  :icon="{
                    name: link.icon?.name,
                    position: link.icon?.position,
                  }"
                >
                  {{ link.label }}</Link
                >
              </div>
              <div class="gap-6 hidden lg:flex">
                <Button class="bg-[#FFE492] text-[#043873]">Login</Button>

                <Button
                  class="bg-[#4F9CF9] text-white"
                  :icon="{ name: 'arrowRight', position: 'right' }"
                  >Try Whitepace free</Button
                >
              </div>
            </nav>
            <Icon
              v-if="!isMenuOpen"
              type="menu"
              class="xl:hidden text-white"
              @click="openMenu()"
            />
            <Icon
              v-else
              type="close"
              class="xl:hidden text-white"
              @click="openMenu()"
            />
          </div>
        </div>
        <Transition name="slide">
          <div
            v-if="isMenuOpen"
            class="absolute bg-[#043873] w-full left-0 pb-5"
          >
            <div
              class="container mx-auto px-4 w-full flex flex-col justify-center"
            >
              <div class="flex flex-col gap-6 xl:hidden mt-6">
                <Link
                  v-for="link in links"
                  :icon="{
                    name: link.icon?.name,
                    position: link.icon?.position,
                  }"
                >
                  {{ link.label }}</Link
                >
              </div>
              <div
                class="flex justify-center gap-6 flex-wrap items-start mt-6 lg:hidden"
              >
                <Button class="bg-[#FFE492] text-[#043873]">Login</Button>

                <Button
                  class="bg-[#4F9CF9] text-white"
                  :icon="{ name: 'arrowRight', position: 'right' }"
                  >Try Whitepace free</Button
                >
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo/index.vue";
import Link from "@/components/Link/index.vue";
import Button from "@/components/Button/index.vue";
import Icon from "@/components/Icon/index.vue";

interface Iicon {
  name: string;
  position: "left" | "right" | "top" | "down";
}

interface ILink {
  label?: string;
  icon?: Iicon;
}

const links: ILink[] = [
  {
    label: "Products",
    icon: {
      name: "arrowDown",
      position: "right",
    },
  },
  {
    label: "Solutions",
    icon: {
      name: "arrowDown",
      position: "right",
    },
  },
  {
    label: "Resources",
    icon: {
      name: "arrowDown",
      position: "right",
    },
  },
  {
    label: "Pricing",
    icon: {
      name: "arrowDown",
      position: "right",
    },
  },
];

const isMenuOpen = ref<Boolean>(false);

function openMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
