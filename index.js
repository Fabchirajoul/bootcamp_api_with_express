import express from 'express';
import cors from 'cors';

import greet from './bootcamp/greet.js'
import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import enoughairtime from './bootcamp/enoughAirtime.js';
import transportFee from './bootcamp/transportFee.js';



const app = express()

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//referencing cors
app.use(cors());

// route definitions below here

app.get("/api/greet", function (req, res) {
    const name = req.query.name

    if (!name) {
        res.json({
            error: "name not found!"
        })
    }

    res.json(
        {
            "greet": greet(name)
        }
    );
});

// Word game starts here
// route definitions below here
app.get("/api/word_game", function (req, res) {
    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error: "sentence not found!"
        })
    }

    res.json(
        {
            "longestWord": longestWord(sentence),
            "shortestWord": shortestWord(sentence),
            "length": wordLengths(sentence)
        }
    );
});
// word game ends here
// Enough airtime starts Here
app.get("/api/enoughairtime", function (req, res) {
    const sentence = req.query.sentence
    const amount = req.query.amount
    if (!sentence || !amount) {
        res.json({
            error: "sentence or amount not found!"
        })
    }

    res.json(
        {
            "enoughairtime": enoughairtime(sentence, amount)
        }
    );
});


// Enough airtime ends here
// Transport fee starts here
app.get("/api/transportFee", function (req, res) {
    const day= req.query.day
    if (!day) {
        res.json({
            error: "day not found!"
        })
    }

    res.json(
        {
            "transport": transportFee(day)
        }
    );
});
// Transport fee ends here

let PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})