<script setup lang="ts">
import { ref } from "vue";

interface IProps {
  imgPath: string;
}

const props = defineProps<IProps>();

const actualImg = ref<string>(`${props.imgPath}preview.svg`);
const secondaryImg = ref<string[]>([
  `${props.imgPath}preview.svg`,
  `${props.imgPath}1.svg`,
  `${props.imgPath}2.svg`,
]);

function checkActualImg(path: string) {
  return actualImg.value === path;
}
</script>

<template>
  <div :class="$style.containerPreviewImage">
    <img :src="actualImg" :class="$style.PreviewImage" alt="reductor" />

    <div :class="$style.previewsImages">
      <img
        @click="actualImg = img"
        v-for="img in secondaryImg"
        :key="img"
        :class="[
          $style.miniImg,
          checkActualImg(img) ? $style.yellowBorder : '',
        ]"
        :src="img"
        alt="reductor"
      />
    </div>
  </div>
</template>

<style module lang="scss">
.containerPreviewImage {
  background: var(--black-gray);
  display: flex;
  border-radius: 1rem 1rem 0 0;
  padding: 1.2rem;
  height: 25rem;
}

.previewsImages {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem 0.5rem 1.2rem;
}

.yellowBorder {
  border: 1px solid var(--yellow);
}

.PreviewImage {
  width: 36rem;
  max-height: 23rem;
  background: var(--dark-gray);
  padding: 1rem;

  @include respond-to(tablet) {
    width: 21rem;
  }
}

.miniImg {
  background: var(--dark-gray);
  width: 6rem;
  height: 6rem;
}
</style>
