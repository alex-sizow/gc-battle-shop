<template>
  <div
    :class="[
      'v-textarea',
      { 'is-focused': isFocused },
      { 'is-filled': isFilled },
    ]"
    v-click-outside="setBlur"
  >
    <label
      v-if="label"
      class="v-textarea__label"
    >
      {{ label }}
    </label>

    <textarea
      v-bind="$attrs"
      v-model="model"
      :placeholder="placeholder"
      class="v-textarea__textarea"
      @keydown.up.prevent
      @keydown.down.prevent
      @focus="setFocus"
    />
  </div>
</template>

<script>
export default {
  name: 'VTextarea',

  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isFocused: false,
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
    isFilled() {
      return this.value;
    },
  },
  watch: {
    'isFocused'(newVal) {
      if (newVal) {
        this.$emit('on-focus', newVal);
      } else {
        this.$emit('on-blur');
      }
    },
  },

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
.v-textarea {
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

.v-textarea__textarea {
  position: relative;
  width: 100%;
  min-height: 128px;
  padding: 18px 14px 17px;
  font-size: 20px;
  line-height: 120%;
  background: #3E2A2B;
  border: 1.5px solid #594546;
  border-radius: 16px;
  color: $white;
  transition: all .2s ease-in-out;
  resize: none;
  outline: none;
  z-index: 50;

  &::placeholder {
    color: #503E3E;
  }

  .is-focused & {
    border-color: #BA9698;
  }

  [disabled] & {
    background: #F4F6F8;
    opacity: 0.8;
    pointer-events: none;
  }

  @media screen and (max-width: 760px) {
    font-size: 16px;
    min-height: 100px;
  }
}

.v-textarea__label {
  font-size: 20px;
  line-height: 25px;
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
</style>
