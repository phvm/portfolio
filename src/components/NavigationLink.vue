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
    class="text-base text-foregroundDeep border-b-[1px] font-bold transition-all hover:text-md hover:text-accent"
  >
    <slot />
  </RouterLink>
</template>
