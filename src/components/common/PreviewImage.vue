<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface Props {
  imgPath: string;
}

const props = defineProps<Props>();

const mainImage = ref<string>("");
const loadedImages = ref<string[]>([]);

async function checkImageLoad(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
}

async function loadImages() {
  const possibleImages = [
    `${props.imgPath}preview.svg`,
    `${props.imgPath}1.svg`,
    `${props.imgPath}2.svg`,
    `${props.imgPath}3.svg`,
    `${props.imgPath}4.svg`,
    `${props.imgPath}5.svg`,
    `${props.imgPath}6.svg`,
  ];

  const loadResults = await Promise.all(
    possibleImages.map(async (img) => {
      const isLoaded = await checkImageLoad(img);
      return { img, isLoaded };
    }),
  );

  loadedImages.value = loadResults
    .filter((result) => result.isLoaded)
    .map((result) => result.img);

  if (loadedImages.value.length > 0) {
    mainImage.value = loadedImages.value[0];
  } else {
    console.warn("Ни одно изображение не загрузилось");
  }
}

onMounted(loadImages);
watch(() => props.imgPath, loadImages);
</script>

<template>
  <div :class="$style.containerPreviewImage">
    <img
      v-if="mainImage"
      :src="mainImage"
      :class="$style.PreviewImage"
      alt="reductor"
    />

    <div :class="$style.thumbnailsGrid" v-if="loadedImages.length > 1">
      <div v-for="img in loadedImages" :key="img" :class="$style.thumbnailCell">
        <img
          :src="img"
          :class="[
            $style.miniImg,
            mainImage === img ? $style.yellowBorder : '',
          ]"
          @click="mainImage = img"
          alt="reductor"
        />
      </div>
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
  gap: 1rem;
}

.thumbnailsGrid {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  max-height: 100%;
}

.thumbnailCell {
  display: flex;
  justify-content: center;
  align-items: center;
}

.PreviewImage {
  width: 36rem;
  max-height: 23rem;
  background: var(--dark-gray);
  padding: 1rem;
  object-fit: contain;

  @include respond-to(tablet) {
    width: 14rem;
  }
}

.miniImg {
  background: var(--dark-gray);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transition: border 0.2s ease;
  object-fit: contain;

  &:hover {
    opacity: 0.9;
  }
}

.yellowBorder {
  border: 1px solid var(--yellow);
}
</style>
