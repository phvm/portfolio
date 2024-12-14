<script lang="ts" setup>
import { RouterLink } from "vue-router";

interface Props {
  link: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="props.link"
    class="text-base text-foregroundDeep pb-[2px] border-b-[1px] border-[rgba(255,255,255,0.3)] font-bold transition-all duration-300 delay-100 hover:text-md hover:text-accent hover:border-accent"
  >
    <slot />
  </RouterLink>
</template>
