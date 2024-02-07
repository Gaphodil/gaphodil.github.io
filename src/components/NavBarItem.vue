<template>
  <v-col
    cols="12"
    sm="auto"
    :class="$vuetify.display.mobile ? 'd-flex justify-center' : ''"
    :style="$vuetify.display.mobile ? 'padding: 2px' : ''"
  >
    <slot />
  </v-col>
</template>
