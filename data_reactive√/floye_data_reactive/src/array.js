import def from "./def";

const arrayPrototype = Array.prototype;
export const arrayMethods = Object.create(arrayPrototype);
const methodsNeedToChange = [
  "push",
  "pop",
  "shift",
  "unshift",
  "reverse",
  "splice",
  "sort",
];

methodsNeedToChange.forEach((methodName) => {
  let oldMethod = arrayPrototype[methodName];
  def(
    arrayMethods,
    methodName,
    function () {
      let inserted = [];
      // arguments为一个类数组对象，不能使用slice方法
      let args = [...arguments];
      let ob = this.__ob__;
      //   如果是新添加的方法也要进行数据的响应式处理
      switch (methodName) {
        case "push":
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.slice(2);
          break;
      }
      // 给数组动态添加__ob__
      if (inserted.length !== 0) {
        ob.observeArray(inserted);
      }
      //  调用原来的旧的方法
      let res = oldMethod.apply(this, args);
      console.log(ob);
      ob.dep.notify();
      return res;
    },
    false
  );
});
