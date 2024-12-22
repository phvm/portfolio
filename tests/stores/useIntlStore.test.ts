import { expect, describe, test, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useIntlStore, defaultLocale } from "../../src/stores/useIntlStore";
import en from "../../src/messages/en.json";
import pt from "../../src/messages/pt.json";

describe("Internationalization store working correctly", () => {
  beforeEach(() => {
    en["test"] = "test";
    pt["test"] = "test";
    localStorage.clear();
    setActivePinia(createPinia());
  });

  test("Using default locale when no other locale is saved", () => {
    const { currentLocale } = useIntlStore();
    expect(currentLocale).toBe(defaultLocale);
  });

  test("Using local storage locale over default locale", () => {
    const newLocale: string = "en";
    localStorage.setItem("language", JSON.stringify(newLocale));

    const { currentLocale } = useIntlStore();
    expect(currentLocale).toBe(newLocale);
  });

  test("Changing locale successfully", () => {
    const { currentLocale, changeLocale } = useIntlStore();
    expect(currentLocale).toBe(defaultLocale);

    changeLocale("pt");
    expect(currentLocale).toBe("pt");
  });

  test("Getting messages correctly", () => {
    const { getMessage } = useIntlStore();
    const message = getMessage("test");

    expect(message).toBe("test");
  });

  test("Getting non existing message", () => {
    const { getMessage } = useIntlStore();
    const message = getMessage("");

    expect(message).toBeFalsy;
  });
});
