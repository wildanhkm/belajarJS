import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
const { combineReducers } = require("redux");

const reducer = combineReducers({ homeReducer, globalReducer });

export default reducer;
