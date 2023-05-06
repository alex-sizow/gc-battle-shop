<template>
  <section class="home-features">
    <kinesis-container 
      event="scroll"
      class="home-features__content"
    >
      <parallax />

      <div class="home-features__features">
        <div 
          v-for="(feature, index) in features"
          :key="index"
          class="home-features__feature"
        >
          <img 
            :src="require(`@/assets/images/svg/features/ball-${feature.iconColor}.svg`)" 
            alt=""
            class="home-features__feature-icon"
          >

          <div class="home-features__feature-text">
            <h3 class="home-features__feature-title">
              {{ feature.title }}
            </h3>
        
            <p class="home-features__feature-desc">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="home-features__image-wrap">
        <img 
          :src="require(`@/assets/images/two-cards.png`)" 
          alt=""
          class="home-features__image"
        >
      </div>
    </kinesis-container>
  </section>
</template>

<script>
import Parallax from '~/components/parallax';

export default {
  name: 'HomeFeatures',
  components: {
    Parallax,
  },

  data: () => ({
    features: [
      {
        title: 'Быстро, легко и весело',
        description: 'Для того, чтобы начать играть в битву, не нужно долго изучать правила. Идеально подходит для большой компании, когда не хочется долго читать инструкцию.',
        iconColor: 'green',
      },
      {
        title: 'Веселые соревнования!',
        description: 'Битва - единственная настолка, где все игроки не сидят на месте. Тем не менее, внутри есть и интеллектуальные игры, например, квиз на тему «Угадай мультфильм по музыкальной заставке».',
        iconColor: 'yellow',
      },
      {
        title: 'Подходит для детей и взрослых',
        description: 'Игра подойдет для теплого семейного вечера, которая точно сплотит родителей и детей, так и для деловых коллег на очередном корпоративе.',
        iconColor: 'blue',
      },
      {
        title: 'Гибкие правила',
        description: 'Вы можете закончить в любой момент! Просто остановите игру и посчитайте количество баллов игроков, определите победителя. Возобновите игру, когда вам снова станет скучно :)',
        iconColor: 'pink',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.home-features__content {
  position: relative;
  @include container-1520;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 85px;
  padding-top: 90px;
  padding-bottom: 90px;

  @media screen and (max-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
}

.home-features__features {
  max-width: 750px;
}

.home-features__image-wrap {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 200;
}

.home-features__image {
  width: 36vw;
  max-width: 100%;

  @media screen and (max-width: 760px) {
    width: 80%;
    margin: 0 auto;
  }
}

.home-features__feature {
  display: flex;
  align-items: flex-start;
  gap: 24px;

  img {
    margin-top: 10px;
  }

  &:not(:nth-child(1)) {
    margin-top: 48px;

    
    @media screen and (max-width: 1200px) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    gap: 12px;

    img {
      margin-top: 5px;
    }
  }
}

.home-features__feature-icon {
  @media screen and (max-width: 1200px) {
    max-width: 34px;
  }
}

.home-features__feature-title {
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  color: $yellow-light;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
}

.home-features__feature-desc {
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #CAC0BD;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
}
</style>