// 创建新节点
/**
 * 
 * @param {*} newVnode 新的节点
 */
export default function createElement(vnode) {
    //首先创建一个新的节点
    let domNode = document.createElement(vnode.sel);
    // 1. 如果是文字
    if (vnode.text !== "" && (vnode.children === undefined || vnode.children.length === 0)) {
        domNode.innerText = vnode.text
        // pivot.appendChild(domNode, pivot)
        
    }
    // 2. 如果是[] 
    else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        // console.log("该节点下面还有元素，需要进行嵌套操作");
        for (let i = 0; i < vnode.children.length; i++) {
            let childDom = createElement(vnode.children[i])
            // 创建新的节点
            domNode.appendChild(childDom)
        }
    }
    // 补充elm属性
    vnode.elm = domNode;
    return vnode.elm
}