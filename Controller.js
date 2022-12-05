const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models')




let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.post('/create', async (req, res) => {
    console.log(req.body.dicaFlashcard);
    let reqs = await model.FlashCard.create({
        'dica': req.body.dicaFlashcard,
        'texto': req.body.textoFlashcard,
        'status': req.body.statusFlashcard,
        'createdAt': new Date(),
        'updatedAt': new Date(),
    });

    if (reqs) {
        res.send(JSON.stringify('O flashcard foi salvo!'));
    }
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log("servidor rodando")
    console.log({ port })

});
