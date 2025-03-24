<script setup lang="ts">
const props = defineProps({
  title: String,
  type: String,
});
</script>

<template>
  <div :class="$style.catalogCard">
    <img
      :src="`/reductors/${props.type}/show/preview.svg`"
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
