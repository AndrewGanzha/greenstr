<script setup lang="ts">/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import {onMounted, ref} from "vue";

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
const props = defineProps({
  title: String,
  type: String
})
// #endregion  

// #region Emits  
// #endregion  

// #region Data
const imgPath = ref<string>('');
// #endregion  

// #region Methods  
// #endregion  

// #region Computed  
// #endregion  

// #region Lifecycle
onMounted(() => {
  const images = import.meta.glob('../../../assets/img/reductors/*/preview.png');

  // Формируем ключ для извлечения нужной картинки
  const imgKey = `../../../assets/img/reductors/${props.type}/preview.png`;

  // Проверяем, существует ли этот ключ, и если да, загружаем картинку
  if (images[imgKey]) {
    images[imgKey]().then((module) => {
      imgPath.value = module.default;
    });
  }
})
// #endregion 

// #region Watchers
// #endregion
</script>

<template>
  <div :class="$style.catalogCard">
      <img :src="imgPath" alt="reductor" :class="$style.catalogCardImg"/>

      <p :class="$style.catalogTitle">{{ title }}</p>
  </div>
</template>

<style module lang="scss">
.catalogCard {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.catalogCardImg {
  margin: auto 0;
  max-width: 20rem;
}

.catalogTitle {
  color: var(--white);
  font-weight: bold;
}
</style>
