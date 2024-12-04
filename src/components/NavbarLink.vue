<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";

interface Props {
  link: string;
  title: string;
}

const mobileSize = 640;
const isMobile = ref<boolean>(window.innerWidth <= mobileSize);
const calculateWidth = () => (isMobile.value = window.innerWidth < mobileSize);

onMounted(() => {
  window.addEventListener("resize", calculateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", calculateWidth);
});

const { link, title } = defineProps<Props>();
</script>

<template>
  <RouterLink :to="link" class="group mx-1 md:px-3 md:py-1">
    <button class="flex items-center transition-all group-active:translate-y-1">
      <slot v-if="!isMobile" />
      {{ title }}
    </button>
  </RouterLink>
</template>

<style scoped></style>
