<template>
  <main class="flex flex-col px-2">
    <h1 class="text-xl font-bold md:text-3xl text-left w-full">Pedro Moura</h1>
    <h2 class="my-4 text-lg md:w-2/3">
      Hey, I'm Pedro Moura, I'm a software developer specialized in
      <strong class="text-accent">front-end development.</strong>
    </h2>
    <p>
      My favorite work is to build software that looks great, is accessible to everyone and is blazing fast,
      meticulously crafting with accessibility, responsiveness and performance in mind.
    </p>
    <p>
      You can see some
      <NavigationLink :link="navLinks.projects.link">projects I've already built</NavigationLink>
      (sometimes with wonderful people) or if you're curious about my past as a software developer,
      <NavigationLink :link="navLinks.experiences.link"> you can go here.</NavigationLink>
    </p>

    <div class="flex items-center mt-6 justify-between px-2">
      <nav class="flex">
        <a href="https://github.com/phvm" rel="noopener noreferrer" target="_blank">
          <Icon class="text-3xl" icon="iconoir:github" />
        </a>
        <a href="https://linkedin.com/in/-pedromoura/" rel="noopener noreferrer" target="_blank">
          <Icon class="text-3xl" icon="mdi:linkedin" />
        </a>
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
import { Icon } from "@iconify/vue";
import { navLinks } from "@/constants";
</script>
