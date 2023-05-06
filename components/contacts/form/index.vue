
<template>
  <form class="contacts-form" @submit.prevent="sendForm">
    <v-title tag="h2" class="contacts-form__title">
      Обратная связь
    </v-title>

    <h3 class="contacts-form__subtitle">
      Задайте интересующий вас вопрос
    </h3>

    <div class="contacts-form__fields">
      <v-input
        v-for="input in inputs"
        :key="input.id"
        :value="form[input.formField]"
        :placeholder="input.placeholder"
        :label="input.label"
        :is-valid="input.validation.isValid"
        :text-error="input.validation.textError"
        :is-required="input.isRequired"
        :is-phone="input.isPhone"
        :class="[
          'contacts-form__field',
          { 'contacts-form__field_large': input.isLarge },
        ]"
        @on-change-value="form[input.formField] = $event"
      />

      <v-textarea 
        :value="form[textarea.formField]"
        :placeholder="textarea.placeholder"
        :label="textarea.label"
        class="contacts-form__field_large"
        @on-change-value="form[textarea.formField] = $event"
      />
    </div>

    <div class="contacts-form__bottom">
      <span class="contacts-form__description">
        Нажимая кнопку отправить, вы соглашаетесь с&nbsp;<a href="" target="_blank">политикой конфиденциальности</a>      
      </span>

      <v-button
        tag="button"
        type="submit"
        :disabled="!formCanBeSend"
        class="home-question__button-buy"
        @click.prevent="sendForm"
      >
        Отправить
      </v-button>
    </div>
  </form>
</template>

<script>
import VButton from '~/components/ui/v-button';
import VInput from '~/components/ui/v-input';
import VTitle from '~/components/ui/v-title';
import VTextarea from '~/components/ui/v-textarea';

import validateInput from '~/utils/validation';

import { feedbackRequest } from '@/request-manager/feedback/feedback-requests';

export default {
  name: 'ContactsForm',
  components: {
    VButton,
    VInput,
    VTitle,
    VTextarea,
  },

  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
      comment: '',
    },
    
    textarea: {
      formField: 'comment',
      label: 'Сообщение',
      placeholder: 'Текст',
      isLarge: true,
    },
  }),
  computed: {
    inputs() {
      return [
        {
          id: 0,
          formField: 'name',
          label: 'Имя',
          placeholder: 'Текст',
          validation: validateInput({
            type: null,
            value: this.form.name,
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
            value: this.form.phone,
            isRequired: true,
          }),
        },
        {
          id: 2,
          formField: 'email',
          label: 'Email',
          placeholder: 'Текст',
          isLarge: true,
          validation: validateInput({
            type: 'email',
            value: this.form.email,
            isRequired: false,
          }),
        },
      ];
    },
    allFieldsAreValid() {
      return this.inputs.every(input => input.validation.isValid);
    },

    requiredInputsAreFilled() {
      const requiredInputs = this.inputs.filter(input => input.validation.isRequired);

      return Boolean(requiredInputs.every(input => this.form[input.formField]));
    },

    formCanBeSend() {
      return Boolean(this.requiredInputsAreFilled && this.allFieldsAreValid);
    },
  },

  methods: {
    async sendForm() {
      if (this.formCanBeSend) {
        try {
          const response = await feedbackRequest(this.form);

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

    resetFormFields() {
      for (const key in this.form) {
        this.form[key] = '';
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.contacts-form__title {
  margin-bottom: 40px;
}

.contacts-form__wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contacts-form__subtitle {
  margin-bottom: 38px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #988C89;
}

.contacts-form__item {
  display: flex;
  align-items: center;
  gap: 13px;
  font-weight: 700;
  font-size: 26px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  ::v-deep(path) {
    fill: $yellow;
  }
}

.contacts-form__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contacts-form__socials {
  display: flex;
  align-items: center;
  gap: 13px;
}

.contacts-form__social {
  cursor: pointer;

  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  &:hover {
    ::v-deep(path) {
      fill: $yellow;
    }
  }
}

.contacts-form__link {
  transition: all .2s ease-in-out;

  &:hover {
    color: $yellow;
  }
}

.contacts-form__fields {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 24px 18px;
}

.contacts-form__field_large {
  grid-column: span 2;
  @media screen and (max-width: 600px) {
    grid-column: span 1;
  }
}

.contacts-form__bottom {
  display: grid;
  grid-gap: 24px;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 363px 163px;
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.contacts-form__description {
  display: inline;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #988C89;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }

  a {
    color: $yellow;
    transition: all .2s ease-in-out;

    &:hover {
      color: $yellow-light;
    }
  }
}
</style>