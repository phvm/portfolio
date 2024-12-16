<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { useScreenSize } from "@/composables/useScreenSize";

interface Props {
  link: string;
  title: string;
  icon: string;
  isActive: boolean;
}

const isMobile = useScreenSize();

const { link, title, icon, isActive } = defineProps<Props>();
</script>

<template>
  <RouterLink
    :class="isActive ? 'border-current' : 'border-transparent'"
    :to="link"
    class="group/navlink border-b-2 mx-1 md:mx-3 md:py-1 text-foreground transition-colors hover:text-foregroundDeep"
  >
    <button class="flex items-center font-medium transition-all group-active/navlink:translate-y-1.5">
      <Icon :icon="icon" class="text-xl mx-0.5" />
      <span v-if="!isMobile"> {{ title.charAt(0).toUpperCase() + title.slice(1) }}</span>
    </button>
  </RouterLink>
</template>

<style scoped></style>
