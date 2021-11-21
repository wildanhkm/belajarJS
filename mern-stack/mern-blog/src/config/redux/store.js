const { createStore } = require("redux");

const initialState = {
  dataBlog: [],
  name: "Wildan Hakim",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);
export default store;
