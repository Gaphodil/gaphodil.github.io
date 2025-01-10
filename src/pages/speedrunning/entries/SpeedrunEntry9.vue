<template>
  <ImageTextItem simple-title="Sealed Bite (GameJam)">
    <template #image>
      <v-img
        src="@/assets/speedrunning/sealed-bite.webp"
        alt="A screenshot of Sealed Bite, from the Itch page.
    The player character stands in an autumn-esque forest."
      />
    </template>
    <template #content>
      <p>
        <i>Feb 2022 | Speedbump</i>
        <InlineTooltip
          aria-hidden="true"
          text-type="speedbump"
        />
      </p>
      <p>
        <a href="https://securas.itch.io/sealedbite-gamejamversion">Game</a> |
        <a href="https://github.com/Gaphodil/sealed-bite-speedrunning-info">Notes</a>
      </p>
      <p>
        Another open-source game, though this time I did do some runs before delving deep.
        The dash attack is fun to chain well, and slowly figuring out various cutscene skips
        for routing and tricks was too. I'm especially proud of figuring out the very difficult
        movement to traverse backwards through a room very much not designed for it.
      </p>
    </template>
  </ImageTextItem>
</template>
