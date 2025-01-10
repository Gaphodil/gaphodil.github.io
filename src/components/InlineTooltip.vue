<template>
  <v-tooltip
    :text="computedText"
    location="bottom"
  >
    <template #activator="{ props }">
      <v-icon
        v-bind="props"
        icon="mdi-information"
        size="x-small"
        :style="margin ? 'margin-left: 4px' : ''"
        @click="$emit('update:show', !show)"
      />
    </template>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    rawText: {
      type: String,
      default: ""
    },
    margin: {
      type: Boolean,
      default: true
    },
    textType: {
      type: String,
      default: ""
    },
  },
  emits: ["update:show"],
  computed: {
    computedText() {
      switch (this.textType) {
        case "autosplitter":
          return "A functionality of the program LiveSplit to recognize when a program \
            is being run and automatically 'split' when certain conditions are met";
        case "speedbump":
          return "A racing/record chasing competition for lesser-known \
            games, hosted by livestreamers Smight and authorblues";
        case "tourney":
          return "A community event where one or two quality games released each \
            week for players to compete in";
        case "marathon":
          return "A yearly event showcasing speedruns of fangames about any property";
        default: return this.rawText;
      }
    }
  },
}
</script>
