<template>
  <div class="order">
    <div class="order__content">
      <div class="order__title-row">
        <v-title>
          Оформление заказа
        </v-title>

        <v-tooltip icon-name="megaphone">
          Принимаем карты к оплате онлайн
        </v-tooltip>
      </div>

      <form @submit.prevent="sendForm" class="order__form">
        <order-delivery @form-check="deliveryInfoFormFilled = $event" />

        <template v-if="deliveryType != DELIVERY_TYPES.RUSSIA">
          <hr class="order__hr">
  
          <order-payment />
  
          <hr class="order__hr">
  
          <order-customer @form-check="customerInfoFormFilled = $event" />
  
          <hr class="order__hr">
  
          <order-total 
            :form-can-be-send="formCanBeSend" 
            @send-form="sendForm"
          />
        </template>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import OrderCustomer from '~/components/order/customer';
import OrderDelivery from '~/components/order/delivery';
import OrderPayment from '~/components/order/payment';
import OrderTotal from '~/components/order/total';
import VTitle from '~/components/ui/v-title';
import VTooltip from '~/components/ui/v-tooltip';

import { DELIVERY_TYPES } from '@/utils/constants/delivery';

import { orderRequest } from '@/request-manager/order/order-requests';

export default {
  name: 'Order',
  components: {
    VTitle,
    VTooltip,
    OrderDelivery,
    OrderPayment,
    OrderCustomer,
    OrderTotal,
  },

  data: () => ({
    DELIVERY_TYPES,
    customerInfoFormFilled: false,
    deliveryInfoFormFilled: false,
  }),
  computed: {
    ...mapState('order', [
      'paymentType',
      'deliveryType',
      'customerInfoForm',
      'deliveryInfoForm',
    ]),

    ...mapState('cart', [
      'price',
      'productsQuantity', 
      'discount',
    ]),

    formCanBeSend() {
      if (this.deliveryType === DELIVERY_TYPES.PICKUP) {
        return Boolean(this.customerInfoFormFilled);
      } else if (this.deliveryType === DELIVERY_TYPES.MOSCOW) {
        return Boolean(this.customerInfoFormFilled && this.deliveryInfoFormFilled);
      }
    },
  },

  methods: {
    async sendForm() {
      if (this.formCanBeSend) {
        let form;

        if (this.deliveryType === DELIVERY_TYPES.PICKUP) {
          form = {
            deliveryType: this.deliveryType,
            paymentType: this.paymentType,
            products: [
              {
                productId: 1,
                count: this.productsQuantity,
              },
            ],
            ...this.customerInfoForm,
          }
        } else if (this.deliveryType === DELIVERY_TYPES.MOSCOW) {
          form = {
            deliveryType: this.deliveryType,
            paymentType: this.paymentType,
            products: [
              {
                productId: 1,
                count: this.productsQuantity,
              },
            ],
            ...this.customerInfoForm,
            ...this.deliveryInfoForm,
          }
        }

        try {
          const response = await orderRequest(form);

          if (response.data.success) {
            this.$modal.show('ModalSuccessCallback');
            this.resetFormFields();
            return;
          }
          alert('Произошла ошибка! Попробуйте позже');
        } catch(response) {
          alert('Произошла ошибка! Попробуйте позже');
          console.log(response);
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.order {
  background: #26120B;
  min-height: 100vh;
  padding-top: 150px;
  padding-bottom: 100px;

  @media screen and (max-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
}

.order__content {
  @include container-1520;
}

.order__title-row {
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.order__row {
  display: grid;
  grid-template-columns: 820px minmax(400px, 600px);
  grid-gap: 96px;
  justify-content: space-between;
  margin-top: 115px;
}

.order__form {
  max-width: 555px;
  margin: 70px auto 0;
  overflow: hidden;
}

.order__products {
  margin-top: 80px;
}

.order__hr {
  margin: 32px 0;
  background: url('@/assets/images/svg/order/underline_large.svg') no-repeat center;
  height: 5px;
  width: 100%;
  border: none;
}
</style>