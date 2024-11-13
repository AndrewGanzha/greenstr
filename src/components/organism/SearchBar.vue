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
  <div :class="$style.searchBar">
    <div :class="$style.dropdown">
      Основные категории
    </div>
  </div>
</template>

<style module lang="scss">
.searchBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  height: 3.6rem;
  background-color: var(--black-gray);
}

.search {
    padding: 0.6rem;
    border: none;
    outline: none;
    font-size: 1.8rem;
    border-radius: 2.4rem;
}

.dropdown {
  color: var(--white);
  font-size: 2.4rem;
}
</style>
