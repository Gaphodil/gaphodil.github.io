<template>
  <v-container>
    <v-row
      justify="center"
      justify-sm="end"
    >
      <v-col cols="12">
        <h2>Speedrunning</h2>
        <p>
          I've speedrun <a href="https://www.speedrun.com/users/Gaphodil">a lot of games</a>!
          Some of them can get very complex, to the point that
          I've written up guides and collected various skips for those.
          Others I've only ever run once or twice, despite my efforts.
        </p>
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
      <v-col
        :order="sectionOrders[0]"
        cols="12"
      >
        <v-row>
          <ImageTextItem
            simple-title="Ophidia (Free)"
            :order="itemOrders[0][0]"
            :img-left="isImgLeft(0,0)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/ophidia.webp"
                alt="A screenshot of Ophidia, from its store page. A snake is circling an enemy."
              />
            </template>
            <template #content>
              <p>
                <i>Jan 2020 | Speedbump</i>
                <InlineTooltip :text="speedbumpText" />
              </p>
              <p>
                <a href="https://montster27.itch.io/ophidia">Game</a> | 
                <a href="https://docs.google.com/spreadsheets/d/107d9mwJSlK7EWNfGTxFauPud3jSt7iJ2FyA4Q1aZYC8/edit#gid=1941336056">
                  Misc. Notes
                </a>
              </p>
              <p>It was the first game Speedbump hosted and I did one run and called it good.</p>
            </template>
          </ImageTextItem>

          <ImageTextItem
            simple-title="Banana Nababa"
            :order="itemOrders[0][1]"
            :img-left="isImgLeft(0,1)"
          >
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
                  :text="speedbumpText"
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
        
          <ImageTextItem
            simple-title="Cast of the Seven Godsends - Redux"
            :order="itemOrders[0][2]"
            :img-left="isImgLeft(0,2)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/cotsg.webp"
                alt="A screenshot of Cast of the Seven Godsends, from its Steam page."
              />
            </template>
            <template #content>
              <p>
                <i>Jul 2020 | Speedbump</i>
                <InlineTooltip
                  aria-hidden="true"
                  :text="speedbumpText"
                />
              </p>
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

          <ImageTextItem
            simple-title="Abuse (DOS) (modern sourceport)"
            :order="itemOrders[0][3]"
            :img-left="isImgLeft(0,3)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/abuse-game.webp"
                alt="A screenshot of Abuse's first level.
            The player character is firing a laser rifle at a flying enemy."
              />
            </template>
            <template #content>
              <p>
                <i>Aug 2020 | Speedbump</i>
                <InlineTooltip
                  aria-hidden="true"
                  :text="speedbumpText"
                />
              </p>
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
            simple-title="I wanna Coinstack 1000"
            :order="itemOrders[0][4]"
            :img-left="isImgLeft(0,4)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/coinstack.webp"
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
        
          <ImageTextItem
            simple-title="I Wanna Save the Ship"
            :order="itemOrders[0][5]"
            :img-left="isImgLeft(0,5)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/save-the-ship.webp"
                alt="A screenshot of Save the Ship, from Delicious Fruit. The tiling is Mega-Man themed."
              />
            </template>
            <template #content>
              <p>
                <i>Dec 2021 | I Wanna Tourney</i>
                <InlineTooltip :text="tourneyText" />
              </p>
              <p><a href="https://delicious-fruit.com/ratings/game_details.php?id=23913">Game</a></p>
              <p>
                This specific <a href="https://iwverve.github.io/iwtourney/">Tourney</a> game had a
                format very similar to the Fangame Marathon
                <InlineTooltip
                  :margin="false"
                  :text="marathonText"
                />
                blind races, where stages were approached in
                sequence and each was representative of a particular classic or indie game. I was particularly
                interested in the minor skips here and there, as well as the routing in the Super Metroid stage,
                but it's also just a fun and not too difficulty romp.
              </p>
            </template>
          </ImageTextItem>

          <ImageTextItem
            simple-title="I Wanna Escape Heavenly Host"
            :order="itemOrders[0][6]"
            :img-left="isImgLeft(0,6)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/heavenly-host.webp"
                alt="A screenshot of Heavenly Host, from Delicious Fruit.
            There are a smorgasbord of unique interactables, and the player's inventory is shown in the top left."
              />
            </template>
            <template #content>
              <p>
                <i>Dec 2021 - Jul 2022 | I Wanna Tourney</i>
                <InlineTooltip
                  aria-hidden="true"
                  :text="tourneyText"
                />
              </p>
              <p>
                <a href="https://delicious-fruit.com/ratings/game_details.php?id=23932">Game</a> |
                <a href="https://pastebin.com/JgRaJ4pv">Notes</a>
              </p>
              <p>
                I <i>love</i> this game. There's only one "correct" route, but it was
                still fun to devise, as well as writing outright solutions to the puzzles. The platforming
                itself flows super cleanly without being too difficult, and mixing it with short bursts of
                rapid-fire directional inputs was extremely my speed. I was satisfied with a sub-10 minute time,
                and I'm so glad that I'm no longer the only one who has such a time.
              </p>
            </template>
          </ImageTextItem>
        
          <ImageTextItem
            simple-title="Demon Burst"
            :order="itemOrders[0][7]"
            :img-left="isImgLeft(0,7)"
          >
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
                  :text="speedbumpText"
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
        
          <ImageTextItem
            simple-title="MiniMetroidvania 4"
            :order="itemOrders[0][8]"
            :img-left="isImgLeft(0,8)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/mmv4.webp"
                alt="A screenshot of MiniMetroidvania 4, from Delicious Fruit.
              A grassy area is covered in spikes and deadly fruit."
              />
            </template>
            <template #content>
              <p>
                <i>Feb 2022 | I Wanna Tourney</i>
                <InlineTooltip
                  aria-hidden="true"
                  :text="tourneyText"
                />
              </p>
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
        
          <ImageTextItem
            simple-title="Sealed Bite (GameJam)"
            :order="itemOrders[0][9]"
            :img-left="isImgLeft(0,9)"
          >
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
                  :text="speedbumpText"
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
        
          <ImageTextItem
            simple-title="Skelemania"
            :order="itemOrders[0][10]"
            :img-left="itemOrders[0][10] % 2 === 0"
          >
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
                  :text="speedbumpText"
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
        
          <ImageTextItem
            simple-title="Stop the Simulation"
            :order="itemOrders[0][11]"
            :img-left="itemOrders[0][11] % 2 === 0"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/stop-the-simulation.webp"
                alt="A screenshot of Stop the Simulation, from Delicious Fruit.
              The area is inspired by Baba is You."
              />
            </template>
            <template #content>
              <p>
                <i>Nov - Dec 2022 | FAST</i>
                <InlineTooltip text="Fangame Adventure Speedrun Tournament, a single-elimination tournament racing a variety of fangames" />
              </p>
              <p><a href="https://delicious-fruit.com/ratings/game_details.php?id=21196">Game</a></p>
              <p>
                This was the only game from FAST I enjoyed enough to do additional runs of,
                with the numerous but small skips and strategies, and the polished gameplay,
                though part of the reason was that there were so many games that could be
                practiced that no single one could have been focused on. (Fortunately the
                <a href="https://discord.gg/X26VSNHGEV">upcoming second iteration</a> in early 2024
                will have a new format.)
              </p>
            </template>
          </ImageTextItem>
        </v-row>
      </v-col>
      <v-col
        :order="sectionOrders[1]"
        cols="12"
      >
        <v-row>
          <ImageTextItem
            simple-title="Jubilee"
            :order="itemOrders[1][0]"
            :img-left="isImgLeft(1,0)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/jubilee.webp"
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
      
          <ImageTextItem
            simple-title="BONK: An Interactive Exposition"
            :order="itemOrders[1][1]"
            :img-left="isImgLeft(1,1)"
          >
            <template #image>
              <v-img
                src="@/assets/speedrunning/bonk.webp"
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
                <a href="https://youtu.be/OHI5-6Io2qg">Fangame Marathon 2023</a>
                <InlineTooltip
                  aria-hidden="true"
                  :text="marathonText"
                />!
                The game's casual experiencealso provides an incredible sense of exploration with its secrets.
              </p>
            </template>
          </ImageTextItem>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reactive, ref } from 'vue';

