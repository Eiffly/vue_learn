import Dep from "./Dep";
let uid = 0;
export default class Watcher {
  constructor(obj, expression, callback) {
    console.log("我是Watcher");
    this.id = uid++;
    this.obj = obj;
    this.getter = parseExp(expression);
    this.callback = callback;
    this.value = this.get();
  }

  update() {
    this.run();
  }

  run() {
    this.getAndInvoke(this.callback);
  }
  getAndInvoke(callback) {
    const value = this.get();
    if (value !== this.value || typeof value === "object") {
      const oldValue = this.value;
      this.value = value;
      callback.call(this.target, value, oldValue);
    }
  }

  get() {
    Dep.target = this;
    var value;
    try {
      value = this.getter(this.obj);
    } finally {
      Dep.target = null;
    }
    return value;
  }
}

function parseExp(str) {
  let segments = str.split(".");
  return function (obj) {
    for (let key of segments) {
      if (!obj) return;
      obj = obj[key];
    }
    return obj;
  };
}
