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
import { computed, onBeforeUnmount } from "vue";
// @ts-ignore
import { useSearchStore } from "../../../store/search";
// Types
// Utils
// Vue
// Pinia
// Components
// #endregion

// #region Interfaces
// #endregion

// #region Props
// todo сделать поиск через добавление props
// #endregion

// #region Emits
// #endregion

// #region Data
const search = useSearchStore();
const text =
  "Редукторы и мотор-редукторы являются неотъемлемой частью серьёзного производственного процесса по тому, как качество и надежность данных узлов обеспечивает бесперебойную работу всего производства, поэтому следует уделить большое внимание в выборе поставщиков данных позиций.<br><br>Наша компания будет надежным партнёром для вас, которая предложит вам оборудование высочайшего качества и взаимодействие с нами оставит у вас хорошее впечатление о профессионализме.";
// #endregion

// #region Methods
// @ts-ignore
function goToDetails(reductor) {
  if (reductor.type === "shutter" || reductor.type === "ball") {
    router.push({ name: "armature", params: { type: reductor.type } });
    return;
  }

  router.push({ name: "reductor", params: { type: reductor.type } });
}
// #endregion

// #region Computed
const activeReductors = computed(() => {
  let defaultType = ["gr", "gs", "gk", "gf"];
  let filter: string[] | string | undefined;

  if (search.searchItems && search.searchItems.length > 0) {
    filter = search.searchItems;
  } else if (search.searchName) {
    filter = search.searchName;
  }

  if (!filter) {
    // Если filter остался undefined, возвращаем данные, отфильтрованные по умолчанию
    return catalogData.filter((item) => defaultType.includes(item.type));
  }

  const searchResults = catalogData.filter((item) => {
    if (Array.isArray(filter)) {
      return filter.some((f) => f === item.type);
    } else {
      const lowerFilter = filter.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowerFilter) ||
        item.type.toLowerCase().includes(lowerFilter)
      );
    }
  });

  return (
    searchResults ||
    catalogData.filter((item) => defaultType.includes(item.type))
  );
});
// #endregion

// #region Lifecycle
onBeforeUnmount(() => {
  search.clearSearchName();
  search.clearSearchItems();
});
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
      @click="goToDetails(reductor)"
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
