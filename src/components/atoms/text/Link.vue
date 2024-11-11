<script setup lang="ts">
interface ILinkProps {
  route?: string
  name?: string
}

withDefaults(defineProps<ILinkProps>(), {
    route: '/',
    name: 'google.com'
 })
</script>

<template>
  <router-link  :to="route" class="link">
    <span class="linkTitle">{{ name }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  background: var(--black-gray);
  padding: .4rem 1rem;
  border-radius: .6rem;
  cursor: pointer;
  font-size: 2.4rem;
  transition: var(--default-transition);
}

.linkTitle {
  transition: var(--default-transition);
  color: var(--white);

}

.router-link-active {
  .linkTitle {
    border-bottom: 1px solid var(--white);
  }
}
</style>
