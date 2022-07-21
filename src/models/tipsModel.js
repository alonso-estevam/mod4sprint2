import tipsDb from '../database/tipsDb.js'

let id = 1;

class Tips {
    constructor(text) {
        this.id = id++;
        this.text = text
    }

    addTip = () => {
        tipsDb.push(this);
    };

    showTip = () => {
        let randomTip = Math.floor(Math.random() * tipsDb.length);
        return tipsDb[randomTip];
    }

}

export default Tips