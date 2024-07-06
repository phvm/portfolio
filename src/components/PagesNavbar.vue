<template>
  <header class="flex justify-between pr-3 py-4 border-b-2 sticky text-base">
    <h1 class="ml-2">Placeholder logo</h1>
    <nav>
      <NavbarButton v-for="data in pagesNavbarData" :key="data.name" :link="data.link" :name="data.name" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import NavbarButton from './NavbarButton.vue';
import { pagesNavbarData } from '../utils/constants';
</script>
