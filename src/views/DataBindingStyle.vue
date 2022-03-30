<template>
  <div :style="styleObject">
    인라인 스타일 바인딩
  </div>
</template>

<script>
export default {
  name: "DataBindingStyle",
  data(){
    return{
      styleObject:{
        color: 'red',
        fondSize:'13px'
      }
    }
  }
}
</script>

<style scoped>

</style>