<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  classes: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <p
    :type="type"
    :class="[
      'max-w-fit max-h-fit p-[0.4rem] bg-secondary text-primary text-[0.7rem] rounded-md ',
      classes,
    ]"
  >
    {{ label }}
  </p>
</template>
