<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { catalogData } from "../../assets/data/catalogList.ts";
import ModalReductor from "./ModalReductor.vue";

const router = useRouter();
const emits = defineEmits(["closeModal"]);
const openAdditionalMenu = ref(false);
const isModalClose = ref(false);
const modalReductors = ref<any[]>([]);

function setModalReductors(reductors: string[]) {
  isModalClose.value = true;
  modalReductors.value = catalogData.filter((item) =>
    reductors.includes(item.type),
  );
}

function setModalCloseOpen() {
  modalReductors.value = [];
  isModalClose.value = false;
}

function goToReductor(type: string = "", hasCloseAction: boolean = false) {
  openAdditionalMenu.value = false;

  if (type.length === 0) {
    router.push("/catalog");
    emits("closeModal");
    return;
  }

  if (type === "ball" || type === "shutter") {
    router.push({ name: "armature", params: { type: type } });
    emits("closeModal");
  } else {
    router.push({ name: "reductor", params: { type: type } });
    emits("closeModal");
  }

  if (hasCloseAction) {
    emits("closeModal");
    resetModalReductors();
  }
}

function resetModalReductors() {
  modalReductors.value = [];
  emits("closeModal");
}

function clickMenu(isCatalog: boolean, path: string = "") {
  if (isCatalog) {
    emits("closeModal");
    router.push({ path: `${path}` });
  } else {
    openAdditionalMenu.value = !openAdditionalMenu.value;
  }
}
</script>

<template>
  <div :class="$style.MobileMenu">
    <nav v-if="!isModalClose">
      <ul>
        <li @click="clickMenu(true, '/')">Главная</li>
        <li>
          <p @click="clickMenu(false)">Каталог</p>
          <ul v-if="openAdditionalMenu" :class="$style.additionalMenu">
            <li @click="goToReductor('')">
              Цилиндрические мотор-редукторы серии G
            </li>
            <li @click="goToReductor('hb', true)">
              Промышленные редукторы серии HB
            </li>
            <li @click="goToReductor('bw', true)">Редукторы циклоидальные</li>
            <li @click="goToReductor('gx', true)">Планетарные редукторы</li>
            <li @click="setModalReductors(['smr', 'xg'])">
              Навесные редукторы
            </li>
            <li
              @click="
                setModalReductors([
                  'kzb',
                  'ksp',
                  'khz',
                  'ihd',
                  'fjx',
                  'hw',
                  'kcp',
                ])
              "
            >
              Насосы
            </li>
            <li @click="setModalReductors(['ball', 'shutter'])">
              Запорная арматура
            </li>
          </ul>
        </li>
        <li @click="clickMenu(true, '/delivery')">Доставка</li>
        <li @click="clickMenu(true, '/contacts')">Контакты</li>
      </ul>
    </nav>

    <ModalReductor
      v-if="modalReductors"
      @reset-modal-reductors="resetModalReductors"
      @set-modal-close-open="setModalCloseOpen"
      :modal-reductors="modalReductors"
    />
  </div>
</template>

<style module lang="scss">
.MobileMenu {
  position: relative;
  padding-top: 2rem;
  color: var(--white);

  p {
    margin: 0;
  }

  ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    padding-left: 2rem;
    font-size: 2rem;
    li {
      list-style: none;
    }
  }
}

.additionalMenu {
  gap: 1rem;

  li {
    font-size: 1.6rem;
  }
}
</style>
