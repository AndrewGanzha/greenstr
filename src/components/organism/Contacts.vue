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
import Label from "../atoms/text/Label.vue";
import {contactsData} from "../../assets/data/contacts.ts";
</script>

<template>
  <div :class="$style.Contacts">
      <Label>Контакты:</Label>

      <div v-for="contact in contactsData" :class="$style.contact">
        <span :class="$style.title">{{contact.title}}</span>

        <span>{{ contact.subtitle }}</span>
      </div>
  </div>

  <img :class="$style.map" src="../../assets/img/map.png" alt="map"/>
</template>

<style module lang="scss">
.Contacts {
  margin: 0 auto;
  width: fit-content;
  height: 100%;
  position: relative;
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 3rem;
}

.map {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  z-index: 2;
  bottom: 0;
}

.contact {
  text-align: left;
  display: flex;
  gap: 0.4rem;
}

.title {
  font-weight: 500;
}
</style>
