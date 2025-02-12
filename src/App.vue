<script setup lang="ts">
import Header from "./components/organism/Header.vue";
import SearchBar from "./components/organism/SearchBar.vue";
</script>

<template>
  <div style="position: relative">
    <Header />

    <SearchBar />

    <main class="main">
      <img
        src="./assets/img/rectangle.svg"
        alt="rectangle"
        class="upRectangle"
      />
      <div class="container">
        <div class="content">
          <router-view />
        </div>
      </div>
      <!-- todo пофиксить треугольник-->
      <img
        style="display: none"
        src="./assets/img/rectangle.svg"
        alt="rectangle"
        class="bottomRectangle"
      />
    </main>
  </div>
</template>

<style>
.main {
  position: relative;
}

.upRectangle {
  position: absolute;
  padding-top: 20px;
  top: 0;
  left: 0;
}

.bottomRectangle {
  transform: rotate(180deg);
  position: absolute;
  bottom: 0;
  right: 0;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
}

.content {
  padding-top: 3rem;
  margin: 0 auto;
}

@media (max-width: 1280px) {
  .bottomRectangle,
  .upRectangle {
    display: none;
  }
}
</style>
