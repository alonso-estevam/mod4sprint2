import Tips from '../models/tipsModel.js';

const tipsController = (app) => {
    app.get('/tips', (req, res) => {
        const randomTip = new Tips();
        res.status(200).json({"tip": randomTip.showTip()});
    })

    app.post('/add-tip', (req, res) => {
        const body = req.body;
        const tip = new Tips(body);
        tip.addTip();
        res.json({
            ...tip, 
            "message":"Tip successfully added!"
        });
    })

}

export default tipsController