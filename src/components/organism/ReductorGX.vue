<script lang="ts" setup>
import TextBlock from "../atoms/text/TextBlock.vue";

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
  border: 1px solid var(--black-gray);

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--white);

    td {
      width: 33%;
      text-align: center;
    }

    td > img {
      width: 100%;
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
</style>
