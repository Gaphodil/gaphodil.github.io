<template>
  <v-container>
    <h2>Projects</h2>
    <p>These are a handful of small projects I've created on my own time.</p>
    <v-container>
      <ImageTextItem
        :img-left="true"
        simple-title="Stardew Valley - Better Jukebox Mod"
      >
        <template #image>
          <v-img
            src="@/assets/projects/stardew-better-jukebox.webp"
            alt="A screenshot of a user interface from Stardew Valley.
            It is titled 'Jukebox' and displays a variety of songs to choose from."
          />
        </template>
        <template #content>
          <p><i>May 2020 - Dec 2023 | C#</i></p>
          <p><a href="https://github.com/Gaphodil/BetterJukebox">GitHub</a></p>
          <p>
            The jukebox item in <a href="https://store.steampowered.com/app/413150">Stardew Valley</a>
            <InlineTooltip text="A farming-themed life simulator" />
            allows a player to listen to songs from the game at
            their home. The way to select a song requires navigating forward or back one
            song at a time, which I felt was tedious, so I made my own version of the menu
            that allowed for more intuitive scrolling.
          </p>
        </template>
      </ImageTextItem>

      <ImageTextItem simple-title="Jubilee - Practice Mod">
        <template #image>
          <v-img
            src="@/assets/projects/jubilee-practice-mod.webp"
            alt="A screenshot of Jubilee. The main character is mid-jump.
            On the left side, a number of technical details about
            the game's current state are displayed."
          />
        </template>
        <template #content>
          <p><i>Dec 2023 | GameMaker Language</i></p>
          <p><a href="https://github.com/Gaphodil/jubilee-practice-mod">GitHub</a></p>
          <p>
            I've a fondness for <a href="https://store.steampowered.com/app/1774220">Jubilee</a>
            <InlineTooltip text="A simple precision platformer" />,
            having speedran it for a bit. While its fastest categories are too difficult
            for me to care to return to, I did enjoy coming back and updating its autosplitter
            <InlineTooltip
              :margin="false"
              :text="autosplitterText"
            />,
            as well as exploring and editing its code to create this.
            It was also fun to look at a commercial project using Gamemaker Studio, given
            that it's one of the common fangame engines.
          </p>
        </template>
      </ImageTextItem>

      <ImageTextItem
        :img-left="true"
        simple-title="A Bunch Of Autosplitters"
      >
        <template #image>
          <v-row
            align-self="stretch"
            class="align-center justify-center"
          >
            <v-col cols="auto">
              <v-icon icon="mdi-camera-off" />
            </v-col>
          </v-row>
        </template>
        <template #content>
          <p><i>Various | Auto Splitting Language (C#)</i></p>
          <p>
            <a href="https://github.com/Gaphodil/iwehh-autosplitter">I Wanna Escape Heavenly Host</a> |
            <a href="https://github.com/Gaphodil/Jubilee-Autosplitter">Jubilee</a> |
            <a href="https://github.com/Gaphodil/autosplitters">Everything Else</a>
          </p>
          <p>
            It started as a way to ease the use of <a href="https://livesplit.org">LiveSplit</a>
            <InlineTooltip text="A timer for speedruns that can also track fastest times on individual segments" />
            for the games I enjoyed, but it's no fun having slightly specialized knowledge and not
            making use of it. Most of the games I've created autosplitters
            <InlineTooltip
              :margin="false"
              :text="autosplitterText"
            />
            for use Gamemaker Studio as their engine, which
            coincidentally stores its global variables in an incredibly clear way and makes it
            very easy to start with.
          </p>
        </template>
      </ImageTextItem>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      autosplitterText: "A functionality of the program LiveSplit to recognize when a program \
        is being run and automatically 'split' when certain conditions are met"
    }
  }
}
</script>
