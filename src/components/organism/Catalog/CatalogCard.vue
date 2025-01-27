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
const props = defineProps({
  title: String,
  type: String,
});
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
  <div :class="$style.catalogCard">
    <img
      :src="`/reductors/${props.type}/preview.svg`"
      alt="reductor"
      :class="$style.catalogCardImg"
    />

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
  max-height: 80%;
  max-width: 20rem;
  margin: auto 0;
}

.catalogTitle {
  color: var(--white);
  font-weight: bold;
}
</style>
