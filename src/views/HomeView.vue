<script setup>
import { RouterLink } from "vue-router";
import playBtnIcon from "../assets/images/circledPlay.svg";
import rightArrow from "../assets/images/rightArrow.svg";
import Button from "../components/microComponents/Button.vue";
import Icons from "../components/microComponents/Icon.vue";
</script>

<template>
  <div
    class="main-container flex justify-center items-center flex-col max-w-sm md:max-w-md m-auto h-screen text-center"
  >
    <h1 class="relative p-2 mb-8 font-[800] text-6xl">Piccolai</h1>

    <h2 class="capitalize mb-3 text-sm md:text-[1.1rem] opacity-90">
      Chat, Summarize, Edit, and Download with AI
    </h2>

    <p
      class="font-[500] text-[1.32rem] md:text-[1.7rem] max-w-[850px] md:mb-8 text-left md:text-center"
    >
      Make your workflow easier with our all-in-one platform. Chat with AI from
      your PDFs, get instant summaries, customize them to your liking, and
      download your content effortlessly.
    </p>

    <!-- Button Group -->
    <div class="buttonGroup mt-8 flex justify-center gap-5">
      <RouterLink to="/chat">
        <div
          class="flex items-center cursor-pointer border bg-secondary text-primary pl-2 rounded-sm"
        >
          <Icons
            :iconURL="rightArrow"
            altText="Right arrow icon"
            classes="h-5"
          />
          <Button label="Try for free" classes="getSarted pl-1" />
        </div>
      </RouterLink>

      <div
        class="flex items-center cursor-pointer border-dividerColor border pl-2 rounded-sm"
      >
        <Icons
          :iconURL="playBtnIcon"
          altText="Play Button icon"
          classes="h-5"
        />
        <Button label="Watch Video" classes="watchVideo pl-1" />
      </div>
    </div>
  </div>
</template>
