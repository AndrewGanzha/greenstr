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
import { contactsData } from "../../assets/data/contacts.ts";
</script>

<template>
  <div :class="$style.Contacts">
    <Label>Контакты:</Label>

    <div v-for="contact in contactsData" :class="$style.contact">
      <span :class="$style.title">{{ contact.title }}</span>

      <span>{{ contact.subtitle }}</span>
    </div>

    <div :class="$style.icons">
      <a :class="$style.icon" href="https://wa.me/79036557771" target="_blank">
        <img src="/icons/whatsapp.svg" alt="whatsapp" />
      </a>

      <a
        :class="$style.icon"
        href="mailto:ryzhikova.a@grinstr.ru"
        target="_blank"
      >
        <img src="/icons/email.svg" alt="email" @click="" />
      </a>
    </div>
  </div>

  <img :class="$style.map" src="/common/map.png" alt="map" />
</template>

<style module lang="scss">
.Contacts {
  margin: 0 auto;
  width: fit-content;
  position: relative;
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 3rem;
}

.map {
  padding-top: 2rem;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 2;
}

.contact {
  text-align: left;
  display: flex;
  gap: 0.4rem;
}

.title {
  font-weight: 500;
}

.icons {
  display: flex;
  gap: 1rem;

  .icon {
    cursor: pointer;
    width: 4rem;
    height: 4rem;
  }
}
</style>
