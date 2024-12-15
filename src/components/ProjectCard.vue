<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";

import ExternalLink from "@/components/ExternalLink.vue";

interface Props {
  title: string;
  summary: string;
  repoLink: string;
  description: string;
  technologies: string[];
}

const { title, summary, repoLink, description, technologies } = defineProps<Props>();
const isOpen = ref<boolean>(false);
const concatedTechonologies = computed(() => {
  return technologies.join(", ");
});
</script>

<template>
  <div
    :class="isOpen ? ['bg-elevation', 'shadow'] : null"
    class="group/card border-[1px] border-muted max-h-96 my-4 p-4 rounded-md bg-transparent shadow-none transition-all duration-300 hover:shadow hover:bg-elevation"
  >
    <span
      :class="isOpen ? ['text-foregroundDeeper', 'font-semibold'] : null"
      class="inline-block mb-2 transition-all duration-300 text-foregroundDeep font-medium group-hover/card:text-foregroundDeeper group-hover/card:font-semibold"
      >{{ title }}</span
    >
    <p>{{ summary }}</p>
    <div class="flex justify-end">
      <button class="p-2" type="button" @click="isOpen = !isOpen">
        <Icon
          :class="{ 'rotate-180': isOpen }"
          class="text-lg rotate-0 duration-500 transition-transform hover:cursor-pointer"
          icon="ic:round-expand-more"
        />
      </button>
    </div>
    <Transition
      class="transition-all"
      enter-active-class="duration-500 ease-out"
      enter-from-class="-translate-y-8 opacity-50"
      leave-active-class="duration-300 ease-in"
      leave-to-class="-translate-y-8 opacity-50"
    >
      <div v-if="isOpen">
        <p>{{ description }}</p>
        <p class="my-4 font-medium text-foregroundDeep tracking-wide">Technologies: {{ concatedTechonologies }}</p>
        <div class="flex justify-end">
          <ExternalLink :link="repoLink" title="Repository" />
        </div>
      </div>
    </Transition>
  </div>
</template>
