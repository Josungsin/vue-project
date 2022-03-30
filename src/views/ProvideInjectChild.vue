<template>
  <h1> Hi! </h1>
</template>

<script>
export default {
  name: "ProvideInjectChild",
  inject: ['itemLength'],
  mounted() {
    console.log(this.itemLength);
  }
}
</script>

<style scoped>

</style>