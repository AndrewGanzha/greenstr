<script setup lang="ts">
import Header from "./components/organism/Header.vue";
</script>

<template>
  <div class="container">
    <Header />

    <main>
      <div class="content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<style>
.container {
  max-width: 1440px;
  margin: 0 auto;
}

.content {
  margin: 0 auto;
}
</style>
