<template>
  <div class="parallax">
    <kinesis-element
      :strength="400"
      type="translate"
      class="parallax__element"
    >
      <img 
        :src="require(`@/assets/images/svg/parallax/group1.svg`)" 
        alt="" 
      >
    </kinesis-element>

    <kinesis-element
      :strength="300"
      type="translate"
      class="parallax__element"
    >
      <img 
        :src="require(`@/assets/images/svg/parallax/group2.svg`)" 
        alt="" 
      >
    </kinesis-element>

    <kinesis-element
      :strength="200"
      type="translate"
      class="parallax__element"
    >
      <img 
        :src="require(`@/assets/images/svg/parallax/group3.svg`)" 
        alt="" 
      >
    </kinesis-element>

    <kinesis-element
      :strength="100"
      type="translate"
      class="parallax__element"
    >
      <img 
        :src="require(`@/assets/images/svg/parallax/group4.svg`)" 
        alt="" 
      >
    </kinesis-element>
  </div>
</template>

<script>
export default {
  name: 'Parallax',

  data: () => ({
    isScrolled: false,
    isAnimated: true,
  }), 

  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },

  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll);
	// },

  // methods: {
  //   handleScroll() {
  //     this.isScrolled = true;
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.parallax {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 100;
}

// @keyframes drop {
//   0%{
//     transform: translateY(-100vh);
//   }
//   50%{
//     transform: translateY(0);
//   }
//   100%{
//     transform: translateY(100vh);
//   }
// }
.parallax__element {
  position: absolute;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;

  // img {
  //   animation: drop 180s linear infinite;

  // }

  &:nth-child(1) {
    top: -10px;
    left: -100px;
  }

  &:nth-child(2) {
    top: 70px;
    left: 0px;
    // animation-delay: 2s;
  }

  &:nth-child(3) {
    top: 10px;
    left: -120px;
    // animation-delay: 3s;
  }

  &:nth-child(4) {
    top: 20px;
    left: -150px;
    // animation-delay: 4s;
  }

  // &.animated {
  //   animation: drop 180s linear infinite;
  // }
}

</style>