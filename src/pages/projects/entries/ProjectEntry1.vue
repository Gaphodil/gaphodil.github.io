<template>
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
        <InlineTooltip raw-text="A simple precision platformer" />,
        having speedran it for a bit. While its fastest categories are too difficult
        for me to care to return to, I did enjoy coming back and updating its autosplitter
        <InlineTooltip
          :margin="false"
          text-type="autosplitter"
        />,
        as well as exploring and editing its code to create this.
        It was also fun to look at a commercial project using Gamemaker Studio, given
        that it's one of the common fangame engines.
      </p>
    </template>
  </ImageTextItem>
</template>
