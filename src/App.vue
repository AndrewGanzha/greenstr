<script setup lang="ts">
import Header from "./components/organism/Header.vue";
</script>

<template>
  <div class="container">
    <Header />
  </div>

    <main class="main">
      <img src="./assets/img/rectangle.svg" alt="rectangle" class="upRectangle"/>
      <div class="container">
        <div class="content">
          <router-view/>
        </div>
      </div>
      <img src="./assets/img/rectangle.svg" alt="rectangle" class="bottomRectangle"/>
    </main>
</template>

<style>
.main {
  position: relative;
}

.upRectangle {
  position: absolute;
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
  max-width: 1440px;
}

.content {
  padding-top: 3rem;
  height: 100vh;
  margin: 0 auto;
}
</style>
