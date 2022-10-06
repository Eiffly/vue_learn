import observe from "./observe";

export default function defineReactive(data, key, value) {
  if (arguments.length === 2) {
    value = data[key];
  }

  // 子元素要进行observe，形成递归
  let childOb = observe(value);
  Object.defineProperty(data, key, {
    // 可枚举 可以for-in
    enumerable: true,
    // 可被配置，比如可以被delete
    configurable: true,
    // getter
    get() {
      console.log(`getter试图访问obj的${key}属性`);
      return value;
    },
    // setter
    set(newValue) {
      console.log(`setter试图改变obj的${key}属性`, newValue);
      if (value === newValue) return;
      value = newValue;

      // 当设置了新值，新值也要被observe
      childOb = observe(newValue);
    },
  });
}
