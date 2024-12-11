<template>
  <main class="max-w-5xl mx-auto py-10 px-7">
    <PageTitle centralized title="My projects" />
    <div class="md:grid md:grid-cols-3">
      <ProjectCard :technologies="['teste']" description="teste" repo-link="#" summary="Testando" title="portfolio" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import PageTitle from "@/components/PageTitle.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>
