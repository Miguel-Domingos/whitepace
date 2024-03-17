<template>
  <div
    class="border rounded-lg px-4"
    :class="
      props.borderColor ? `border-[${borderColor}]` : 'border-transparent'
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface ICard {
  borderColor: string;
}

const props = defineProps<ICard>();
</script>
