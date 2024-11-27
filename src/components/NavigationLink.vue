<script lang="ts" setup>
import { RouterLink } from "vue-router";

interface Props {
  link: string;
  text: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="props.link"
    class="group p-1 text-base font-bold underline-offset-2 hover:text-md hover:text-accent transition-all"
  >
    <i class="group-hover:translate-x-1.5 mr-1 fa-solid fa-arrow-right transition-all"></i>
    {{ props.text }}
  </RouterLink>
</template>
