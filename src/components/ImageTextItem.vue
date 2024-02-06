<template>
  <v-row v-if="imgLeft || $vuetify.display.mobile">
    <v-col
      class="align-center justify-center"
      cols="12"
      sm="6"
    >
      <slot name="image" />
    </v-col>
    <v-col
      cols="12"
      sm="6"
      :class="$vuetify.display.mobile ? 'text-center' : 'text-left'"
    >
      <h3>
        <slot
          name="title"
          :v-if="simpleTitle == ''"
        />
        <div :v-if="simpleTitle != ''">
          {{ simpleTitle }}
        </div>
      </h3>
      <slot name="content" />
    </v-col>
  </v-row>
  <v-row
    v-else
    class="text-right"
  >
    <v-col cols="6">
      <h3 class="text-right">
        <slot
          name="title"
          :v-if="simpleTitle == ''"
        />
        <div :v-if="simpleTitle != ''">
          {{ simpleTitle }}
        </div>
      </h3>
      <slot name="content" />
    </v-col>
    <v-col
      class="align-center justify-center"
      cols="6"
    >
      <slot name="image" />
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  imgLeft: {
    type: Boolean,
    default: false
  },
  simpleTitle: {
    type: String,
    default: ""
  }
});
</script>
