<template>
  <Modal
    name="ModalSuccessCallback"
    width="494px"
    :adaptive="true"
    overlayTransition="fadeIn"
    transition="fadeIn"
    classes="modal-success"
  >
    <div class="modal-success__content">
      <h2 class="modal-success__title">
        Ваша заявка успешно отправлена!
      </h2>

      <p class="modal-success__description">
        Мы скоро свяжемся с Вами.
      </p>

      <v-button
        tag="button"
        uppercase
        class="modal-success__button"
        @click="closeModal"
      >
        Закрыть
      </v-button>
    </div>
  </Modal>
</template>

<script>
import VButton from '~/components/ui/v-button';

export default {
  name: 'ModalSuccess',
  components: {
    VButton,
  },

  methods: {
    closeModal() {
      this.$modal.hide('ModalSuccessCallback');
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-success__content {
  position: relative;
  padding: 14px 24px 24px;
  background: #683E2E;
  border: 1.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 40px;
}

.modal-success__title {
  margin-bottom: 20px;
  color: $yellow;
  font-weight: 700;
  font-size: 42px;
  line-height: 123.6%;
  text-align: center;

  @media screen and (max-width: 760px) {
    font-size: 28px;
  }
}

.modal-success__description {
  margin-bottom: 30px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  letter-spacing: 0.02em;
  color: $white;
}
</style>