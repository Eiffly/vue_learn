import updateChildren from "./updateChildren";
import createElement from "./createElement";

/**
 *  精细化比较：没有返回值
 * @param {*} oldVnode 
 * @param {*} newVnode 
 */
export default function patchVnode(oldVnode, newVnode) {
    // 判断两个节点是不是相同地址
    if (oldVnode == newVnode) {
        console.log("两个节点是相同节点");
        return;
    }

    // 新节点有text属性
    if (newVnode.text !== undefined && (newVnode.children === undefined || newVnode.children.length == 0)) {
        // 新节点的text和旧节点的text是不一样的
        if (newVnode.text !== oldVnode.text) {
            oldVnode.elm.innerText = newVnode.text
        }
    } else {
        // 查看旧节点有没有children属性
        if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
            // 最复杂的五角星处理，封装在一个函数里面
            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
        } else {
            // 清空旧节点text里面的内容
            oldVnode.elm.innerHTML = ""
            // 把新节点里的children依次添加到DOM里面
            for (const ch of newVnode.children) {
                let childDom = createElement(ch)
                // 创建新的节点
                oldVnode.elm.appendChild(childDom)
            }
        }
    }
}