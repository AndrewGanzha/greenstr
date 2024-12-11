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
const emits = defineEmits(['openMenu'])
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
    <Link v-for="link in headerLinks" :name="link.name" :route="link.route" @click="link.name === 'Каталог' ? emits('openMenu') : undefined"/>
  </div>
</template>

<style module lang="scss">
.Links {
  display: flex;
  gap: 6rem;
  padding-right: 11.2rem;
  height: fit-content;
}
</style>
