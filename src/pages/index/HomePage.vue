<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Hi!</h2>
        <p>
          I'm <b>Gaphodil</b> (rhymes with daffodil). I'm a queer woman (she/her) who
          plays video games, sometimes fast, and occassionally livestreams it.
          Sometimes I code projects in my free time.
        </p>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <v-btn-group
          :theme="$vuetify.theme.current.dark ? 'customLight' : 'customDark'"
          divided
          border
        >
          <v-btn
            class="bg-background"
            target="_blank"
            aria-label="Twitch"
            title="Twitch"
            icon="mdi-twitch"
            href="https://twitch.tv/gaphodil"
          />
          <v-btn
            class="bg-background"
            target="_blank"
            aria-label="Youtube"
            title="Youtube"
            icon="mdi-youtube"
            href="https://youtube.com/@gaphodil"
          />
          <v-btn
            class="bg-background"
            target="_blank"
            aria-label="GitHub"
            title="GitHub"
            icon="mdi-github"
            href="https://github.com/gaphodil"
          />
          <v-btn
            class="bg-background"
            target="_blank"
            aria-label="Cohost"
            title="Cohost"
            icon="cohost:"
            href="https://cohost.org/gaph"
          />
          <v-btn
            class="bg-background"
            target="_blank"
            aria-label="Twitter"
            title="Twitter"
            icon="mdi-twitter"
            href="https://twitter.com/gaphodil"
          />
        </v-btn-group>
      </v-col>
    </v-row>
  </v-container>
</template>
