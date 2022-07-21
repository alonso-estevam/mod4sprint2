import Tips from '../models/tipsModel.js';

const tipsController = (app) => {
    app.get('/tips', (req, res) => {
        const randomTip = new Tips();
        res.status(200).json({"random tip": randomTip.showTip()});
    })

    app.post('/add-tip', (req, res) => {
        const body = req.body;
        const tip = new Tips(body.text);
        tip.addTip()
        res.json({"tip": tip})
        res.send("Tip successfully added!")
    })

}

export default tipsController