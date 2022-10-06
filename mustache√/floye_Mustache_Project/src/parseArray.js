import lookup from "./lookup"
import { renderTemplate } from "./renderTemplate"

// 数据需要进行相应的更新
export default function parseArray(token, data){
    let resultStr=""
    // v产生的是一个数组对象，也就是data对象里面某个具体对象的数组
    let v = lookup(data,token[1])
    for (let i = 0; i < v.length; i++) {
        resultStr += renderTemplate(token[2],{
            ...v[i],
            ".":v[i]
        })
        
    }
    return resultStr
}