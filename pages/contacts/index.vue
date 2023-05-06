<template>
  <div class="contacts">
    <div class="contacts__content">
      <contacts-info />

      <contacts-form />
    </div>
  </div>
</template>

<script>
import ContactsInfo from '~/components/contacts/info';
import ContactsForm from '~/components/contacts/form';

export default {
  name: 'Contacts',
  components: {
    ContactsInfo,
    ContactsForm,
  },
}
</script>

<style lang="scss" scoped>
.contacts {
  background: #26120B;
  min-height: 100vh;
  padding-top: 150px;
  padding-bottom: 100px;

  @media screen and (max-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
}

.contacts__content {
  @include container-1520;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 80px;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
}
</style>