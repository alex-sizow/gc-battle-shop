<template>
  <footer class="the-footer">
    <div class="the-footer__content">
      <div class="the-footer__row the-footer__top">
        <nuxt-link 
          :to="{ name: 'index' }" 
          class="the-footer__logo-link"
        >
          <logo-icon class="the-footer__logo" />
        </nuxt-link>

        <nav class="the-footer__nav">
          <nuxt-link
            v-for="link in links"
            :key="link.id"
            :to="({ name: link.url })"
            :class="[
              'the-footer__link',
              { 'active': !link.scrollTo && $route.name === link.url }
            ]"
            @click.native="onClick(link)"
          >
            <v-icon 
              :name="link.iconName"
              :height="28"
              :width="28"
              class="the-footer__link-icon"
            />

            <span>
              {{ link.title }}
            </span>
          </nuxt-link>

          <nuxt-link
            :to="({ name: 'cart' })"
            :class="[
              'the-footer__link',
              'the-footer__link_mobile',
              { 'active': $route.name === 'cart' }
            ]"
          >
            Корзина
          </nuxt-link>
        </nav>

        <a
          href="mailto:theclash@example.com"
          class="the-footer__contact-link"
        >
          <v-icon 
            name="mail"
            :height="48"
            :width="48"
            class="the-footer__contact-link-icon"
          />
          
          <span>
            theclash@example.com
          </span>
        </a>
      </div>

      <div class="the-footer__row the-footer__main">
        <div class="the-footer__column">
          <p class="the-footer__text">
            Битва — 200 игр для веселой вечеринки!
            <br> Игры на ловкость, внимательность, логику, координацию, и даже викторины!
          </p>
  
          <p class="the-footer__text_light">
            ИП Мараховка Иван Александрович
            <br> ОГРНИП 313860211600066
            <br> ИНН 860234892606
          </p>
        </div>

        <div class="the-footer__socials the-footer__col_center-max">
          <a 
            v-for="link in socials"
            :key="link.id"
            :href="link.url" 
            class="the-footer__social"
            target="_blank"
          >
            <v-icon 
              :name="link.iconName"
              :height="64"
              :width="64"
              class="the-footer__social-icon"
            />
          </a>
        </div>

        <div class="the-footer__button-wrap">
          <v-button
            tag="button"
            class="the-footer__button"
            @click.native="increaseQuantity"
          >
            Купить игру
          </v-button>
        </div>
      </div>

      <div class="the-footer__row the-footer__bottom">
        <p class="the-footer__desc">
          © 2000-{{ currentYear }}, «БИТВА», все права защищены.
        </p>

        <a 
          href="" 
          class="the-footer__desc the-footer__col_center the-footer__col_center-max"
          target="_blank"
        >
          Политика безопасности
        </a>

        <span class="the-footer__desc the-footer__col_right">
          Разработка
          <a 
            href="https://gc.moscow/"
            target="_blank"
            class="the-footer__desc_yellow"
          >
            Gold Carrot
          </a> 
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

import { mapState, mapMutations } from 'vuex';

import VButton from '~/components/ui/v-button';
import LogoIcon from '@/assets/images/svg/logo.svg?inline';

