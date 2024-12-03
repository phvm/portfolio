<template>
  <main class="flex flex-col mx-auto px-2 lg:p-12 lg:w-1/2">
    <h1 class="text-xl fo font-bold text-left mb-3 md:text-4xl">Pedro Moura</h1>
    <h2 class="my-2 text-lg font-medium">
      Hey, I'm Pedro Moura, I'm a software developer specialized in
      <strong class="text-accent">front-end development.</strong>
    </h2>
    <p class="my-2 text-base/7">
      My favorite work is to build software that looks great, is accessible to everyone and is blazing fast,
      meticulously crafting with accessibility, responsiveness and performance in mind. <br />
      You can see some
      <NavigationLink :link="navLinks.projects.link">projects I've already built</NavigationLink>
      (sometimes with wonderful people) or if you're curious about my past experiences as a software developer,
      <NavigationLink :link="navLinks.experiences.link"> you can go here.</NavigationLink>
    </p>

    <div class="flex items-center mt-6 justify-between px-2">
      <nav class="flex">
        <a class="mr-4" href="https://github.com/phvm" rel="noopener noreferrer" target="_blank">
          <Icon class="text-3xl" icon="iconoir:github" />
        </a>
        <a class="mx-4" href="https://linkedin.com/in/-pedromoura/" rel="noopener noreferrer" target="_blank">
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
