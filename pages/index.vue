<template>
  <div class="homepage">
    <home-banner />

    <home-about />

    <home-slider />

    <home-question />

    <home-features />

    <home-feedback />

    <home-video id="gameVideo"/>

    <home-callback />
  </div>
</template>

<script>
import HomeBanner from '~/components/home/banner';
import HomeAbout from '~/components/home/about';
import HomeSlider from '~/components/home/slider';
import HomeQuestion from '~/components/home/question';
import HomeFeatures from '~/components/home/features';
import HomeFeedback from '~/components/home/feedback';
import HomeVideo from '~/components/home/video';
import HomeCallback from '~/components/home/callback';

export default {
  name: 'Homepage',
  components: {
    HomeBanner,
    HomeAbout,
    HomeSlider,
    HomeQuestion,
    HomeFeatures,
    HomeFeedback,
    HomeVideo,
    HomeCallback,
  },

  mounted () {
    if (this.$route.hash) {
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash () {
      const hash=this.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    }
  }
}
</script>

<style  lang="scss" scoped>
.homepage {
  background: #26120B;
  overflow: hidden;
}
</style>
