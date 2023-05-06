<template>
  <div :class="[
    'mobile-menu',
    { 'active': isOpened },
  ]">
    <header-nav 
      :links="links" 
      class="mobile-menu__nav" 
      @close-mobile-menu="$emit('close-mobile-menu')"
    />

    <div class="mobile-menu__wrap">
      <div class="mobile-menu__socials">
        <a 
          v-for="link in socials"
          :key="link.id"
          :href="link.url" 
          class="mobile-menu__social"
          target="_blank"
        >
          <v-icon 
            :name="link.iconName"
            :height="48"
            :width="48"
            class="mobile-menu__social-icon"
          />
        </a>
      </div>
    
      <div class="mobile-menu__bottom">
        <p class="mobile-menu__desc">
          © 2000-{{ currentYear }}, «БИТВА», все права защищены.
        </p>
    
        <a 
          href="" 
          class="mobile-menu__desc"
          target="_blank"
        >
          Политика безопасности
        </a>
    
        <span class="mobile-menu__desc">
          Разработка
          <a 
            href="https://gc.moscow/"
            target="_blank"
            class="mobile-menu__desc_yellow"
          >
            Gold Carrot
          </a> 
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '~/components/system/header/nav';

export default {
  name: 'MobileMenu',
  components: {
    HeaderNav,
  },

  props: {
    links: {
      type: Array,
      required: true,
    },
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    socials: [
      {
        id: 'tg',
        iconName: 'tg',
        url: 'https://t.me/bitva_game_bot',
      },
      {
        id: 'instagram',
        iconName: 'instagram',
        url: 'https://instagram.com/bitva.game',
      },
      {
        id: 'vk',
        iconName: 'vk',
        url: 'https://vk.com/bitva.game',
      },
    ],
  }),
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
}
</script>

<style lang="scss" scoped>

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 140px 15px 10px;
  background: #200E07;
  opacity: 0;
  pointer-events: none;
  overflow-y: auto;
  z-index: 200;
  transition: all .2s ease-in-out;

  &.active {
    transform: translateY(0px);
    opacity: 1;
    max-height: 100%;
    min-height: 100vh;
    pointer-events: all;
  }

  @media screen and (max-width: 760px) {
    padding-top: 96px;
  }
}

.mobile-menu__socials {
  display: flex;
  align-items: center;
  justify-content: center;
}


.mobile-menu__social {
  margin: 0 8px;
  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  &:hover {
    ::v-deep(path) {
      fill: $yellow;
    }
  }
}

.mobile-menu__desc {
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #988C89;
  white-space: nowrap;
}

.mobile-menu__desc_yellow {
  color: $yellow;
}

.mobile-menu__bottom {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 35px;
}
</style>