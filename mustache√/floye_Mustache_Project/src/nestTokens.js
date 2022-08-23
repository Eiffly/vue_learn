
export function nestTokens(tokens) {
    // 最后的返回数据
    var nestedTokens = []
    // 栈
    var sections = []
    // 收集器,用于随时改变数据的指向
    var collector = nestedTokens

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        switch (token[0]) {
            case '#':
                collector.push(token);
                // token压入栈
                sections.push(token);
                // 更改指向
                collector = token[2] = []
                break;
            case '/':
                // 当前token弹出栈
                sections.pop();
                // 更改指向
                collector = sections.length == 0 ? nestedTokens : sections[sections.length - 1][2]
                break;
            default:
                collector.push(token);
        }
    }

    return nestedTokens
}