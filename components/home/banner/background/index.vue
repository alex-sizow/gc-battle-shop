<template>
  <div class="banner-background">
    <picture>
      <source type="image/webp" :srcset="require(`@/assets/images/background/floor.webp`)">
      <img 
        :src="require(`@/assets/images/background/floor.jpg`)" 
        alt="" 
        class="banner-background__image"
      >
    </picture>

    <div class="banner-background__content">
      <div class="banner-background__glasses">
        <glass1 class="banner-background__glass" />
        <glass2 class="banner-background__glass" />
        <glass3 class="banner-background__glass" />
        <glass4 class="banner-background__glass" />
      </div>

      <div class="banner-background__cards">
        <card1 class="banner-background__card" />
        <card2 class="banner-background__card" />
        <card3 class="banner-background__card" />
        <card4 class="banner-background__card" />
        <card5 class="banner-background__card" />
        <card6 class="banner-background__card" />
        <card7 class="banner-background__card" />
        <card8 class="banner-background__card" />
      </div>

      <div class="banner-background__balls">
        <ball1 class="banner-background__ball" />
        <ball2 class="banner-background__ball" />
        <ball3 class="banner-background__ball" />
        <ball4 class="banner-background__ball" />
        <ball5 class="banner-background__ball" />
      </div>

      <div class="banner-background__cubes">
        <cube1 class="banner-background__cube" />
        <cube2 class="banner-background__cube" />
        <cube3 class="banner-background__cube" />
        <cube4 class="banner-background__cube" />
        <cube5 class="banner-background__cube" />
        <cube6 class="banner-background__cube" />
        <cube7 class="banner-background__cube" />
      </div>
    </div>
  </div>
</template>

<script>
import Glass1 from '@/assets/images/background/glasses/1.svg?inline';
import Glass2 from '@/assets/images/background/glasses/2.svg?inline';
import Glass3 from '@/assets/images/background/glasses/3.svg?inline';
import Glass4 from '@/assets/images/background/glasses/4.svg?inline';

import Card1 from '@/assets/images/background/cards/1.svg?inline';
import Card2 from '@/assets/images/background/cards/2.svg?inline';
import Card3 from '@/assets/images/background/cards/3.svg?inline';
import Card4 from '@/assets/images/background/cards/4.svg?inline';
import Card5 from '@/assets/images/background/cards/5.svg?inline';
import Card6 from '@/assets/images/background/cards/6.svg?inline';
import Card7 from '@/assets/images/background/cards/7.svg?inline';
import Card8 from '@/assets/images/background/cards/8.svg?inline';

import Ball1 from '@/assets/images/background/balls/1.svg?inline';
import Ball2 from '@/assets/images/background/balls/2.svg?inline';
import Ball3 from '@/assets/images/background/balls/3.svg?inline';
import Ball4 from '@/assets/images/background/balls/4.svg?inline';
import Ball5 from '@/assets/images/background/balls/5.svg?inline';

import Cube1 from '@/assets/images/background/cubes/1.svg?inline';
import Cube2 from '@/assets/images/background/cubes/2.svg?inline';
import Cube3 from '@/assets/images/background/cubes/3.svg?inline';
import Cube4 from '@/assets/images/background/cubes/4.svg?inline';
import Cube5 from '@/assets/images/background/cubes/5.svg?inline';
import Cube6 from '@/assets/images/background/cubes/6.svg?inline';
import Cube7 from '@/assets/images/background/cubes/7.svg?inline';

export default {
  name: 'BannerBackground',
  components: {
    Glass1,
    Glass2,
    Glass3,
    Glass4,

    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
    Card7,
    Card8,

    Ball1,
    Ball2,
    Ball3,
    Ball4,
    Ball5,

    Cube1,
    Cube2,
    Cube3,
    Cube4,
    Cube5,
    Cube6,
    Cube7,
  },
}
</script>

