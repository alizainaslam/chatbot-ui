import { RouterLink, RouterView } from "../../__mocks__/vue-router";
import { mount } from "@vue/test-utils";
import UserPrompt from "@/components/inputFields/UserPrompt.vue";
import { describe, it, expect, vi } from "vitest";

// Mock Vue Router components
vi.mock("vue-router", () => ({
  RouterLink,
  RouterView,
  useRoute: () => ({ path: "/" }),
  useRouter: () => ({ push: () => {}, replace: () => {} }),
}));

describe("UserPrompt", () => {
  it("should enable the send button when input is valid", async () => {
    const wrapper = mount(UserPrompt);

    // Initially, button should be disabled
    const sendButton = wrapper.find("button");
    expect(sendButton.element.disabled).toBe(true);

    // Update the input value to a valid input
    const textarea = wrapper.find("textarea");
    await textarea.setValue("Hello world");

    // Button should now be enabled
    expect(sendButton.element.disabled).toBe(false);
  });

  it("should disable the send button when input is invalid", async () => {
    const wrapper = mount(UserPrompt);

    // Enter invalid input (empty or with invalid characters)
    const textarea = wrapper.find("textarea");
    await textarea.setValue("");

    // Button should remain disabled
    const sendButton = wrapper.find("button");
    expect(sendButton.element.disabled).toBe(true);
  });
});
