<template>
  <div class="v-tooltip">
    <VIcon 
      :name="iconName"
      :height="29"
      :width="29"
    />

    <slot />
  </div>
</template>

<script>
export default {
  name: 'VTooltip',

  props: {
    iconName: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-tooltip {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 6px 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  color: #FEC82F;
  background: #352122;
  border: 1.28451px solid rgba(0, 0, 0, 0.05);
  border-radius: 11px;
  letter-spacing: 0.02em;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
}
</style>