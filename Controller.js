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

app.get('/read', async (req, res) => {
    let read = await model.FlashCard.findAll({
        attributes: ['id', 'dica', 'texto'],
        where: {
            'status': true
        }
    });
    console.log(read)
});

app.get('/update', async (req, res) => {
    let update = await model.FlashCard.findOne({ where: { 'id': 1 } }).then((response) => {
        response.dica = "dica 0";
        response.texto = "texto dica 0";
        response.updatedAt = new Date();
        response.save();
    });

});
app.get('/delete', async (req, res) => {
    let update = await model.FlashCard.findOne({ where: { 'id': 1 } }).then((response) => {
        response.status = false;
        response.updatedAt = new Date();
        response.save();
    });

});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log("servidor rodando")
    console.log({ port })

});

