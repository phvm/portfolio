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
    class="text-base text-foregroundDeep pb-[2px] border-b-[1px] border-muted font-bold transition-all duration-300 delay-100 hover:text-md hover:text-foregroundDeeper hover:border-foregroundDeeper"
  >
    <slot />
  </RouterLink>
</template>
