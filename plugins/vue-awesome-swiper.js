import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay, Thumbs, EffectFade, EffectCoverflow } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, Thumbs, EffectFade, EffectCoverflow]);

Vue.use(getAwesomeSwiper(SwiperClass));