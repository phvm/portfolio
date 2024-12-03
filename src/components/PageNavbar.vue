<script lang="ts" setup>
import ThemeSelector from "@/components/ThemeSelector.vue";
import NavbarLink from "@/components/NavbarLink.vue";
import { NavbarLinks } from "@/constants";
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav class="flex justify-evenly px-2 py-2 mb-4 md:px-6 md:justify-end">
    <NavbarLink
      v-for="(navbarLink, index) in NavbarLinks"
      :key="index"
      :link="navbarLink.link"
      :title="navbarLink.title"
    >
      <Icon :icon="navbarLink.icon" />
    </NavbarLink>
    <ThemeSelector />
  </nav>
</template>

<style scoped></style>
