<template>
  <div class="cart-card">
    <div class="cart-card__image-wrap">
      <picture>
        <source type="image/webp" :srcset="require(`@/assets/images/game.webp`)">
        <img 
          :src="require(`@/assets/images/game.png`)" 
          alt="" 
          class="cart-card__image"
        >
      </picture>
    </div>

    <div class="cart-card__text">
      <div class="cart-card__title">
        Комплект для игры “БИТВА” Тубус
      </div>

      <div class="cart-card__features">
        <div class="cart-card__feature">
          Масса упаковки с содержимым: 1387г
        </div>

        <div class="cart-card__feature">
          Размер: 565*554*45
        </div>
      </div>

      <div class="cart-card__description">
        Комплект для игры продаётся в упаковке-тубусе, в комлект входят:игральные кубики, набор шариков, стаканчики для игры, песочные часы, карточки с заданиями, инструкция.
      </div>
    </div>

    <div class="cart-card__total">
      <div class="cart-card__price">
        {{ formatePrice(price) }} ₽
      </div>

      <div class="cart-card__total-price">
        {{ productsQuantity }} * {{ formatePrice(price) }} ₽ 
      </div>

      <div class="cart-card__controls">
        <v-icon
          name="minus"
          :height="42"
          :width="42"
          class="cart-card__control"
          @click.native="decreaseQuantity"
        />

        <span class="cart-card__quantity">
          {{ productsQuantity }}
        </span>
      
        <v-icon
          name="plus"
          :height="42"
          :width="42"
          class="cart-card__control"
          @click.native="CHANGE_PRODUCTS_QUANTITY(productsQuantity + 1)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CartCard',

  computed: {
    ...mapState('cart', [
      'price',
      'productsQuantity',
      'discount',
    ]),
  },

  methods: {
    ...mapMutations('cart', [
      'CHANGE_PRODUCTS_QUANTITY',
    ]),

    formatePrice(price) {
      return price.toLocaleString('ru-RU');
    },

    decreaseQuantity() {
      if (this.productsQuantity > 0) {
        this.CHANGE_PRODUCTS_QUANTITY(this.productsQuantity - 1);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-card {
  display: grid;
  grid-template-columns: 112px 1fr 180px;
  grid-gap: 40px;
  max-width: 820px;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
}

.cart-card__text {
  display: flex;
  flex-direction: column;
}

.cart-card__title {
  margin-top: 4px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: $yellow-light;

  @media screen and (max-width: 1200px) {
    font-size: 32px;
  }
}

.cart-card__features {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 12px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

.cart-card__feature {
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #CAC0BD;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
}

.cart-card__description {
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #988C89;

  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
}

.cart-card__total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 760px) {
    align-items: flex-start;
  }
}

.cart-card__price {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 70px;
  line-height: 120%;
  text-align: right;
  color: $white;

  @media screen and (max-width: 760px) {
    font-size: 60px;
    margin-bottom: 10px;
  }
}

.cart-card__total-price {
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: right;
  color: #988C89;

  @media screen and (max-width: 760px) {
    margin-bottom: 10px;
  }
}

.cart-card__controls {
  display: flex;
  align-items: center;
}

.cart-card__control {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: none;

  ::v-deep(g) {
    transition: all .2s ease-in-out;
  }

  ::v-deep(g) {
    filter: none;
  } 
  ::v-deep(path) {
    fill: $yellow;
  }

  &:hover { 
    ::v-deep(g) {
      filter: url(#filter0_d_851_12122);
    } 
    ::v-deep(path) {
      fill: #FFFFFF;
    }
  }
}

.cart-card__quantity {
  min-width: 45px;
  padding: 0 10px;
  font-weight: 700;
  font-size: 36px;
  line-height: 125%;
  color: $white;
  text-align: center;
  user-select: none;

  @media screen and (max-width: 760px) {
    min-width: 40px;
    font-size: 28px;
    line-height: 40px;
  }
}
</style>