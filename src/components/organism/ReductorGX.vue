<script lang="ts" setup>
import TextBlock from "../atoms/text/TextBlock.vue";
import ReductorGXTable from "./ReductorGXTable.vue";

interface IProps {
  reductor: any;
  activeCategory: string;
}

function getImage(src: string) {
  return new URL(`${src}`, import.meta.url).href;
}

defineProps<IProps>();
</script>

<template>
  <TextBlock v-if="activeCategory === 'about'">
    <div :class="$style.perfomances">
      <div
        v-for="perfomance in reductor.performanceOptions"
        :class="$style.perfomance"
      >
        <p>{{ perfomance.title }}</p>

        <ul>
          <li v-for="item in perfomance.list">{{ item }}</li>
        </ul>
      </div>

      <table :class="$style.perfomancesTable">
        <tbody>
          <tr v-for="(item, idx) in reductor.performanceOptionsTable">
            <td>
              <p v-for="text in item[0]">{{ text }}</p>
            </td>
            <td>
              <img v-if="idx !== 0" :src="getImage(item[1])" />
              <span v-else>{{ item[1] }}</span>
            </td>
            <td>
              <p v-for="text in item[2]">{{ text }}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 :class="$style.subtitle">Монтажное положение</h2>

      <ReductorGXTable />
    </div>
  </TextBlock>
</template>

<style lang="scss" module>
.perfomances {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.perfomancesTable {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2rem;
  table-layout: fixed;

  table,
  td,
  th {
    border: 1px solid var(--white);
  }

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;

    td {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      height: 3rem;
      text-align: center;
      width: 33%;
    }

    td > img {
      width: 100%;
    }
  }

  :not(:first-child) {
    td {
      height: 21rem;
    }
  }
}

.perfomance {
  width: 50%;

  @include respond-to(tablet) {
    width: 100%;
    background-color: red;
  }
}

.subtitle {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  font-size: 2.4rem;
  border-bottom: 1px solid var(--white);
  margin-bottom: 2rem;
}
</style>
