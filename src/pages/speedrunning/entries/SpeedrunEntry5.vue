<template>
  <ImageTextItem simple-title="I Wanna Save the Ship">
    <template #image>
      <v-img
        src="@/assets/speedrunning/save-the-ship.webp"
        alt="A screenshot of Save the Ship, from Delicious Fruit. The tiling is Mega-Man themed."
      />
    </template>
    <template #content>
      <p>
        <i>Dec 2021 | I Wanna Tourney</i>
        <InlineTooltip text-type="tourney" />
      </p>
      <p><a href="https://delicious-fruit.com/ratings/game_details.php?id=23913">Game</a></p>
      <p>
        This specific <a href="https://iwverve.github.io/iwtourney/">Tourney</a> game had a
        format very similar to the Fangame Marathon
        <InlineTooltip
          :margin="false"
          text-type="marathon"
        />
        blind races, where stages were approached in
        sequence and each was representative of a particular classic or indie game. I was particularly
        interested in the minor skips here and there, as well as the routing in the Super Metroid stage,
        but it's also just a fun and not too difficulty romp.
      </p>
    </template>
  </ImageTextItem>
</template>
