<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { onMounted, onUnmounted, ref, watch } from "vue";

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
  <RouterLink :to="link" class="mx-1">
    <button class="flex items-center">
      <slot v-if="!isMobile" class="active:translate-x-2" />
      {{ title }}
    </button>
  </RouterLink>
</template>

<style scoped></style>
