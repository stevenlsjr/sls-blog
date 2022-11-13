import DefaultBlockVue from "../DefaultBlock.vue";
import { shallowMount } from "@vue/test-utils";
import { faker } from "@faker-js/faker";

describe("DefaultBlock", () => {
  it("wraps the raw value in a <pre> element", () => {
    const value = faker.lorem.paragraph();
    const wrapper = shallowMount(DefaultBlockVue, {
      props: {
        value: value,
      },
    });
    expect(wrapper.text()).toContain(value)
  });
});
