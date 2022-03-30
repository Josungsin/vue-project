<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">Data binding</router-link> |
    <router-link to="/databindinghtml">Data Binding Html</router-link> |
    <router-link to="/databindinginputtext">Input Text</router-link> |
    <router-link to="/databindinginputnumber">Input Number</router-link> |
    <router-link to="/databindingtextarea">Textarea</router-link> |
    <router-link to="/databindingselect">Select</router-link> |
    <router-link to="/databindingcheckbox">CheckBox</router-link> |
    <router-link to="/databindingcheckbox2">CheckBox2</router-link> |
    <router-link to="/databindingradio">Radio</router-link> |
    <router-link to="/databindingattribue">Image</router-link> |
    <router-link to="/databindingbutton">Button</router-link> |
    <router-link to="/databindingclass">Class</router-link> |
    <router-link to="/databindingclass2">Class2</router-link> |
    <router-link to="/databindingstyle">Style</router-link> |
    <router-link to="/databindinglist">List</router-link> |
    <router-link to="/renderinfvif">VIf</router-link> |
    <router-link to="/eventclick">Click</router-link> |
    <router-link to="/eventchange">Change</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/databindinglist2">List 2</router-link> |
    <router-link to="/nestedcomponent">Nested</router-link> |
    <router-link to="/parentcomponent">Parent</router-link> |
    <router-link to="/parentcomponent2">Parent2</router-link> |
    <router-link to="/parentcomponent3">Parent3</router-link> |
    <router-link to="/parentcomponent4">Parent4</router-link> |
    <router-link to="/parentcomponent5">Parent5</router-link> |
    <router-link to="/slotusemodallayout">Slot</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link> |
    <router-link to="/calculatortest">Calculator</router-link> |
    <router-link to="/compositionsapi">CompositionAPI</router-link> |
    <router-link to="/compositionsapi2">CompositionAPI2</router-link> |
    <router-link to="/compositionsapi3">CompositionAPI3</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {}
}
</script>