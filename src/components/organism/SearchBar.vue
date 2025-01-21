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
      <span>Основные категории</span>
      <div :class="$style.dropdownItems">
        <span
          :class="$style.title"
          @click="goToCatalog(['gr', 'gs', 'gk', 'gf'])"
        >
          Цилиндрические мотор-редукторы серии G</span
        >

        <span
          :class="$style.title"
          @click="goToCatalog(['kzb', 'ksp', 'khz', 'ihd', 'fjx', 'hw', 'kcp'])"
          >Насосы</span
        >
        <span :class="$style.title" @click="goToCatalog(['shutter', 'ball'])"
          >Запорная арматура</span
        >
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
  padding: 1rem 6rem;
  height: 100%;
  height: 100%;
  background-color: var(--black-gray);
}

.dropdownItems {
  display: none;
  cursor: pointer;
  padding: 1rem;
  width: fit-content;
  font-size: 1.4rem;
  gap: 2rem;
  flex-direction: column;
  color: var(--black-gray);
  background-color: var(--white);
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
    width: 100vw;
    height: 100vh;
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

.search {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;
  border: none;
  width: 50%;
  height: fit-content;
  outline: none;
  background-color: var(--white);
  font-size: 1.8rem;
  border-radius: 2.4rem;

  input {
    padding: 0 2rem;
    width: 100%;
    border: none;
  }

  .searchIcon {
    width: 2.4rem;
    height: 2.4rem;
  }
}

.dropdown {
  cursor: pointer;
  color: var(--white);
  font-size: 2.4rem;

  &:hover {
    .dropdownItems {
      display: flex;
    }
  }
}
</style>
