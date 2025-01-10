<template>
  <v-container>
    <v-row
      justify="center"
      justify-sm="end"
    >
      <v-col cols="12">
        <h2>Speedrunning</h2>
        <p>
          I've speedrun <a href="https://www.speedrun.com/users/Gaphodil">a lot of games</a>!
          Some of them can get very complex, to the point that
          I've written up guides and collected various skips for those.
          Others I've only ever run once or twice, despite my efforts.
        </p>
      </v-col>
      <v-col
        cols="auto"
        align-self="center"
      >
        <p>Sorted by: {{ reversed ? 'Reverse-Chronological' : 'Chronological' }}</p>
      </v-col>
      <v-col
        cols="auto"
        align-self="end"
      >
        <v-btn
          style="justify-self: center;"
          aria-label="Change Sort"
          title="Change Sort"
          class="bg-primary"
          :icon="reversed ? 'mdi-sort-descending' : 'mdi-sort-ascending'"
          @click="reverseOrder"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        :order="sectionOrders[0]"
        cols="12"
      >
        <v-row>
          <SpeedrunEntry0 :raw-order="itemOrders[0][0]" />
          <SpeedrunEntry1 :raw-order="itemOrders[0][1]" />
          <SpeedrunEntry2 :raw-order="itemOrders[0][2]" />
          <SpeedrunEntry3 :raw-order="itemOrders[0][3]" />
          <SpeedrunEntry4 :raw-order="itemOrders[0][4]" />
          <SpeedrunEntry5 :raw-order="itemOrders[0][5]" />
          <SpeedrunEntry6 :raw-order="itemOrders[0][6]" />
          <SpeedrunEntry7 :raw-order="itemOrders[0][7]" />
          <SpeedrunEntry8 :raw-order="itemOrders[0][8]" />
          <SpeedrunEntry9 :raw-order="itemOrders[0][9]" />
          <SpeedrunEntry10 :raw-order="itemOrders[0][10]" />
          <SpeedrunEntry11 :raw-order="itemOrders[0][11]" />
        </v-row>
      </v-col>
      <v-col
        :order="sectionOrders[1]"
        cols="12"
      >
        <v-row>
          <SpeedrunEntry12 :raw-order="itemOrders[1][0]" />
          <SpeedrunEntry13 :raw-order="itemOrders[1][1]" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SpeedrunEntry0 from './entries/SpeedrunEntry0.vue';
import SpeedrunEntry1 from './entries/SpeedrunEntry1.vue';
import SpeedrunEntry2 from './entries/SpeedrunEntry2.vue';
import SpeedrunEntry3 from './entries/SpeedrunEntry3.vue';
import SpeedrunEntry4 from './entries/SpeedrunEntry4.vue';
import SpeedrunEntry5 from './entries/SpeedrunEntry5.vue';
import SpeedrunEntry6 from './entries/SpeedrunEntry6.vue';
import SpeedrunEntry7 from './entries/SpeedrunEntry7.vue';
import SpeedrunEntry8 from './entries/SpeedrunEntry8.vue';
import SpeedrunEntry9 from './entries/SpeedrunEntry9.vue';
import SpeedrunEntry10 from './entries/SpeedrunEntry10.vue';
import SpeedrunEntry11 from './entries/SpeedrunEntry11.vue';
import SpeedrunEntry12 from './entries/SpeedrunEntry12.vue';
import SpeedrunEntry13 from './entries/SpeedrunEntry13.vue';
</script>

<script>
import { reactive, ref } from 'vue';

// order ceases to work after 12 entries
const reversed = ref(false);
const numSections = 2;
var numEntries = 14;
// start from 1
const sectionOrders = reactive(
  Array.from({ length: numSections }, (_, i) => i+1)
);

var itemOrders = [];
for (var i = 0; i < numSections; i++) {
  itemOrders[i] = Array.from(
    { length: Math.min(12, numEntries) },
    (_, i) => i+1
  );
  numEntries -= 12;
}
itemOrders = reactive(itemOrders);

function reverseOrder() {
  sectionOrders.reverse();
  for (var i = 0; i < numSections; i++) {
    itemOrders[i].reverse();
    // on odd numbers, flip all but offset section
    if (numEntries % 2 == 1 && i != numSections-1) {
      // multiply array by -1 to indicate
      itemOrders[i] = itemOrders[i].map(x => -x);
    }
  }
  reversed.value = !reversed.value;
}

export default {
  data() {
    return {
      sectionOrders: sectionOrders,
      itemOrders: itemOrders,
      reversed: reversed,
      reverseOrder: reverseOrder,
    }
  }
}
</script>
