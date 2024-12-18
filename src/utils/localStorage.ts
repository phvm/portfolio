export default function useLocalStorage<itemType>(key: string, initialValue?: itemType) {
  const localStorage = window.localStorage;

  if (initialValue) {
    localStorage.setItem(key, JSON.stringify(initialValue));
  }

  function saveItem(item: itemType): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  function getItem(): itemType | null {
    const item = localStorage.getItem(key);
    return JSON.parse(<string>item);
  }

  return { getItem, saveItem } as const;
}
