<template>
  <div class="order-delivery">
    <h2 class="order-delivery__title">
      1. Выберите удобный способ получения заказа
    </h2>

    <v-switch 
      :options="options"
      @change-radio="CHANGE_DELIVERY_TYPE($event)" 
    />

    <delivery-self v-if="deliveryType === DELIVERY_TYPES.PICKUP" />

    <delivery-courier 
      v-else-if="deliveryType === DELIVERY_TYPES.MOSCOW" 
      @form-check="$emit('form-check', $event)"
    />

    <delivery-russia v-else-if="deliveryType === DELIVERY_TYPES.RUSSIA" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import VSwitch from '~/components/ui/v-switch';
import DeliverySelf from '~/components/order/delivery/self';
import DeliveryCourier from '~/components/order/delivery/courier';
import DeliveryRussia from '~/components/order/delivery/russia';

import { DELIVERY_TYPES } from '@/utils/constants/delivery';

export default {
  name: 'OrderDelivery',
  components: {
    VSwitch,
    DeliverySelf,
    DeliveryCourier,
    DeliveryRussia,
  },

  data() {
    return {
      DELIVERY_TYPES,
    }
  },
  computed: {
    ...mapState('order', [
      'deliveryType',
    ]),
    options() {
      return [
        {
          id: 0,
          name: 'deliveryType',
          value: DELIVERY_TYPES.PICKUP,
          isChecked: this.deliveryType === DELIVERY_TYPES.PICKUP,
          title: 'Самовывоз Москва',
        },
        {
          id: 1,
          name: 'deliveryType',
          value: DELIVERY_TYPES.RUSSIA,
          isChecked: this.deliveryType === DELIVERY_TYPES.RUSSIA,
          title: 'Доставка по России',
        },
        {
          id: 2,
          name: 'deliveryType',
          value: DELIVERY_TYPES.MOSCOW,
          isChecked: this.deliveryType === DELIVERY_TYPES.MOSCOW,
          title: 'Доставка по Москве',
        },
      ]
    },
  },

  methods: {
    ...mapMutations('order', [
      'CHANGE_DELIVERY_TYPE',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.order-delivery {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.order-delivery__title {
  font-weight: 700;
  font-size: 36px;
  line-height: 125%;
  color: $yellow-light;

  @media screen and (max-width: 760px) {
    font-size: 28px;
  }
}
</style>