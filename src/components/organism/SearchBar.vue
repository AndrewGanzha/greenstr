<script setup lang="ts">
// @ts-ignore
import { useSearchStore } from "../../store/search.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const search = useSearchStore();
const router = useRouter();
const searchQuery = ref("");

function searchQueryHandler(query: string) {
  search.clearSearchItems();
  search.clearSearchName();
  if (query.length > 0) {
    search.setSearchName(query);
    router.push("/catalog");
  } else {
    alert("Введите запрос");
  }
}

function goToCatalog(type: string[] | string) {
  if (type.length !== 0 && Array.isArray(type)) {
    search.setSearchItems(type);
  } else if (type.length !== 0 && typeof type === "string") {
    search.setSearchName(type);
  }

  router.push("/catalog");
}
</script>

<template>
  <div :class="$style.searchBar">
    <div :class="$style.dropdown">
      <span :class="$style.dropdownTitle"
        >Основные категории
        <img src="/icons/dropdown.svg" :class="$style.dropdownIcon"
      /></span>
      <div :class="$style.dropdownContent">
        <div :class="$style.category">
          <span @click="goToCatalog(['gr', 'gs', 'gk', 'gf'])">Редукторы</span>
        </div>
        <div :class="$style.category">
          <span
            @click="
              goToCatalog(['kzb', 'ksp', 'khz', 'ihd', 'fjx', 'hw', 'kcp'])
            "
            >Насосы</span
          >
        </div>
        <div :class="$style.category">
          <span @click="goToCatalog(['shutter', 'ball'])"
            >Запорная арматура</span
          >
        </div>
      </div>
    </div>
    <div :class="$style.search">
      <input
        @keyup.enter="searchQueryHandler(searchQuery)"
        placeholder="Поиск по каталогу"
        v-model="searchQuery"
      />

      <img
        src="/icons/search.svg"
        alt="search"
        :class="$style.searchIcon"
        @click="searchQueryHandler(searchQuery)"
      />
    </div>
  </div>
</template>

<style module lang="scss">
.searchBar {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  max-height: 3.6rem;
  padding: 0.4rem 2rem;
  height: 100%;
  background-color: var(--black-gray);
}

.dropdown {
  cursor: pointer;
  color: var(--white);
  font-size: 2.4rem;
  position: relative;
  width: 30rem;

  &:hover .dropdownContent {
    display: block;
  }
}

.dropdownContent {
  font-size: 2.4rem;
  display: none;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  padding-bottom: 2rem;
  background-color: var(--white);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  left: 0;
}

.dropdownTitle {
  font-size: 2.4rem;
  font-weight: 600;
}

.dropdownIcon {
  padding-left: 0.4rem;
}

.category {
  color: var(--black-gray);
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid var(--black-gray);
  margin: 1rem;

  &:hover {
    background-color: var(--light-gray);
  }
}

.subcategories {
  display: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.category:hover .subcategories {
  display: block;
}

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  border: none;
  width: 43rem;
  height: 1.6rem;
  outline: none;
  font-size: 1.8rem;
  border-radius: 2.4rem;

  background: linear-gradient(to right, var(--white) calc(100% - 9%), red 0);

  input {
    padding: 0 2rem;
    width: 50%;
    border: none;

    &::placeholder {
      font-size: 1.6rem;
    }
  }

  .searchIcon {
    width: 2.4rem;
    height: 2.4rem;
  }

  @include respond-to(tablet) {
    width: 100%;
  }
}

@include respond-to(tablet) {
  .dropdown {
    display: none;
  }
}
</style>
