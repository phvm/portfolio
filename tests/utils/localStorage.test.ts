import { beforeEach, expect, test } from "vitest";
import useLocalStorage from "../../src/utils/localStorage";

beforeEach(() => {
  localStorage.clear();
});

test("Saving item to local storage", () => {
  const { saveItem } = useLocalStorage<boolean>("boolean");
  saveItem(true);

  expect(JSON.parse(localStorage.getItem("boolean"))).toBe(true);
});

test("Initializing local storage with value", () => {
  const { getItem } = useLocalStorage("test", "test");

  expect(getItem()).toBe("test");
});

test("Getting non existing item from local storage", () => {
  const { getItem } = useLocalStorage("test");
  expect(getItem()).toBe(null);
});

test("Update value of existing item from local storage", () => {
  const { saveItem } = useLocalStorage<string>("test", "");

  saveItem("test");
  expect(JSON.parse(localStorage.getItem("test"))).toBe("test");
});

test("Saving and getting multiples items from local storage", () => {
  const stringStore = useLocalStorage<string>("string", "");
  const numberStore = useLocalStorage<number>("number", 0);

  stringStore.saveItem("test");
  numberStore.saveItem(20);

  expect(stringStore.getItem()).toBe("test");
  expect(numberStore.getItem()).toBe(20);
});
