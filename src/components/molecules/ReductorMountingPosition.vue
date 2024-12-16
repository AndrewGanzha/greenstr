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
interface IProps {
  mountings: Array<any>;
}
// #endregion

// #region Props
defineProps<IProps>();
// #endregion

// #region Emits
// #endregion

// #region Data
// #endregion

// #region Methods
function getImage(src: string) {
  return new URL(`${src}`, import.meta.url).href;
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
  <h2 :class="$style.subtitle">
    {{ mountings[0].title ? mountings[0].title : "Монтажное положение" }}
  </h2>

  <div :class="$style.images">
    <div :class="$style.image" v-for="(mount, idx) in mountings">
      <h2 :class="$style.subtitle">{{ idx === 0 ? "" : mount.title }}</h2>

      <img
        v-for="(img, idx) in mount.image"
        :src="getImage(img)"
        alt="reductor"
        :key="`mount_${idx}`"
      />
    </div>
  </div>
</template>

<style module lang="scss">
.subtitle {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  font-size: 2.4rem;
  border-bottom: 1px solid var(--white);
}

.images {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;

  .image {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 2rem;
    justify-content: center;
    width: 100%;

    img {
      padding: 2rem;
      background-color: var(--dark-gray);
      border: 1px solid var(--white);
    }
  }
}
</style>
