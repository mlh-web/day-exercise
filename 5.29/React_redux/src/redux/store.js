import { createStore } from "redux";
import reducers from "./reducers";

//创建store
const store = createStore(reducers);
// 暴露出去
export default store;
