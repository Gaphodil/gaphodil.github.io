<template>
  <v-col
    cols="12"
    :order="compOrder"
  >
    <v-row>
      <v-col
        class="align-center justify-center"
        cols="12"
        sm="6"
        :order-sm="imgLeft ? '1' : '3'"
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
        order="2"
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

<script>
export default {
  props: {
    simpleTitle: {
      type: String,
      default: ""
    },
    rawOrder: {
      type: Number,
      default: 0
    }
  },
  computed: {
    compOrder() {
      console.log(Math.abs(this.rawOrder));
      return Math.abs(this.rawOrder);
    },
    imgLeft() {
      // encoding flip via negative values
      return this.compOrder % 2 === (this.rawOrder < 0 ? 0 : 1);
    },
  }
}
</script>
