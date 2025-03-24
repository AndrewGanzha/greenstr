<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import TextBlock from "./atoms/text/TextBlock.vue";
import PreviewImage from "./common/PreviewImage.vue";
import { shuttersData } from "../assets/data/shutters.ts";

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
const imgPath = ref<string>("");
const activeCategory = ref<string>("description");
const activeButtonIndex = ref<number>(0);
const $route = useRoute();
const shutterType = ref<any>(
  shuttersData.find((item) => item.type === $route.params.type),
);
// #endregion

// #region Methods
// #endregion

// #region Computed
// #endregion

// #region Lifecycle
onMounted(() => {
  imgPath.value = `/armature/${$route.params.type}/show/`;
});
// #endregion

// #region Watchers
watch(
  () => $route.params.type,
  (newParam) => {
    if (newParam) {
      shutterType.value = shuttersData.find((item) => item.type === newParam);
    }

    imgPath.value = `/armature/${$route.params.type}/preview.svg`;

    activeCategory.value = "description";
  },
  { immediate: true },
);
// #endregion
</script>

<template>
  <div :class="$style.Armature">
    <p :class="$style.title">{{ shutterType.title }}</p>

    <div :class="$style.menu">
      <PreviewImage :img-path="imgPath" />

      <div>
        <div :class="$style.diameterButtons">
          <button
            v-for="(button, idx) in shutterType.diameters"
            @click="activeButtonIndex = idx"
            :class="idx === activeButtonIndex ? $style.activeButton : ''"
          >
            {{ `DN${button}` }}
          </button>
        </div>

        <div :class="$style.buttons">
          <button :class="$style.button">
            <a href="https://wa.me/79036557771" target="_blank"
              >Связаться по Whats'app</a
            >
          </button>
          <button :class="$style.button">
            <a href="mailto:ryzhikova.a@grinstr.ru" target="_blank"
              >Написать на e-mail</a
            >
          </button>
        </div>
      </div>

      <div :class="$style.features">
        <p :class="$style.featuresTitle">Характеристики:</p>

        <div :class="$style.featureList">
          <div :class="$style.featureItem" v-for="item in shutterType.features">
            <p>{{ item.title }}</p>
            <p>
              {{
                item.title === "Диаметр условный Ду(Dn):"
                  ? shutterType.diameters[activeButtonIndex]
                  : item.value
              }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <TextBlock v-html="shutterType.description" />
    </div>
  </div>
</template>

<style module lang="scss">
.Armature {
  max-width: 100rem;
  width: fit-content;
  margin: 0 auto;
}

.diameterButtons {
  width: 18rem;
  max-height: 23rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    width: 5.5rem;
    height: 3.6rem;
    background-color: var(--dark-gray);
    color: var(--white);
    font-weight: 300;
    border-radius: 1rem;
    cursor: pointer;
  }
}

.menu {
  display: flex;
  gap: 4rem;
}

.title {
  font-size: 2.4rem;
  font-weight: bold;
}

.description {
  width: fit-content;
  font-size: 2.4rem;
  font-weight: 300;
  cursor: pointer;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.button {
  background: none;
  border: 1px solid var(--black-gray);
  padding: 0.6rem;
  border-radius: 4rem;
  margin-bottom: 2rem;

  a {
    color: var(--black-gray);
    text-decoration: none;
  }
}

.features {
  width: 100%;
}

.featuresTitle {
  margin: 0;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  padding-bottom: 1rem;
}

.featureList {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.featureItem {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;

  p {
    margin: 0;
    font-weight: 300;
  }
}

.activeButton {
  scale: 1.1;
}
</style>
