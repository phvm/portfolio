<script lang="ts" setup>
import ThemeSelector from "@/components/ThemeSelector.vue";
import NavbarLink from "@/components/NavbarLink.vue";
import { NavbarLinks } from "@/constants";
import { useRoute } from "vue-router";
import LanguageSelector from "@/components/LanguageSelector.vue";

const activeRoute = useRoute();
</script>

<template>
  <nav class="flex justify-evenly p-6 md:px-6 md:justify-end">
    <NavbarLink
      v-for="(navbarLink, index) in NavbarLinks"
      :key="index"
      :icon="navbarLink.icon"
      :is-active="activeRoute.path === navbarLink.link"
      :link="navbarLink.link"
      :title="navbarLink.title"
    />
    <ThemeSelector />
    <LanguageSelector />
  </nav>
</template>

<style scoped></style>
