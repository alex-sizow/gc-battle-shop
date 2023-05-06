<template>
  <div class="the-modals">
    <modal-success-callback />
  </div>
</template>

<script>
import ModalSuccessCallback from '@/components/modals/modal-success-callback';

export default {
  name: 'TheModals',
  components: {
    ModalSuccessCallback,
  },
}
</script>

<style lang="scss" scoped>
::v-deep(.vm--container) {
  display: flex;
  justify-content: center;
  padding: 40px 12px;
}

::v-deep(.vm--overlay) {
  // background: rgba(#000000, .8);
  background: rgba(0, 0, 0, 0.8);
}

::v-deep(.vm--container.scrollable .vm--modal),
::v-deep(.vm--modal) {
  position: static;
  margin: auto;
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
}

::v-deep(.vm--modal) {
  height: auto !important;
}
</style>

