<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */

// #region Imports
import { deliveryText } from "../../assets/data/delivery.ts";
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
  <div :class="$style.delivery">
    <p :class="$style.deliveryTitle">Доставка</p>

    <div v-for="block in deliveryText" :class="$style.deilver">
      <p :class="$style.title">{{ block.title }}</p>
      <p :class="$style.text">{{ block.text }}</p>
    </div>
  </div>
</template>

<style module lang="scss">
.delivery {
  padding-top: 4rem;
  max-width: 73rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.deliveryTitle {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2.4rem;
}

.title {
  font-weight: 500;
  font-size: 2.4rem;
}

.text {
  font-weight: 400;
  font-size: 2rem;
}
</style>
