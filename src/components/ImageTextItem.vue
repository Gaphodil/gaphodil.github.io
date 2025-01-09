<template>
  <v-col cols="12">
    <v-row>
      <v-col
        class="align-center justify-center"
        cols="12"
        sm="6"
        order="0"
        :order-sm="imgLeft ? '0' : '2'"
      >
        <slot name="image">
          <v-row
            align-self="stretch"
            class="align-center justify-center"
          >
            <v-col cols="auto">
              <v-icon icon="mdi-camera-off" />
            </v-col>
          </v-row>
        </slot>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        :class="$vuetify.display.mobile ? 'text-center' : (imgLeft ? 'text-left' : 'text-right')"
        order="1"
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
  </v-col>
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
