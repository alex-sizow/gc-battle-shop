<template>
  <div class="cart-order">
    <div class="cart-order__row">
      <span class="cart-order__desc">
        В корзине {{ productsQuantity | pluralize(['товар', 'товара', 'товаров']) }}
      </span>

      <span class="cart-order__price">
        {{ formatePrice(price * productsQuantity) }}₽
      </span>
    </div>

    <div class="cart-order__row">
      <span class="cart-order__discount"> 
        Скидка 
      </span>
      <span class="cart-order__discount"> 
        {{ discount }}% 
      </span>
    </div>

    <v-button
      v-if="productsQuantity > 0"
      :to="{ name: 'order' }"
      uppercase
      class="cart-order__button"
    >
      Перейти к оформлению
    </v-button>

    <v-button
      v-else
      tag="button"
      uppercase
      class="cart-order__button"
      @click.native="CHANGE_PRODUCTS_QUANTITY(productsQuantity + 1)"
    >
      Добавить «БИТВУ» В КОРЗИНУ
    </v-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import VButton from '~/components/ui/v-button';

import { pluralize } from '@/utils/helpers';

export default {
  name: 'CartOrder',
  components: {
    VButton,
  },
  filters: {
    pluralize,
  },

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
  },
}
</script>

<style lang="scss" scoped>
.cart-order {
  max-width: 600px;
  padding: 12px 24px 40px;
  background: #513E3E;
  border: 1.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 40px;
}

.cart-order__row {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  min-height: 88px;
  overflow: hidden;

  &:before {
    content: url('@/assets/images/svg/cart/underline.svg');
    position: absolute;
    bottom: -5px;
    left: 0;
  }
}

.cart-order__desc {
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 36px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  @media screen and (max-width: 760px) {
    font-size: 28px;
  }
}

.cart-order__price {
  font-weight: 700;
  font-size: 70px;
  line-height: 120%;
  text-align: right;
  color: $yellow-light;

  @media screen and (max-width: 760px) {
    font-size: 50px;
  }
}

.cart-order__discount {
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: #CAC0BD;
}

.cart-order__button {
  margin-top: 40px;
}
</style>