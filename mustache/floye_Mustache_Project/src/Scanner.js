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

    scan(tag) {
        this.pos += tag.length
        this.tail = this.mytemplate.substring(this.pos)
    }

    // 指针进行扫描，直到遇到指定内容结束，并且能返回到结束之前炉火的文字
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