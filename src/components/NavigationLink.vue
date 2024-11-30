<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

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
    {{ props.text }}
    <Icon
      class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xl transition-all inline"
      icon="jam:arrow-up-right"
    />
  </RouterLink>
</template>
