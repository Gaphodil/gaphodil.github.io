<template>
  <ImageTextItem simple-title="Stardew Valley - Better Jukebox Mod">
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
        <InlineTooltip raw-text="A farming-themed life simulator" />
        allows a player to listen to songs from the game at
        their home. The way to select a song requires navigating forward or back one
        song at a time, which I felt was tedious, so I made my own version of the menu
        that allowed for more intuitive scrolling.
      </p>
    </template>
  </ImageTextItem>
</template>
