import { computed } from "vue";
import { createNamespacedHelpers, useStore } from "vuex";

const useFunctionHandle = (moduleName, mapper, mapFn) => {
  let mapperFn = mapFn;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName)[mapFn];
  } else {
    mapper = moduleName;
  }

  const store = useStore();
  const tempFns = mapperFn(mapper);
  const storeFns = {};
  Object.keys(tempFns).forEach((keyFn) => {
    storeFns[keyFn] = tempFns[keyFn].bind({ $store: store });
  });
  return storeFns;
};

const useFunctionState = (moduleName, mapper, mapFn) => {
  let mapperFn = mapFn;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName)[mapFn];
  } else {
    mapper = moduleName;
  }

  const store = useStore();
  const tempFns = mapperFn(mapper);
  const storeState = {};

  Object.keys(tempFns).forEach((keyFn) => {
    storeState[keyFn] = computed(() => tempFns[keyFn].call({ $store: store }));
  });
  return storeState;
};

export const useState = (moduleName, mapper) => {
  return useFunctionState(moduleName, mapper, "mapState");
};

export const useGetters = (moduleName, mapper) => {
  return useFunctionState(moduleName, mapper, "mapGetters");
};

export const useActions = (moduleName, mapper) => {
  return useFunctionHandle(moduleName, mapper, "mapActions");
};

export const useMutations = (moduleName, mapper) => {
  return useFunctionHandle(moduleName, mapper, "mapMutations");
};
