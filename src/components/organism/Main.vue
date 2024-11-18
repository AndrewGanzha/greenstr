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
const imagesWork = [
    'company/work/Guomao.png',
    'company/work/bonf.png',
    'company/work/sew.png',
    'company/work/Boneng.png',
    'company/work/Flender.png',
    'company/work/ksb.png'
]

const imagesTrust = [
  'company/trust/r.png',
  'company/trust/agroeko.png',
  'company/trust/prodimex.png',
]
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
  <div :class="$style.Main">
      <div :class="$style.companies">
        <Label :class="$style.title">Мы работаем</Label>

        <div :class="$style.images">
          <img v-for="img in imagesWork" :src="img"/>
        </div>
      </div>

      <div :class="$style.companies">
        <Label :class="$style.title">Нам доверяют</Label>

        <div :class="$style.images">
          <img v-for="img in imagesTrust" :src="img"/>
        </div>
      </div>
  </div>
</template>

<style module lang="scss">
.Main {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.companies {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 4rem;
  padding-bottom: 2rem;
  font-weight: 200;
}

.images {
  display: grid;
  align-items: center;
  width: fit-content;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem ;
}
</style>
