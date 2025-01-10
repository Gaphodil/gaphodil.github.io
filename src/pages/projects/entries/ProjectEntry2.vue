<template>
  <ImageTextItem simple-title="A Bunch Of Autosplitters">
    <template #content>
      <p><i>Various | Auto Splitting Language (C#)</i></p>
      <p>
        <a href="https://github.com/Gaphodil/iwehh-autosplitter">I Wanna Escape Heavenly Host</a> |
        <a href="https://github.com/Gaphodil/Jubilee-Autosplitter">Jubilee</a> |
        <a href="https://github.com/Gaphodil/autosplitters">Everything Else</a>
      </p>
      <p>
        It started as a way to ease the use of <a href="https://livesplit.org">LiveSplit</a>
        <InlineTooltip raw-text="A timer for speedruns that can also track fastest times on individual segments" />
        for the games I enjoyed, but it's no fun having slightly specialized knowledge and not
        making use of it. Most of the games I've created autosplitters
        <InlineTooltip
          :margin="false"
          text-type="autosplitter"
          aria-hidden="true"
        />
        for use Gamemaker Studio as their engine, which
        coincidentally stores its global variables in an incredibly clear way and makes it
        very easy to start with.
      </p>
    </template>
  </ImageTextItem>
</template>
