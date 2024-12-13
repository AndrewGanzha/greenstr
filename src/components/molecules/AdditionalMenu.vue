<script setup lang="ts">/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import {useRouter} from "vue-router";
import {ref} from "vue";
import {catalogData} from "../../assets/data/catalogList.ts";

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
const modalReductors = ref<any>([]);
const router = useRouter();
// #endregion  

// #region Methods
function setModalReductors(reductors: string[]) {
  modalReductors.value = catalogData.filter(item => reductors.includes(item.type));
}

function getImage(type: string)  {
  return new URL(`../../assets/img/reductors/${type}/preview.png`, import.meta.url).href
}
// #endregion  

// #region Computed  
// #endregion  

// #region Lifecycle
// #endregion 

// #region Watchers
// #endregion
</script>

<template>
  <div :class="$style.AdditionalMenu">
      <div :class="$style.column">
          <span @click="router.push({name: 'reductor', params: { type: 'gf' }})" :class="$style.title">Цилиндрические мотор-редукторы серии G</span>
          <span @click="router.push({name: 'reductor', params: { type: 'gr' }})" :class="$style.subtitle">GR - соосно-цилиндрические</span>
          <span :class="$style.subtitle">GS/NMRV - червячные</span>
          <span @click="router.push({name: 'reductor', params: { type: 'gk' }})" :class="$style.subtitle">GK - цилиндро-конические</span>
          <span @click="router.push({name: 'reductor', params: { type: 'gf' }})" :class="$style.subtitle">GF - плоскоцилиндрические</span>
      </div>

    <div :class="$style.column">
          <span :class="$style.title">Промышленные редукторы серии HB</span>
          <span :class="$style.title">Редукторы циклоидальные</span>
          <span :class="$style.title">Планетарные редукторы</span>
      </div>

    <div :class="$style.column">
          <span :class="$style.title" @click="setModalReductors(['smr', 'xg'])">Навесные редукторы</span>
          <span :class="$style.title">Насосы</span>
          <span :class="$style.title">Муфты</span>
          <span :class="$style.title">Запорная арматура</span>
    </div>
  </div>

  <div :class="$style.modal" v-if="modalReductors">
      <div v-for="reductor in modalReductors">
          <p>{{ reductor?.title }}</p>

          <img :src="getImage(reductor.type)" />
      </div>
  </div>
</template>

<style module lang="scss">
.AdditionalMenu {
  display: flex;
  justify-content: space-between;
  transition: var(--default-transition);
  width: 100%;
  padding: 1rem 2rem;
  background: var(--dark-gray);

  span {
    text-decoration: none;
    cursor: pointer;
    color: var(--white);
  }
}

.column {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.title {
  font-weight: 600;
  font-size: 2.4rem;
}

.subtitle {
  text-decoration: none;
  font-weight: 200;
  font-size: 2rem;
}
</style>
