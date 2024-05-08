import { createStore } from "vuex";
import demo from "./modules/demo";
import product from "./modules/product";
export default createStore({
  modules: {
    demo,
    product
  }
});