import { defineStore } from "pinia";
import en from "@/messages/en.json";
import pt from "@/messages/pt.json";
import useLocalStorage from "@/utils/localStorage";
import { computed, ref, watchEffect } from "vue";

type languages = "pt" | "en";
type messages = { [key: string]: string };

const availableMessages = {
  en: en,
  pt: pt,
};
export const availableLocales: languages[] = ["pt", "en"];
export const defaultLocale = "pt";

export const useIntlStore = defineStore("intl", () => {
  const { getItem, saveItem } = useLocalStorage<languages>("language");
  const currentLocale = ref<languages>(getItem() ?? defaultLocale);

  const messages = computed<messages>(() => {
    return availableMessages[currentLocale.value];
  });

  function getMessage(id: string) {
    return messages.value[id];
  }

  function changeLocale(language: "en" | "pt") {
    return (currentLocale.value = language);
  }

  watchEffect(() => {
    saveItem(currentLocale.value);
  });

  return { currentLocale, getMessage, changeLocale };
});
