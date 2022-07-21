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

    showTip = () => {
        let randomTip = Math.floor(Math.random() * tipsDb.length);
        return tipsDb[randomTip];
    }

}

export default Tips