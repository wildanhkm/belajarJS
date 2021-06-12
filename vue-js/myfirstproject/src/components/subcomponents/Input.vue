<template>
  <div v-if="type === text">
    <input type="text" name="text" />
  </div>
  <div v-else-if="type === date">
    <input type="datetime-local" name="date" />
  </div>
  <div v-else>
    <input type="number" name="number" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
