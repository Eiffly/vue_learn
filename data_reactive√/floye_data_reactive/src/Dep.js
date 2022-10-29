export default class Dep {
  constructor() {
    console.log("我是Dep");
    // subscribe的缩写
    this.subs = [];
  }

  //  收集依赖
  depend() {
    console.log("我是depend");
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }

  //  触发依赖
  notify() {
    console.log("我是notify");
    // 浅拷贝一份
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }

  //   添加依赖
  addSub(sub) {
    this.subs.push(sub);
  }
}
