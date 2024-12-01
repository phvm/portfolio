<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center pb-16">
    <ThemeSelector />
    <h1 class="text-center text-base md:text-xl">Hi, I'm Pedro Moura</h1>
    <h2 class="text-center my-2 text-faded text-3xl px-2 md:w-2/3 lg:text-4xl">
      I'm a software developer, specialized in <strong class="text-accent">front-end development.</strong>
    </h2>
    <h3 class="text-center md:w-1/2">
      My favorite work is to build software that looks great, is accessible to everyone and is blazing fast,
      meticulously crafting with accessibility, responsiveness and performance in mind.
    </h3>
    <nav class="flex flex-col items-center w-full mt-4 md:flex-row md:justify-evenly md:w-2/3 lg:w-1/2">
      <NavigationLink
        v-for="(navLink, index) in navLinks"
        :key="index"
        :link="navLink.linkTo"
        :text="navLink.pageTitle"
      />
    </nav>
  </main>
</template>

<script lang="ts" setup>
import NavigationLink from "@/components/NavigationLink.vue";
import ThemeSelector from "@/components/ThemeSelector.vue";
import { navLinks } from "@/constants";
</script>
