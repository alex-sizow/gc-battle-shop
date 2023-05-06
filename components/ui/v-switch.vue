<template>
  <div class="v-switch">
    <v-radio 
      v-for="option in options" 
      :key="option.id"
      :name="option.name"
      :value="option.value"
      :is-checked="option.isChecked"
      size="small" 
      @change-radio="$emit('change-radio', $event)"
    >
      {{ option.title }}
    </v-radio>
  </div>
</template>

<script>
import VRadio from '~/components/ui/v-radio';

export default {
  name: 'VSwitch',
  components: {
    VRadio,
  },

  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.v-switch {
  display: flex;
  justify-content: space-between;
  gap: 22px;
  width: 100%;
  padding: 15px;
  background: #513E3E;
  border-radius: 13px;

  @media screen and (max-width: 760px) {
    background: transparent;
    flex-wrap: wrap;
    justify-content: flex-start;
    // flex-direction: column;
    padding: 0;
  }
}
</style>
