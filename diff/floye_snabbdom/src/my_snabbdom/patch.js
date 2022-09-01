import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";

// 真正创建节点
export default function (oldVnode, newVnode) {
    // 如果是真实DOM
    if (oldVnode.sel == "" || oldVnode.sel == undefined) {
        // 将oldValue包装成为虚拟DOM
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }

    // 判断是不是同一个虚拟节点
    if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
        console.log("进行精细化比较");
        patchVnode(oldVnode, newVnode);
    } else {
        // 删除旧的节点，插入新的节点
        console.log("不是同一个节点，暴力插入新节点，删除旧节点");
        // 创建新的节点
        let newVnodeElm = createElement(newVnode);
        // if (newVnodeElm) {
        // 插入到旧的节点的父节点内之前
        oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
        // }
        // 删除旧节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}