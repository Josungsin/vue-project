<template>
  <ProvideInjectChild/>
</template>

<script>
import ProvideInjectChild from "@/views/ProvideInjectChild";
export default {
  name: "ProvideInject",
  components: {ProvideInjectChild},
  data(){
    return{
      item: ['A','B']
    }
  },
  provide(){
    return {
      itemLength: this.item.length
    }
  }
}
</script>

<style scoped>

</style>