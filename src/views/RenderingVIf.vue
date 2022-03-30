<template>
  <div>
    <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if="type == 'B'">B</h1>
    <h1 v-else>C</h1>
    <h1 v-show="bShow">Hi</h1>
  </div>
</template>

<script>
export default {
  name: "RenderingVIf",
  data(){
    return{
      type: 'A',
      bShow: true
    }
  }
}
</script>

<style scoped>

</style>