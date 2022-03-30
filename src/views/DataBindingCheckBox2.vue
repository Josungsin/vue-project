<template>
  <div>
    <label><input type="checkbox" value="서울" v-model="checked" />서울</label>
    <label><input type="checkbox" value="부산" v-model="checked" />부산</label>
    <label><input type="checkbox" value="제주도" v-model="checked" />제주도</label>
    <br>
    <span>체크한 지역: {{ checked }}</span>
  </div>
</template>

<script>
export default {
  name: "DataBindingCheckBox2",
  data() {
    return {
      checked: []
    }
  }
}
</script>

<style scoped>

</style>