<!-- JS -->
<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import Icons from "../microComponents/Icon.vue";
import iconAsSendPrompt from "../../assets/images/sendMessage.svg";
import addLinkIcon from "../../assets/images/link.svg";

const USER_PROMPT_REF = ref("");
const router = useRoute();

const isActiveRoute = computed(() => {
  return router.path === "/" || router.path === "/home";
});

const isActiveSendButton = computed(() => {
  const inputValue = USER_PROMPT_REF.value.trim();
  return inputValue !== "" && /^[a-zA-Z0-9\s]+$/.test(inputValue);
});

const userPromptHandler = (ev) => {
  USER_PROMPT_REF.value = ev.target.value;
  console.log(USER_PROMPT_REF.value);
};
</script>

<!-- HTML -->
<template>
  <div
    class="flex max-w-[650px] m-auto my-4 border-inputBorder border rounded-xl min-h-[52px] bg-inputBg py-1 shadow-sm"
  >
    <div class="flex-center px-2 gap-3 w-full">
      <!-- Text Area -->
      <textarea
        v-model="USER_PROMPT_REF"
        @input="userPromptHandler"
        name="userPromptInput"
        id="userPromptInput"
        rows="1"
        class="resize-none bg-inherit outline-none w-[90%] text-[1rem] max-h-[20dvh] overflow-auto opacity-95"
        placeholder="Message Piccolai"
      ></textarea>

      <div class="inputBtnGroup flex gap-2">
        <!-- Send Message -->
        <RouterLink
          to="/chat"
          @click="!isActiveRoute && $event.preventDefault()"
        >
          <button class="p-1" :disabled="!isActiveSendButton">
            <Icons
              :iconURL="iconAsSendPrompt"
              :classes="[
                'h-8',
                isActiveSendButton ? 'opacity-85' : 'opacity-25',
              ]"
              altText="Send Message "
            />
          </button>
        </RouterLink>

        <!-- Input File -->
        <label for="inputFile" class="p-1 cursor-pointer">
          <Icons
            :iconURL="addLinkIcon"
            classes="h-8 opacity-80"
            altText="Link - Add "
          />
        </label>
        <input
          type="file"
          name="inputFile"
          id="inputFile"
          class="hidden"
          accept="application/pdf"
        />
      </div>
    </div>
  </div>
</template>
