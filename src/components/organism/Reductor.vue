<script setup lang="ts">/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import {reductorsData} from "../../assets/data/reductors.ts";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import TextBlock from "../atoms/text/TextBlock.vue";

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
const imgPath = ref<string>('');
const activeCategory = ref<string>('description');
const dataCategories = [
  {
    title: 'Описание',
    value: 'description'
  },
  {
    title: 'Характеристики',
    value: 'about'
  },
  {
    title: 'Чертежи',
    value: 'paints'
  },
  {
    title: 'Документация',
    value: 'docs'
  },
  {
    title: 'Гарантия',
    value: 'garant'
  },
]
const $route  = useRoute();
const reductorType = ref<any>(reductorsData.find(item => item.type === $route.params.type));
// #endregion  

// #region Methods  
// #endregion  

// #region Computed  
// #endregion  

// #region Lifecycle
onMounted(() => {
  const images = import.meta.glob('../../assets/img/reductors/*/preview.png');

  const imgKey = `../../assets/img/reductors/${$route.params.type}/preview.png`;

  if (images[imgKey]) {
    images[imgKey]().then((module: any) => {
      imgPath.value = module.default;
    });
  }
})
// #endregion 

// #region Watchers
// #endregion
</script>

<template>
  <div :class="$style.Reductor">
      <p :class="$style.title">{{ reductorType.title }}</p>

    <div :class="$style.menu">
      <img :src="imgPath" :class="$style.img"/>

      <div>
        <p v-for="category in dataCategories"
           :key="category.value"
           @click="activeCategory = category.value"
           :class="[$style.description, category.value === activeCategory ? $style.activeLink : '']">
          {{ category.title }}
        </p>
      </div>
    </div>

      <TextBlock v-html="reductorType[activeCategory]" />
  </div>
</template>

<style module lang="scss">
.Reductor {
  max-width: 100rem;
  width: fit-content;
  margin: 0 auto;
}

.menu {
  display: flex;
  gap: 4rem;
}

.img {
  width: 36rem
}

.title {
  font-size: 2.4rem;
  font-weight: bold;
}

.description {
  width: fit-content;
  font-size: 2.4rem;
  font-weight: 300;
  cursor: pointer;
}

.activeLink {
  border-bottom: 1px solid var(--black-gray);
}
</style>
