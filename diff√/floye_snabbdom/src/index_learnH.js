import h from "./my_snabbdom/h"


// 创建虚拟节点
var vnode1 = h('a', { props: { href: 'http://floye.xyz' } }, '一颗海胆头');
const vnode2 = h('ul', {},
    h('li', {}, "火龙果"))
const vnode3 = h('ul', {},
    [h('li', {}, "苹果"),
    h('li', {}, "西瓜"),
    h('li', {}, [
        h('li', {}, "嘻嘻"),
        h('li', {}, "哈哈")]),
    h('li', {}, "火龙果")])
// 错误示范vnode4
const vnode4 = h('ul', {},
    [h('li', {}, "苹果"),
    h('li', {}, "西瓜"),
    h('li', {}, [
        h('li', {}, "嘻嘻"),
        '123565']),
    h('li', {}, "火龙果")])

