<template>
  <h1> Full Name : {{ fullName }}</h1>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Computed",
  data() {
    return {
      firstName: 'Sungsin',
      lastName: 'Jo'
    }
  },
  computed: {
    fullName(){
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>