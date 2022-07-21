import express from 'express';

import tipsController from '../src/controllers/tipsController.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

tipsController(app);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})