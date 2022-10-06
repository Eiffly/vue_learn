import observe from "./observe";

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
};
console.log("helllo");
observe(obj);
obj.d.e.f++;
console.log(obj);