// order ceases to work after 12 entries
const reversed = ref(false);
const numSections = 2;
var numEntries = 14;
const sectionOrders = reactive([...Array(numSections).keys()]);

var itemOrders = [];
for (var i = 0; i < numSections; i++) {
  itemOrders[i] = [...Array(Math.min(numEntries, 12)).keys()];
  numEntries -= 12;
}
itemOrders = reactive(itemOrders);

function reverseOrder() {
  sectionOrders.reverse();
  for (var i = 0; i < numSections; i++) {
    itemOrders[i].reverse();
  }
  reversed.value = !reversed.value;
}

function isImgLeft(section, order) {
  // mod 2, opposite if (reversed & final section has odd count & not in final section)
  if (itemOrders[numSections - 1].length % 2 === 1 && reversed.value && section < numSections - 1) {
    return order % 2 === 1;
  }
  return order % 2 === 0;
}

export default {
  data() {
    return {
      speedbumpText: "A racing/record chasing competition for lesser-known \
        games, hosted by livestreamers Smight and authorblues",
      tourneyText: "A community event where one or two quality games released each \
        week for players to compete in",
      marathonText: "A yearly event showcasing speedruns of fangames about any property",
      sectionOrders: sectionOrders,
      itemOrders: itemOrders,
      reversed: reversed,
      reverseOrder: reverseOrder,
      isImgLeft: isImgLeft,
    }
  }
}
</script>
