<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useIntlStore, availableLocales } from "@/stores/useIntlStore";

const store = useIntlStore();
const isDropdownOpen = ref<boolean>(false);

function dropdownClick(locale: "pt" | "en") {
  store.changeLocale(locale);
  isDropdownOpen.value = false;
}
</script>

<template>
  <div class="flex flex-col justify-center ml-3">
    <button
      class="w-12 flex items-center justify-evenly rounded transition-colors duration-300 hover:text-foregroundDeep"
      type="button"
      @click="isDropdownOpen = !isDropdownOpen"
    >
      <Icon icon="icon-park-outline:earth" />
      {{ store.currentLocale.toLocaleUpperCase() }}
    </button>
    <Transition
      class="transition-all"
      enter-active-class="duration-300 ease-out"
      enter-from-class="-translate-y-2.5"
      leave-active-class="duration-300 linear"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="isDropdownOpen" class="flex flex-col absolute top-14">
        <button
          v-for="(locale, index) in availableLocales"
          :key="index"
          :class="locale === store.currentLocale ? ['text-foregroundDeeper', 'font-bold'] : ''"
          class="w-12 my-0.5 transition-all duration-200 hover:text-foregroundDeep hover:font-semibold"
          type="button"
          @click="dropdownClick(locale)"
        >
          {{ locale.toLocaleUpperCase() }}
        </button>
      </div>
    </Transition>
  </div>
</template>
