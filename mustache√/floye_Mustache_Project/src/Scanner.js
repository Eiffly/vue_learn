class Scanner {

    constructor(mytemplate) {
        this.pos = 0;
        this.tail = mytemplate;
        this.mytemplate = mytemplate;
    }

    // 结束了吗
    eos() {
        return this.pos >= this.mytemplate.length;
    }
    // 走过指定内容，没有返回值
    scan(tag) {
        this.pos += tag.length
        // substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集
        // str.substring(indexStart[, indexEnd])
        this.tail = this.mytemplate.substring(this.pos)
    }

    // 指针进行扫描，直到遇到指定内容结束，并且能返回到结束之前路过的文字
    scanUntil(stopTag) {
        // let token = []
        let pos_backup = this.pos;
        while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
            this.pos++;
            this.tail = this.mytemplate.substring(this.pos)
        }
        return this.mytemplate.substring(pos_backup, this.pos)
    }
}

export { Scanner }