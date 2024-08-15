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
          <span v-for="s in 5" :key="s">
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
    <div cls="section-five">
      <client-only>
        <three-js-animation />
      </client-only>
    </div>
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
      <div cls="section-six__text">
        © Sonek 2024. <br />
        All rights reserved.
      </div>
      <img src="@/assets/imgs/s-6-1.png" cls="section-six__img -desk" alt="" />
      <img src="@/assets/imgs/s-6-1-mob.png" cls="section-six__img -mob" alt="" />
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
  transition: 0.3s ease-in-out;
  &.-blue {
    background: #1a3a97;
    &:hover {
      background: #1a2683;
    }
  }
  &.-red {
    background: #ed1e16;
    &:hover {
      background: #c50000;
    }
  }
}
.home {
  overflow-x: hidden;
  width: 100%;
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
  height: clamp(50.25rem, -18.636rem + 80.69vw, 78.188rem);
  display: flex;
  align-items: center;
  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: clamp(40.938rem, -21.476rem + 73.1vw, 66.25rem);
    width: clamp(40.938rem, -21.476rem + 73.1vw, 66.25rem);
  }
  &__content {
    max-width: clamp(34.438rem, 13.787rem + 24.19vw, 42.813rem);
    margin-top: clamp(-1.938rem, -0.551rem + -1.62vw, -2.5rem);
  }
  &__title {
    color: #fff;
    font-size: clamp(2.25rem, 1.634rem + 0.72vw, 2.5rem);
    font-style: normal;
    font-weight: 500;
    line-height: 105%;
    letter-spacing: clamp(-0.09rem, -0.016rem + -0.09vw, -0.12rem);
  }
  &__desc {
    margin: clamp(1.5rem, 0.267rem + 1.44vw, 2rem) 0 40px;
    color: #cacacf;
  }
  &__btns {
    display: flex;
    gap: 12px;
  }
}
.section-scnd {
  width: calc(100% + 40px);
  height: clamp(16.995rem, 3.027rem + 16.36vw, 22.66rem);
  position: relative;
  z-index: 2;
  margin: clamp(-3rem, 11.948rem + -17.51vw, -9.063rem) 0 0 -20px;
  &__wrap {
    background: #fff;
    transform: rotate(3.167deg);
    height: clamp(8.813rem, 1.463rem + 8.61vw, 11.793rem);
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
      font-size: clamp(4.063rem, 0.548rem + 4.12vw, 5.488rem);
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
  height: clamp(52.188rem, -0.055rem + 61.19vw, 73.375rem);
  background: #1a3a97;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  overflow: hidden;
  margin-top: clamp(-11.75rem, -0.192rem + -13.54vw, -16.438rem);
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
    height: clamp(31.313rem, 0.029rem + 36.64vw, 44rem);
    max-width: clamp(70.375rem, -19.623rem + 105.42vw, 106.875rem);
    width: 100%;
    padding: clamp(4.5rem, 0.185rem + 5.05vw, 6.25rem) clamp(3.5rem, -3.281rem + 7.94vw, 6.25rem) 0
      0;
    margin: 59px auto 0;
    box-sizing: border-box;
    &-wrap {
      max-width: clamp(30.438rem, -0.076rem + 35.74vw, 42.813rem);
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &-title {
      font-size: clamp(2.25rem, 0.401rem + 2.17vw, 3rem);
      font-style: normal;
      font-weight: 500;
      line-height: 105%; /* 50.4px */
      letter-spacing: -1.92px;
    }
    &-desc {
    }
    &-btn {
      font-size: clamp(1rem, 0.538rem + 0.54vw, 1.188rem);
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -0.38px;
      padding-top: 4px;
    }
    &-img {
      position: absolute;

      &.-sonek {
        max-width: clamp(34.442rem, -8.082rem + 49.81vw, 51.688rem);
        bottom: 0;
        left: clamp(0rem, -11.096rem + 13vw, 4.5rem);
      }
      &.-sign {
        bottom: clamp(-7.188rem, -2.564rem + -5.42vw, -9.063rem);
        right: clamp(13.938rem, -2.244rem + 18.95vw, 20.5rem);
        width: clamp(27.188rem, 0.065rem + 31.77vw, 38.188rem);
      }
      &.-coin {
        bottom: clamp(-3.563rem, -2.484rem + -1.26vw, -4rem);
        right: clamp(-0.25rem, -1.329rem + 1.26vw, 0.188rem);
        width: clamp(17.063rem, -0.352rem + 20.4vw, 24.125rem);
      }
    }
  }
  &__circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: clamp(55.25rem, -1.615rem + 66.61vw, 78.313rem);
  }
  &__coin {
    position: absolute;
    &.-first {
      top: clamp(8.75rem, 3.356rem + 6.32vw, 10.938rem);
      right: clamp(4.813rem, 1.576rem + 3.79vw, 6.125rem);
      width: clamp(15.74rem, 1.099rem + 17.15vw, 21.677rem);
    }
    &.-scnd {
      top: clamp(11.25rem, 4.623rem + 7.76vw, 13.938rem);
      right: clamp(18.5rem, -0.147rem + 21.84vw, 26.063rem);
      width: clamp(19.927rem, 8.831rem + 13vw, 24.427rem);
    }
    &.-three {
      bottom: clamp(6.625rem, -4.317rem + 12.82vw, 11.063rem);
      left: 0px;
      width: clamp(18.49rem, 1.692rem + 19.68vw, 25.302rem);
    }
  }
}
.section-four {
  position: relative;
  height: clamp(48.75rem, 0.206rem + 56.86vw, 68.438rem);
  background: url("@/assets/imgs/s-4-bg.png");
  background-size: cover;
  &__img {
    position: absolute;
    top: clamp(8.063rem, 3.131rem + 5.78vw, 10.063rem);
    left: clamp(12.75rem, 1.963rem + 12.64vw, 17.125rem);
    max-width: clamp(23.617rem, -1.035rem + 28.87vw, 33.614rem);
  }
}
.section-five {
  // height: clamp(48.75rem, 0.206rem + 56.86vw, 68.438rem);

  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  font-weight: 700;
}
.section-six {
  position: relative;
  height: clamp(48.75rem, 0.206rem + 56.86vw, 68.438rem);
  background: #000;
  box-sizing: border-box;
  padding: clamp(10rem, 1.524rem + 9.93vw, 13.438rem) 0 clamp(2rem, -0.466rem + 2.89vw, 3rem) 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__img {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: clamp(64.7rem, -4.186rem + 80.69vw, 92.638rem);
    &.-mob {
      display: none;
    }
  }
  &__btns {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, -0.233rem + 1.44vw, 1.5rem);
    max-width: clamp(26.25rem, -3.647rem + 35.02vw, 38.375rem);
    position: relative;
    z-index: 1;
  }
  &__btn {
    display: flex;
    height: clamp(6rem, -1.089rem + 8.3vw, 8.875rem);
    align-items: center;
    justify-content: center;
    gap: clamp(2.75rem, -0.024rem + 3.25vw, 3.875rem);
    align-self: stretch;
    border-radius: 104px;
    color: #fff;
    font-size: clamp(2.125rem, -0.032rem + 2.53vw, 3rem);
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: clamp(-0.043rem, 0.001rem + -0.05vw, -0.06rem);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    &.-tg {
      background: linear-gradient(273deg, #2aa5ea 3.91%, #1882cf 93.04%);
      &:hover {
        background: linear-gradient(273deg, #2aa5ea 3.91%, #046ebb 93.04%);
      }
      svg {
        width: 70px;
        height: 60px;
      }
    }
    &.-tw {
      background: linear-gradient(273deg, #262626 3.91%, #181818 93.04%);
      &:hover {
        background: linear-gradient(273deg, #262626 3.91%, #040404 93.04%);
      }
      svg {
        width: 63px;
        height: 60px;
      }
    }
  }
  &__text {
    color: #fff;
    font-size: clamp(0.875rem, 0.413rem + 0.54vw, 1.063rem);
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.34px;
    text-transform: uppercase;
    opacity: 0.8;
    margin-left: clamp(0rem, -8.322rem + 9.75vw, 3.375rem);
    position: relative;
    z-index: 1;
    br {
      display: none;
    }
  }
}
@media (max-width: 1366px) {
  .section-first {
    &__img {
      bottom: 0;
      max-width: clamp(26.563rem, -16.48rem + 67.25vw, 40.938rem);
      width: clamp(26.563rem, -16.48rem + 67.25vw, 40.938rem);
    }
    &__content {
      max-width: 50%;
      margin-top: 0;
    }
  }
  .container {
    padding: 0 60px;
  }
  .section-scnd {
    height: 182px;
    margin-top: -45px;
    &__wrap {
      height: 95px;
      span {
        font-size: 44.214px;
        line-height: 105%;
        letter-spacing: -0.884px;
      }
    }
  }
  .section-three {
    margin-top: -135px;
    height: clamp(40.313rem, 4.663rem + 55.7vw, 52.219rem);
    &__circle {
      width: clamp(41.875rem, 1.828rem + 62.57vw, 55.25rem);
    }
    &__coin {
      &.-first,
      &.-scnd,
      &.-three {
        max-width: 150px;
      }
    }
    &__content {
      height: clamp(29.375rem, 19.27rem + 15.79vw, 32.75rem);
      padding-top: 0;
      align-items: center;
      max-width: calc(100% - 120px);
      &-img {
        &.-sonek {
          max-width: clamp(29.063rem, 7.168rem + 34.21vw, 36.375rem);
        }
        &.-sign {
          bottom: -50px;
          max-width: 244px;
          right: 35px;
        }
        &.-coin {
          display: none;
        }
      }
      &-wrap {
        gap: clamp(1.5rem, -1.494rem + 4.68vw, 2.5rem);
        max-width: clamp(23.75rem, -0.39rem + 37.72vw, 31.813rem);
      }
      &-title {
        font-size: clamp(1.625rem, -0.246rem + 2.92vw, 2.25rem);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -1.04px;
      }
    }
  }
  .section-four {
    height: clamp(36.5rem, -0.178rem + 57.31vw, 48.75rem);
    &__img {
      top: 50%;
      transform: translateY(-50%);
      left: 60px;
      max-width: clamp(15.625rem, -8.141rem + 37.13vw, 23.563rem);
    }
  }
  .section-six {
    padding: 52px 0 0 52px;
    height: clamp(36.5rem, -0.178rem + 57.31vw, 48.75rem);
    padding: clamp(3.75rem, -14.963rem + 29.24vw, 10rem) 0 32px
      clamp(3.75rem, -7.478rem + 17.54vw, 7.5rem);
    &__img {
      max-width: clamp(46.563rem, -7.744rem + 84.85vw, 64.7rem);
    }
  }
}
@media (max-width: 1024px) {
  .container {
    padding: 0 24px;
    width: auto;
  }
  .section-first {
    flex-direction: column;
    height: max-content;
    padding-top: 181px;
    gap: 44px;
    &__img {
      position: relative;
      align-self: flex-end;
    }
    &__content {
      width: auto;
      max-width: 100%;
    }
    &__title {
      font-size: 26px;
      line-height: normal;
      letter-spacing: -1.04px;
    }
  }
  .btn {
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.42px;
    height: 44px;
  }
  .section-three {
    padding: 99px 0 125px;
    height: auto;
    &__circle {
      display: none;
    }
    &__coin {
      &.-first {
        right: -20px;
        top: 155px;
      }
      &.-scnd {
        right: auto;
        left: -35px;
      }
      &.-first,
      &.-scnd {
        max-width: 220px;
      }
      &.-three {
        display: none;
      }
    }
    &__content {
      height: auto;
      padding: 40px 32px 0;
      flex-direction: column-reverse;
      max-width: calc(100% - 48px);
      border-radius: 32px;
      gap: 52px;
      &-wrap {
        max-width: 100%;
      }
      &-btn {
        width: 100%;
      }
      &-img {
        &.-sonek {
          position: relative;
          max-width: 383px;
        }
        &.-sign {
          right: auto;
          left: 50%;
          transform: translateX(-50%);
          max-width: 279.483px;
        }
      }
    }
  }
  .section-four {
    height: 1071px;
    background: url("@/assets/imgs/s-4-bg-mob.png");
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    &__img {
      top: 73px;
      left: 50%;
      transform: translateY(0) translateX(-50%);
      max-width: 328.151px;
    }
  }
  .section-six {
    height: 611px;
    padding: 58px 24px 24px;
    &__img {
      width: 362px;
      height: 366px;
      flex-shrink: 0;
      &.-desk {
        display: none;
      }
      &.-mob {
        display: block;
      }
    }
    &__text {
      font-size: 12px;
      line-height: 140%;
      letter-spacing: -0.24px;
      br {
        display: block;
      }
    }
    &__btns {
    }
    &__btn {
      height: 66px;
      font-size: 25.173px;
      line-height: 140%;
      letter-spacing: -0.503px;
      &.-tg {
        gap: 24.515px;
        svg {
          width: 36.71px;
          height: 31.466px;
        }
      }
      &.-tw {
        gap: 28.186px;
        svg {
          width: 33.039px;
          height: 31.466px;
        }
      }
    }
  }
}
@media (max-width: 560px) {
  .section-first {
    &__img {
      max-width: calc(100% - 33px);
    }
  }
}
</style>
