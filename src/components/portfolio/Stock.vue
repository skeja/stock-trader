<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" min="0" placeholder="Quantity" v-model.number="quantity" :class="{ danger: insufitientQuantity }">
        </div>
        <div class="pull-right">
           <button
          @click="quantity = stock.quantity"
          class="btn btn-primary">
            Max ({{ stock.quantity }})
          </button>
          <button
          class="btn btn-success"
          @click="sellStocks"
          :disabled="insufitientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          >{{insufitientQuantity ? 'Inusitient quantity' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ['stock'],
  computed: {
    insufitientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions(['sellStock']),
    sellStocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
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
