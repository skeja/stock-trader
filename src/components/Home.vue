<template>
  <div>
    <h1>Trade or View your portfolio</h1>
    <h6>You can save & load your data</h6>
    <h6>Click on end day to begin new day</h6>
    <hr>
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style lang="scss">

</style>
