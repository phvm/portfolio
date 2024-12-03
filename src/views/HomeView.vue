<template>
  <main class="flex flex-col mx-auto px-4 lg:p-12 lg:w-1/2">
    <PageTitle title="Pedro Moura" />
    <h2 class="my-2 text-lg font-medium">
      Hey, I'm Pedro Moura, I'm a software developer specialized in
      <strong class="text-accent">front-end development.</strong>
    </h2>
    <p class="my-2 text-base/7">
      My favorite work is to build software that looks great, is accessible to everyone and is blazing fast,
      meticulously crafting with accessibility, responsiveness and performance in mind.
    </p>
    <p class="my-4 text-base/7">
      You can see some
      <NavigationLink :link="navLinks.projects.link">projects I've already built</NavigationLink>
      (sometimes with wonderful people) or if you're curious about my experiences history as a software developer,
      <NavigationLink :link="navLinks.experiences.link"> you can go here.</NavigationLink>
    </p>
    <span class="mt-6 mb-2">Find me or come say hi on</span>
    <div class="flex items-center justify-between px-2">
      <nav class="flex">
        <SocialLinks icon="iconoir:github" title="Github" />
        <SocialLinks icon="mdi:linkedin" title="LinkedIn" />
      </nav>

      <a
        class="border-2 p-1 rounded-md bg-accent border-foreground text-accentForeground"
        download="cv"
        href="public/Currículo.pdf"
      >
        <button>Download my CV</button>
      </a>
    </div>
  </main>
</template>

<script lang="ts" setup>
import NavigationLink from "@/components/NavigationLink.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import PageTitle from "@/components/PageTitle.vue";
import { navLinks } from "@/constants";
</script>
