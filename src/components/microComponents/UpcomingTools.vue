<script setup>
import { ref } from "vue";

const modelInformations = ref([
  {
    modelName: "PDF chat",
    isAvailable: false,
  },
  // {
  //   modelName: "OCR",
  //   isAvailable: false,
  // },
  // {
  //   modelName: "YTVideo",
  //   isAvailable: false,
  // },
  // {
  //   modelName: "Webpage",
  //   isAvailable: false,
  // },
  // {
  //   modelName: "Spreadsheet",
  //   isAvailable: false,
  // },
]);
</script>
<template>
  <div class="model-info-container flex flex-col gap-2">
    <ul
      v-for="(model, index) in modelInformations"
      :key="index"
      class="text-sm"
    >
      <li v-if="model.isAvailable">
        {{ model.modelName }}
      </li>
      <li v-else class="flex gap-2 items-center text-secondary">
        {{ model.modelName }}
        <span class="text-[11px] border border-dividerColor px-1 rounded-md"
          >Coming soon</span
        >
      </li>
    </ul>
  </div>
</template>
