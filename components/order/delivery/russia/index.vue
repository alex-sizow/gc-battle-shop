<template>
  <div class="delivery-russia">
    <div class="delivery-russia__inner delivery-russia__inner_top">
      <div class="delivery-russia__title">Доставка по России</div>

      <p class="delivery-russia__description">
        Для того чтобы приобрести игру с доставкой по России, перейдите на
        WILDBERRIES или OZON и оформите доставку в нужный регион
      </p>
    </div>

    <hr class="delivery-russia__hr" />

    <div class="delivery-russia__inner">
      <picture>
        <source
          type="image/webp"
          :srcset="require(`@/assets/images/wb.webp`)"
        />
        <img
          :src="require(`@/assets/images/wb.png`)"
          alt=""
          class="delivery-russia__image"
        />
      </picture>

      <v-button
        tag="a"
        href="https://www.wildberries.ru/catalog/88678594/detail.aspx?targetUrl=XS"
        target="_blank"
        class="delivery-russia__button"
      >
        Купить на wildberries
      </v-button>

      <p class="delivery-russia__description_center">
        Завершая оформление заказа, я соглашаюсь с условиями оферты и даю
        согласие на обработку своих персональных данных.
      </p>
    </div>
    <hr class="delivery-russia__hr" />
    <div class="delivery-russia__inner">
      <picture>
        <source
          type="image/webp"
          :srcset="require(`@/assets/images/ozon.png`)"
        />
        <img
          :src="require(`@/assets/images/ozon.png`)"
          alt=""
          class="delivery-russia__image"
        />
      </picture>

      <v-button
        tag="a"
        href="https://www.ozon.ru/brand/bitva-100515192/"
        target="_blank"
        class="delivery-russia__button"
      >
        Купить на ozon
      </v-button>
    </div>
  </div>
</template>

<script>
import VButton from "~/components/ui/v-button";

export default {
  name: "DeliveryRussia",
  components: {
    VButton,
  },
};
</script>

<style lang="scss" scoped>
.delivery-russia__inner {
  padding: 0 24px;
  margin-top: 20px;
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
}

.delivery-russia__inner_top {
  padding-top: 20px;
}

.delivery-russia__title {
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 40px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $white;

  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }
}

.delivery-russia__description {
  font-family: "Pangolin", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #cac0bd;
}

.delivery-russia__description_center {
  margin-top: 28px;
  font-family: "Pangolin", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #988c89;
  text-align: center;
}

.delivery-russia__hr {
  margin: 32px 0;
  background: url("@/assets/images/svg/order/underline_large.svg") no-repeat
    center;
  height: 5px;
  width: 100%;
  border: none;
}

.delivery-russia__button {
  margin-top: 32px;
}

.delivery-russia__image {
  width: 100%;
}
</style>
