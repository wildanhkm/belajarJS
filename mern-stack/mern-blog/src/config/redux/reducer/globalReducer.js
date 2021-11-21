const initialState = {
  name: "Wildan Hakim",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Wildan",
    };
  }
  return state;
};

export default globalReducer;
