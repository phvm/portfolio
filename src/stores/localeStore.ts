import en from "@/messages/en.json";
import pt from "@/messages/pt.json";
import { computed, ref, watchEffect } from "vue";
import useLocalStorage from "@/utils/localStorage";

type languages = "pt" | "en";
type messages = { [key: string]: string };

const defaultLocale = "en";
const availableMessages = {
  en: en,
  pt: pt,
};
const availableLocales: languages[] = ["pt", "en"];
const { getItem, saveItem } = useLocalStorage<languages>("language");
const currentLocale = ref<languages>(getItem() ?? defaultLocale);

const messages = computed<messages>(() => {
  return availableMessages[currentLocale.value];
});

function getMessage(id: string) {
  return messages.value[id];
}

function changeLocale(language: "en" | "pt") {
  if (!availableLocales.includes(language)) {
    return (currentLocale.value = defaultLocale);
  }
  return (currentLocale.value = language);
}

watchEffect(() => {
  saveItem(currentLocale.value);
});

export const useLocaleStore = () => ({
  currentLocale,
  availableLocales,
  getMessage,
  changeLocale,
});
