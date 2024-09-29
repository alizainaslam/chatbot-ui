<!-- JS -->
<script setup>
defineProps({
  iconURL: {
    type: String,
    default: "",
  },
  altText: {
    type: String,
    default: "",
  },
  classes: {
    type: [String, Array],
    default: "",
  },
  click: {
    type: Function,
    default: null,
  },
  onMouseEnter: {
    type: Function,
    default: null,
  },
  onMouseLeave: {
    type: Function,
    default: null,
  },
});
</script>

<!-- HTML -->
<template>
  <img
    :src="iconURL"
    :alt="altText"
    :class="classes"
    @click="click"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  />
</template>
