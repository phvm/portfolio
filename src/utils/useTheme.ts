import { ref, watchEffect } from "vue";
import useLocalStorage from "@/utils/localStorage";

export default function useTheme() {
  const isLightMode = ref<boolean | null>();
  const { getItem, saveItem } = useLocalStorage<boolean>("mode");

  isLightMode.value = getItem();

  function changeColorMode() {
    isLightMode.value = !isLightMode.value;
    saveItem(isLightMode.value);
  }

  watchEffect(() =>
    isLightMode.value ?
      document.documentElement.classList.remove("dark")
    : document.documentElement.classList.add("dark")
  );

  return { isLightMode, changeColorMode } as const;
}
