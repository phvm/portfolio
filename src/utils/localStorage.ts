export default function useLocalStorage<itemType>(key: string) {
  const localStorage = window.localStorage;

  function saveItem(item: itemType): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  function getItem(): itemType | null {
    const item = localStorage.getItem(key);
    return JSON.parse(<string>item);
  }

  return { getItem, saveItem } as const;
}
