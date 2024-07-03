<template>
  <nav>
    <div v-for="data in pagesNavbarData" :key="data.name">{{ data.name }}</div>
  </nav>
</template>

<script setup lang="ts">
import { pagesNavbarData } from '../utils/constants'
</script>

<style scoped></style>
