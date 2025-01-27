<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

const catalogOpen = ref<boolean>(false);
const router = useRouter();
const emits = defineEmits(["closeModal"]);

function clickMenu(isCatalog: boolean, path: string = "") {
  if (isCatalog) {
    catalogOpen.value = !catalogOpen.value;
  } else {
    router.push({ path: `${path}` });
  }
  emits("closeModal");
}
</script>

<template>
  <div :class="$style.MobileMenu">
    <nav>
      <ul>
        <li @click="clickMenu(false, '/')">Главная</li>
        <li @click="clickMenu(true)">Каталог</li>
        <li @click="clickMenu(false, '/delivery')">Доставка</li>
        <li @click="clickMenu(false, '/contacts')">Контакты</li>
      </ul>
    </nav>
  </div>
</template>

<style module lang="scss">
.MobileMenu {
  padding: 2rem;
  color: var(--white);

  ul {
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
</style>
