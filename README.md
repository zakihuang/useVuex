# useVuex

## install
```
npm install
```

### run
```
npm start
```

### demo code
```
import {
  useState,
  useGetters,
  useActions,
  useMutations,
} from "@/hooks/useVuex";

// 直接使用 State
const storeState = useState("demo", ["demoList"]);
// 换名使用 State
const { listStateNewName } = useState("demo", { listStateNewName: "demoList" });

// 直接使用 Getters
const { getList } = useGetters("demo", ["getList"]);

// 换名使用 Getters
const { listNewName } = useGetters("demo", { listNewName: "getList" });

// 直接使用 Actions
const { addAction } = useActions("demo", ["addAction"]);
addAction({ a: 9 });

// 重命令 Actions
const { addAc } = useActions("demo", { addAc: "addAction" });
addAc({ a: 99 });
addAc({ a: 922 });

// 直接使用 Mutations
const { addMutation, removeMutaion } = useMutations("demo", [
  "addMutation",
  "removeMutaion",
]);

addMutation({ b: 666 });
removeMutaion({ id: "008" });

// 重命名 Mutations
const { add, remove } = useMutations("demo", {
  add: "addMutation",
  remove: "removeMutaion",
});

setTimeout(() => {
  add({ b: 99999999999 });
  remove({ id: "001" });
}, 5000);
```