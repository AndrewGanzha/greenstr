<script setup lang="ts">
/**
 * @desc Описание компонента
 * Ссылка на макет - https://www.figma.com/design/hash
 */

// #region Imports
import CatalogCard from "./CatalogCard.vue";
import { catalogData } from "../../../assets/data/catalogList.ts";
import TextBlock from "../../atoms/text/TextBlock.vue";
import router from "../../../config/router.ts";
import { computed } from "vue";
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
const text =
  "Редукторы и мотор-редукторы являются неотъемлемой частью серьёзного производственного процесса по тому, как качество и надежность данных узлов обеспечивает бесперебойную работу всего производства, поэтому следует уделить большое внимание в выборе поставщиков данных позиций.<br><br>Наша компания будет надежным партнёром для вас, которая предложит вам оборудование высочайшего качества и взаимодействие с нами оставит у вас хорошее впечатление о профессионализме.";
// #endregion

// #region Methods
// #endregion

// #region Computed
const activeReductors = computed(() => {
  let defaultType = ["gr", "gs", "gk", "gf"];

  return catalogData.filter((item) => defaultType.includes(item.type));
});
// #endregion

// #region Lifecycle
// #endregion

// #region Watchers
// #endregion
</script>

<template>
  <div :class="$style.catalog">
    <CatalogCard
      :class="$style.catalogCard"
      v-for="reductor in activeReductors"
      :title="reductor.title"
      :type="reductor.type"
      @click="
        router.push({ name: 'reductor', params: { type: reductor.type } })
      "
    />
  </div>

  <TextBlock>
    <div v-html="text" />
  </TextBlock>
</template>

<style module lang="scss">
.catalog {
  margin: 0 auto;
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
  padding-bottom: 3rem;

  .catalogCard:nth-child(odd) {
    background-color: var(--black-gray);
  }

  .catalogCard:nth-child(even) {
    background-color: var(--black);
  }
}

.catalogCard {
  width: 26rem;
  height: 28rem;
}
</style>
