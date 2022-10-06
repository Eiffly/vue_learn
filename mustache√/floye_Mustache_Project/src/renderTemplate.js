import lookup from './lookup.js';
import parseArray from './parseArray.js';
export function renderTemplate(tokens, data) {
    var resultStr = ""
    // console.log(tokens, data)
    // 简单的例子，暂时不考虑嵌套
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        switch (token[0]) {
            case "text":
                resultStr += token[1]
                break;
            case "name":
                // 改用lookup函数，因为函数里面有类似于{{item.hobbies}}这种情况
                resultStr += lookup(data, token[1])
                break;
            case "#":
                // 为数组，改用parseArray函数进行相应的更新
                resultStr += parseArray(token, data)
                break;
        }
    }
    return resultStr
}