export default {
  name: 'TheFooter',
  components: {
    VButton,
    LogoIcon,
  },

  data: () => ({
    links: [
      {
        id: 1,
        iconName: 'rays',
        title: 'Об игре',
        url: 'index',
        scrollTo: 'aboutGame',
      },
      {
        id: 2,
        iconName: 'crown',
        title: 'Описание',
        url: 'index',
        scrollTo: 'gameDescription',
      },
      {
        id: 3,
        iconName: 'note',
        title: 'Как играть?',
        url: 'index',
        scrollTo: 'gameVideo',
      },
      {
        id: 4,
        iconName: 'delivery',
        title: 'Доставка',
        url: 'delivery',
      },
      {
        id: 5,
        iconName: 'mail',
        title: 'Контакты',
        url: 'contacts',
      },
    ],
    socials: [
      {
        id: 'tg',
        iconName: 'tg',
        url: 'https://t.me/bitva_game_bot',
      },
      {
        id: 'instagram',
        iconName: 'instagram',
        url: 'https://instagram.com/bitva.game',
      },
       {
        id: 'vk',
        iconName: 'vk',
        url: 'https://vk.com/bitva.game',
      },
    ],
  }),
  computed: {
    ...mapState('cart', [
      'productsQuantity',
    ]),

    currentYear() {
      return new Date().getFullYear();
    },
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

    onClick(link) {
      if(link.scrollTo) {
        setTimeout(() =>{
          VueScrollTo.scrollTo(`#${link.scrollTo}`, 1000);
        }, 50)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.the-footer {
  position: relative;
  padding-top: 40px;
  background: #0F0400;
  z-index: 200;
}

.the-footer__content {
  @include container-1520;
}

.the-footer__row {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: minmax(200px, 430px) 1fr minmax(200px, 430px);
}

.the-footer__top {
  @media screen and (max-width: 1400px) {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
}

.the-footer__main {
  padding: 48px 0;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
    padding: 40px 0;
  }
}

.the-footer__bottom {
  padding: 12px 0;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 0;
  }
}

.the-footer__socials {
  display: flex;
  align-items: center;
  justify-content: center;
}

.the-footer__social {
  margin: 0 25px;
  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  &:hover {
    ::v-deep(path) {
      fill: $yellow;
    }
  }

  @media screen and (max-width: 1200px) {
    margin: 0 8px;
    ::v-deep(svg) {
      width: 48px;
      height: 48px;
    }
  }
}

.the-footer__desc {
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #988C89;
  white-space: nowrap;
}

.the-footer__column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.the-footer__text {
  max-width: 363px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #988C89;

  @media screen and (max-width: 1200px) {
    display: none;
  }
}

.the-footer__text_light {
  max-width: 363px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: rgba(#988C89, 0.6);
}

.the-footer__desc_yellow {
  color: $yellow;
}
.the-footer__button-wrap {
  position: relative;
  width: fit-content;
  margin-left: auto;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 178px;
    height: 178px;
    background: rgba(255, 200, 179, 0.8);
    opacity: 0.5;
    filter: blur(290.576px);
    transform: translateY(-50%) matrix(1, 0, 0, -1, 0, 0);
    pointer-events: none;
    z-index: 1;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
}

.the-footer__button {
  position: relative;
  max-width: 178px;
  z-index: 100;
}

.the-footer__col_center {
  justify-content: center;
  text-align: center;
}

.the-footer__col_center-max {
  max-width: 735px;
}

.the-footer__col_right {
  justify-content: flex-end;
  text-align: right;
}

.the-footer__logo {
  max-height: 60px;
}
.the-footer__logo-link {
  @media screen and (max-width: 1200px) {
    order: 1;
  }
}

.the-footer__nav {
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    order: 3;
    margin-top: 15px;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    gap: 28px;
  }
}

.the-footer__link {
  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
  margin: 0 38px;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: $white;
  transition: all .2s ease-in-out;
  white-space: nowrap;

  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  &.active,
  &:hover {
    color: $yellow;

    ::v-deep(path) {
      fill: $yellow;
    }
  }

  @media screen and (max-width: 1400px) {
    margin: 0 26px;
  }

  @media screen and (max-width: 760px) {
    font-size: 20px;
    line-height: 26px;
  }
}

.the-footer__link_mobile {
  @media screen and (min-width: 1200px) {
    display: none;
  }
}

.the-footer__link-icon {
  position: absolute;
  top: -14px;
  left: -28px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
}

.the-footer__link_active {
  color: $yellow;

  ::v-deep(path) {
    fill: $yellow;
  }
}

.the-footer__contact-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 9px;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: $yellow;

  ::v-deep(path) {
    fill: $yellow;
  }

  @media screen and (max-width: 1200px) {
    order: 2;
  }
}
</style>
