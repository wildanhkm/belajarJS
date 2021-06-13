<template>
  <div class="container">
    <p>Name</p>
    <ul id="radios">
      <li>
        <input type="radio" name="radio" />
        <label for="radio">{{ value1 }}</label>
        <input type="radio" name="radio" />
        <label for="radio">{{ value2 }}</label>
        <input type="radio" name="radio" />
        <label for="radio">{{ value3 }}</label>
      </li>
    </ul>
    <p>Subcomponents</p>
    <ul id="subcomponents">
      <li>
        <input type="radio" name="radio" />
        <Input type="text" />
      </li>
      <li>
        <input type="radio" name="radio" />
        <Input type="date" />
      </li>
      <li>
        <input type="radio" name="radio" />
        <Input type="number" />
      </li>
    </ul>
  </div>
</template>

<script>
import Input from "./subcomponents/Input";
export default {
  Input: Input,
  name: "Radio",
  props: {
    value1: String,
    value2: String,
    value3: String
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}

#radios {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#radios > li {
  list-style-type: none;
}

#subcomponents {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#subcomponents > li {
  list-style-type: none;
  margin: 1rem 0;
}
</style>
