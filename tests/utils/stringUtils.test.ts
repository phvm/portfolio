import { expect, test, describe } from "vitest";
import { toUppercaseFirstChar } from "../../src/utils/stringUtils";

test("Uppercase first char from lowercased string", () => {
  expect(toUppercaseFirstChar("test")).toBe("Test");
});

test("Uppercase first char from uppercase string", () => {
  expect(toUppercaseFirstChar("TEST")).toBe("TEST");
});

test("Uppercase string with only 1 char", () => {
  expect(toUppercaseFirstChar("t")).toBe("T");
});
