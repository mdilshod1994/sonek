<template>
  <div cls="main">
    <the-header />
    <nuxt-page />
  </div>
</template>

<style>
body {
  font-family: Montserrat;
  font-size: clamp(1rem, 0.538rem + 0.54vw, 1.188rem);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: clamp(-0.03rem, -0.016rem + -0.02vw, -0.036rem);
  overflow-x: hidden;
}
</style>

<style lang="scss" module>
.main {
  position: relative;
}
</style>
