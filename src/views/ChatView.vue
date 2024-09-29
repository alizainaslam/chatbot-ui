<script setup>
import { reactive, watch } from "vue";
import UserInput from "@/components/inputFields/UserPrompt.vue";
import { iconsAsButtonForchatView } from "@/helpers/ChatViewHelpers";
import { promptDataBase } from "@/store/Database.store";

const translationStates = reactive({});
const selectedResponseForTranslation = reactive(new Map());

const handleToggleTranslationButton = (iconIndex, dataIndex, isHover) => {
  if (iconIndex === 3) {
    translationStates[dataIndex] = isHover;
  }
};

const addResponse = (id, response) => {
  selectedResponseForTranslation.set(id, response);
};
</script>

<template>
  <div class="flex flex-col relative">
    <div class="chat-container w-[87%] md:w-[64%] m-[auto] mt-[5rem] pb-24">
      <div
        class="question-answer-block mb-5"
        v-for="(assistantData, dataIndex) in promptDataBase"
        :key="dataIndex"
      >
        <!-- Question -->
        <h2
          class="question text-xl font-medium mb-[0.80rem] mt-5 border-t border-dividerColor pt-4"
        >
          {{ assistantData.userPromptInput }}
        </h2>

        <!-- Answer -->
        <p
          class="answer text-[0.93rem] md:text-[1rem] tracking-[0.022rem] opacity-97"
        >
          {{ assistantData.assistantResponse }}
        </p>

        <!-- ICONS / Button -->
        <div
          class="HelpersButtonsQuestionAnswer flex gap-[1rem] mt-3 ml-[0.2rem] items-center"
        >
          <button
            v-for="(icon, iconIndex) in iconsAsButtonForchatView"
            :key="iconIndex"
            @click="icon.click(assistantData.assistantResponse)"
            @mouseenter="
              handleToggleTranslationButton(iconIndex, dataIndex, true)
            "
            @mouseleave="
              handleToggleTranslationButton(iconIndex, dataIndex, false)
            "
            class="flex items-center gap-1"
          >
            <img
              :src="icon.iconURL"
              :alt="icon.altText"
              :class="icon.classes"
            />
            <span
              v-if="
                translationStates[dataIndex] &&
                iconIndex === 3 &&
                icon.altText === 'Translation'
              "
              @click="addResponse(dataIndex, assistantData.assistantResponse)"
              class="text-[0.8rem] opacity-55"
            >
              {{ icon.altText }}
            </span>
          </button>
        </div>
      </div>
    </div>

    <div
      class="input-container fixed bottom-0 left-0 right-0 max-w-sm w-full m-auto bg-primary z-10"
    >
      <UserInput />
    </div>
  </div>
</template>
