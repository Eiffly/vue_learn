import h from "./my_snabbdom/h"
import patch from "./my_snabbdom/patch"


// 创建虚拟节点,text
const myVnode1 = h("h1", {}, "xixi");
const myVnode2 = h("h1", {}, [
    h("section", {}, "text"),
    h("section", {}, "天蓝蓝")
]);
// const myVnode2 = h("h1", {}, "haha");

console.log(myVnode1);
console.log(myVnode2);
// 为一个数组，有嵌套
// const myVnode1 = h("ul", {}, [
//     h("li", {}, "1"),
//     h("li", {}, "2"),
//     h("li", {}, "3"),
//     h("li", {}, "4"),
//     h("li", {}, [
//         h("span", {}, "a"),
//         h("span", {}, "b"),
//         h("span", {}, "c"),
//     ])
// ]);


// 让虚拟节点上树
let container = document.getElementById("container");
patch(container, myVnode1);
patch(myVnode1, myVnode2);


// 