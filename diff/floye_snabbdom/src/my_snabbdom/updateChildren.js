
import createElement from "./createElement";
import patchVnode from "./patchVnode";

/**
 * 
 * @param {*} parentElm Dom节点
 * @param {*} oldCh     旧的子节点数组
 * @param {*} newCh     新的子节点数组
 */
export default function updateChildren(parentElm, oldCh, newCh) {
    console.log("最最复杂的五角星情况");
    console.log(oldCh, newCh);

    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let newEndIdx = newCh.length - 1;

    let oldStartVnode = oldCh[oldStartIdx];
    let newStartVnode = newCh[newStartIdx];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndVnode = newCh[newEndIdx];


    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        console.log("进入循环");
        if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
            oldStartVnode = oldCh[++oldStartIdx]
        } else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
            oldEndVnode = oldCh[--oldEndIdx]
        } else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
            newStartVnode = newCh[++newStartIdx]
        } else if (newEndVnode == null || newCh[newEndIdx] == undefined) {
            newEndVnode = newCh[--newEndIdx]
        } else if (checkSameVnode(oldStartVnode, newStartVnode)) {
            // ① 新前旧前
            console.log(" ①  新前与旧前 命中");
            patchVnode(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx]
            newStartVnode = newCh[++newStartIdx]
        } else if (checkSameVnode(oldEndVnode, newEndVnode)) {
            // ② 新后+旧后
            console.log(" ①  新后与旧后 命中");
            patchVnode(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx]
            newEndVnode = newCh[--newEndIdx]

        } else if (checkSameVnode(oldStartVnode, newEndVnode)) {
            // ③  新后+旧前
            //  新后newEnd(oldStart) 指向的节点移动到 旧后oldEnd 之后
            console.log("  ③  新后+旧前 命中");
            patchVnode(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (checkSameVnode(oldEndVnode, newStartVnode)) {
            //   ④ 新前 + 旧后
            // 将 新前newStart（oldEnd） 指向的节点，移动到 旧前oldStart 之前 
            console.log("  新前 + 旧后 命中");
            patchVnode(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        } else {
            console.log("四种都没有命中");
            // 一种无解的情况
            let keyMap = {};
            for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                let key = oldCh[i].key
                keyMap[key] = i;
            }
            let idxInOld = keyMap[newCh[newStartIdx].key];
            if (idxInOld === undefined) {
                // 
                patchVnode(createElement(newCh[newStartIdx]), oldCh[oldStartIdx].elm)
            } else {
                // 有的话就进行精细化比较
                patchVnode(oldCh[idxInOld], newCh[newStartIdx])
                // 找到的节点插入到 旧前 的前面
                parentElm.insertBefore(oldCh[idxInOld].elm, oldCh[oldStartIdx].elm);
                oldCh[idxInOld] = undefined;
            }
            newStartVnode = newCh[++newStartIdx]
            // console.log(idxInOld);
        }
    }
    // 循环结束
    if (newStartIdx <= newEndIdx) {
        // 说明newVndoe还有剩余节点没有处理，所以要添加这些节点
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            // insertBefore方法可以自动识别null，如果是null就会自动排到队尾，和appendChild一致
            parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx] == null ? null : oldCh[oldStartIdx].elm);
        }
    } else if (oldStartIdx <= oldEndIdx) {
        // 说明oldVnode还有剩余节点没有处理，所以要删除这些节点
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            if (oldCh[i]) {
                parentElm.removeChild(oldCh[i].elm);
            }
        }
    }
}

// 判断是否是同一个节点
function checkSameVnode(a, b) {
    return a.sel === b.sel && a.key === b.key;
}
