import { describe, test, expect } from "vitest";
import SkillChip from "../../src/components/SkillChip.vue";
import { mount } from "@vue/test-utils";

describe("Rendering skill chip correctly", () => {
  test("Rendering chip with text", () => {
    const wrapper = mount(SkillChip, {
      props: { skillName: "Test" },
    });

    expect(wrapper.get('[data-test="skillName"]').text()).toBe("Test");
  });
});
