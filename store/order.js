export const state = () => ({
  paymentType: 'online',
  deliveryType: 'pickup',
  customerInfoForm: {
    name: '',
    phone: '',
    email: '',
  },
  deliveryInfoForm: {
    comment: '',
    deliveryAddress: '',
    deliveryApartmentNumber: '',
    deliverySectionNumber: '',
  },
});

export const mutations = {
  CHANGE_CUSTOMER_FORM_FIELD(state, { formField, value }) {
    state.customerInfoForm[formField] = value;
  },
  CHANGE_DELIVERY_FORM_FIELD(state, { formField, value }) {
    state.deliveryInfoForm[formField] = value;
  },
  CHANGE_DELIVERY_TYPE(state, type) {
    state.deliveryType = type;
  },
  CHANGE_PAYMENT_TYPE(state, type) {
    state.paymentType = type;
  },
};