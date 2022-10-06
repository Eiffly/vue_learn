import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

// 创建patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])
// 创建虚拟节点
var vnode1 = h('a', { props: { href: 'http://floye.xyz' } }, '一颗海胆头');
var vnode2 = h('div', { class: { 'box': true } }, '我是一个盒子');
var vnode3 = h('ul', {}, [
    h('li', {}, '牛奶'),
    h('li', {}, '咖啡'),
    h('li', {}, '可乐')
]);

console.log(vnode1);
console.log(vnode2);
console.log(vnode3);
// 让虚拟节点上树
const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const container3 = document.getElementById("container3")
patch(container1, vnode1)
patch(container2, vnode2)
// patch(contai ner3, vnode3)

// alert("我就弹一下")