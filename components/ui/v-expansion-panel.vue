<template>
  <div 
    :class="[
      'v-expansion-panel',
      { 'active': block.isOpened },
    ]"
  >
    <div 
      class="v-expansion-panel__header"
      @click="$emit('toggle', !block.isOpened)"
    >
      <span>
        {{ block.title }}
      </span>

      <v-icon
        name="arrow"
        :height="24"
        :width="24"
        class="v-expansion-panel__header-icon"
      />
    </div>

    <transition name="nested">
      <div 
        v-if="block.isOpened" 
        class="v-expansion-panel__body"
      >
        {{ block.description }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VExpansionPanel',

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-expansion-panel {
  background: #513E3E;
  border-radius: 13px;
}

.v-expansion-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
  color: #CAC0BD;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all .2s ease-in;

  &:hover,
  .active & {
    color: $yellow;
  }

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
}

.v-expansion-panel__header-icon {
  transform: rotate(-180deg);
  transition: all .2s ease-in;

  .v-expansion-panel__header:hover & {
    ::v-deep(path) {
      stroke: $yellow;
    }
  }
  
  .active & {
    transform: rotate(0);

    ::v-deep(path) {
      stroke: $yellow;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 18px;
    height: 18px;
  }
}

.v-expansion-panel__body {
  margin: 5px 16px 18px;
  padding: 20px 25px 10px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;
  background: #3E2A2B;
  border-radius: 13px;
  transition: all .2s ease-in-out;

  @media screen and (max-width: 1200px) {
    padding: 20px 16px;
    font-size: 14px;
    line-height: 140%;
  }
}
</style>