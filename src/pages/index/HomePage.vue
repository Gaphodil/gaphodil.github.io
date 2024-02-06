<template>
  <v-container>
    <h2>Hi!</h2>
    <p>
      I'm <b>Gaphodil</b> (rhymes with daffodil). I'm a queer woman (she/her) who
      plays video games and occassionally streams doing it.
      Sometimes I code very small things for fun.
    </p>
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col :cols="'auto'">
          <v-btn
            target="_blank"
            aria-label="Twitch"
            icon="mdi-twitch"
            href="https://twitch.tv/gaphodil"
          />
        </v-col>
        <v-col :cols="'auto'">
          <v-btn
            target="_blank"
            aria-label="Youtube"
            icon="mdi-youtube"
            href="https://youtube.com/@gaphodil"
          />
        </v-col>
        <v-col :cols="'auto'">
          <v-btn
            target="_blank"
            aria-label="GitHub"
            icon="mdi-github"
            href="https://github.com/gaphodil"
          />
        </v-col>
        <v-col :cols="'auto'">
          <v-btn
            target="_blank"
            aria-label="Cohost"
            icon="cohost:"
            href="https://cohost.org/gaph"
          />
        </v-col>
        <v-col :cols="'auto'">
          <v-btn
            target="_blank"
            aria-label="Twitter"
            icon="mdi-twitter"
            href="https://twitter.com/gaphodil"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
