import { mount } from "@vue/test-utils";
import Button from "@/components/microComponents/Button.vue";
import { describe, it, vi, expect } from "vitest";

describe("Button", () => {
  it("should render props and handle function", async () => {
    const funcHandler = vi.fn();
    const wrapper = mount(Button, {
      props: {
        type: "submit",
        label: "Click Me",
        classes: "btn-primary",
        click: funcHandler,
      },
    });
    expect(wrapper.text()).toContain("Click Me");
    expect(wrapper.find("button").attributes("type")).toBe("submit");
    await wrapper.find("button").trigger("click");
    expect(funcHandler).toHaveBeenCalled();
  });
});
