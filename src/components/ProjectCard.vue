<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import ExternalLink from "@/components/ExternalLink.vue";
import { useIntlStore } from "@/stores/useIntlStore";

interface Props {
  title: string;
  summary: string;
  repoLink: string;
  description: string;
  technologies: string[];
}

const { title, summary, repoLink, description, technologies } = defineProps<Props>();
const isOpen = ref<boolean>(false);
const concatenatedTechnologies = computed(() => {
  return technologies.join(", ");
});
const store = useIntlStore();
</script>

<template>
  <div
    :class="isOpen ? ['shadow', 'bg-elevation'] : ['bg-transparent']"
    class="group/card border-[1px] border-muted my-4 p-4 h-fit rounded-md transition-all duration-500 ease-out hover:shadow hover:bg-elevation"
  >
    <p
      :class="isOpen ? ['text-foregroundDeeper', 'font-semibold'] : null"
      class="inline-block mb-2 transition-all duration-300 text-foregroundDeep font-medium group-hover/card:text-foregroundDeeper group-hover/card:font-semibold"
    >
      {{ title }}
    </p>
    <p>{{ store.getMessage(summary) }}</p>
    <div aria-hidden="true" class="flex justify-end">
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
      enter-active-class="duration-300 ease-in"
      enter-from-class="-translate-y-12 opacity-0"
      leave-active-class="duration-300 ease-in"
      leave-to-class="-translate-y-12 opacity-0"
    >
      <div v-if="isOpen">
        <p>{{ store.getMessage(description) }}</p>
        <p class="my-4 font-medium text-foregroundDeep tracking-wide">
          {{ store.getMessage("projectsCard.technologies") }}: {{ concatenatedTechnologies }}
        </p>
        <div class="flex justify-end">
          <ExternalLink :link="repoLink" :title="store.getMessage('projectsCard.repo')" />
        </div>
      </div>
    </Transition>
  </div>
</template>
