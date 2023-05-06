<template>
  <button
    :is="tag"
    :to="to"
    :type="type"
    v-on="$listeners"
    :class="[
      'v-button',
      `v-button_${customType}`,
      { 'v-button_uppercase': uppercase },
    ]"
    @mousedown.prevent
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    customType: {
      type: String,
      default: 'gradient', 
      validator(val) {
        return [
          'gradient',
          'outline',
        ].indexOf(val) !== -1;
      },
    },
    to: {
      type: String | Object,
      default: null,
    },
    tag: {
      type: String,
      default: 'nuxt-link',
      validator(val) {
        return [
          'div',
          'button',
          'nuxt-link',
          'a',
        ].indexOf(val) !== -1;
      },
    },
    type: {
      type: String,
      default: null,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 0 42px;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  border-radius: 16px;
  transition: all .2s ease-in-out;
  outline: none;
  cursor: pointer;
  
  &[disabled] {
    pointer-events: none;
  }

  @media screen and (max-width: 600px) {
    height: 50px;
  }
}

.v-button_outline {
  position: relative;
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.48));
  color: $white;
  border: 2px solid $white;
  border-radius: 16px;
  -webkit-text-stroke: 0.3px;
  transition: all .2s ease-in-out;

  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  &:hover {
    color: $yellow-light;
    border-color: $yellow-light;

    ::v-deep(path) {
      fill: $yellow-light;
    }
  }
}

.v-button_gradient {
  position: relative;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.48);
  color: $red;
  -webkit-text-stroke: 0.5px;
  transition: all .2s ease-in-out;
  z-index: 3;
  overflow: hidden;

  span {
    z-index: 3;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #FFFFFF 0%, #F8DC6C 100%);
    transition: all .2s ease-out;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(269.86deg, #FFFEFB 45.91%, #F8DC6C 239.55%);
    transition: all .2s ease-out;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    color: #CB7179;
    &:after {
      opacity: 1;
      z-index: 2;
    }
  }

  &[disabled] {
    &:before {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(270deg, #FFFFFF 0%, #F8DC6C 100%);
    }
  }
}

.v-button_uppercase {
  text-transform: uppercase;
}
</style>