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

      <div v-for="contact in contactsData">
          <span><Label>{{contact.title}}</Label>

            <Label>{{ contact.subtitle }}</Label></span>
      </div>
  </div>
</template>

<style module lang="scss">
.Contacts {
  //
}
</style>
