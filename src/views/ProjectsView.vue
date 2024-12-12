<template>
  <main class="max-w-5xl mx-auto py-10 px-7">
    <PageTitle centralized title="My projects" />
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :description="project.description"
        :repo-link="project.repoLink"
        :summary="project.summary"
        :technologies="project.technologies"
        :title="project.title"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import PageTitle from "@/components/PageTitle.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { projects } from "@/constants";
</script>
