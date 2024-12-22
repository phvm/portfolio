import ExperienceCard from "../../src/components/ExperienceCard.vue";
import { describe, test, expect, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import en from "../../src/messages/en.json";
import pt from "../../src/messages/pt.json";

const mockProps = {
  experienceTitle: "Mock title",
  company: "Mock company",
  description: "Mock description",
  startingDate: "01/01/2000",
  endDate: "02/02/2000",
  skills: ["skill1"],
};

mount(Intl, {
  global: {
    plugins: [createTestingPinia({ initialState: { intl: { currentLocale: "en" } }, stubActions: false })],
  },
});

beforeEach(() => {
  en["Mock title"] = "Mock title";
  en["Mock description"] = "Mock description";
  pt["Mock title"] = "Mock title";
  pt["Mock description"] = "Mock description";
});

describe("Rendering experience card correctly", () => {
  test("Rendering experience title and company correctly", async () => {
    const wrapper = mount(ExperienceCard, {
      props: mockProps,
    });

    const title = wrapper.get('[data-test="title"]');
    expect(title.text()).toBe(`${mockProps.experienceTitle} @ ${mockProps.company}`);
  });

  test("Rendering dates correctly", async () => {
    const wrapper = mount(ExperienceCard, {
      props: mockProps,
    });

    const dates = wrapper.get('[data-test="dates"]');
    expect(dates.text()).toBe(`${mockProps.startingDate} - ${mockProps.endDate}`);
  });

  test("Rendering description correctly", async () => {
    const wrapper = mount(ExperienceCard, {
      props: mockProps,
    });

    const description = wrapper.get('[data-test="description"]');
    expect(description.text()).toBe(mockProps.description);
  });

  test("Rendering skill list correctly", async () => {
    const wrapper = mount(ExperienceCard, {
      props: mockProps,
    });

    const skills = wrapper.findAll('[data-test="skills"]');
    expect(skills).toHaveLength(mockProps.skills.length);
  });
});
