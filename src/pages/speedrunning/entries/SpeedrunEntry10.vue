<template>
  <ImageTextItem simple-title="Skelemania">
    <template #image>
      <v-img
        src="@/assets/speedrunning/skelemania.webp" 
        alt="A screenshot of Skelemania, from the Itch page.
      The skeletal player character stands in a room with greenery and spiders."
      />
    </template>
    <template #content>
      <p>
        <i>Mar 2022 | Speedbump</i>
        <InlineTooltip
          aria-hidden="true"
          text-type="speedbump"
        />
      </p>
      <p><a href="https://benal.itch.io/skelemania">Game</a></p>
      <p>
        A one-off exploration with little interest beyond, since it had a fairly optimized record,
        but I still put in a run. Then I realized it was made in GameMaker 8, and I'd recently
        heard of <a href="https://github.com/OpenGMK/OpenGMK">a tool for TASing on GM8</a>, so I made a quick
        and dirty <a href="https://youtu.be/gOCLXQhfDww">TAS</a>
        <InlineTooltip text="Tool Assisted Speedrun, often used to showcase a hypothetical perfect speedrun" />,
        though there were still some
        tricks I didn't fully understand, like getting large wall jumps off certain corners.
      </p>
    </template>
  </ImageTextItem>
</template>
