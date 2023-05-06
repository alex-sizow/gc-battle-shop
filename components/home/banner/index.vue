<template>
  <section class="home-banner">
    <banner-background />

    <div class="home-banner__content">
      <div class="home-banner__text">
        <h1 class="home-banner__title">
          Более 200 весёлых игр для вашей вечеринки!
        </h1>
  
        <logo-icon class="home-banner__logo" />
  
        <p class="home-banner__desc">
          Устройте веселые соревнования с друзьями, семьей или коллегами!
        </p>
  
        <div class="home-banner__buttons">
          <div class="home-banner__button-buy-wrap">
            <v-button
              tag="button"
              class="home-banner__button-buy"
              @click.native="increaseQuantity"
            >
              Купить игру
            </v-button>
          </div>
  
          <v-button
            tag="button"
            customType="outline"
            v-scroll-to="'#gameVideo'"
            class="home-banner__button-video"
          >
            <span> Смотреть Видео </span>
  
            <v-icon 
              name="play"
              :height="22"
              :width="22"
              class="home-banner__button-video-icon"
            />
          </v-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import VButton from '~/components/ui/v-button';
import LogoIcon from '@/assets/images/svg/logo.svg?inline';
import BannerBackground from '~/components/home/banner/background';

export default {
  name: 'HomeBanner',
  components: {
    VButton,
    LogoIcon,
    BannerBackground,
  },
  computed: {
    ...mapState('cart', [
      'productsQuantity',
    ]),
  },

  methods: {
    ...mapMutations('cart', [
      'CHANGE_PRODUCTS_QUANTITY',
    ]),

    increaseQuantity() {
      if (this.productsQuantity < 1) {
        this.CHANGE_PRODUCTS_QUANTITY(this.productsQuantity + 1);
      }
      this.$router.push({ name: 'cart' });
    },
  },
}
</script>

<style lang="scss" scoped>
.home-banner {
  position: relative;
  min-height: 100vh;
  padding: 150px 0;
  // background: url('~@/assets/images/floor.jpg');
  // background-position: center;
  z-index: 200;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2916px;
    height: 2917px;
    transform: translate(-50%, -50%);
    background: radial-gradient(37.06% 37.06% at 49.02% 54.69%, rgba(35, 10, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
    z-index: 20;
    pointer-events: none;
  }

  @media screen and (max-width: 1200px) {
    padding: 150px 0 100px;
  }
}

.home-banner__content {
  position: relative;
  @include container-1520;
}

.home-banner__text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  z-index: 50;

  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    width: 615px;
    height: 615px;
    background: rgba(255, 187, 84, 0.5);
    filter: blur(460px);
    transform: translateX(-50%) matrix(1, 0, 0, -1, 0, 0);
    z-index: 1;
    pointer-events: none;
  }
}

.home-banner__title {
  position: relative;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 70px;
  line-height: 140%;
  color: $white;
  text-align: center;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    font-size: 48px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 30px;
    font-size: 26px;
    line-height: 125%;
  }
}

.home-banner__desc {
  font-family: 'Pangolin', sans-serif;
  max-width: 690px;
  margin-top: 24px;
  text-align: center;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: $white;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
    max-width: 475px;
  }
}

.home-banner__buttons {
  display: grid;
  grid-template-columns: 178px 234px;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 36px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 240px;
    margin: 40px auto 0;
  }
}

.home-banner__button-buy-wrap {
  position: relative;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 250px;
    background: rgba(255, 200, 179, 0.8);
    opacity: 0.5;
    filter: blur(143px);
    transform: translate(-50%, -50%) matrix(1, 0, 0, -1, 0, 0);
    z-index: 1;
    pointer-events: none;
  }
}

.home-banner__button-buy {
  position: relative;
  z-index: 100;
}

.home-banner__button-video {
  padding-right: 55px;
}

.home-banner__button-video-icon {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}

.home-banner__logo {
  max-height: 238px;
  max-width: 695px;
  width: 35vw;
  min-width: 280px;
  height: 100%;
}

.home-banner__parallax {
  z-index: -1;
}
</style>