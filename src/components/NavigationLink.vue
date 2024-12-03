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
    class="text-base font-bold underline-offset-2 transition-colors duration-300 hover:text-md hover:text-accent"
  >
    <slot />
  </RouterLink>
</template>
