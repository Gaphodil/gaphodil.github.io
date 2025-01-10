<template>
  <ImageTextItem simple-title="Guy Tower Collab">
    <template #image>
      <v-img
        src="@/assets/projects/guy-tower.webp"
        alt="A screenshot of a room from I Wanna Be The Guy.
        A sign reads 'Final Tower of The Guy'.
        The room is made of gray and purple bricks. Spikes cover the ceilings."
      />
    </template>
    <template #content>
      <p><i>Aug 2024 - Present | GameMaker Language</i></p>
      <p>
        (Personal submission code to be made public after release)
      </p>
      <p>
        This collab, hosted by aliceNobodi, centered around remaking the Guy Tower
        screen in any way they saw fit. Initially, I was responsible for importing all
        submissions into a single repository, which is partially complicated by allowing
        the use of templates besides the one provided, and even some in an older version
        of the GameMaker engine itself. I created a handful of submissions myself, which
        wound up being my first major experience working with GameMaker (Studio 1).
      </p>
      <p>
        The process was slow-going at first, but with experience I discovered a number of
        tricks to smooth out the process - for instance, renaming assets in the editor
        replicated the change through all files, but reordering was more easily
        achieved by opening the raw project file in a text editor. I'm also now more
        involved in the structural development process, and to do so I've made use of a
        <a href="https://yellowafterlife.itch.io/gmedit">code editor customized for GameMaker</a>
        as well as some batchfiles created with Python scripts to utilise a tool called
        <a href="https://github.com/Synthasmagoria/GMCollage">GMCollage</a>
        that lowers the compile time of test versions in a project of this scale.
      </p>
    </template>
  </ImageTextItem>
</template>
