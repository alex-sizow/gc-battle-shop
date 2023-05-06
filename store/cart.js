export const state = () => ({
  price: 2490,
  productsQuantity: 0,
  discount: 0,
  delivery: 600,
});

export const mutations = {
  CHANGE_PRODUCTS_QUANTITY(state, quantity) {
    state.productsQuantity = quantity;
  },

  CHANGE_DISCOUNT(state, discount) {
    state.discount = discount;
  },
};

export const actions = {
  setProductsQuantityFromStorage() {
    const gamesQuantity = localStorage.getItem('gamesQuantity');

    if (!gamesQuantity) {
      return;
    }

    commit('CHANGE_PRODUCTS_QUANTITY', gamesQuantity);
  },
};