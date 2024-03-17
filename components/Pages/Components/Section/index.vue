<template>
  <section class="w-full overflow-hidden h-full py-20 relative z-0">
    <div class="absolute w-full h-full z-[-1]">
      <slot name="background" />
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts"></script>
