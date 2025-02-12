<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

interface IProps {
  modalReductors: any[];
}

defineProps<IProps>();

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
    emits("resetModalReductors");
  }

  emits("closeMenu");
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

const emits = defineEmits([
  "resetModalReductors",
  "setModalCloseOpen",
  "closeMenu",
]);
</script>

<template>
  <div :class="$style.modal" v-if="modalReductors.length > 0">
    <div :class="$style.reductors">
      <span :class="$style.closeIcon" @click="$emit('setModalCloseOpen')"
        >❌</span
      >

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
.modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 3;
  align-content: center;

  @include respond-to(tablet) {
    width: 100vw;
  }

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

      @include respond-to(tablet) {
        background: var(--dark-gray);
        color: var(--black);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
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

      @include respond-to(tablet) {
        width: 20rem;
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
