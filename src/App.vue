<script setup lang="ts">
import { RouterView } from 'vue-router'
import PagesFooter from './components/PagesFooter.vue'
import PagesNavbar from './components/PagesNavbar.vue'
</script>

<template>
  <PagesNavbar />
  <main><RouterView /></main>
  <footer>
    <PagesFooter />
  </footer>
</template>
