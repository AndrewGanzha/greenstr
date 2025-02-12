<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import { useRouter } from "vue-router";
import { ref } from "vue";
import { catalogData } from "../../assets/data/catalogList.ts";
import ModalReductor from "./ModalReductor.vue";

const modalReductors = ref<any>([]);
const router = useRouter();
const emits = defineEmits(["closeMenu"]);
// #endregion

// #region Methods
function setModalReductors(reductors: string[]) {
  modalReductors.value = catalogData.filter((item) =>
    reductors.includes(item.type),
  );
}

function goToReductor(type: string = "", hasCloseAction: boolean = false) {
  if (type.length === 0) {
    router.push("/catalog");
    return;
  }

  if (type === "ball" || type === "shutter") {
    router.push({ name: "armature", params: { type: type } });
  } else {
    router.push({ name: "reductor", params: { type: type } });
  }

  emits("closeMenu");

  if (hasCloseAction) {
    resetModalReductors();
  }
}

function resetModalReductors() {
  modalReductors.value = [];
}

function setModalCloseOpen() {
  modalReductors.value = [];
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
  <div :class="$style.AdditionalMenu">
    <div :class="$style.column">
      <span @click="goToReductor('')" :class="$style.title"
        >Цилиндрические мотор-редукторы серии G</span
      >
      <span @click="goToReductor('gr', true)" :class="$style.subtitle"
        >GR - соосно-цилиндрические</span
      >
      <span @click="setModalReductors(['gs', 'mrv'])" :class="$style.subtitle"
        >GS/NMRV - червячные</span
      >
      <span @click="goToReductor('gk', true)" :class="$style.subtitle"
        >GK - цилиндро-конические</span
      >
      <span @click="goToReductor('gf', true)" :class="$style.subtitle"
        >GF - плоскоцилиндрические</span
      >
    </div>

    <div :class="$style.column">
      <span @click="goToReductor('hb', true)" :class="$style.title"
        >Промышленные редукторы серии HB</span
      >
      <span @click="goToReductor('bw', true)" :class="$style.title"
        >Редукторы циклоидальные</span
      >
      <span @click="goToReductor('gx', true)" :class="$style.title"
        >Планетарные редукторы</span
      >
    </div>

    <div :class="$style.column">
      <span :class="$style.title" @click="setModalReductors(['smr', 'xg'])"
        >Навесные редукторы</span
      >
      <span
        :class="$style.title"
        @click="
          setModalReductors(['kzb', 'ksp', 'khz', 'ihd', 'fjx', 'hw', 'kcp'])
        "
        >Насосы</span
      >
      <span
        :class="$style.title"
        @click="setModalReductors(['ball', 'shutter'])"
        >Запорная арматура</span
      >
    </div>
  </div>

  <ModalReductor
    @reset-modal-reductors="resetModalReductors"
    @set-modal-close-open="setModalCloseOpen"
    :modal-reductors="modalReductors"
  />
</template>

<style module lang="scss">
.AdditionalMenu {
  display: flex;
  justify-content: space-between;
  transition: var(--default-transition);
  width: 100%;
  background: var(--dark-gray);

  span {
    text-decoration: none;
    cursor: pointer;
    color: var(--white);
  }

  @include respond-to(tablet) {
    display: none;
  }
}

.column {
  display: flex;
  height: 100%;
  padding: 2rem;
  flex-direction: column;
  text-decoration: none;

  :nth-child(3) {
    justify-content: space-between;
  }
}

.title {
  font-weight: 600;
  font-size: 2.4rem;
}

.subtitle {
  text-decoration: none;
  font-weight: 200;
  font-size: 2rem;
}
</style>
