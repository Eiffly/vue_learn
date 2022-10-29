import Observer from "./Observer";
/**
 * 监听 value
 * @param {*} value
 * @returns
 */
export default function observe(value) {
  // 如果value不是对象，就什么都不做
  if (typeof value != "object") return;
  let ob;
  if (typeof value.__ob__ !== "undefined") {
    ob = value.__ob__;
  } else {
    // 相当于对obj这个对象进行了包装，然后里面包含了属性以及新添加的__ob__
    ob = new Observer(value);
  }
  return ob;
}
