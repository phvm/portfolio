<script lang="ts" setup>
import ThemeSelector from "@/components/ThemeSelector.vue";
import NavbarLink from "@/components/NavbarLink.vue";
import { NavbarLinks } from "@/constants";
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const links = computed(() => {
  return NavbarLinks.filter((link) => link.link !== route.path);
});
</script>

<template>
  <nav class="flex justify-evenly p-8 md:px-6 md:justify-end">
    <NavbarLink v-for="(navbarLink, index) in links" :key="index" :link="navbarLink.link" :title="navbarLink.title">
      <Icon :icon="navbarLink.icon" class="text-lg" />
    </NavbarLink>
    <ThemeSelector />
  </nav>
</template>

<style scoped></style>
