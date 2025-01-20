<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import { useRouter } from "vue-router";
import { ref } from "vue";
import { catalogData } from "../../assets/data/catalogList.ts";

const modalReductors = ref<any>([]);
const router = useRouter();
// #endregion

// #region Methods
function setModalReductors(reductors: string[]) {
  modalReductors.value = catalogData.filter((item) =>
    reductors.includes(item.type),
  );
}

function getImage(type: string) {
  if (type === "ball" || type === "shutter") {
    return new URL(
      `../../assets/img/armature/${type}/preview.svg`,
      import.meta.url,
    ).href;
  }

  return new URL(
    `../../assets/img/reductors/${type}/preview.svg`,
    import.meta.url,
  ).href;
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

  if (hasCloseAction) {
    modalReductors.value = [];
  }
}

function resetModalReductors() {
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

  <div :class="$style.modal" v-if="modalReductors.length > 0">
    <div :class="$style.reductors">
      <span :class="$style.closeIcon" @click="resetModalReductors">❌</span>

      <div :class="$style.reductorsItems">
        <div
          v-for="reductor in modalReductors"
          :class="$style.modalReductor"
          @click="goToReductor(reductor.type, true)"
        >
          <img :src="getImage(reductor.type)" />

          <p :class="$style.modalReductorTitle">{{ reductor?.title }}</p>
        </div>
      </div>
    </div>
  </div>
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

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  align-content: center;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark-gray);
    opacity: 0.4;
  }

  .reductors {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    justify-content: center;

    .reductorsItems {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-flow: row;
    }

    .modalReductor {
      display: flex;
      flex-direction: column;
      background: var(--white);
      max-width: 40rem;
      max-height: 30rem;
      padding: 2rem;
      justify-content: center;
      cursor: pointer;

      img {
        height: 20rem;
      }
    }

    .modalReductorTitle {
      text-align: center;
    }

    .closeIcon {
      cursor: pointer;
      align-self: flex-end;
    }
  }
}
</style>
