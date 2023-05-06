<template>
  <section class="home-slider">
    <kinesis-container 
      event="scroll" 
      class="home-slider__content"
    >
      <parallax />

      <div class="home-slider__title-wrap">
        <h2 class="home-slider__title">
          Игровой процесс
        </h2>

        <img 
          :src="require(`@/assets/images/svg/slider/cubes.svg`)" 
          alt=""
          class="home-slider__title-icon"
        >
      </div>

      <h3 class="home-slider__subtitle">
        весело, драйвово, азартно
      </h3>

      <div class="home-slider__slider">
        <div class="home-slider__slider-container">
          <div v-swiper="sliderOptions" class="home-slider__slider-container">
            <div class="swiper-wrapper">
              <div
                v-for="image in images"
                :key="image.id"
                class="swiper-slide home-slider__slide"
              >
                <picture>
                  <source type="image/webp" :srcset="require(`@/assets/images/gallery/${image}.webp`)">
                  <img 
                    :src="require(`@/assets/images/gallery/${image}.jpg`)" 
                    alt="" 
                    class="home-slider__slide-image"
                  >
                </picture>
              </div>
            </div>
          </div>
        </div>

        <button type="button" class="home-slider__arrow home-slider__arrow_prev">
          <v-icon
            name="slider-arrow"
            :height="94"
            :width="94"
          />
        </button>
  
        <button type="button" class="home-slider__arrow home-slider__arrow_next">
          <v-icon
            name="slider-arrow"
            :height="94"
            :width="94"
          />
        </button>
      </div>
    </kinesis-container>
  </section>
</template>

<script>
import Parallax from '~/components/parallax';

export default {
  name: 'HomeSlider',
  components: {
    Parallax,
  },

  data: () => ({
    sliderOptions: {
      slidesPerView: 1.7, 
      centeredSlides: true,
      loop: true,
      loopedSlides: 2,
      spaceBetween: 0,
      navigation: {
        nextEl: '.home-slider__arrow_next',
        prevEl: '.home-slider__arrow_prev',
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 200,
        modifier: 2,
        slideShadows : true,
      },
      breakpoints: {
        500: {
          slidesPerView: 1.8,
          coverflowEffect: {
            rotate: 0,
            stretch: 10,
            depth: 180,
            modifier: 1.6,
            slideShadows : true,
          },
        },
        760: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
          loopedSlides: 3,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows : true,
          },
        },
      },
    },
    images: [
      '1',
      '2',
      '3',
      '4',
      '5',
    ],
  }),
}
</script>

<style lang="scss" scoped>

.home-slider__content {
  position: relative;
  @include container-1520;
  padding-top: 90px;
  padding-bottom: 90px;

  @media screen and (max-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.home-slider__title-wrap {
  position: relative;
  width: fit-content;
  margin:  0 auto;
}

.home-slider__title {
  font-weight: 700;
  font-size: 86px;
  line-height: 125%;
  color: $white;

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 42px;
  }
}

.home-slider__title-icon {
  position: absolute;
  top: -50px;
  left: -95px;
}

.home-slider__subtitle {
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: $yellow-light;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
}

.home-slider__desc {
  max-width: 635px;
  margin-top: 24px;
  font-family: 'Pangolin', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #CAC0BD;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
}

.home-slider__slider {
  position: relative;
  z-index: 200;
}

.home-slider__slider-container {
  max-width: 1236px;
  margin: 54px auto 0;
  z-index: 100;

  @media screen and (max-width: 1200px) {
    margin: 50px -15px 0;
  }

  @media screen and (max-width: 760px) {
    margin-top: 40px;
  }
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transition-property: transform;
}

.swiper-slide {
  position: relative;
  width: 400px;
  height: 491px;
  border-radius: 24px;
  overflow: hidden;

  img {
    display: block;
    margin: auto;
    width: 100%;  
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1200px) {
    height: 400px;
  }

  @media screen and (max-width: 760px) {
    height: 320px;
  }
}

.swiper-container-3d {
  perspective: 1200px;
}

::v-deep(.swiper-slide-shadow-right),
::v-deep(.swiper-slide-shadow-left) {
  background: linear-gradient(0deg, rgba(45, 20, 11, 0.5), rgba(45, 20, 11, 0.5));
}

.home-slider__arrow {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 94px;
  background: transparent;
  transform: translateY(-50%);
  transition: all .2s ease-in-out;
  z-index: 100;

  ::v-deep(g) {
    transition: all .2s ease-in-out;
  }

  ::v-deep(g) {
    filter: none;
  } 
  ::v-deep(path) {
    fill: $yellow;
  }

  &:hover { 
    ::v-deep(g) {
      filter: url(#filter0_d_286_1614);
    } 
    ::v-deep(path) {
      fill: #FFFFFF;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 760px) {
    width: 50px;
    height: 50px;
  }
}

.home-slider__arrow_prev {
  left: 0;

  svg {
    transform: rotate(180deg);
  }
}

.home-slider__arrow_next {
  right: 0;
}
</style>