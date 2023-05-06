<template>
  <label 
    :class="[
      'v-radio',
      { 'v-radio_checked': isChecked },
      { 'v-radio_small': size === 'small' },
    ]"
    @mousedown.prevent
  >
    <input
      class="v-radio__input"
      type="radio"
      :checked="isChecked"
      :name="name"
      @change="$emit('change-radio', value)"
    >
    
    <slot />

    <v-icon 
      name="radio-button"
      :height="24"
      :width="24"
      class="v-radio__icon"
    />
  </label>
</template>

<script>
export default {
  name: 'VRadio',

  props: {
    name: {
      type: String,
      default: '',
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'large',
      validator(val) {
        return [
          'small',
          'large',
        ].indexOf(val) !== -1;
      },
    }
  },
};
</script>

<style lang="scss" scoped>
.v-radio {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 65px;
  padding: 17px 68px 17px 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: #CAC0BD;
  background: #352122;
  border: 1.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 13px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all .2s ease-in-out;

  input {
    display: none;
  }

  &:hover {
    background: #513E3E;
  }

  @media screen and (max-width: 760px) {
    height: 50px;
    width: fit-content;
  }
}

.v-radio_checked {
  color: $white;
  background: #513E3E;
  border-color: rgba(0, 0, 0, 0.05);
  pointer-events: none;
}
.v-radio_small {
  width: fit-content;
  height: 36px;
  padding: 3px 7px;
  background: transparent;
  color: #CAC0BD;
  border-radius: 6px;
  border: none;
  
  &:hover {
    background: #625151;
  }

  @media screen and (max-width: 760px) {
    color: #CAC0BD;
    background: #352122;
  }
  &.v-radio_checked {
    background: #625151;
    color: $yellow;
  }

  @media screen and (max-width: 760px) {
    height: 50px;
    padding: 17px 68px 17px 24px;
    color: $white;
    background: #513E3E;
  }
}

.v-radio__icon {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);

  ::v-deep(path) {
    stroke: #CAC0BD;
    transition: all .2s ease-in-out;
  }
  ::v-deep(path#radio-circle) {
    opacity: 0;
  }

  .v-radio_checked & {
    ::v-deep(path) {
      stroke: $yellow;
    }
    ::v-deep(path#radio-circle) {
      opacity: 1;
    }
  }

  .v-radio_small & {
    @media screen and (min-width: 760px) {
      display: none;
    }
  }
}
</style>
