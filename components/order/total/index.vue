<template>
  <div class="order-total">
    <div class="order-total__title">
      4. Завершение оформления
    </div>

    <div class="order-total__wrap">
      <div class="order-total__row">
        <div class="order-total__column">
          <span class="order-total__text">
            Игра“БИТВА” Тубус
          </span>
  
          <span class="order-total__text_small">
            {{ productsQuantity }}*{{ price}}₽
          </span>
        </div>

        <span class="order-total__text order-total__text_end">
          {{ formatePrice(price * productsQuantity) }}₽
        </span>
      </div>

      <div 
        v-if="deliveryType === DELIVERY_TYPES.MOSCOW" 
        class="order-total__row"
      >
        <span class="order-total__text">
          Доставка по Москве
        </span>

        <span class="order-total__text order-total__text_end">
          {{ delivery }}₽
        </span>
      </div>

      <div class="order-total__row">
        <span class="order-total__text">
          Скидка
        </span>

        <span class="order-total__text order-total__text_end">
          {{ discount }}₽
        </span>
      </div>

      <div class="order-total__row">
        <span class="order-total__total"> 
          Итого к оплате
        </span>
        <span class="order-total__total-price"> 
          {{ formatePrice(totalPrice) }}₽
        </span>
      </div>

      <v-button
        tag="button"
        :disabled="!formCanBeSend"
        type="submit"
        @click.prevent="$emit('send-form')"
        class="order-total__button"
      >
        оформить заказ
      </v-button>

      <div class="order-total__description">
        Завершая оформление заказа, я соглашаюсь с условиями оферты и даю согласие на обработку своих персональных данных.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import VButton from '~/components/ui/v-button';

import { DELIVERY_TYPES } from '@/utils/constants/delivery';

export default {
  name: 'OrderTotal',
  components: {
    VButton,
  },

  props: {
    formCanBeSend: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    DELIVERY_TYPES,
  }),
  computed: {
    ...mapState('order', [
      'deliveryType',
    ]),
    ...mapState('cart', [
      'price',
      'productsQuantity',
      'discount',
      'delivery'
    ]),

    totalPrice() {
      let totalPrice = this.price * this.productsQuantity - this.discount;

      return this.deliveryType === DELIVERY_TYPES.MOSCOW 
        ? totalPrice + this.delivery
        : totalPrice;
    },
  },

  methods: {
    formatePrice(price) {
      return price.toLocaleString('ru-RU');
    },
  },
}
</script>

<style lang="scss" scoped>
.order-total__wrap {
  padding: 12px 24px 40px;
  background: #513E3E;
  border: 1.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 40px;

  @media screen and (max-width: 1200px) {
    padding: 20px 15px;
  }
}

.order-total__title {
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 36px;
  line-height: 125%;
  color: $yellow-light;

  @media screen and (max-width: 760px) {
    font-size: 28px;
  }
}

.order-total__row {
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

  @media screen and (max-width: 760px) {
    min-height: 80px;
  }
}

.order-total__column {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 2;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.order-total__text {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: #CAC0BD;
  flex: 1;
}

.order-total__text_small {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: $yellow-light;
}

.order-total__text_end {
  text-align: right;
}

.order-total__total {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 36px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  @media screen and (max-width: 760px) {
    font-size: 28px;
  }
}

.order-total__total-price {
  font-weight: 700;
  font-size: 70px;
  line-height: 120%;
  text-align: right;
  color: $yellow-light;

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 42px;
  }
}

.order-total__button {
  margin-top: 24px;
}

.order-total__description {
  font-family: 'Pangolin', sans-serif;
  margin-top: 28px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #988C89;
  text-align: center;
}
</style>