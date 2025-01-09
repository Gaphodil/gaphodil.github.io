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
      <ImageTextItem
        simple-title="Stardew Valley - Better Jukebox Mod"
        :order="itemOrders[0]"
        :img-left="itemOrders[0] % 2 === 0"
      >
        <template #image>
          <v-img
            src="@/assets/projects/stardew-better-jukebox.webp"
            alt="A screenshot of a user interface from Stardew Valley.
            It is titled 'Jukebox' and displays a variety of songs to choose from."
          />
        </template>
        <template #content>
          <p><i>May 2020 - Apr 2024 | C#</i></p>
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

      <ImageTextItem
        simple-title="Jubilee - Practice Mod"
        :order="itemOrders[1]"
        :img-left="itemOrders[1] % 2 === 0"
      >
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
        simple-title="A Bunch Of Autosplitters"
        :order="itemOrders[2]"
        :img-left="itemOrders[2] % 2 === 0"
      >
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
              aria-hidden="true"
            />
            for use Gamemaker Studio as their engine, which
            coincidentally stores its global variables in an incredibly clear way and makes it
            very easy to start with.
          </p>
        </template>
      </ImageTextItem>

      <ImageTextItem
        simple-title="This Website"
        :order="itemOrders[3]"
        :img-left="itemOrders[3] % 2 === 0"
      >
        <template #content>
          <p><i>Jan 2024 - Present | Vuetify, Vue.js</i></p>
          <p>
            You're looking at it!
          </p>
        </template>
      </ImageTextItem>

      <ImageTextItem
        simple-title="IWBTG Godot Project Template Fork"
        :order="itemOrders[4]"
        :img-left="itemOrders[4] % 2 === 0"
      >
        <template #content>
          <p><i>Mar 2024 - May 2024 | Godot, GDScript</i></p>
          <p>
            <a href="https://github.com/Gaphodil/ReloadedK-Engine-Gaph-Fork">GitHub</a> |
            <a href="https://github.com/ReloadedK-git/ReloadedKs-Godot-Fangame-Engine">Original</a>
          </p>
          <p>
            I decided to start experimenting with some IWBTG fangame ideas I'd had,
            and since they weren't easily feasible to implement outside of Godot, I started
            with the most complete community engine currently available. As I learned more
            about GDScript over the course of the month, I started implementing non-specific
            changes that I felt could be immediately useful to others, and so created a fork to
            mirror my additions without needing to open-source my own project before it's ready
            for release. The largest addition was the overhaul to the in-game settings system,
            with algorithmic menu generation and an API to simplify the getting and, well,
            "setting" of settings, as well as the saving and loading.
          </p>
        </template>
      </ImageTextItem>
    </v-row>
  </v-container>
</template>

<script>
import { reactive, ref } from 'vue';

const numEntries = 6;
var itemOrders = reactive([...Array(numEntries).keys()]);
var reversed = ref(false);

function reverseOrder() {
  itemOrders.reverse();
  reversed.value = !reversed.value;
}

export default {
  data() {
    return {
      autosplitterText: "A functionality of the program LiveSplit to recognize when a program \
        is being run and automatically 'split' when certain conditions are met",
      itemOrders: itemOrders,
      reversed: reversed,
      reverseOrder: reverseOrder,
    }
  }
}
</script>
