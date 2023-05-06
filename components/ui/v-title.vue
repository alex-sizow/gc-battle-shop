<template>
  <component
    :is="tag" 
    class="v-title"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VTitle',

  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    size: {
      type: String,
      default: 'medium',
      validator(val) {
        return [
          'small',
          'medium',
          'large',
        ].indexOf(val) !== -1;
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.v-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 123.6%;
  color: #CAC0BD;

  @media screen and (max-width: 1200px) {
    font-size: 36px;
  }
}

</style>