import { describe, test, expect } from "vitest";
import PageTitle from "../../src/components/PageTitle.vue";
import { mount } from "@vue/test-utils";

describe("Page title rendering correctly", () => {
  test("Page title renders text successfully", async () => {
    const wrapper = mount(PageTitle, {
      props: { title: "Test" },
    });

    expect(wrapper.get('[data-test="title"]').text()).toBe("Test");
  });

  test("Changing text centralization does not affect render", async () => {
    const wrapper = mount(PageTitle, {
      props: { title: "Test", centralized: false },
    });

    expect(wrapper.get('[data-test="title"]').text()).toBe("Test");

    await wrapper.setProps({ centralized: true });

    expect(wrapper.get('[data-test="title"]').text()).toBe("Test");
  });
});
