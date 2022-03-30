<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The Counter is : {{ counter }}</p>

    <button type="button" @click="setCount(7)">Set 7</button>
    <p>The Counter2 is : {{ counter }}</p>

    <button type="button" @click="one(), two()">Click</button>
  </div>
</template>

<script>
export default {
  name: "EventClick",
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    setCount(counter) {
      this.counter = counter;
    },
    one() {
      alert('One');
    },
    two() {
      alert('Two');
    }
  }
}
</script>

<style scoped>

</style>