import vnode from "./vnode"

/**
 * 
 * @param {*} sel 选择器
 * @param {*} data 属性
 * @param {*} c   第三个参数，可以是'文字'、{}、h()函数
 * @returns 
 */
export default function (sel, data, c) {
    if (arguments.length !== 3) {
        throw new Error("您输入的参数的个数不对，应该是三个")
    }

    //'文字'
    if (typeof c === "string" || typeof c === "number") {
        return vnode(sel, data, undefined, c, undefined)
    }
    else if (Array.isArray(c)) { //{}
        let children = [];
        for (const item of c) {
            if (!(typeof c === "object" && item.hasOwnProperty("sel"))) {
                throw new Error("传入的数组有不是h函数的项")
            }
            children.push(item)
        }
        return vnode(sel, data, children, undefined, undefined)

    }
    else if (typeof c === "object" && c.hasOwnProperty("sel")) { //h()函数
        let children = [c]
        return vnode(sel, data, children, undefined, undefined)
    } else {
        throw new Error("传入的参数类型不对！");
    }
}