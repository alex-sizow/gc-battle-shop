<template>
  <section class="home-about" id="aboutGame">
    <kinesis-container 
      class="home-about__content" 
      event="scroll"
    >
      <parallax />

      <div class="home-about__left">
        <div 
          v-for="(block, index) in blocks.slice(0, 2)"
          :key="index"
          class="home-about__block"
        >
          <img 
            :src="require(`@/assets/images/svg/about/${block.arrowIconName}`)" 
            alt=""
            class="home-about__block-arrow"
          >

          <img 
            :src="require(`@/assets/images/svg/about/${block.iconName}`)" 
            alt=""
            class="home-about__block-img"
          >

          <h3 class="home-about__block-title">
            {{ block.title }}
          </h3>

          <h4 class="home-about__block-subtitle">
            {{ block.subtitle }}
          </h4>

          <p class="home-about__block-desc">
            {{ block.description }}
          </p>
        </div>
      </div>

      <div class="home-about__img-wrap">
        <img 
          :src="require(`@/assets/images/game-box.png`)" 
          alt=""
          class="home-about__img"
        >

        <img 
          :src="require(`@/assets/images/svg/about/arrow5.svg`)" 
          alt=""
          class="home-about__block-arrow_mobile"
        >
      </div>

      <div class="home-about__right">
        <div 
          v-for="(block, index) in blocks.slice(2, 4)"
          :key="index"
          class="home-about__block"
        >
          <img 
            :src="require(`@/assets/images/svg/about/${block.arrowIconName}`)" 
            alt=""
            class="home-about__block-arrow"
          >

          <img 
            :src="require(`@/assets/images/svg/about/${block.iconName}`)" 
            alt=""
            class="home-about__block-img"
          >

          <h3 class="home-about__block-title">
            {{ block.title }}
          </h3>

          <h4 class="home-about__block-subtitle">
            {{ block.subtitle }}
          </h4>

          <p class="home-about__block-desc">
            {{ block.description }}
          </p>
        </div>
      </div>
    </kinesis-container>
  </section>
</template>

<script>
import Parallax from '~/components/parallax';

export default {
  name: 'HomeAbout',
  components: {
    Parallax,
  },

  data: () => ({
    blocks: [
      {
        title: 'Идеально для вечеринки',
        subtitle: '',
        description: 'Если вы не хотите сидеть за столом, весь вечер есть салатики и искать темы для разговора - попробуйте битву! Начиная с первой игры все гости будут активничать, общаться между собой, и, конечно, пытаться победить!',
        iconName: 'crown.svg',
        arrowIconName: 'arrow1.svg',
      },
      {
        title: 'Максимально просто',
        subtitle: '',
        description: 'Вы когда-нибудь играли в настолки? Помните, как много времени уходит на то, чтобы понять правила, а потом еще объяснить всем остальным. Обычно на втором этапе половина друзей уходит на кухню или балкон. С Битвой всё намного проще, открыл коробку и сразу начал играть. Ведь правило одно - побеждает тот, кто наберёт большего всего очков побеждая в соревнованиях.',
        iconName: 'dice.svg',
        arrowIconName: 'arrow2.svg',
      },
      {
        title: '200 игр в одной коробке',
        subtitle: '',
        description: 'Перемещайте шарики, всасывая их через трубочку на скорость, быстрее всех постройте пирамиду из стаканчиков только при помощи локтей или первым забросьте 5 шариков отскоком от стола во все стаканы. Мы подготовили для вас сотню различных игр, в которые смогут играть как взрослые, так и дети. Можно взять с собой на дачу, или принести в офис на День Рождения коллеги. Реквизит для игр уже в коробке!',
        iconName: 'hourglass.svg',
        arrowIconName: 'arrow3.svg',
      },
      {
        title: 'Что в коробке?',
        subtitle: '',
        description: 'Для разнообразия игр мы подготовили специальные предметы. В коробке вы найдете: 10 стаканчиков, 5 шариков, 4 игральных кубика, палочки, стикеры, сантиметр, песочные часы, ручку, резинки, 10 карточек.',
        iconName: 'cup.svg',
        arrowIconName: 'arrow4.svg',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>

.home-about__content {
  position: relative;
  @include container-1520;
  padding-top: 320px;
  padding-bottom: 90px;
  display: grid;
  grid-template-columns: 1fr minmax(400px, 500px) 1fr;
  justify-content: space-between;
  z-index: 100;
  
  @media screen and (max-width: 1100px) {
    padding-top: 80px;
    padding-bottom: 50px;
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
}

.home-about__left {
  display: grid;
  grid-gap: 160px;

  @media screen and (max-width: 1100px) {
    order: 2;
    grid-gap: 40px;
  }
}

.home-about__right {
  display: grid;
  justify-content: flex-end;
  grid-gap: 120px;

  @media screen and (max-width: 1100px) {
    order: 3;
    grid-gap: 40px;
    justify-content: flex-start;
  }
}

.home-about__block {
  position: relative;
  
  .home-about__left & {
    max-width: 500px;
    padding-left: 70px;

    @media screen and (max-width: 1100px) {
      max-width: 100%;
      padding-left: 0;
    }
  }

  .home-about__right & {
    max-width: 440px;

    @media screen and (max-width: 1100px) {
      max-width: 100%;
      padding-left: 0;
    }
  }
}

.home-about__block-arrow {
  position: absolute;
  z-index: 200;

  .home-about__left .home-about__block:nth-child(1) & {
    top: -175px;
    right: -175px;
  }
  .home-about__left .home-about__block:nth-child(2) & {
    top: -105px;
    right: -125px;
  }

  .home-about__right .home-about__block:nth-child(1) & {
    top: -140px;
    left: -250px;
  }
  .home-about__right .home-about__block:nth-child(2) & {
    top: -150px;
    left: -225px;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
}

.home-about__block-img {
  position: absolute;

  @media screen and (max-width: 1100px) {
    position: static;
    margin-bottom: 30px;
  }

  
  .home-about__left .home-about__block:nth-child(1) & {
    left: 0;
    top: -45px;
  }
  .home-about__left .home-about__block:nth-child(2) & {
    left: 22px;
    top: -45px;
  }

  .home-about__right .home-about__block:nth-child(1) & {
    left: -32px;
    top: -45px;
  }
  .home-about__right .home-about__block:nth-child(2) & {
    left: -25px;
    top: -70px;
  }
}

.home-about__block-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 123.6%;
  color: $white;

  @media screen and (max-width: 1390px) {
    font-size: 38px;
  }
}

.home-about__block-subtitle {
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: $yellow-light;

  @media screen and (max-width: 1390px) {
    font-size: 20px;
  }
}

.home-about__block-desc {  
  margin-top: 11px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #CAC0BD;

  @media screen and (max-width: 1390px) {
    font-size: 14px;
  }
}

.home-about__img-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: fit-content;

  @media screen and (max-width: 1100px) {
    order: 1;
  }
}

.home-about__block-arrow_mobile {
  position: absolute;
  top: 43%;
  left: 50%;

  @media screen and (min-width: 1100px) {
    display: none;
  }
}

.home-about__img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -130px;
  max-height: 700px;
  z-index: 200;
  // height: 37vw;

  @media screen and (max-width: 1390px) {
    max-height: 600px;
  }

  @media screen and (max-width: 1100px) {
    position: static;
    transform: translateX(0);
    max-height: 396px;
  }
}
</style>