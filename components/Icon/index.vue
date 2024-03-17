<template>
  <span class="cursor-pointer">
    <Icon />
  </span>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

interface IIcon {
  type: "arrowDown" | "arrowRight" | "menu" | "close" | "check";
}
const props = defineProps<IIcon>();
const Icon = defineAsyncComponent(() => import(`./icons/${props.type}.vue`));
</script>
