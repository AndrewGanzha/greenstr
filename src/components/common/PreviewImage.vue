<script setup lang="ts">
interface IProps {
  imgPath: string;
}

defineProps<IProps>();
</script>

<template>
  <img :src="imgPath" :class="$style.PreviewImage" alt="reductor" />
</template>

<style module lang="scss">
.PreviewImage {
  width: 36rem;
  max-height: 23rem;
}
</style>
