import { Scanner } from "./Scanner"
import { nestTokens } from "./nestTokens"

export function parseTemplateToTokens(mytemplate) {
    var tokens = []
    var scanner = new Scanner(mytemplate)
    // 数据的运行
    while (!scanner.eos()) {
        let res = scanner.scanUntil("{{")
        if (res != "") {
            // 是否是在尖角号<>里面
            let isInJJH = false;
            // 空白字符串
            var _words = '';
            for (let i = 0; i < res.length; i++) {
                // 改变标志位-是否在尖角号里面
                if (res[i] == "<") {
                    isInJJH = true
                } else if (res[i] == ">") {
                    isInJJH = false
                }
                // 如果没有空格-直接拼接
                if (!/\s/.test(res[i])) {
                    _words += res[i]
                } else {
                    // 如果有空格且在尖角号之内，拼接空格
                    if (isInJJH) {
                        _words += " "
                    }
                }
            }
            tokens.push(['text', _words])
        }
        scanner.scan("{{")
        res = scanner.scanUntil("}}")
        if (res != "") {
            // 分为三种情况
            if (res[0] == '#') {
                tokens.push(['#', res.substring(1)])
            } else if (res[0] == '/') {
                tokens.push(['/', res.substring(1)])
            } else {
                tokens.push(['name', res])
            }
        }
        scanner.scan("}}")
    }

    // 返回折叠的 nestedTokens
    return nestTokens(tokens)
}
