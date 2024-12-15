<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";
import { Icon } from "@iconify/vue";

interface Props {
  link: string;
  title: string;
  icon: string;
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

const { link, title, icon } = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="link"
    class="group/navlink mx-1 md:px-3 md:py-1 text-foreground transition-colors hover:text-foregroundDeep"
  >
    <button class="flex items-center font-medium transition-all group-active/navlink:translate-y-1.5">
      <Icon :icon :v-if="!isMobile" class="text-xl mx-0.5" />
      {{ title.charAt(0).toUpperCase() + title.slice(1) }}
    </button>
  </RouterLink>
</template>

<style scoped></style>
