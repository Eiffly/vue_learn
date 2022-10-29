import observe from "./observe";
import Watcher from "./Wacher";

let obj = {
  a: {
    b: {
      c: 99,
    },
  },
  d: {
    e: {
      f: 45,
    },
  },
  g: [1, 2, 4, 5],
};
console.log("helllo");
observe(obj);
// obj.g.push(133);
// 收集依赖
new Watcher(obj, "d.e.f", (a) => {
  console.log("----", a);
});

obj.d.e.f++;
console.log(obj);
// obj.g.push(133);
