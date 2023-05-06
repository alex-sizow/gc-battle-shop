<template>
  <div class="cart">
    <div class="cart__content">
      <div class="cart__title-row">
        <v-title>
          Корзина
        </v-title>

        <v-tooltip icon-name="megaphone">
          Принимаем карты к оплате онлайн
        </v-tooltip>
      </div>

      <div class="cart__row">
        <div class="cart__products">
          <cart-card v-if="productsQuantity > 0"/>
          
          <div v-else class="cart__products-empty">
            Ваша корзина пуста
          </div>
        </div>

        <cart-order/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import VTitle from '~/components/ui/v-title';
import VTooltip from '~/components/ui/v-tooltip';
import CartCard from '~/components/cart/card';
import CartOrder from '~/components/cart/order';

export default {
  name: 'Cart',
  components: {
    VTitle,
    VTooltip,
    CartCard,
    CartOrder,
  },

  computed: {
    ...mapState('cart', [
      'productsQuantity',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.cart {
  background: #26120B;
  min-height: 100vh;
  padding-top: 150px;
  padding-bottom: 100px;

  @media screen and (max-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
}

.cart__content {
  @include container-1520;
}

.cart__title-row {
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.cart__row {
  display: grid;
  grid-template-columns: 820px minmax(400px, 600px);
  grid-gap: 96px;
  justify-content: space-between;
  margin-top: 115px;
  align-items: center;

  @media screen and (max-width: 1600px) {
    margin-top: 80px;
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
}

.cart__products-empty {
  font-weight: 700;
  font-size: 86px;
  line-height: 125%;
  color: $white;
  user-select: none;

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 42px;
  }
}
</style>