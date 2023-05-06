<template>
  <div class="default-layout">
    <the-header />

    <div class="default-layout__main">
      <nuxt />
    </div>

    <the-footer />

    <the-modals />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import TheHeader from '~/components/system/header';
import TheFooter from '~/components/system/footer';
import TheModals from '~/components/modals';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
    TheModals,
  },

  computed: {
    ...mapState('cart', [
      'productsQuantity',
    ]),
  },
  watch: {
    'productsQuantity'(newVal) {
      localStorage.setItem('gamesQuantity', newVal);
    },
  },

  created() {
    if (process.client) {
      const gamesQuantity = +localStorage.getItem('gamesQuantity');

      if (gamesQuantity) {
        this.CHANGE_PRODUCTS_QUANTITY(gamesQuantity);
      }
    }
  },

  methods: {
    ...mapMutations('cart', [
      'CHANGE_PRODUCTS_QUANTITY',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.default-layout__main {
  flex: 1 1 auto;
}
</style>