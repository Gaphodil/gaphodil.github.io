<template>
  <ImageTextItem simple-title="Demon Burst">
    <template #image>
      <v-img
        src="@/assets/speedrunning/demon-burst.webp"
        alt="A screenshot of Demon Burst.
    The player character is throwing an axe at a skeleton."
      />
    </template>
    <template #content>
      <p>
        <i>Jan 2022 | Speedbump</i>
        <InlineTooltip
          aria-hidden="true"
          text-type="speedbump"
        />
      </p>
      <p>
        <a href="https://crowno.itch.io/demon-burst">Game</a> |
        <a href="https://docs.google.com/spreadsheets/d/1UmP3gVBJdVTIkkqWSrsQ5oPn08PMKvyGaOvmAYAuKG4">Health Values</a>
      </p>
      <p>
        Cute sprites, solid gameplay, and a short speedrun. It's a nice run, though there
        wasn't a lot of other interest, especially when it came to the massive invincibility
        bug at the halfway point. Runs without the glitch, or otherwise deathless runs, didn't
        seem very popular either.
      </p>
    </template>
  </ImageTextItem>
</template>
