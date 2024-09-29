import { defineComponent } from "vue";

export const RouterLink = defineComponent({
  name: "RouterLink",
  props: {
    to: [String, Object],
    custom: Boolean,
  },
  template: "<a><slot /></a>",
});

export const RouterView = defineComponent({
  name: "RouterView",
  render: () => null,
});

export const useRoute = () => ({
  path: "/",
});

export const useRouter = () => ({
  push: () => {},
  replace: () => {},
});
