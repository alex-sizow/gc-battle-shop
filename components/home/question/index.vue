<template>
  <section class="home-question" id="gameDescription">
    <kinesis-container 
      event="scroll"
      class="home-question__content"
    >
      <parallax />

      <div class="home-question__image-wrap">
        <picture>
          <source type="image/webp" :srcset="require(`@/assets/images/three-cards.webp`)">
          <img 
            :src="require(`@/assets/images/three-cards.png`)" 
            alt="" 
            class="home-question__image"
          >
        </picture>
      </div>

      <div class="home-question__text-wrap">
        <img 
          :src="require(`@/assets/images/svg/question/ball.svg`)" 
          alt=""
          class="home-question__title-icon"
        >
    
        <h2 class="home-question__title">
          Как проходит битва?
        </h2>

        <div class="home-question__text">
          <p class="home-question__desc">
            За каждое выполненное задание игрок может получить 1, 3 или 5 баллов (в зависимости от сложности задания). В игре существует 5 типов игр: 
          </p>
          <ul class="home-question__list">
            <li>
              <span class="home-question__desc_yellow">
                СОЛО
              </span>
              - игрок выполняет задание самостоятельно
            </li>
            <li>
              <span class="home-question__desc_yellow">
                БАТЛ-РОЯЛ
              </span>
               - все играют против друг друга
            </li>
            <li>
              <span class="home-question__desc_yellow">
                КОММАНДОС
              </span>
              - задание выполняется в команде с другим игроком
            </li>
            <li>
              <span class="home-question__desc_yellow">
                ДУЭЛЬ
              </span>
              - игра проходит между двумя игроками
            </li>
            <li>
              <span class="home-question__desc_yellow">
                ИГРАЮТ ВСЕ!
              </span>
              - в игре принимают участие все игроки
            </li>
          </ul>

          <p class="home-question__desc">
            Каждая игра состоит из 10 раундов.
            Побеждает тот, у кого по итогам 10 раундов окажется больше всего баллов!
          </p>
        </div>
    
        <div class="home-question__button-buy-wrap">
          <v-button
            tag="button"
            class="home-question__button-buy"
            @click.native="increaseQuantity"
          >
            Купить игру
          </v-button>
        </div>
      </div>
    </kinesis-container>
  </section>
</template>

<script>
import Parallax from '~/components/parallax';

import { mapState, mapMutations } from 'vuex';

import VButton from '~/components/ui/v-button';

export default {
  name: 'HomeQuestion',
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

.home-question__content {
  position: relative;
  @include container-1520;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  grid-gap: 40px;
  padding-top: 90px;
  padding-bottom: 90px;

  @media screen and (max-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}

.home-question__text-wrap {
  position: relative;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 1200px) {
    margin-top: 0;
    padding-right: 0;
  }
}

.home-question__text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.home-question__image-wrap {
  position: relative;
  z-index: 200;
}

.home-question__image {
  margin-left: 40px;
  max-width: fit-content;
  width: 36vw;

  @media screen and (max-width: 760px) {
    width: 80%;
    margin: 0 auto;
  }
}

.home-question__title {
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

.home-question__title-icon {
  position: absolute;
  top: -45px;
  left: -60px;
}

.home-question__desc {
  max-width: 540px;
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

.home-question__list {
  max-width: 540px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #CAC0BD;
  list-style-type: none;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
}

.home-question__desc_yellow {
  color: $yellow-light;
}

.home-question__button-buy {
  position: relative;
  margin-top: 12px;
  z-index: 100;
}

.home-question__button-buy-wrap {
  position: relative;
  max-width: 178px;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 178px;
    height: 178px;
    background: rgba(255, 200, 179, 0.8);
    opacity: 0.5;
    filter: blur(71.5px);
    transform: matrix(1, 0, 0, -1, 0, 0);
    z-index: 1;
    pointer-events: none;
  }
}
</style>