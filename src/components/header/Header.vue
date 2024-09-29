<script setup>
import { ref, computed, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import hamburger from "../../assets/images/hamburger.svg";
import upgradePlan from "../../assets/images/upgradePlan.svg";
import features from "../../assets/images/features.svg";
import history from "../../assets/images/history.svg";
import userIcon from "../../assets/images/userIcon.svg";

import Icon from "../microComponents/Icon.vue";
import UpcomingTools from "../microComponents/UpcomingTools.vue";
import ShowLabel from "../microComponents/ShowLabel.vue";
import {
  helperButton,
  isHoverLabel,
  labels,
  showLabelOnHover,
  removeLabel,
} from "../../helpers/HeaderHelpers";
import { headerStyles } from "./HeaderStyles";

const route = useRoute();
const collapseToggle = ref(false);

const isChatPageActive = computed(() => {
  return route.path === "/chat" || route.path !== "/";
});

const handleCollapseToggle = () => {
  collapseToggle.value = !collapseToggle.value;
};

const isSmallDevices = () => window.innerWidth <= 768;
watch(collapseToggle, (newValue) => {
  if (newValue) {
    if (isSmallDevices()) {
      document.body.style.overflow = "hidden";
    }
  } else {
    document.body.style.overflow = "auto";
  }
});
window.addEventListener("resize", () => {
  if (!collapseToggle.value) {
    document.body.style.overflow = "auto";
  }
});
</script>

<template>
  <header :class="headerStyles.header" v-if="isChatPageActive">
    <div :class="headerStyles.navContainer">
      <Icon
        :iconURL="hamburger"
        altText="Side bar"
        :classes="headerStyles.icons"
        @click="handleCollapseToggle"
      />
      <p :class="headerStyles.logo">
        <RouterLink to="/">piccolai</RouterLink>
      </p>
    </div>

    <div :class="headerStyles.helperButton">
      <div class="flex flex-row gap-6 md:gap-8 relative">
        <Icon
          v-for="(button, iconIndex) in helperButton"
          :key="iconIndex"
          :iconURL="button.iconURL"
          :altText="button.altText"
          :classes="button.classes"
          @click="button.executeFn"
          @mouseEnter="showLabelOnHover(iconIndex)"
          @mouseLeave="removeLabel"
        />
        <ShowLabel
          v-if="isHoverLabel"
          :label="labels"
          classes="absolute top-6 text-nowrap"
        />
      </div>

      <div
        v-if="collapseToggle"
        :class="headerStyles.collapseToggle"
        aria-label="Navbar"
      >
        <div class="nav-container md:pt-5 px-6 md:px-2">
          <Icon
            :iconURL="hamburger"
            altText="Side bar"
            classes="h-5 md:h-6 opacity-40 cursor-pointer hidden md:block"
            @click="handleCollapseToggle"
          />
          <nav :class="headerStyles.navItems">
            <!-- history-container -->
            <div class="history-container">
              <div :class="headerStyles.navItemsContainersFlex">
                <Icon
                  :iconURL="history"
                  altText="history"
                  classes="h-4 opacity-40"
                />
                <h3 :class="headerStyles.subHeadingStyles">History</h3>
              </div>
              <div :class="headerStyles.historiesList">
                <span>What is Ai</span>
              </div>
            </div>

            <!-- features -->
            <div :class="headerStyles.navPages">
              <div class="tool-container gap-3">
                <div class="flex items-center gap-3">
                  <Icon
                    :iconURL="features"
                    altText="features"
                    classes="h-3 opacity-40"
                  />
                  <h3 :class="headerStyles.subHeadingStyles">Features</h3>
                </div>
                <ul class="leading-7 text-[14px] ml-6">
                  <!-- onClick show -->
                  <UpcomingTools />
                </ul>
              </div>

              <!-- upgradePlan -->
              <div :class="headerStyles.navItemsContainersFlex">
                <Icon
                  :iconURL="upgradePlan"
                  altText="Upgrade plans"
                  classes="h-4 opacity-40 border border-dividerColor rounded-full "
                />
                <div class="flex flex-col">
                  <span class="text-sm">Upgrade plan</span
                  ><span
                    class="line-clamp-1 text-xs text-textSecondary opacity-50"
                    >Unlock additional features</span
                  >
                </div>
              </div>

              <div :class="headerStyles.navItemsContainersFlex">
                <Icon
                  :iconURL="userIcon"
                  altText="Sign in"
                  classes="h-4 opacity-40"
                />
                <span class="text-sm">Sign In</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
