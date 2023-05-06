<template>
  <div class="order-customer">
    <h2 class="order-customer__title">
      3. Укажите данные получателя заказа
    </h2>

    <div class="order-customer__form">
      <v-input
        v-for="input in inputs"
        :key="input.id"
        :name="input.name"
        :value="customerInfoForm[input.formField]"
        :placeholder="input.placeholder"
        :label="input.label"
        :is-required="input.isRequired"
        :is-valid="input.validation.isValid"
        :text-error="input.validation.textError"
        :is-phone="input.isPhone"
        @on-change-value="CHANGE_CUSTOMER_FORM_FIELD({ 
          formField: input.formField, 
          value: $event,
        })"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import VInput from '~/components/ui/v-input';

import validateInput from '~/utils/validation';

export default {
  name: 'OrderCustomer',
  components: {
    VInput,
  },

  computed: {
    ...mapState('order', [
      'customerInfoForm',
    ]),

    inputs() {
      return [
        {
          id: 0,
          formField: 'email',
          label: 'Email',
          placeholder: 'Текст',
          isRequired: true,
          validation: validateInput({
            type: 'email',
            value: this.customerInfoForm.email,
            isRequired: false,
          }),
        },
        {
          id: 1,
          formField: 'phone',
          label: 'Телефон',
          placeholder: 'Текст',
          isRequired: true,
          isPhone: true,
          validation: validateInput({
            type: 'phone',
            value: this.customerInfoForm.phone,
            isRequired: true,
          }),
        },
        {
          id: 2,
          formField: 'name',
          label: 'Имя',
          placeholder: 'Текст',
          isRequired: true,
          validation: validateInput({
            type: null,
            value: this.customerInfoForm.name,
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

      return Boolean(requiredInputs.every(input => this.customerInfoForm[input.formField]));
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
      'CHANGE_CUSTOMER_FORM_FIELD',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.order-customer__title {
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 36px;
  line-height: 125%;
  color: $yellow-light;

  @media screen and (max-width: 760px) {
    font-size: 28px;
  }
}

.order-customer__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 24px;
  background: #513E3E;
  border-radius: 18px;

  @media screen and (max-width: 760px) {
    padding: 20px 15px;
  }
}
</style>