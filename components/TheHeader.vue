<script setup lang="ts"></script>

<template>
  <div cls="header">
    <div cls="header__wrap">
      <nuxt-link to="/" cls="header__logo">
        <img src="@/assets/imgs/logo.png" alt="" />
      </nuxt-link>
      <div cls="header__menu -desk">
        <nuxt-link to="#"> How to Vote </nuxt-link>
        <nuxt-link to="#"> About </nuxt-link>
        <nuxt-link to="#socials"> Social </nuxt-link>
      </div>
      <div cls="header__menu -mob">
        <nuxt-link to="https://t.me/SonekMeme" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="46"
              height="46"
              rx="23"
              stroke="white"
              stroke-opacity="0.2"
            />
            <path
              d="M23.6853 18.0829C21.1606 19.1654 16.5531 21.1511 13.4707 22.5937C12.7906 22.9119 12.8647 23.8463 13.5817 24.0769L16.9531 25.161C17.6843 25.3962 18.4863 25.3028 19.1386 24.9066L27.7502 19.6759C28.0098 19.5182 28.2863 19.8523 28.0693 20.0617L22.4149 25.5165C21.8926 26.0203 21.8528 26.7328 22.4116 27.1989C23.65 28.2319 25.9775 29.9592 28.0427 31.5027C29.3381 32.4709 31.0112 31.9783 31.3566 30.4329C32.1387 26.9337 33.2103 21.154 33.9745 16.8468C34.183 15.6717 33.078 14.7094 31.9038 15.081C29.3205 15.8983 25.9145 17.1271 23.6853 18.0829Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
        <nuxt-link to="https://x.com/SonekMeme" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="46"
              height="46"
              rx="23"
              stroke="white"
              stroke-opacity="0.2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 14H19.0044L24.6701 21.1543L31.5674 14H33.4765L25.4707 22.1806L34 33H27.6877L22.0528 25.6698L14.8475 33H13L21.2214 24.6142L13 14ZM15.5865 15.2901H18.5117L31.2903 31.6512H28.3651L15.5865 15.2901Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
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
    &.-mob {
      display: none;
    }
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
@media (max-width: 1366px) {
  .header {
    &__wrap {
      padding: 0 60px;
    }
  }
}
@media (max-width: 1024px) {
  .header {
    &__wrap {
      justify-content: space-between;
    }
    &__menu {
      gap: 8px;
      &.-desk {
        display: none;
      }
      &.-mob {
        display: flex;
      }
      a {
        padding: 0;
        border: none;
        width: max-content;
        height: max-content;
        &:hover {
          border: none;
        }
        svg {
          width: 47px;
          height: 47px;
        }
      }
    }
    &__wrap {
      padding: 0 24px;
    }
  }
}
</style>
