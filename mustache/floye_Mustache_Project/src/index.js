import { Scanner } from "./Scanner"
window.mustacheFun = {
    // 
    rander(mytemplate, data) {
        var scanner = new Scanner(mytemplate)
        var tokens = []
        // 数据的运营
        while (!scanner.eos()) {
            let res = scanner.scanUntil("{{")
            tokens.push(['text', res])
            // console.log("结果是：", res);
            res = scanner.scan("{{")
            res = scanner.scanUntil("}}")
            tokens.push(['name', res])
            res = scanner.scan("}}")
        }
        console.log(tokens);

    }

    // 
}