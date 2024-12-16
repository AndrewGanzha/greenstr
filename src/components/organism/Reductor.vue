<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */
import { reductorsData } from "../../assets/data/reductors.ts";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import TextBlock from "../atoms/text/TextBlock.vue";
import ReductorGX from "./ReductorGX.vue";
import ReductorMountingPosition from "../molecules/ReductorMountingPosition.vue";

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
const dataCategories = [
  {
    title: "Описание",
    value: "description",
  },
  {
    title: "Характеристики",
    value: "about",
  },
  {
    title: "Чертежи",
    value: "paints",
  },
  {
    title: "Документация",
    value: "docs",
  },
  {
    title: "Гарантия",
    value: "garant",
  },
];
const $route = useRoute();
const reductorType = ref<any>(
  reductorsData.find((item) => item.type === $route.params.type)
);
// #endregion

// #region Methods
// #endregion

// #region Computed
// #endregion

// #region Lifecycle
onMounted(() => {
  const images = import.meta.glob("../../assets/img/reductors/*/preview.svg");

  const imgKey = `../../assets/img/reductors/${$route.params.type}/preview.svg`;

  if (images[imgKey]) {
    images[imgKey]().then((module: any) => {
      imgPath.value = module.default;
    });
  }
});
// #endregion

// #region Watchers
watch(
  () => $route.params.type,
  (newParam) => {
    if (newParam) {
      reductorType.value = reductorsData.find((item) => item.type === newParam);
    }

    const images = import.meta.glob("../../assets/img/reductors/*/preview.svg");

    const imgKey = `../../assets/img/reductors/${$route.params.type}/preview.svg`;

    if (images[imgKey]) {
      images[imgKey]().then((module: any) => {
        imgPath.value = module.default;
      });
    }
  },
  { immediate: true } // Этот параметр заставляет наблюдатель запускаться сразу при инициализации, если данные уже есть
);
// #endregion
</script>

<template>
  <div :class="$style.Reductor">
    <p :class="$style.title">{{ reductorType.title }}</p>

    <div :class="$style.menu">
      <img :src="imgPath" :class="$style.img" />

      <div>
        <div>
          <p
            v-for="category in dataCategories"
            :key="category.value"
            @click="activeCategory = category.value"
            :class="[
              $style.description,
              category.value === activeCategory ? $style.activeLink : '',
            ]"
          >
            {{ category.title }}
          </p>
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

      <div v-if="reductorType.performanceParameters">
        <ul :class="$style.description">
          <li v-for="item in reductorType.performanceParameters">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div v-if="activeCategory === 'description'">
      <TextBlock v-html="reductorType.description" />
    </div>

    <div v-if="activeCategory === 'about' && reductorType.type !== 'gx'">
      <TextBlock>
        <div v-if="reductorType.performanceOptions">
          <h2 :class="$style.subtitle">Варианты исполнения</h2>

          <ul :class="$style.list">
            <li
              v-for="reductor in reductorType.performanceOptions"
              :class="$style.performanceOptionsItem"
            >
              {{ reductor }}
            </li>
          </ul>
        </div>

        <div v-if="reductorType.typeDesignation">
          <h2 :class="$style.subtitle">Схема типового обозначения</h2>

          <ul :class="$style.list">
            <li
              v-for="reductor in reductorType.typeDesignation"
              :class="$style.performanceOptionsItem"
            >
              {{ reductor }}
            </li>
          </ul>

          <div v-if="reductorType.typeDesignationTables">
            <div
              v-for="(table, index) in reductorType.typeDesignationTables"
              :key="`table-${index}`"
            >
              <table :class="$style.table">
                <thead>
                  <tr>
                    <th
                      v-for="(_, headerIndex) in table"
                      :key="`header-${headerIndex}`"
                    >
                      {{ headerIndex }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-for="(item, headerIndex) in table"
                      :key="`header-${headerIndex}`"
                    >
                      {{ item }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-if="reductorType.maxTorque">
          <h2 :class="$style.subtitle">Максимальный крутящий момент</h2>

          <div v-if="reductorType.maxTorque">
            <div
              v-for="(table, index) in reductorType.maxTorque"
              :key="`table-${index}`"
            >
              <table :class="$style.table">
                <thead>
                  <tr>
                    <th
                      v-for="(_, headerIndex) in table"
                      :key="`header-${headerIndex}`"
                    >
                      {{ headerIndex }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-for="(item, headerIndex) in table"
                      :key="`header-${headerIndex}`"
                    >
                      {{ item }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-if="reductorType.mountingPosition">
          <ReductorMountingPosition
            :mountings="reductorType.mountingPosition"
          />
        </div>
      </TextBlock>
    </div>

    <div v-else>
      <ReductorGX :reductor="reductorType" :active-category="activeCategory" />
    </div>
  </div>
</template>

<style module lang="scss">
.Reductor {
  max-width: 100rem;
  width: fit-content;
  margin: 0 auto;
}

.menu {
  display: flex;
  gap: 4rem;
}

.img {
  width: 36rem;
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

.activeLink {
  border-bottom: 1px solid var(--black-gray);
}

.subtitle {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  font-size: 2.4rem;
  border-bottom: 1px solid var(--white);
}

.list {
  display: flex;
  flex-direction: column;
}

.performanceOptionsItem {
  flex: 1 1 50%;
}

.table {
  margin: 2rem 0;
  width: 100%;
  border: 1px solid var(--white);
  background-color: var(--dark-gray);
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;

  th {
    border-bottom: 1px solid var(--white);

    &:not(:last-child) {
      border-right: 1px solid var(--white);
    }
  }

  td {
    width: 14rem;

    &:not(:last-child) {
      border-right: 1px solid var(--white);
    }
  }
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
</style>
