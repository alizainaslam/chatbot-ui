<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  label: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    default: "",
  },
  click: {
    type: Function,
    default: () => {},
  },
});
</script>
<template>
  <button
    :type="type"
    :class="['py-2 px-4 capitalize rounded-sm text-[1rem] md:text-lg', classes]"
    @click="click"
  >
    <span v-if="typeof label === 'string'">
      {{ label }}
    </span>
  </button>
</template>
