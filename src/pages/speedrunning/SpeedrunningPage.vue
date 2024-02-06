<template>
  <v-container>
    <h2>Speedrunning</h2>
    <p>
      I've speedrun <a href="https://www.speedrun.com/users/Gaphodil">a lot of games</a>!
      Some of them are more complex than others, to the point that
      I've written up guides and collected various skips for those.
    </p>
    <v-container>
      <ImageTextItem
        :img-left="true"
        simple-title="Ophidia (Free)"
      >
        <template #image>
          <v-img
            src="@/assets/speedrunning/ophidia.png"
            alt="A screenshot of Ophidia, from its store page. A snake is circling an enemy."
          />
        </template>
        <template #content>
          <p><i>Jan 2020 | Speedbump</i></p>
          <p>
            <a href="https://montster27.itch.io/ophidia">Game</a> | 
            <a href="https://docs.google.com/spreadsheets/d/107d9mwJSlK7EWNfGTxFauPud3jSt7iJ2FyA4Q1aZYC8/edit#gid=1941336056">
              Misc. Notes
            </a>
          </p>
          <p>
            This was the first game to show up under <i>Speedbump</i>, a racing/record chasing competition
            for lesser-known games hosted by <a href="https://www.twitch.tv/smight">Smight</a> and
            <a href="https://www.twitch.tv/authorblues">authorblues</a>.
          </p>
          <p>
            Unfortunately all the strat-hunting and documentation for Speedbump games is usually
            relegated to Smight's Discord server, which means a lot of info isn't easily searchable.
            Still, for this and other games, it was very fun to break the game, even if I only ever
            did one run.
          </p>
        </template>
      </ImageTextItem>

      <ImageTextItem simple-title="Banana Nababa">
        <template #image>
          <v-img
            src="@/assets/speedrunning/banana-nababa.png"
            alt="A screenshot of Banana Nababa, from Indie Overlook. The player character is throwing an axe."
          />
        </template>
        <template #content>
          <p><i>May - Jun 2020 | Speedbump</i></p>
          <p>
            <a href="https://archive.org/details/BananaNababa">Game</a> | 
            <a href="https://github.com/Gaphodil/banana-nababa-speedrunning-info">Notes</a>
          </p>
          <p>
            The game's download came with its source code, so I spent most of the competition
            reading through that instead of actually running the game. Everyone being allowed
            autofire for accessibility and having a lot of free time really meant I could grind
            it out at the end, though.
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem
        :img-left="true"
        simple-title="Cast of the Seven Godsends - Redux"
      >
        <template #image>
          <v-img
            src="@/assets/speedrunning/cotsg.jpg"
            alt="A screenshot of Cast of the Seven Godsends, from its Steam page."
          />
        </template>
        <template #content>
          <p><i>Jul 2020 | Speedbump</i></p>
          <p><a href="https://store.steampowered.com/app/373360">Game</a></p>
          <p>
            I'll be honest: this game isn't great. The speedrun, though? It's hilarious.
            Most skips revolve around a specific armour-type granting increased movement speed
            and jump height, except the latter had an oversight on ledges of a very specific incline,
            bringing forth a brand new fictional "space program". I'd never go back to do runs,
            but the brief community that formed around this one was especially great.
          </p>
        </template>
      </ImageTextItem>

      <ImageTextItem simple-title="Abuse (DOS) (modern sourceport)">
        <template #image>
          <v-img
            src="@/assets/speedrunning/abuse-game.png"
            alt="A screenshot of Abuse's first level.
          The player character is firing a laser rifle at a flying enemy."
          />
        </template>
        <template #content>
          <p><i>Aug 2020 | Speedbump</i></p>
          <p>
            <a href="https://github.com/antrad/Abuse_1996">Game</a> | 
            <a href="https://drive.google.com/drive/folders/1g-qGULgAqJ4GR8eEduN1rUIn0B5zZ92m">Maps and Notes</a>
          </p>
          <p>
            I played a lot of run-and-gun Flash games as a child, so when this one showed up
            I was very interested. The fanmade port to modern systems also included the
            level editor, which was used to get maps of every level. Then I scribbled all over them!
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem
        :img-left="true"
        simple-title="I wanna Coinstack 1000"
      >
        <template #image>
          <v-img
            src="@/assets/speedrunning/coinstack.png"
            alt="A screenshot of level 13 of Coinstack 1000, from Delicious Fruit.
            The Kid faces many coins above deadly spikes and sawblades."
          />
        </template>
        <template #content>
          <p><i>Mar 2021</i></p>
          <p>
            <a href="https://delicious-fruit.com/ratings/game_details.php?id=22994">Game</a> |
            <a href="https://docs.google.com/spreadsheets/d/18UIcedbfcoqfWWl9Yu7lH1VR2U46x0ahkbDo5_tI9PM">Routing</a>
          </p>
          <p>
            This was a really <i>really</i> fun game to play and to route, but it ultimately
            ended up too difficult for me to keep at it - the 100% levels I especially felt like
            I could never get consistent at. I've improved since, so maybe it'd go smoother nowadays!
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem simple-title="I Wanna Save the Ship">
        <template #image>
          <v-img
            src="@/assets/speedrunning/save-the-ship.png"
            alt="A screenshot of Save the Ship, from Delicious Fruit. The tiling is Mega-Man themed."
          />
        </template>
        <template #content>
          <p><i>Dec 2021 | I Wanna Tourney</i></p>
          <p><a href="https://delicious-fruit.com/ratings/game_details.php?id=23913">Game</a></p>
          <p>
            The <a href="https://iwverve.github.io/iwtourney/"><i>I Wanna Tourney</i></a> was an event
            hosted by some members of the I Wanna Be The Guy fangame community, where talented creators
            were invited to create games for participants to compete in weekly. This specific game had a
            format very similar to the Fangame Marathon blind races, where stages were approached in
            sequence and each was representative of a particular classic or indie game. I was particularly
            interested in the minor skips here and there, as well as the routing in the Super Metroid stage,
            but it's also just a fun romp.
          </p>
        </template>
      </ImageTextItem>

      <ImageTextItem
        :img-left="true"
        simple-title="I Wanna Escape Heavenly Host"
      >
        <template #image>
          <v-img
            src="@/assets/speedrunning/heavenly-host.png"
            alt="A screenshot of Heavenly Host, from Delicious Fruit.
          There are a smorgasbord of unique interactables, and the player's inventory is shown in the top left."
          />
        </template>
        <template #content>
          <p><i>Dec 2021 - Jul 2022 | I Wanna Tourney</i></p>
          <p>
            <a href="https://delicious-fruit.com/ratings/game_details.php?id=23932">Game</a> |
            <a href="https://pastebin.com/JgRaJ4pv">Notes</a>
          </p>
          <p>
            I <i>love</i> this game, though. There's only one "correct" route, but it was
            still fun to devise, as well as writing outright solutions to the puzzles. The platforming
            itself flows super cleanly without being too difficult, and mixing it with short bursts of
            rapid-fire directional inputs was extremely my speed. I was satisfied with a sub-10 minute time,
            and I'm so glad that I'm no longer the only one who has such a time.
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem simple-title="Demon Burst">
        <template #image>
          <v-img
            src="@/assets/speedrunning/demon-burst.png"
            alt="A screenshot of Demon Burst.
          The player character is throwing an axe at a skeleton."
          />
        </template>
        <template #content>
          <p><i>Jan 2022 | Speedbump</i></p>
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
      
      <ImageTextItem
        :img-left="true"
        simple-title="MiniMetroidvania 4"
      >
        <template #image>
          <v-img
            src="@/assets/speedrunning/mmv4.png"
            alt="A screenshot of MiniMetroidvania 4, from Delicious Fruit.
            A grassy area is covered in spikes and deadly fruit."
          />
        </template>
        <template #content>
          <p><i>Feb 2022 | I Wanna Tourney</i></p>
          <p>
            <a href="https://delicious-fruit.com/ratings/game_details.php?id=24396">Game</a> |
            <a href="https://github.com/Gaphodil/minimetroidvania-iv-speedrunning-info">Notes</a>
          </p>
          <p>
            This game is so cool and there are so many cool skips and the routing had a lot of potential
            in multiple directions but the game is super duper hard for me. I loved playing through the first
            three in I Wanna Maker, and this certainly exceeded my expectations. Too bad I only did the one run...
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem simple-title="Sealed Bite (GameJam)">
        <template #image>
          <v-img
            src="@/assets/speedrunning/sealed-bite.png"
            alt="A screenshot of Sealed Bite, from the Itch page.
          The player character stands in an autumn-esque forest."
          />
        </template>
        <template #content>
          <p><i>Feb 2022 | Speedbump</i></p>
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
      
      <ImageTextItem
        :img-left="true"
        simple-title="Skelemania"
      >
        <template #image>
          <v-img
            src="@/assets/speedrunning/skelemania.png" 
            alt="A screenshot of Skelemania, from the Itch page.
            The skeletal player character stands in a room with greenery and spiders."
          />
        </template>
        <template #content>
          <p><i>Mar 2022 | Speedbump</i></p>
          <p><a href="https://benal.itch.io/skelemania">Game</a></p>
          <p>
            A one-off exploration with little interest beyond, since it had a fairly optimized record,
            but I still put in a run. Then I realized it was made in GameMaker 8, and I'd recently
            heard of a tool for creating Tool-Assisted Speedruns (TAS) on GM8, so I made a quick
            and dirty <a href="https://youtu.be/gOCLXQhfDww">TAS</a>, though there were still some
            tricks I didn't fully understand, like getting large wall jumps off certain corners.
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem simple-title="Stop the Simulation">
        <template #image>
          <v-img
            src="@/assets/speedrunning/stop-the-simulation.png"
            alt="A screenshot of Stop the Simulation, from Delicious Fruit.
            The area is inspired by Baba is You."
          />
        </template>
        <template #content>
          <p><i>Nov - Dec 2022 | FAST</i></p>
          <p><a href="https://delicious-fruit.com/ratings/game_details.php?id=21196">Game</a></p>
          <p>
            The <i>Fangame Adventure Speedrun Tournament</i> (FAST) was a
            single-elimination tourney in which competitors raced a variety of
            fangames. This was the only one I enjoyed enough to do additional runs of,
            with the numerous but small skips and strategies, and the polished gameplay,
            though part of the reason was that there were so many games that could be
            practiced that no single one could have been focused on. (Fortunately the
            <a href="https://discord.gg/X26VSNHGEV">upcoming second iteration</a> will
            have a new format.)
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem
        :img-left="true"
        simple-title="Jubilee"
      >
        <template #image>
          <v-img
            src="@/assets/speedrunning/jubilee.jpg"
            alt="A screenshot of Jubilee, from the Steam page.
          The player character faces a deadly fish in a marshy area."
          />
        </template>
        <template #content>
          <p><i>Dec 2022 - Feb 2023</i></p>
          <p>
            <a href="https://store.steampowered.com/app/1774220">Game</a> |
            <a href="https://www.speedrun.com/jubilee/guides/0zx9o">Movement Notes</a>
          </p>
          <p>
            I enjoyed watching runs of this one back in December 2021, but didn't get around
            to it for a full year. Any% is a particularly tough category as either character
            - the run is quite short, so the game is already fairly optimized despite the
            overall lack of interest.
          </p>
        </template>
      </ImageTextItem>
      
      <ImageTextItem simple-title="BONK: An Interactive Exposition">
        <template #image>
          <v-img
            src="@/assets/speedrunning/bonk.png"
            alt="A screenshot of BONK, from Delicious Fruit. The kid is submersed in slime."
          />
        </template>
        <template #content>
          <p><i>Apr - Jul 2023</i></p>
          <p><a href="https://delicious-fruit.com/ratings/game_details.php?id=26190">Game</a></p>
          <p>
            I'm deeply fond of this game. A lot of collaboration in terms of routing and strat-finding,
            including with the developer, who was kind enough to add tweaks and shift things around to
            keep the run flowing in an interesting way. I even raced it during
            <a href="https://youtu.be/OHI5-6Io2qg">Fangame Marathon 2023</a>! The game's casual experience
            also provides an incredible sense of exploration with its secrets.
          </p>
        </template>
      </ImageTextItem>
    </v-container>
  </v-container>
</template>

