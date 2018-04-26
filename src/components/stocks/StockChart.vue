<template>
  <div class="small">
    <line-chart :chartData="datacollection" :options="chartOptions" :height="200"></line-chart>
  </div>
</template>

<script>
import LineChart from '../../LineChart';

export default {
  components: {
    LineChart
  },
  props: ['history', 'name'],
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    };
  },
  computed: {
    datacollection() {
      return {
        labels: Object.values(this.history),
        datasets: [{
          label: [this.name],
          backgroundColor: 'f87979',
          data: Object.values(this.history)
        }]
      };
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
