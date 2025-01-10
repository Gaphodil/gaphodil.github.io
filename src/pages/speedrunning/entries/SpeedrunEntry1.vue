<template>
  <ImageTextItem simple-title="Banana Nababa">
    <template #image>
      <v-img
        src="@/assets/speedrunning/banana-nababa.webp"
        alt="A screenshot of Banana Nababa, from Indie Overlook. The player character is throwing an axe."
      />
    </template>
    <template #content>
      <p>
        <i>May - Jun 2020 | Speedbump</i>
        <InlineTooltip
          aria-hidden="true"
          text-type="speedbump"
        />
      </p>
      <p>
        <a href="https://archive.org/details/BananaNababa">Game</a> | 
        <a href="https://github.com/Gaphodil/banana-nababa-speedrunning-info">Notes</a>
      </p>
      <p>
        The game's download came with its source code, so I spent most of the competition
        reading through that instead of actually running the game. Everyone being allowed
        autofire for accessibility, and personally having a lot of free time, really meant
        I could afford to grind it out at the end, though.
      </p>
    </template>
  </ImageTextItem>
</template>
