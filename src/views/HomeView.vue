<template>
  <main class="max-w-3xl mx-auto py-10 px-7">
    <PageTitle title="Pedro Moura" />
    <h2 class="my-2 text-lg font-medium">
      Hey, I'm Pedro Moura, I'm a software developer specialized in
      <strong class="text-accent">front-end development.</strong>
    </h2>
    <InnerText>
      My favorite work is to build software that looks great, is accessible to everyone and is blazing fast,
      meticulously crafting with accessibility, responsiveness and performance in mind.
    </InnerText>
    <InnerText>
      You can see some
      <NavigationLink :link="navLinks.projects.link">projects I've already built</NavigationLink>
      (sometimes with wonderful people) or if you're curious about my experiences history as a software developer,
      <NavigationLink :link="navLinks.experiences.link"> you can go here.</NavigationLink>
    </InnerText>
    <InnerText>
      Outside of coding and building software, my other hobbies include playing video games and cooking. I'm a
      experimentalist by nature. I feel trilled to try new things, be it a new technology, a new flavor of my favorite
      drink or a new way to cook my favorite dish.
    </InnerText>
    <span class="mt-10 mb-2 inline-block">Find me or come say hi on</span>
    <div class="flex items-center justify-between px-2">
      <nav class="flex">
        <SocialLinks icon="iconoir:github" link="https://github.com/phvm" title="Github" />
        <SocialLinks icon="mdi:linkedin" link="https://linkedin.com/in/-pedromoura" title="LinkedIn" />
      </nav>

      <a
        class="p-2 rounded-md bg-accent border-foreground font-medium text-accentForeground"
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
import InnerText from "@/components/InnerText.vue";
import { navLinks } from "@/constants";
</script>
