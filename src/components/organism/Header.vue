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
import Logo from "../atoms/images/Logo.vue";
import Links from "../molecules/Links.vue";
</script>

<template>
  <div :class="$style.Header">
      <Logo/>
      <Links/>
  </div>
</template>

<style module lang="scss">
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
