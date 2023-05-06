<template>
  <div class="error">
    <div class="error__title">404</div>
    <div class="error__description">
      Страница которую вы ищите не найдена. Вы можете вернуться на
      <nuxt-link :to="{ name: 'cart' }">главную.</nuxt-link>
    </div>
    <div class="error__image"><Face /></div>
  </div>
</template>

<script>
import Face from "@/assets/images/404/face.svg?inline";
export default {
  components: {
    Face,
  },
};
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding-top: 120px;
  padding-bottom: 511px;

  @media (max-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 483px;
  }
  @media (max-width: 760px) {
    padding-top: 0px;
    padding-bottom: 338px;
  }
}
.error__title {
  color: #f8dc6c;
  font-weight: 700;
  font-size: 276.437px;
  line-height: 123.6%;
  text-shadow: 0px 0px 64.7899px rgba(255, 255, 255, 0.48);
}
.error__description {
  font-family: "Pangolin";
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  padding: 0 10px;
  letter-spacing: 0.02em;
  a {
    color: rgba(254, 200, 47, 1);
    background: linear-gradient(
      to left,
      rgba(254, 200, 47, 1),
      rgba(254, 200, 47, 1) 100%
    );
    background-position: 0 89.5%;
    background-size: 100% 0.5px;
    background-repeat: repeat-x;
  }
}
.error__image {
  position: relative;
  display: flex;
  justify-content: center;
  svg {
    position: absolute;
    top: 60px;
    @media (max-width: 1200px) {
      top: 30px;
    }
    @media (max-width: 760px) {
      top: -75px;
      width: 260px;
    }
  }
}
</style>
