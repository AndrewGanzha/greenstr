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
import { deliveryText } from "../../assets/data/delivery.ts";
import Label from "../atoms/text/Label.vue";
</script>

<template>
  <div :class="$style.delivery">
    <div v-for="block in deliveryText" :class="$style.deilver">
      <Label :class="$style.title">{{ block.title }}</Label>
      <br />
      <Label :class="$style.text">{{ block.text }}</Label>
    </div>
  </div>
</template>

<style module lang="scss">
.delivery {
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

.title {
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.text {
  font-weight: 300;
}
</style>
