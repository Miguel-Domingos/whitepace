<template>
  <!-- Created by: https://codepen.io/Coding_Journey/pen/yWjWKd -->
  <div class="marquee">
    <ul class="marquee-content">
      <li><i class="fab fa-github"></i>A</li>
      <li><i class="fab fa-codepen"></i>B</li>
      <li><i class="fab fa-free-code-camp"></i>C</li>
      <li><i class="fab fa-dev"></i>D</li>
      <li><i class="fab fa-react"></i>E</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
interface ICarrossel {
  display?: Number;
}
const props = defineProps<ICarrossel>();

onMounted(() => {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee-content");

  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
});
</script>

<style>
:root {
  --marquee-width: 100%;
  --marquee-height: 20vh;
  /* --marquee-elements: 12; */ /* defined with JavaScript */
  --marquee-elements-displayed: 5;
  --marquee-element-width: calc(
    var(--marquee-width) / var(--marquee-elements-displayed)
  );
  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}

.marquee {
  width: var(--marquee-width);
  height: var(--marquee-height);
  background-color: #111;
  color: #eee;
  overflow: hidden;
  position: relative;
}

.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}
.marquee-content:hover {
  animation-play-state: paused;
}
@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      calc(-1 * var(--marquee-element-width) * var(--marquee-elements))
    );
  }
}
.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  font-size: calc(var(--marquee-height) * 3 / 4); /* 5rem; */
  white-space: nowrap;
}

.marquee-content li img {
  width: 100%;
  /* height: 100%; */
  border: 2px solid #eee;
}
</style>
