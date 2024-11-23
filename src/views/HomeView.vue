<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center pb-16">
    <h1 class="text-center text-3xl text-faded md:text-3xl lg:text-5xl">
      Hi, I'm <strong class="font-bold">Pedro Moura</strong>
    </h1>
    <h2 class="text-center text-base px-2 md:w-1/2 md:text-xl lg:w-1/4">
      I'm a software developer, specialized in <strong>front-end development.</strong>
    </h2>
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
import { navLinks } from "@/constants";
</script>
