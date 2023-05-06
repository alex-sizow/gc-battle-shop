<template>
  <div
    :class="[
      'v-input',
      { 'is-focused': isFocused },
      { 'has-icon': iconName },
      { 'has-error': !isValid && !isFocused },
      { 'with-shadow': withShadow },
      { 'is-right': isValid && value.length },
    ]"
    v-click-outside="setBlur"
  >
    <label
      v-if="label"
      class="v-input__label"
    >
      {{ label }} 
      <span 
        v-if="isRequired" 
        class="v-input__label_yellow"
      >
        *
      </span>
    </label>

    <div class="v-input__input-wrap">
      <input
        v-bind="$attrs"
        v-model="model"
        :type="type"  
        :placeholder="placeholder"
        v-mask="isPhone ? phoneMask : null"
        autocomplete="off"
        class="v-input__input"
        @focus="setFocus"
        @blur="setBlur"
      />

      <v-icon
        v-if="isValid && value.length"
        name="done"
        :height="32"
        :width="32"
        class="v-input__icon"
      />

      <v-icon
        v-if="!isValid && value.length && !isFocused"
        name="attention"
        :height="32"
        :width="32"
        class="v-input__icon"
      />
    </div>

    <span v-if="!isFocused && !isValid" class="v-input__error">
      {{ textError }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'VInput',

  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: null,
      validator(val) {
        return [
          'email',
          'password',
        ].indexOf(val) !== -1;
      },
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [
        String,
        Number,
        null,
      ],
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    withShadow: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    textError: {
      type: String,
      default: '',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    isPhone: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isFocused: false,
    phoneMask: '+7 (###) ###-##-##',
  }),
  computed: {
    model: {
      get() {
        return this.value || '';
      },
      set(value) {
        this.$emit('on-change-value', value);
      },
    },
  },
  // watch: {
  //   'isFocused'(newVal) {
  //     if (newVal) {
  //       this.$emit('on-focus', newVal);
  //     } else {
  //       this.$emit('on-blur');
  //     }
  //   },
  // },

  methods: {
    setFocus() {
      this.isFocused = true;
    },
    setBlur() {
      this.isFocused = false;
    },
  },
}
</script>

<style lang="scss" scoped>
.v-input {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  font-family: 'Pangolin', sans-serif;
  transition: all .2s ease-in-out;
  z-index: 100;

  &[disabled]  {
    pointer-events: none;
  }
}

.v-input__input {
  position: relative;
  width: 100%;
  height: 60px;
  padding: 18px 14px 17px;
  font-size: 20px;
  line-height: 25px;
  background: #3E2A2B;
  border: 1.5px solid #594546;
  border-radius: 16px;
  color: $white;
  transition: all .2s ease-in-out;
  z-index: 50;

  @media screen and (max-width: 760px) {
    height: 50px;
    font-size: 16px;
    line-height: 16px;
  }

  &::placeholder {
    color: #503E3E;
  }

  [disabled] &  {
    background: #F4F6F8;
    opacity: 0.8;
    pointer-events: none;
  }

  .is-focused & {
    border-color: #BA9698;
  }

  .has-error & {
    border-color: #D45456;
  }

  .with-shadow & {
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.48);
  }

  .is-right & {
    border-color: #7DA649;
  }
}
.v-input__input-wrap {
  position: relative;
  z-index: 50;
}

.v-input__icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 100;
}

.v-input__label {
  font-size: 20px;
  line-height: 140%;
  color: #988C89;
  pointer-events: none;
  transition: all .2s ease-in-out;
  z-index: 100;

  .is-focused & {
    color: #CAC0BD;
  }

  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
}

.v-input__label_yellow {
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: $yellow;
}

.v-input__error {
  position: absolute;
  left: 0;
  bottom: -22px;
  font-size: 14px;
  line-height: 17px;
  color: #D45456;
}
</style>
