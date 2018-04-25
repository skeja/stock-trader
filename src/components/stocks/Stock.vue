<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
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
          class="btn btn-primary"
          @click="buyMax"
          >
            Buy max
          </button>
          <button
            :disabled="insufitientFunds || quantity <= 0 || !Number.isInteger(quantity)"
            @click="buyStock"
            class="btn btn-success">
            {{ insufitientFunds ? 'Insufitient Funds' : 'Buy' }}
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufitientFunds() {
      return this.quantity * this.stock.price > this.funds;
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
      console.log(order);
      this.$store.dispatch('buyStocks', order);
      this.quantity = 0;
    },
    buyMax() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Math.floor(this.funds / this.stock.price)
      };
      console.log(order);
      confirm(`You are going to buy ${order.quantity} stocks of ${this.stock.name}. Are you sure?`);
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
</style>
