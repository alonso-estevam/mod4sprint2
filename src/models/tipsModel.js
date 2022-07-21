import tipsDb from '../database/tipsDb.js'

let id = 0;

class Tips {
    constructor(text) {
        this.id = id++;
        this.text = text
    }

    addTip = (tip) => {
        tipsDb.push(tip);
    };

}

export default Tips