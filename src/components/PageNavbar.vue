<script lang="ts" setup>
import ThemeSelector from "@/components/ThemeSelector.vue";
import NavbarLink from "@/components/NavbarLink.vue";
import { NavbarLinks } from "@/constants";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const links = computed(() => {
  return NavbarLinks.filter((link) => link.link !== route.path);
});
</script>

<template>
  <nav class="flex justify-evenly p-8 md:px-6 md:justify-end">
    <NavbarLink
      v-for="(navbarLink, index) in links"
      :key="index"
      :icon="navbarLink.icon"
      :link="navbarLink.link"
      :title="navbarLink.title"
    />
    <ThemeSelector />
  </nav>
</template>

<style scoped></style>
