import Tips from '../models/tipsModel.js';

const tipsController = (app) => {
    app.get('/tips', (req, res) => {
        const randomTip = new Tips();
        res.status(200).json({"random tip": randomTip.showTip()});
    })

}

export default tipsController