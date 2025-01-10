<template>
  <v-container>
    <v-row
      justify="center"
      justify-sm="end"
    >
      <v-col cols="12">
        <h2>Projects</h2>
        <p>These are a handful of small projects I've created on my own time.</p>
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
        cols="12"
        order="1"
      >
        <v-row>
          <ProjectEntry0 :raw-order="itemOrders[0]" />
          <ProjectEntry1 :raw-order="itemOrders[1]" />
          <ProjectEntry2 :raw-order="itemOrders[2]" />
          <ProjectEntry3 :raw-order="itemOrders[3]" />
          <ProjectEntry4 :raw-order="itemOrders[4]" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ProjectEntry0 from "./entries/ProjectEntry0.vue";
import ProjectEntry1 from "./entries/ProjectEntry1.vue";
import ProjectEntry2 from "./entries/ProjectEntry2.vue";
import ProjectEntry3 from "./entries/ProjectEntry3.vue";
import ProjectEntry4 from "./entries/ProjectEntry4.vue";
</script>

<script>
import { reactive, ref } from 'vue';

// will require additional lists to support above 12
const numEntries = 5;
// start from 1
const itemOrders = reactive(
  Array.from({ length: numEntries }, (_, i) => i+1)
);
var reversed = ref(false);

function reverseOrder() {
  itemOrders.reverse();
  reversed.value = !reversed.value;
}

export default {
  data() {
    return {
      itemOrders: itemOrders,
      reversed: reversed,
      reverseOrder: reverseOrder,
    }
  }
}
</script>
