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

      <div v-if="activeCategory === 'description'">
        <TextBlock v-html="reductorType.description" />
      </div>

      <div v-if="activeCategory === 'about'">
        <TextBlock>
          <h2 :class="$style.subtitle">Варианты исполнения</h2>

          <ul :class="$style.list">
            <li v-for="reductor in reductorType.performanceOptions" :class="$style.performanceOptionsItem">
              {{ reductor }}
            </li>
          </ul>

          <h2 :class="$style.subtitle">Схема типового обозначения</h2>

          <ul :class="$style.list">
            <li v-for="reductor in reductorType.typeDesignation" :class="$style.performanceOptionsItem">
              {{ reductor }}
            </li>
          </ul>

          <div v-for="(table, index) in reductorType.typeDesignationTables" :key="`table-${index}`">
            <table>
              <thead>
              <tr>
                <th v-for="(item, headerIndex) in Object.keys(table[0])" :key="`header-${headerIndex}`">
                  {{ item }}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, rowIndex) in table" :key="`row-${rowIndex}`">
                <td v-for="(cell, cellIndex) in row" :key="`cell-${cellIndex}`">
                  {{ cell }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </TextBlock>
      </div>
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

.subtitle {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  font-size: 2.4rem;
  border-bottom: 1px solid var(--white);
}

.list {
  display: flex;
  flex-direction: column;
}

.performanceOptionsItem {
  flex: 1 1 50%;
}
</style>
