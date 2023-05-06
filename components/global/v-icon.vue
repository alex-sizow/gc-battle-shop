<template>
  <component 
    :is="getSvg"
    :width="width"
    :height="height"
  />
</template>

<script>

export default {
  name: 'VIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 32,
    },
    width: {
      type: Number,
      default: 32,
    },
  },
  computed: {
    getSvg() {
      return require(`@/assets/icons/${this.name}.svg?inline`)
    },
  },
}
</script>