<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppStock from './Stock';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    AppStock
  }
};
</script>

<style lang="scss">

</style>
