<script setup lang="ts"></script>

<template>
  <div cls="header">
    <div cls="header__wrap">
      <nuxt-link to="/" cls="header__logo">
        <img src="@/assets/imgs/logo.png" alt="" />
      </nuxt-link>
      <div cls="header__menu">
        <nuxt-link to="#"> How to Vote </nuxt-link>
        <nuxt-link to="#"> About </nuxt-link>
        <nuxt-link to="#"> Social </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.header {
  max-width: 1920px;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: clamp(1.5rem, 0.884rem + 0.72vw, 1.75rem);
  z-index: 1;
  &__logo {
    width: clamp(6rem, 1.069rem + 5.78vw, 8rem);
    height: clamp(6rem, 1.069rem + 5.78vw, 8rem);
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__wrap {
    display: flex;
    align-items: center;
    gap: clamp(3.5rem, -2.048rem + 6.5vw, 5.75rem);
    padding: 0 120px;
  }
  &__menu {
    display: flex;
    gap: 9px;
    a {
      display: flex;
      padding: 0 20px;
      height: 38px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 48px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: 0.3s ease-in-out;
      text-decoration: none;
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -0.42px;
      text-transform: uppercase;
      &:hover {
        border: 1px solid #fff;
      }
    }
  }
}
</style>
