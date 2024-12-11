<script setup lang="ts">/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import {ref} from "vue";

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
</script>

<template>
  <div :class="$style.Header">
      <div :class="$style.content">
        <Logo/>
        <Links @open-menu="openMenu" />
      </div>

      <AdditionalMenu v-if="isMenuShow"/>
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
}
</style>
