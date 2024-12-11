<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

interface Props {
  title: string;
  summary: string;
  repoLink: string;
  description: string;
  technologies: string[];
}

const { title, summary, repoLink, description } = defineProps<Props>();
const isOpen = ref<boolean>(false);
</script>

<template>
  <div
    :class="isOpen ? ['bg-elevation', 'shadow-md'] : null"
    class="group p-4 rounded-md bg-transparent shadow-none transition-all duration-300 hover:shadow-md hover:bg-elevation"
  >
    <span
      :class="isOpen ? ['text-accent', 'font-medium'] : null"
      class="inline-block mb-2 transition-all duration-300 group-hover:text-accent group-hover:font-medium"
      >{{ title }}</span
    >
    <p>{{ summary }}</p>
    <div class="flex justify-end">
      <Icon
        :class="{ 'rotate-180': isOpen }"
        class="text-lg rotate-0 duration-500 transition-transform hover:cursor-pointer"
        icon="ic:round-expand-more"
        @click="isOpen = !isOpen"
      />
    </div>
    <Transition>
      <div v-if="isOpen">
        <a>{{ repoLink }}</a>
        <span>{{ description }}</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
