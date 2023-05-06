<template>
  <section class="home-video">
    <kinesis-container 
      event="scroll"
      class="home-video__content"
    >
      <parallax />

      <div class="home-video__text-cover">
        <div class="home-video__text">
          <div class="home-video__title-wrap">
            <h2 class="home-video__title">
              Видео с игрой
            </h2>
    
            <img 
              :src="require(`@/assets/images/svg/video/play.svg`)" 
              alt=""
              class="home-video__title-icon"
            >
          </div>
      
          <p class="home-video__desc">
            Мы собрали нарезку от наших игроков со всей России, чтобы показать, какие эмоции вы можете испытать вместе с друзьями. Уделите просмотру 1 минуту и сделайте выбор в пользу Битвы <3.
          </p>
      
          <div class="home-video__button-buy-wrap">
            <v-button
              tag="button"
              class="home-video__button-buy"
              @click.prevent="increaseQuantity"
            >
              Купить игру
            </v-button>
          </div>
        </div>
      </div>

      <div class="home-video__iframe-cover">
        <iframe 
          src="https://www.youtube.com/embed/wTI1h7lDMHU"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="home-video__iframe"
        >
        </iframe>
      </div>

      <!-- <div class="home-video__video-cover">
        <video 
          :src="require(`@/assets/video/game.mp4`)" 
          preload="auto" 
          loop 
          playsinline 
          controls
          class="projects-card-video__video"
        ></video>
      </div> -->
    </kinesis-container>
  </section>
</template>

<script>
import Parallax from '~/components/parallax';

import { mapState, mapMutations } from 'vuex';

import VButton from '~/components/ui/v-button';

export default {
  name: 'HomeVideo',
  components: {
    VButton,
    Parallax,
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
.home-video__content {
  position: relative;
  @include container-1520;
  display: grid;
  grid-template-columns: minmax(400px, 10fr) minmax(400px, 14fr);
  justify-content: space-between;
  grid-gap: 40px 60px;
  padding-top: 90px;
  padding-bottom: 90px;
  z-index: 200;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.home-video__text-cover {
  position: relative;
  flex: 1 1 482px;
  z-index: 200;

  @media screen and (max-width: 1200px) {
    flex: 1 1 auto;
  }
}

.home-video__text {
  position: relative;
  max-width: 482px;
}

.home-video__video-cover {
  position: relative;
  flex: 1 1 880px;
  z-index: 200;

  @media screen and (max-width: 1200px) {
    flex: 1 1 auto;
  }
}

.home-video__video {
  width: 100%;
}

.home-video__iframe-cover {
  position: relative;
  width: 100%;
  // max-width: 870px;
  // max-height: 490px;
  padding-top: 56.25%;
  cursor: pointer;
  overflow: hidden;
  pointer-events: all;
  border-radius: 18px;
  z-index: 200;
}

.home-video__iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  // object-fit: contain;
  z-index: 10;
}

.home-video__title-wrap {
  display: flex;
  gap: 28px;
  align-items: center;
}

.home-video__title {
  font-weight: 700;
  font-size: 86px;
  line-height: 125%;
  color: $white;

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 42px;
  }
}

.home-video__subtitle {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: $yellow-light;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
}

.home-video__desc {
  max-width: 635px;
  margin-top: 24px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #CAC0BD;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
}

.home-video__button-buy {
  position: relative;
  margin-top: 36px;
  z-index: 100;
}

.home-video__button-buy-wrap {
  position: relative;
  max-width: 178px;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 178px;
    height: 178px;
    background: rgba(255, 200, 179, 0.5);
    opacity: 0.5;
    filter: blur(71.5px);
    transform: translate(-50%, -50%) matrix(1, 0, 0, -1, 0, 0);
    z-index: 1;
    pointer-events: none;
  }
}

.home-video__title-icon {
  @media screen and (max-width: 760px) {
    max-width: 40px;
  }
}

.projects-card-video__video {
  max-width: 870px;
  width: 100%;
  border-radius: 18px;
}
</style>