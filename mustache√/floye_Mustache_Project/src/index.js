import { parseTemplateToTokens } from "./parseTemplateToTokens"
import { renderTemplate } from "./renderTemplate"

window.mustacheFun = {
    rander(mytemplate, data) {
        // 我们将数据封锁在
        var tokens = parseTemplateToTokens(mytemplate)
        // 将传入的数据转化为相应的DOM
        var result = renderTemplate(tokens, data)
        console.log(tokens);
        console.log(result);
        return result
    }
}