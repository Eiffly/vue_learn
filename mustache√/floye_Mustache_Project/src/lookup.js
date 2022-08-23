export default function lookup(data, keyName) {
            if (keyName.indexOf(".") != -1 && keyName !== ".") {
                let keyArr = keyName.split(".")
                let temp = data
                for (let i = 0; i < keyArr.length; i++) {
                    temp = temp[keyArr[i]]
                }
                return temp
            }
            // 没有.的情况 + 选择全部内容的情况（也就是{{.}}）
            return data[keyName]
}
