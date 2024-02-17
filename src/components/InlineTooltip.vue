<template>
  <v-tooltip
    v-model="show"
    :text="text"
    location="bottom"
  >
    <template #activator="{ props }">
      <v-icon
        v-bind="props"
        icon="mdi-information"
        size="x-small"
        :style="margin ? 'margin-left: 4px' : ''"
        @click="show = !show"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  margin: {
    type: Boolean,
    default: true
  },
});
</script>

<script>
export default {
  data() {
    return {
      show: false,
    }
  }
}
</script>