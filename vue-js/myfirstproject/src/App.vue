<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <Radio value1="Radio 1" value2="Radio 2" value3="Radio 3" />
  </div>
</template>

<script>
import Radio from "./components/Radio.vue";

export default {
  name: "App",
  components: {
    Radio
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
