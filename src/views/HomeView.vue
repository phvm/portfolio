<template>
  <main class="bg-background w-screen h-screen flex flex-col justify-center items-center pb-16">
    <h1 class="text-center text-4xl text-faded">Hi, I'm <span class="font-bold">Pedro Moura</span></h1>
    <h2 class="text-center text-xl text-foreground">I'm a software developer, specialized in front-end development.</h2>
    <nav class="flex justify-evenly w-1/2">
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
import { navLinks } from "@/constants/navLinks";
</script>
