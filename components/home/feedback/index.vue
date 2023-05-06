<template>
  <section class="home-feedback">
    <kinesis-container 
      event="scroll"
      class="home-feedback__content"
    >
      <parallax />

      <div class="home-feedback__inner">
        <div class="home-feedback__title-wrap">
          <img 
            :src="require(`@/assets/images/svg/feedback/trophy.svg`)" 
            alt=""
            class="home-feedback__title-icon"
          >
    
          <h2 class="home-feedback__title">
            Отзывы
          </h2>
        </div>
  
        <h3 class="home-feedback__subtitle">
          от москвичей до хабаровчан
        </h3>
  
        <div class="home-feedback__wrap">
          <div 
            v-for="(item, index) in feedback"
            :key="index"
            class="home-feedback__card"
          >
            <div class="home-feedback__card-top">
              <div class="home-feedback__author">
                <!-- <img 
                  :src="require(`@/assets/images/svg/feedback/${item.iconName}.svg`)" 
                  alt=""
                  class="home-feedback__author-icon"
                >
                <div class="home-feedback__author-avatar">
                  <img 
                    :src="require(`@/assets/images/svg/feedback/${item.avatarSrc}`)" 
                    alt=""
                    class="home-feedback__author-avatar-image"
                  >
                </div> -->
    
                <div class="home-feedback__author-text">
                  <div class="home-feedback__author-name">
                    {{ item.name }}
                  </div>
                  <!-- <div class="home-feedback__author-position">
                    {{ item.position }}
                  </div> -->
                </div>
              </div>
    
              <div class="home-feedback__card-description">
                {{ item.description }}
              </div>
            </div>
  
            <div class="home-feedback__card-rates">
              <div 
                v-for="star in parseInt(item.rate)"
                :key="star"  
                class="home-feedback__card-rate"
              >
                <img 
                  :src="require(`@/assets/images/svg/feedback/star.svg`)" 
                  alt=""
                  class="home-feedback__author-avatar-image"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </kinesis-container>
  </section>
</template>

<script>
import Parallax from '~/components/parallax';

export default {
  name: 'HomeQuestion',
  components: {
    Parallax,
  },

  data: () => ({
    feedback: [
      {
        name: 'Ксения',
        description: 'Все понравилось, отличная задумка и реализация) Брали на миникорпаратив, 1,5 часа прошли незаметно👍🏼👍🏼 Дальше Новый год, думать о развлечениях уже не нужно, у нас осталось еще примерно 170 игр😃😃 Спасибо за битву)',
        rate: '5',
      },
      {
        name: 'Дмитрий',
        description: 'Увидел игру у Жени Гришечкиной в шоу Гудморнинг)) Идея бомба! Простые правила, веселые игры, очень азартно играть) Особенно отмечу что не нужно долго вникать в правила, мы собирались компанией и изучать долго правила, как это обычно бывает в настолках, не хотелось. Тут открыл и сразу играешь) Респект, советую!',
        rate: '5',
      },
      {
        name: 'Анна',
        description: 'Классная, интересная игра. Все задания приходят через телеграмм бот, где расписаны подробные инструкции и даже нарисованы схематично. Впечатлило разнообразие и количество заданий: интеллектуальные, подвижные, на ловкость и т.д. Хотелось бы отметить удобную, компактную упаковку в виде цилиндра, в которой хранятся все реквизиты для игр. Все продумано до мелочей! Не нужно бегать искать ручку и листочек - все под рукой!',
        rate: '5',
      },
      {
        name: 'Полина',
        description: 'Лучшая игра для вечеринки! Купила специально чтобы поиграть компанией на Дне рождении у подруги, и это было лучшее решение)))) Не нужно заморачиваться над реквизитом, все в наборе. Разнообразие игр благодаря разным предметом в наборе. Простые правила, наша компания редко играет в настолки из-за сложных правил, а тут за 2 минуты все понятно, открыл и играй. Рекомендуем всем, кто планирует собраться с друзьями! Вы точно не будете тухнуть за столом👍🏼👍🏼👍🏼👍🏼',
        rate: '5',
      },
    ]
  }),
}
</script>

<style lang="scss" scoped>
.home-feedback__content {
  position: relative;
  @include container-1520;
  padding-top: 90px;
  padding-bottom: 90px;
  z-index: 200;

  @media screen and (max-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.home-feedback__wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 37px;
  margin-top: 54px;

  @media screen and (max-width: 1200px) {
    grid-gap: 20px;
  }

  @media screen and (max-width: 760px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
}

.home-feedback__inner {
  position: relative;
  z-index: 200;
}

.home-feedback__title-wrap {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.home-feedback__title {
  font-weight: 700;
  font-size: 86px;
  line-height: 125%;
  color: $white;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 42px;
  }
}

.home-feedback__title-icon {
  position: absolute;
  top: -15px;
  left: -65px;
}

.home-feedback__subtitle {
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
  color: $yellow-light;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
}

.home-feedback__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 22px;
  border: 1.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 40px;

  &:nth-child(1) {
    background-color: #72584E;
  }

  &:nth-child(2) {
    background-color: #683E2E;
  }

  &:nth-child(3) {
    background-color: #5C5540;
  }

  &:nth-child(4) {
    background-color: #513E50;
  }
}

.home-feedback__author {
  position: relative;
  display: flex;
  gap: 16px;
  margin-bottom: 30px;

  @media screen and (max-width: 760px) {
    margin-bottom: 15px;
  }
}

.home-feedback__author-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.home-feedback__author-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }
}

.home-feedback__author-name {
  font-weight: 700;
  font-size: 48px;
  line-height: 123.6%;
  color: $yellow;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    font-size: 32px;
  }
}

.home-feedback__author-position {
  margin-top: 4px;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #CAC0BD;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
}

.home-feedback__author-icon {
  position: absolute;
  bottom: -10px;
  left: 0;
}

.home-feedback__card-description {
  max-width: 285px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  @media screen and (max-width: 760px) {
    font-size: 14px;  
  }
}

.home-feedback__card-rates {
  display: grid;
  grid-template-columns: repeat(5, 40px);
  margin-top: 46px;
  gap: 25px;

  @media screen and (max-width: 1200px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(5, 30px);
  }
}

.home-feedback__card-rate {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  img {
    margin-left: 8px;
  }

  &:nth-child(2) {
    transform: rotate(4.96deg);
  }

  &:nth-child(3) {
    transform: rotate(-4.44deg);
  }
  
  &:nth-child(4) {
    transform: rotate(5.23deg); 
  }

  &:nth-child(5) {
    transform: rotate(-4.42deg);
  }
}
</style>