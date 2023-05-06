<template>
  <div class="order-payment">
    <h2 class="order-payment__title">
      2. Выберите удобный способ оплаты
    </h2>

    <div class="order-payment__radios">
      <v-radio 
        v-for="option in options"
        :key="option.id"
        :is-checked="option.isChecked"
        :name="option.name"
        :value="option.value"
        @change-radio="CHANGE_PAYMENT_TYPE($event)"
      >
        {{ option.title }}
      </v-radio>
    </div>

    <div class="order-payment__description">
      Оплатить покупки можно только пластиковой картой. При использовании VPN сервисов могут наблюдаться проблемы.
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import VRadio from '~/components/ui/v-radio';

import { PAYMENT_TYPES } from '@/utils/constants/payment';
import { DELIVERY_TYPES } from '@/utils/constants/delivery';

export default {
  name: 'OrderPayment',
  components: {
    VRadio, 
  },

  data: () => ({
    PAYMENT_TYPES,
    DELIVERY_TYPES,
  }),
  computed: {
    ...mapState('order', [
      'deliveryType',
      'paymentType',
    ]),

    options() {
      return [
        {
          id: 0,
          name: 'paymentType',
          value: PAYMENT_TYPES.ONLINE,
          isChecked: this.deliveryType === DELIVERY_TYPES.MOSCOW
            || this.paymentType === PAYMENT_TYPES.ONLINE,
          title: 'Онлайн оплата',
        },
        {
          id: 1,
          name: 'paymentType',
          value: PAYMENT_TYPES.CASH,
          isChecked: this.paymentType === PAYMENT_TYPES.CASH,
          title: 'Наличными при получении',
          hidden: this.deliveryType != DELIVERY_TYPES.PICKUP,
        },
      ].filter(({ hidden }) => !hidden);
    },
  },
  methods: {
    ...mapMutations('order', [
      'CHANGE_PAYMENT_TYPE',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.order-payment__title {
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 36px;
  line-height: 125%;
  color: $yellow-light;

  @media screen and (max-width: 760px) {
    font-size: 28px;
  }
}

.order-payment__radios {
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media screen and (max-width: 760px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.order-payment__description {
  max-width: 440px;
  margin-top: 24px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #988C89;
  letter-spacing: 0.02em;
}
</style>