<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
            <button @click="showChart = !showChart" class="btn btn-info" id="chartBtn">Price chart</button>
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body" v-if="!showChart">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            min="0"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{ danger: insufitientFunds }">
        </div>
        <div class="pull-right">
          <button
          @click="quantity = max"
          class="btn btn-primary"
          id="maxBuy">
            Max ({{ max }})
          </button>
          <button
            :disabled="insufitientFunds || quantity <= 0 || !Number.isInteger(quantity)"
            @click="buyStock"
            class="btn btn-success">
            {{ insufitientFunds ? 'Insufitient Funds' : 'Buy' }}
            </button>
        </div>
      </div>
      <div class="panel-body" v-else>
        <app-stock-chart v-bind="stock" ></app-stock-chart>
      </div>
    </div>
  </div>
</template>

<script>
import AppStockChart from './StockChart';
export default {
  data() {
    return {
      quantity: 0,
      showChart: false
    };
  },
  components: {
    AppStockChart
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufitientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    max() {
      return Math.floor(this.funds / this.stock.price);
    }
  },
  props: ['stock'],
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('buyStocks', order);
      this.quantity = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
  .danger {
    border: 1px solid red;
  }
  #chartBtn {
    float: right;
    padding: 4px;
    margin: 1%;
  }
  input {
    width: 150px;
  }
</style>
