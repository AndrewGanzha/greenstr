<script lang="ts" setup>
const emit = defineEmits(["changeCategory"]);
</script>

<template>
  <div :class="$style.guarantee">
    <div :class="$style.guaranteeWindow">
      <span :class="$style.closeIcon" @click="emit('changeCategory')"
        ><img src="/icons/close.svg"
      /></span>

      <div :class="$style.text">
        <p :class="$style.title">Гарантия</p>

        <p :class="$style.description">
          Гарантия производителя на товар действует в течение 12 месяцев с
          момента поставки товара покупателю. Гарантийные обязательства
          действительны при условии соблюдения правил транспортировки, хранения
          и эксплуатации оборудования.
        </p>

        <p :class="$style.description">
          Право на гарантию теряется в случае использования оборудования
          покупателем не по назначению, внесения в него конструктивных
          изменений, ставших причиной поломки, нарушения правил технического
          обслуживания, ремонта оборудования в несертифицированной
          производителем организации.
        </p>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.guarantee {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-gray);
    opacity: 0.4;
  }
}

.guaranteeWindow {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70rem;
}

.text {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 2rem;
  font-size: 2rem;
  font-weight: 400;
}

.closeIcon {
  cursor: pointer;
  align-self: flex-end;
  padding-bottom: 2rem;
}

.title {
  font-size: 4rem;
  text-align: center;
}

.description {
  font-weight: 300;
}
</style>
