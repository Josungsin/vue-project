<template>
  <div>
    <h1>Full Name : {{ fullName }}</h1>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Watch",
  data() {
    return {
      firstName: 'Sungsin',
      lastName: 'Jo',
      fullName: ''
    }
  },
  watch: {
    firstName() {
     this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    changeName(){
      this.firstName = 'change';
    }
  }
}
</script>

<style scoped>

</style>