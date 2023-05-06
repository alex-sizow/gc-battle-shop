<template>
  <section class="home-callback">
    <kinesis-container 
      event="scroll"
      class="home-callback__content"
    >
      <parallax />

      <div class="home-callback__text">
        <div class="home-callback__title-wrap">
          <h2 class="home-callback__title">
            Оставьте ваш номер телефона и мы вам перезвоним
          </h2>
  
          <img 
            :src="require(`@/assets/images/svg/callback/balloons.svg`)" 
            alt=""
            class="home-callback__title-icon"
          >
        </div>
  
        <img 
          :src="require(`@/assets/images/svg/callback/notes.svg`)" 
          alt=""
          class="home-callback__notes-icon"
        >
  
        <p class="home-callback__desc">
          Да-да, мы с радостью в подробностях расскажем об игре по телефону и ответим на все вопросы :)
        </p>
      </div>

      <form 
        class="home-callback__form"
        @submit.prevent="sendForm"
      >
        <v-input
          :name="input.name"
          :value="form[input.formField]"
          :placeholder="input.placeholder"
          :is-valid="input.validation.isValid"
          :text-error="input.validation.textError"
          :is-required="input.isRequired"
          :is-phone="input.isPhone"
          with-shadow
          @on-change-value="form[input.formField] = $event"
        />

        <v-button
          tag="button"
          :disabled="!formCanBeSend"
          type="submit"
          class="home-question__button-buy"
          @click.prevent="sendForm"
        >
          Отправить
        </v-button>
      </form>
    </kinesis-container>
  </section>
</template>

<script>
import Parallax from '~/components/parallax';

import VButton from '~/components/ui/v-button';
import VInput from '~/components/ui/v-input';

import validateInput from '~/utils/validation';

import { callbackRequest } from '@/request-manager/callback/callback-requests';

export default {
  name: 'HomeCallback',
  components: {
    VButton,
    VInput,
    Parallax,
  },

  data: () => ({
    form: {
      phone: '',
    },
    feedback: [
      {
        name: 'Иннокентий',
        position: 'Киборг',
        iconName: 'dice',
        avatarSrc: 'author.png',
        description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблон.',
        rate: '5',
      },
      {
        name: 'Петрония',
        position: 'Врач',
        iconName: 'cup',
        avatarSrc: 'author.png',
        description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблон.',
        rate: '5',
      },
      {
        name: 'Брячислав',
        position: 'Лётчик',
        iconName: 'hourglass',
        avatarSrc: 'author.png',
        description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблон.',
        rate: '5',
      },
      {
        name: 'Андроник',
        position: 'Driver',
        iconName: 'balloon',
        avatarSrc: 'author.png',
        description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблон.',
        rate: '5',
      },
    ],
  }),
  computed: {
    input() {
      return {
        placeholder: 'Введите номер телефона',
        formField: 'phone',
        isRequired: true,
        isPhone: true,
        validation: validateInput({
          type: 'phone',
          value: this.form.phone,
          isRequired: true,
        }),
      }
    },
    allFieldsAreValid() {
      return this.input.validation.isValid;
    },

    requiredInputsAreFilled() {
      return Boolean(this.form[this.input.formField]);
    },

    formCanBeSend() {
      return Boolean(this.requiredInputsAreFilled && this.allFieldsAreValid);
    },
  },

  methods: {
    async sendForm() {
      if (this.formCanBeSend) {
        try {
          const response = await callbackRequest(this.form);

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
  },
}
</script>

<style lang="scss" scoped>
.home-callback__content {
  position: relative;
  @include container-980;
  padding-top: 90px;
  padding-bottom: 250px;
  z-index: 200;

  @media screen and (max-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
}

.home-callback__text {
  position: relative;
  z-index: 200;

  @media screen and (max-width: 1200px) {
    padding: 0 40px;
  }
}

.home-callback__form {
  position: relative;
  display: grid;
  grid-template-columns: minmax(300px, 630px) 163px;
  grid-gap: 24px;
  justify-content: center;
  max-width: 820px;
  margin: 50px auto 0;
  z-index: 200;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.home-callback__title-wrap {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.home-callback__title {
  font-weight: 700;
  font-size: 64px;
  line-height: 125%;
  color: $white;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 32px;
  }
}

.home-callback__title-icon {
  position: absolute;
  top: -30px;
  right: -90px;
  z-index: -1;
}

.home-callback__desc {
  position: relative;
  margin: 0 auto;
  max-width: 815px;
  margin-top: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #CAC0BD;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
}

.home-callback__notes-icon {
  position: absolute;
  left: -80px;
  top: 80px;
}
</style>