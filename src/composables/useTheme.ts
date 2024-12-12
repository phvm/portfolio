import { ref, watchEffect } from "vue";
import useLocalStorage from "@/utils/localStorage";

export default function useTheme() {
  const isDarkMode = ref<boolean | null>();
  const { getItem, saveItem } = useLocalStorage<boolean>("darkMode");

  const prefersDarkMode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const localStorageMode = getItem();
  isDarkMode.value = localStorageMode ?? prefersDarkMode;

  function changeColorMode(): void {
    isDarkMode.value = !isDarkMode.value;
    saveItem(isDarkMode.value);
  }

  watchEffect(() =>
    isDarkMode.value ?
      document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark")
  );

  return { isDarkMode, changeColorMode } as const;
}
