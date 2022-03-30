<template>
  <child-component @send-message="sendMessage" ref="child_component"></child-component>
</template>

<script>
import ChildComponent from "@/views/ChildComponent";
export default {
  name: "ParnetComponent",
  components: {ChildComponent},
  methods(){
    this.$refs.child_component.childFunc()
  }
}
</script>

<style scoped>

</style>