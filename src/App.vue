<script setup>
import Header from "../src/components/header/Header.vue";
</script>
<template>
  <Header />
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
