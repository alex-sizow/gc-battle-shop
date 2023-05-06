<template>
  <header class="the-header">
    <div class="the-header__content">
      <button
        :class="['the-header__burger', { active: mobileMenuIsOpened }]"
        @click="mobileMenuIsOpened = !mobileMenuIsOpened"
      >
        <v-icon name="burger" :height="24" :width="24" />
      </button>

      <nuxt-link :to="{ name: 'index' }">
        <logo-icon class="the-header__logo" />
      </nuxt-link>

      <div class="the-header__nav">
        <header-nav :links="links" />
      </div>

      <div class="the-header__right">
        <nuxt-link :to="{ name: 'cart' }" class="the-header__link">
          <v-icon
            name="basket"
            :height="28"
            :width="28"
            class="the-header__link-icon"
          />

          <span> Корзина </span>
        </nuxt-link>

        <v-button tag="button" uppercase @click.native="increaseQuantity">
          Купить игру
        </v-button>
      </div>

      <nuxt-link :to="{ name: 'cart' }" class="the-header__basket_mobile">
        <v-icon name="basket_filled" :height="28" :width="28" />
      </nuxt-link>
    </div>

    <mobile-menu
      :links="links"
      :is-opened="mobileMenuIsOpened"
      class="the-header__mobile-menu"
      @close-mobile-menu="mobileMenuIsOpened = false"
    />
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import LogoIcon from "@/assets/images/svg/logo.svg?inline";
import MobileMenu from "~/components/system/header/mobile-menu";
import HeaderNav from "~/components/system/header/nav";
import VButton from "~/components/ui/v-button";

export default {
  name: "TheHeader",
  components: {
    VButton,
    HeaderNav,
    MobileMenu,
    LogoIcon,
  },

  data: () => ({
    mobileMenuIsOpened: false,
    links: [
      {
        id: 1,
        iconName: "rays",
        title: "Об игре",
        url: "index",
        scrollTo: "aboutGame",
      },
      {
        id: 2,
        iconName: "crown",
        title: "Описание",
        url: "index",
        scrollTo: "gameDescription",
      },
      {
        id: 3,
        iconName: "note",
        title: "Как играть?",
        url: "index",
        scrollTo: "gameVideo",
      },
      {
        id: 4,
        iconName: "delivery",
        title: "Доставка",
        url: "delivery",
      },
      {
        id: 5,
        iconName: "mail",
        title: "Контакты",
        url: "contacts",
      },
      {
        id: 6,
        iconName: "blog",
        title: "Блог",
        url: "blog",
      },
    ],
  }),
  computed: {
    ...mapState("cart", ["productsQuantity"]),
  },

  methods: {
    ...mapMutations("cart", ["CHANGE_PRODUCTS_QUANTITY"]),

    increaseQuantity() {
      if (this.productsQuantity < 1) {
        this.CHANGE_PRODUCTS_QUANTITY(this.productsQuantity + 1);
      }
      this.$router.push({ name: "cart" });
    },
  },
};
</script>

<style lang="scss" scoped>
.the-header {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 20px 0;
  z-index: 500;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(180deg, #26120b 0%, rgba(38, 18, 11, 0) 100%);
    z-index: 100;
    pointer-events: none;
  }

  @media screen and (max-width: 1200px) {
    height: 60px;
    padding: 14px 0;

    &:before {
      height: 80px;
    }
  }
}

.the-header__content {
  position: relative;
  @include container-1520;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  z-index: 500;
}

.the-header__logo {
  max-width: 176px;
  max-height: 60px;
  height: auto;

  @media screen and (max-width: 1200px) {
    max-width: 83px;
  }
}
.the-header__right {
  display: grid;
  grid-template-columns: max-content 180px;
  grid-gap: 10px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
}

.the-header__burger {
  position: relative;
  display: none;

  @media screen and (max-width: 1200px) {
    display: flex;
  }

  &:hover {
    ::v-deep(path) {
      fill: $yellow;
    }
  }

  ::v-deep(path) {
    transition: all 0.2s ease-in-out;
  }

  &.active {
    ::v-deep(path) {
      fill: $yellow;

      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, -5px);
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(-12px, 0px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
    }
  }
}

.the-header__basket_mobile {
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
  }
}

.the-header__link {
  position: relative;
  display: flex;
  align-items: center;
  height: 33px;
  margin: 0 38px;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: $white;
  transition: all 0.2s ease-in-out;

  ::v-deep(path) {
    transition: all 0.2s ease-in-out;
  }

  &.nuxt-link-exact-active,
  &:hover {
    color: $yellow;

    ::v-deep(path) {
      fill: $yellow;
    }
  }

  @media screen and (max-width: 1400px) {
    margin: 0 26px;
  }
}

.the-header__link-icon {
  position: absolute;
  top: -14px;
  left: -28px;
}

.the-header__nav {
  @media screen and (max-width: 1200px) {
    display: none;
  }
}

.the-header__mobile-menu {
  @media screen and (min-width: 1200px) {
    display: none;
  }
}
</style>
