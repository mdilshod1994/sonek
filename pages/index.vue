<script setup lang="ts"></script>

<template>
  <div cls="home">
    <div cls="section-first">
      <div cls="container">
        <div cls="section-first__content">
          <div cls="section-first__title">
            I am Sonek – a charismatic candidate hero known for my luxurious lifestyle and
            infectious grin
          </div>
          <div cls="section-first__desc">
            Now, I'm running for president to bring opulence and prosperity to everyone. My campaign
            promises a life of abundance, driven by my innovative community based memecoin $SONEK.
            Proudly vote for Sonek, and secure a future of wealth, joy, and luxury. All my voters
            will get a share of $SONEK as soon as I win the elections! With Sonek as president,
            experience the grandeur and success you deserve!
          </div>
          <div cls="section-first__btns">
            <button cls="btn -red">We need your VOTE</button>
            <button cls="btn -blue">Goals</button>
          </div>
        </div>
      </div>

      <img src="@/assets/imgs/img-1.png" alt="" cls="section-first__img" />
    </div>
    <div cls="section-scnd">
      <div cls="section-scnd__wrap">
        <div cls="section-scnd__rect">
          <span v-for="s in 5">
            Together, we can finish the job. Let's secure our victory together
          </span>
        </div>
      </div>
    </div>
    <div cls="section-three">
      <img src="@/assets/imgs/s-3-circle.png" alt="" cls="section-three__circle" />
      <img src="@/assets/imgs/s-3-1.png" alt="" cls="section-three__coin -first" />
      <img src="@/assets/imgs/s-3-2.png" alt="" cls="section-three__coin -scnd" />
      <img src="@/assets/imgs/s-3-3.png" alt="" cls="section-three__coin -three" />
      <div cls="section-three__content">
        <img src="@/assets/imgs/s-3-sonek.png" cls="section-three__content-img -sonek" alt="" />
        <img src="@/assets/imgs/s-sign.png" cls="section-three__content-img -sign" alt="" />
        <img src="@/assets/imgs/s-3-4.png" cls="section-three__content-img -coin" alt="" />
        <div cls="section-three__content-wrap">
          <div cls="section-three__content-title">
            “Hello, loyal supporters! I'm Sonek, your candidate for a prosperous future.”
          </div>
          <div cls="section-three__content-desc">
            “Join me in my Tap Game on Telegram, where each tap is a vote for our victory. Your
            participation isn't just fun; it's crucial. With every tap, you bring us closer to
            success, and when we win, you'll be rewarded with $SONEK. Let's unite for a future of
            wealth and pride. Tap, vote, and let's secure our victory together!”
          </div>
          <button cls="section-three__content-btn btn -red">VOTE NOW</button>
        </div>
      </div>
    </div>
    <div cls="section-four">
      <img src="@/assets/imgs/s-4-1.png" alt="" cls="section-four__img" />
    </div>
    <div cls="section-five">here will be some animation</div>
    <div cls="section-six">
      <div cls="section-six__btns">
        <div cls="section-six__btn -tg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="60"
            viewBox="0 0 70 60"
            fill="none"
          >
            <path
              d="M35.6178 10.8809C27.202 14.7015 11.8437 21.7099 1.56885 26.8012C-0.697923 27.9244 -0.450991 31.2223 1.93914 32.0361L13.177 35.8624C15.6145 36.6923 18.2877 36.3628 20.4619 34.9645L49.1672 16.5033C50.0328 15.9466 50.9543 17.1259 50.2311 17.8647L31.3829 37.117C29.6419 38.8953 29.5095 41.4099 31.3719 43.0549C35.5 46.7008 43.2583 52.7971 50.1423 58.2449C54.4605 61.6622 60.0373 59.9235 61.1886 54.4691C63.7955 42.1191 67.3677 21.7201 69.9151 6.51812C70.61 2.37066 66.9268 -1.02566 63.0126 0.285735C54.4018 3.17057 43.0485 7.50757 35.6178 10.8809Z"
              fill="white"
            />
          </svg>
          Telegram
        </div>
        <div cls="section-six__btn -tw">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="60"
            viewBox="0 0 63 60"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H18.0132L35.0103 22.5926L55.7023 0H61.4296L37.412 25.8333L63 60H44.063L27.1584 36.8519L5.54252 60H0L24.6642 33.5185L0 0ZM7.75953 4.07407H16.5352L54.871 55.7407H46.0953L7.75953 4.07407Z"
              fill="white"
            />
          </svg>
          X (Twitter)
        </div>
      </div>
      <div cls="section-six__text">© Sonek 2024. All rights reserved.</div>
      <img src="@/assets/imgs/s-6-1.png" cls="section-six__img" alt="" />
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  max-width: 1920px;
  padding: 0 120px;
  width: 100%;
  margin: 0 auto;
}
.btn {
  height: 54px;
  display: flex;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  width: max-content;
  cursor: pointer;
  &.-blue {
    background: #1a3a97;
  }
  &.-red {
    background: #ed1e16;
  }
}
.home {
  img {
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
}
.section-first {
  position: relative;
  background: url("@/assets/imgs/bg-1.png"), #111318;
  background-size: cover;
  background-repeat: no-repeat;
  height: 1251px;
  display: flex;
  align-items: center;
  &__img {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 1076px;
    width: 1060px;
  }
  &__content {
    max-width: 685px;
    margin-top: -40px;
  }
  &__title {
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 105%;
    letter-spacing: -1.92px;
  }
  &__desc {
    margin: 32px 0 40px;
    color: #cacacf;
  }
  &__btns {
    display: flex;
    gap: 12px;
  }
}
.section-scnd {
  width: calc(100% + 40px);
  height: 362.562px;
  position: relative;
  z-index: 2;
  margin: -145px 0 0 -20px;
  &__wrap {
    background: #fff;
    transform: rotate(3.167deg);
    height: 188.699px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  &__rect {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;
    animation: scroll-one 150s linear infinite;
    span {
      display: flex;
      flex-shrink: 0;
      color: #1a3a97;
      font-size: 87.807px;
      font-style: italic;
      font-weight: 300;
      line-height: 105%;
      letter-spacing: -1.756px;
      flex-wrap: nowrap;
    }
  }
  @keyframes scroll-one {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
.section-three {
  position: relative;
  height: 1174px;
  background: #1a3a97;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  overflow: hidden;
  margin-top: -263px;
  display: flex;
  align-items: center;
  &__content {
    display: flex;
    justify-content: flex-end;
    position: relative;
    backdrop-filter: blur(10px);
    border-radius: 56px;
    border: 3px #fff;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    height: 704px;
    max-width: 1710px;
    width: 100%;
    padding: 100px 100px 0 0;
    margin: 59px auto 0;
    box-sizing: border-box;
    &-wrap {
      max-width: 685px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &-title {
      font-size: 48px;
      font-style: normal;
      font-weight: 500;
      line-height: 105%; /* 50.4px */
      letter-spacing: -1.92px;
    }
    &-desc {
    }
    &-btn {
      font-size: 19px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -0.38px;
      padding-top: 4px;
    }
    &-img {
      position: absolute;

      &.-sonek {
        max-width: 827px;
        bottom: 0;
        left: 72px;
      }
      &.-sign {
        bottom: -145px;
        right: 328px;
      }
      &.-coin {
        bottom: -64px;
        right: 3px;
      }
    }
  }
  &__circle {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__coin {
    position: absolute;
    &.-first {
      top: 175px;
      right: 98px;
    }
    &.-scnd {
      top: 223px;
      right: 417px;
    }
    &.-three {
      bottom: 177px;
      left: 0px;
    }
  }
}
.section-four {
  position: relative;
  height: 1095px;
  background: url("@/assets/imgs/s-4-bg.png");
  background-size: cover;
  &__img {
    position: absolute;
    top: 161px;
    left: 274px;
    max-width: 537.832px;
  }
}
.section-five {
  height: 1095px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  font-weight: 700;
}
.section-six {
  position: relative;
  height: 1095px;
  background: #000;
  box-sizing: border-box;
  padding: 215px 0 48px 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__img {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 1482.2px;
  }
  &__btns {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 614px;
    position: relative;
    z-index: 1;
  }
  &__btn {
    display: flex;
    height: 142px;
    align-items: center;
    justify-content: center;
    gap: 62px;
    align-self: stretch;
    border-radius: 104px;
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.96px;
    cursor: pointer;
    text-transform: uppercase;
    &.-tg {
      background: #2aa5ea;
      svg {
        width: 70px;
        height: 60px;
      }
    }
    &.-tw {
      background: #262626;
      svg {
        width: 63px;
        height: 60px;
      }
    }
  }
  &__text {
    color: #fff;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.34px;
    text-transform: uppercase;
    opacity: 0.8;
    margin-left: 54px;
    position: relative;
    z-index: 1;
  }
}
</style>
