<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

interface Props {
  link: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="props.link"
    class="p-1 text-base font-bold underline-offset-2 hover:text-md hover:text-accent transition-all"
  >
    <slot />
  </RouterLink>
</template>
