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
</script>

<template>
  <div :class="$style.TextBlock">
    <slot/>
  </div>
</template>

<style module lang="scss">
.TextBlock {
  border-radius: 1.2rem;
  padding: 2rem;
  font-size: 2rem;
  font-weight: 200;
  color: var(--white);
  background-color: var(--black-gray);
}
</style>
