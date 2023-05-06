<template>
  <nav class="header-nav">
    <nuxt-link
      v-for="link in links"
      :key="link.id"
      :to="({ name: link.url })"
      :class="[
        'header-nav__link',
        { 'active': !link.scrollTo && $route.name === link.url }
      ]"
      @click.native="onClick(link)"
    >
      <v-icon 
        :name="link.iconName"
        :height="28"
        :width="28"
        class="header-nav__link-icon"
      />

      <span>
        {{ link.title }}
      </span>
    </nuxt-link>

    <nuxt-link
      :to="({ name: 'cart' })"
      class="header-nav__link header-nav__link_mobile"
      @click.native="$emit('close-mobile-menu')"
    >
      <v-icon 
        name="basket"
        :height="28"
        :width="28"
      />
      <span> Корзина </span>
    </nuxt-link>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'HeaderNav',

  props: {
    links: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onClick(link) {
      if(link.scrollTo) {
        setTimeout(() =>{
          VueScrollTo.scrollTo(`#${link.scrollTo}`, 1000);
        }, 50)
      }

      this.$emit('close-mobile-menu');
    },
  },
}
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 28px;
  }
}

.header-nav__link {
  position: relative;
  display: flex;
  align-items: center;
  height: 33px;
  margin: 0 38px;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: $white;
  transition: all .2s ease-in-out;
  
  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  &.active,
  &:hover {
    color: $yellow;

    ::v-deep(path) {
      fill: $yellow;
    }
  }

  @media screen and (max-width: 1400px) {
    margin: 0 26px;
  }

  @media screen and (max-width: 1200px) {
    margin: 0;
    gap: 5px;
  }

  @media screen and (max-width: 760px) {
    font-size: 22px;
    line-height: 28px;
  }
}

.header-nav__link-icon {
  position: absolute;
  top: -14px;
  left: -28px;

  @media screen and (max-width: 1200px) {
    position: static;
  }
}

.header-nav__link_mobile {
  @media screen and (min-width: 1200px) {
    display: none;
  }
}

.header-nav__link_active {
  color: $yellow-light;

  ::v-deep(path) {
    stroke: $yellow-light;
  }
}
</style>