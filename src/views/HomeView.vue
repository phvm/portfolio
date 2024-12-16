<template>
  <main class="max-w-3xl mx-auto py-5 px-7">
    <PageTitle title="Pedro Moura" />
    <h2 class="my-2 text-lg font-medium">
      {{ getMessage("homeView.presentation") }}
      <strong class="text-foregroundDeep">{{ getMessage("homeView.profession") }}</strong>
    </h2>
    <InnerText>
      {{ getMessage("homeView.aboutWork") }}
    </InnerText>
    <InnerText>
      {{ getMessage("homeView.websiteSummary.p1") }}
      <NavigationLink :link="navLinks.projects.link">{{ getMessage("homeView.projectsLink") }}</NavigationLink>
      {{ getMessage("homeView.websiteSummary.p2") }}
      <NavigationLink :link="navLinks.experiences.link"> {{ getMessage("homeView.experiencesLink") }}</NavigationLink>
    </InnerText>
    <InnerText>
      {{ getMessage("homeView.aboutMe") }}
    </InnerText>
    <p class="mt-6 inline-block">{{ getMessage("homeView.findMe") }}</p>
    <div aria-hidden="true" class="flex flex-col justify-between md:flex-row md:items-center">
      <nav class="flex my-4">
        <ExternalLink icon="iconoir:github" link="https://github.com/phvm" title="Github" />
        <ExternalLink icon="mdi:linkedin" link="https://linkedin.com/in/-pedromoura" title="LinkedIn" />
      </nav>

      <a
        class="p-2 my-4 text-center rounded-md bg-foregroundDeep font-semibold text-background transition-all duration-300 hover:bg-foregroundDeeper hover:scale-[102%]"
        download="pedro_moura_cv"
        href="/pedro_moura_CV.pdf"
        role="button"
      >
        {{ getMessage("homeView.cvDownload") }}
      </a>
    </div>
  </main>
</template>

<script lang="ts" setup>
import NavigationLink from "@/components/NavigationLink.vue";
import ExternalLink from "@/components/ExternalLink.vue";
import PageTitle from "@/components/PageTitle.vue";
import InnerText from "@/components/InnerText.vue";
import { navLinks } from "@/constants";
import { useLocaleStore } from "@/stores/localeStore";

const { getMessage } = useLocaleStore();
</script>
