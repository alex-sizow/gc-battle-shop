<template>
  <div class="delivery-courier">
    <p class="delivery-courier__description">
      *Стоимость доставки по Москве 600 рублей
    </p>

    <div class="delivery-courier__form">
      <div class="delivery-courier__title">
        Укажите адрес доставки
      </div>
  
      <div class="delivery-courier__form-fields">
        <v-input
          v-for="input in inputs"
          :key="input.id"
          :name="input.name"
          :value="deliveryInfoForm[input.formField]"
          :placeholder="input.placeholder"
          :label="input.label"
          :is-required="input.isRequired"
          :is-valid="input.validation.isValid"
          :text-error="input.validation.textError"
          @on-change-value="CHANGE_DELIVERY_FORM_FIELD({ 
            formField: input.formField, 
            value: $event,
          })"
        />
  
        <v-textarea 
          :value="deliveryInfoForm[textarea.formField]"
          :placeholder="textarea.placeholder"
          :label="textarea.label"
          @on-change-value="CHANGE_DELIVERY_FORM_FIELD({ 
            formField: textarea.formField, 
            value: $event,
          })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import VInput from '~/components/ui/v-input';
import VTextarea from '~/components/ui/v-textarea';

import validateInput from '~/utils/validation';

export default {
  name: 'DeliveryCourier',
  components: {
    VInput,
    VTextarea,
  },

  data: () => ({
    textarea: {
      formField: 'comment',
      label: 'Комментарий к  заказу',
      placeholder: 'Текст',
    },
  }),
  computed: {
    ...mapState('order', [
      'deliveryInfoForm',
    ]),

    inputs() {
      return [
        {
          id: 0,
          formField: 'deliveryAddress',
          label: 'Город, улица, дом',
          placeholder: 'Текст',
          isRequired: true,
          validation: validateInput({
            type: null,
            value: this.deliveryInfoForm.deliveryAddress,
            isRequired: true,
          }),
        },
        {
          id: 1,
          formField: 'deliveryApartmentNumber',
          label: 'Квартира/офис',
          placeholder: 'Текст',
          isRequired: true,
          validation: validateInput({
            type: null,
            value: this.deliveryInfoForm.deliveryApartmentNumber,
            isRequired: true,
          }),
        },
        {
          id: 2,
          formField: 'deliverySectionNumber',
          label: 'Подъезд',
          placeholder: 'Текст',
          isRequired: true,
          validation: validateInput({
            type: null,
            value: this.deliveryInfoForm.deliverySectionNumber,
            isRequired: true,
          }),
        },
      ];
    },

    allFieldsAreValid() {
      return this.inputs.every(input => input.validation.isValid);
    },

    requiredInputsAreFilled() {
      const requiredInputs = this.inputs.filter(input => input.validation.isRequired);

      return Boolean(requiredInputs.every(input => this.deliveryInfoForm[input.formField]));
    },

    formCanBeSend() {
      return Boolean(this.requiredInputsAreFilled && this.allFieldsAreValid);
    },
  },
  watch: {
    'formCanBeSend'(newVal) {
      this.$emit('form-check', newVal);
    },
  },

  methods: {
    ...mapMutations('order', [
      'CHANGE_DELIVERY_FORM_FIELD',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.delivery-courier__description {
  margin-bottom: 32px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #988C89;
}

.delivery-courier__form {
  padding: 20px 24px;
  background: #513E3E;
  border-radius: 18px;

  @media screen and (max-width: 760px) {
    padding: 20px 15px;
  }
}

.delivery-courier__title {
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 40px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }
}

.delivery-courier__form-fields {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>