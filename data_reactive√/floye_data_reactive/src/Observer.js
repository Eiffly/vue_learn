import def from "./def";
import defineReactive from "./defineReactive";
import observe from "./observe";
import Dep from "./Dep";
import { arrayMethods } from "./array";
/**
 * 将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
 */
export default class Observer {
  // 构造器
  constructor(value) {
    // 给实例(value)添加__ob__属性，值是当前Observer的实例，不可枚举
    def(value, "__ob__", this, false);

    // 每个Observer实例中都有一个Dep的实例 用来收集依赖
    this.dep = new Dep();

    // console.log("Observer构造器", value);
    if (Array.isArray(value)) {
      // 是数组，就将这个数组的原型指向arrayMethods
      Object.setPrototypeOf(value, arrayMethods);
      // observe数组
      this.observeArray(value);
    } else {
      // Observer类是将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
      this.walk(value);
    }
  }
  // 遍历value的每一个key
  walk(value) {
    for (let key in value) {
      defineReactive(value, key);
    }
  }
  //观察数组
  observeArray(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      observe(arr[i]);
    }
  }
}
