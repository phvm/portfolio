import { onMounted, onUnmounted, ref, watchEffect } from "vue";

export function useScreenSize() {
  const mobileSize = 640;
  const isMobile = ref<boolean>(window.innerWidth <= mobileSize);

  const calculateWidth = () => (isMobile.value = window.innerWidth < mobileSize);

  watchEffect(() => {
    console.log(isMobile.value);
  });

  onMounted(() => {
    window.addEventListener("resize", calculateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", calculateWidth);
  });

  return isMobile;
}
