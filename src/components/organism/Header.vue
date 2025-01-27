<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import { ref } from "vue";

// #region Imports
// Types
// Utils
// Vue
// Pinia
// Components
// #endregion

// #region Interfaces
// #endregion

// #region Props
// #endregion

// #region Emits
// #endregion

// #region Data
const isMenuShow = ref<boolean>(false);
// #endregion

// #region Methods
function openMenu() {
  isMenuShow.value = !isMenuShow.value;
}
// #endregion

// #region Computed
// #endregion

// #region Lifecycle
// #endregion

// #region Watchers
// #endregion
import Logo from "../atoms/images/Logo.vue";
import Links from "../molecules/Links.vue";
import AdditionalMenu from "../molecules/AdditionalMenu.vue";
import MobileMenu from "../molecules/MobileMenu.vue";
</script>

<template>
  <div :class="$style.Header">
    <div :class="$style.content">
      <Logo />
      <Links @open-menu="openMenu" />
      <img
        @click="openMenu"
        src="/icons/burger.svg"
        :class="$style.burgerIcon"
      />
    </div>

    <AdditionalMenu :class="$style.additionalMenu" v-if="isMenuShow" />
    <MobileMenu
      :class="$style.mobileMenu"
      v-if="!isMenuShow"
      @close-modal="openMenu"
    />
  </div>
</template>

<style module lang="scss">
.Header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.content {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
}

.mobileMenu {
  display: none;

  @include respond-to(tablet) {
    display: block;
    z-index: 5;
    position: absolute;
    width: 100vw;
    background-color: var(--dark-gray);
    height: 100%;
  }
}

.burgerIcon {
  display: none;

  @include respond-to(tablet) {
    display: block;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    padding-right: 2rem;
  }
}
</style>
