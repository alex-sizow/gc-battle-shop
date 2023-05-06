<template>
  <section class="contacts-info">
    <v-title class="contacts-info__title"> 
      Контакты 
    </v-title>

    <div class="contacts-info__wrap">
      <div class="contacts-info__block">
        <h3 class="contacts-info__subtitle">
          Адрес
        </h3>
  
        <div class="contacts-info__list">
          <div
            v-for="(contact, index) in contacts" 
            :key="index"
            class="contacts-info__item"
          >
            <v-icon 
              :name="contact.iconName"
              :height="32"
              :width="32"
            />
  
            <span> {{ contact.title }} </span>
          </div>
        </div>
      </div>
  
      <div class="contacts-info__block">
        <h3 class="contacts-info__subtitle">
          Телефон
        </h3>
  
        <div class="contacts-info__list">
          <a 
            href="tel:+79253140181" 
            target="_blank" 
            class="contacts-info__item contacts-info__link"
          >
            <v-icon 
              name="phone"
              :height="32"
              :width="32"
            />
  
            <span> +7 (925) 314 01 81 </span>
          </a>
        </div>
      </div>
  
      <div class="contacts-info__block">
        <h3 class="contacts-info__subtitle">
          Мы в социальных сетях
        </h3>
  
        <div class="contacts-info__socials">
          <a 
            v-for="social in socials" 
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="contacts-info__social"
          >
            <v-icon 
              :name="social.iconName"
              :height="48"
              :width="48"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VTitle from '~/components/ui/v-title';

export default {
  name: 'ContactsInfo',
  components: {
    VTitle,
  },

  data: () => ({
    contacts: [
      {
        title: 'Москва, Бакунинская ул., 74-76к1',
        iconName: 'geo',
      },
      {
        title: 'Бауманская',
        iconName: 'metro',
      },
      {
        title: 'С понедельника по пятницу',
        iconName: 'calendar',
      },
      {
        title: 'С 10:00 до 19:00',
        iconName: 'clocks',
      },
    ],
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
}
</script>

<style lang="scss" scoped>
.contacts-info__title {
  margin-bottom: 40px;
}

.contacts-info__wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contacts-info__subtitle {
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #988C89;
}

.contacts-info__item {
  display: flex;
  align-items: center;
  gap: 13px;
  font-weight: 700;
  font-size: 26px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  ::v-deep(path) {
    fill: $yellow;
  }

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
}

.contacts-info__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contacts-info__socials {
  display: flex;
  align-items: center;
  gap: 13px;
}

.contacts-info__social {
  cursor: pointer;

  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  &:hover {
    ::v-deep(path) {
      fill: $yellow;
    }
  }
}

.contacts-info__link {
  transition: all .2s ease-in-out;

  &:hover {
    color: $yellow;
  }
}
</style>