import h from "./my_snabbdom/h"
import patch from "./my_snabbdom/patch"


// 创建虚拟节点,text

const myVnode1 = h("ul", {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'E' }, 'E'),
]);
const myVnode2 = h("ul", {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'CC'),
]);




// 让虚拟节点上树
let container = document.getElementById("container");
patch(container, myVnode1);


let btn = document.getElementById("btn")
btn.onclick = function () {
    patch(myVnode1, myVnode2);
}


// 