<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */

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
// #endregion  

// #region Methods  
// #endregion  

// #region Computed  
// #endregion  

// #region Lifecycle  
// #endregion 

// #region Watchers
// #endregion
import {headerLinks} from "../../constants/headerLinks.ts";
import Link from "../atoms/text/Link.vue";
</script>

<template>
  <div :class="$style.Links">
    <Link v-for="link in headerLinks" :name="link.name" :route="link.route"/>
  </div>
</template>

<style module lang="scss">
.Links {
  display: flex;
  gap: 6rem;
}
</style>
