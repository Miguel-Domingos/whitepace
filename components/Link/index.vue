<template>
  <button
    class="text-white flex font-medium"
    :class="props.icon?.position ? iconPositionStyle[props.icon?.position] : ''"
  >
    <span v-if="label"> {{ props.label }}</span>
    <span v-else>
      <slot />
    </span>
    <span v-if="props.icon">
      <Icon :type="props.icon?.name" />
    </span>
  </button>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/index.vue";

interface Iicon {
  name: string;
  position: "left" | "right" | "top" | "down";
}

interface ILink {
  label?: string;
  icon?: Iicon;
}
const props = defineProps<ILink>();
const iconPositionStyle = {
  top: "flex-col-reverse justify-center items-center",
  right: "justify-between items-center gap-[10px]",
  left: "justify-between items-center gap-[10px] flex-row-reverse",
  down: "flex-col justify-center items-center",
};
</script>