<style lang="scss" scoped>
.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.banner-background__image {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-background__content {
  position: relative;
  max-width: 1600px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.banner-background__glass {
  min-width: 140px;

  &:nth-child(1) {
    position: absolute;
    top: -75px;
    left: -1.5vw;
    width: 14vw;
    z-index: 2;
  }

  &:nth-child(2) {
    position: absolute;
    bottom: 2vh;
    left: -7vw;
    width: 17vw;
    z-index: 2;
  }

  &:nth-child(3) {
    position: absolute;
    bottom: 30vh;
    right: -5vw;
    width: 15vw;
    z-index: 2;
  }

  &:nth-child(4) {
    position: absolute;
    bottom: 24vh;
    right: 4vw;
    width: 17vw;
    z-index: 2;
  }
}

.banner-background__card {
  min-width: 150px;

  &:nth-child(1) {
    position: absolute;
    bottom: -11vh;
    left: 34%;
    width: 20vw;
    z-index: 2;
    min-width: 200px;
  }

  &:nth-child(2) {
    position: absolute;
    bottom: -12vh;
    left: 48%;
    width: 20vw;
    z-index: 1;
    min-width: 200px;
  }

  &:nth-child(3) {
    position: absolute;
    bottom: 20vh;
    left: 0vw;
    width: 15vw;
    z-index: 1;
  }

  &:nth-child(4) {
    position: absolute;
    bottom: 8vh;
    right: -5vw;
    width: 16vw;
    z-index: 1;
  }

  &:nth-child(5) {
    position: absolute;
    top: 9vh;
    left: -4vw;
    width: 15vw;
    z-index: 1;
  }

  &:nth-child(6) {
    position: absolute;
    top: 28vh;
    left: -12vw;
    width: 20vw;
    z-index: 0;
    min-width: 200px;
  }

  &:nth-child(7) {
    position: absolute;
    top: 4vh;
    right: -8vw;
    width: 19vw;
    z-index: 0;
    min-width: 200px;
  }

  
  &:nth-child(8) {
    position: absolute;
    top: 25vh;
    right: -10vw;
    width: 20vw;
    z-index: 0;
    min-width: 200px;
  }
}

.banner-background__ball {
  min-width: 60px;

  &:nth-child(1) {
    position: absolute;
    top: 12vh;
    right: 7vw;
    width: 7vw;
    z-index: 2;
  }

  &:nth-child(2) {
    position: absolute;
    top: 36vh;
    right: 4vw;
    width: 7vw;
    z-index: 2;
  }

  &:nth-child(3) {
    position: absolute;
    bottom: 32vh;
    left: 10vw;
    width: 7vw;
    z-index: 2;
  }

  &:nth-child(4) {
    position: absolute;
    bottom: 12vh;
    left: 17vw;
    width: 7vw;
    z-index: 2;
  }

  &:nth-child(5) {
    position: absolute;
    top: 8vh;
    right: 16vw;
    width: 7vw;
    z-index: 2;
  }
}

.banner-background__cube {
  min-width: 40px;

  &:nth-child(1) {
    position: absolute;
    bottom: 18vh;
    right: 23vw;
    width: 4vw;
    z-index: 2;
  }

  &:nth-child(2) {
    position: absolute;
    top: 18vh;
    left: 6vw;
    width: 4vw;
    z-index: 2;
  }

  &:nth-child(3) {
    position: absolute;
    top: 30vh;
    left: 7vw;
    width: 4vw;
    z-index: 2;
  }

  &:nth-child(4) {
    position: absolute;
    top: 31vh;
    left: -1vw;
    width: 4vw;
    z-index: 2;
  }

  &:nth-child(5) {
    position: absolute;
    bottom: 22vh;
    right: 17vw;
    width: 4vw;
    z-index: 2;
  }

  &:nth-child(6) {
    position: absolute;
    bottom: 12vh;
    left: 13vw;
    width: 4vw;
    z-index: 2;
  }

  &:nth-child(7) {
    position: absolute;
    bottom: 10vh;
    right: 16vw;
    width: 4vw;
    z-index: 2;
  }
}
</style>