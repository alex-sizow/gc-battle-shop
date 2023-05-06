<template>
  <div class="delivery-self">
    <div class="delivery-self__title">
      Москва, Бакунинская ул., 74-76к1
    </div>

    <div class="delivery-self__contacts">
      <div class="delivery-self__contacts-column">
        <div
          v-for="(contact, index) in contacts" 
          :key="index"
          class="delivery-self__contacts-item"
        >
          <v-icon 
            :name="contact.iconName"
            :height="24"
            :width="24"
          />

          <span>
            {{ contact.title }}
          </span>
        </div>
      </div>

      <a 
        href="https://www.google.com/maps/place/%D0%91%D0%B0%D0%BA%D1%83%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+74-76%D0%BA1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+105082/@55.7783004,37.6911802,17z/data=!3m1!4b1!4m5!3m4!1s0x46b5357a3f844777:0xd7a98dfeb1d6a2b6!8m2!3d55.7783004!4d37.6911802" 
        target="_blank"
        class="delivery-self__contacts-link"
      >
        <span>
          Показать на карте
        </span>

        <underline-icon class="delivery-self__contacts-link-icon" />
      </a>
    </div>
  </div>
</template>

<script>
import UnderlineIcon from '@/assets/images/svg/order/contact-underline.svg?inline';

export default {
  name: 'DeliverySelf',
  components: {
    UnderlineIcon,
  },

  data: () => ({
    contacts: [
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
  }),
}
</script>

<style lang="scss" scoped>
.delivery-self {
  padding: 20px 24px;
  background: #513E3E;
  border-radius: 18px;
}

.delivery-self__title {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 40px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }
}

.delivery-self__contacts {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
}

.delivery-self__contacts-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.delivery-self__contacts-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 22px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: #CAC0BD;

  ::v-deep(path) {
    fill: $yellow;
  }
}

.delivery-self__contacts-link {
  position: relative;
  font-weight: 700;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;
  transition: all .2s ease-in-out;

  &:hover {
    color: $yellow;
  }
}

.delivery-self__contacts-link-icon {
  position: absolute;
  bottom: -5px;
  left: -2px;

  ::v-deep(path) {
    transition: all .2s ease-in-out;
  }

  .delivery-self__contacts-link:hover & {
    ::v-deep(path) {
      stroke: $yellow;
    }
  }
}
</style>