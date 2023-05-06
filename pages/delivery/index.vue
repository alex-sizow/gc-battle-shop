<template>
  <div class="delivery">
    <div class="delivery__content">
      <v-title class="delivery__title"> Доставка и оплата </v-title>

      <div class="delivery__wrap">
        <v-expansion-panel
          v-for="(block, index) in blocks"
          :key="index"
          :block="block"
          @toggle="block.isOpened = $event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VExpansionPanel from "~/components/ui/v-expansion-panel";
import VTitle from "~/components/ui/v-title";

export default {
  name: "Delivery",
  components: {
    VTitle,
    VExpansionPanel,
  },

  data: () => ({
    blocks: [
      {
        title: "Курьерская доставка по Москве",
        description:
          "Если срочна нужна игра, отправим курьером по Москве. Доставка оплачивается отдельно.",
        isOpened: false,
      },
      {
        title: "Доставка по России",
        description:
          "Доставка по России осуществляется через Wildberries или Ozon. Добавьте игру в корзину, в разделе способ получения заказа выберите «Доставка по России» и перейдите по ссылке на Wildberries или Ozn.",
        isOpened: false,
      },
      {
        title: "Самовывоз",
        description:
          "Вы можете приехать к нам в офис по адресу Москва, Бакунинская ул., 74-76к1. С понедельника по пятницу, с 10:00 до 19:00.",
        isOpened: false,
      },
      {
        title: "Способы оплаты",
        description:
          "Принимаем онлайн оплату и наличные при самовывозе из нашего офиса в Москве.",
        isOpened: false,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.delivery {
  background: #26120b;
  min-height: 100vh;
  padding-top: 150px;
  padding-bottom: 100px;

  @media screen and (max-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
}

.delivery__content {
  @include container-1520;
}

.delivery__title {
  margin: 0 auto;
  text-align: center;
}

.delivery__wrap {
  margin: 70px auto 0;
  max-width: 555px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    margin: 40px auto 0;
  }
}
</style>
