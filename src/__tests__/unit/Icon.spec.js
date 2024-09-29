import { mount } from "@vue/test-utils";
import Icons from "@/components/microComponents/Icon.vue";
import { describe, it, vi, expect } from "vitest";

describe("Icons", () => {
  it("Should render props and handle funstion", async () => {
    const funcHandler = vi.fn();
    const mouseEnterHandler = vi.fn();
    const mouseLeaveHandler = vi.fn();
    const wrapper = mount(Icons, {
      props: {
        iconURL: "Icon Src",
        altText: "alt info",
        classes: "primary-class",
        click: funcHandler,
        onMouseEnter: mouseEnterHandler,
        onMouseLeave: mouseLeaveHandler,
      },
    });

    expect(wrapper.find("img").attributes("src")).toBe("Icon Src");
    expect(wrapper.find("img").attributes("alt")).toBe("alt info");

    await wrapper.find("img").trigger("click");
    expect(funcHandler).toHaveBeenCalled();

    await wrapper.find("img").trigger("mouseenter");
    expect(mouseEnterHandler).toHaveBeenCalled();

    await wrapper.find("img").trigger("mouseleave");
    expect(mouseLeaveHandler).toHaveBeenCalled();
  });
});
