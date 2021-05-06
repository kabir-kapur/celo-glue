//////////////////// REQUIRES ////////////////////
const express = require('express');
const app = express(); // allows us to handle any http requests
const Web3 = require('web3') // include web3
const ContractKit = require('@celo/contractkit') // inclkude contractkit

//////////////////// ENV ////////////////////
const port = process.env.PORT || 3000;
const account = process.env.ACCOUNT_NUMBER;

//////////////////// SERVERS ////////////////////

app.get('/api/balance', (req, res) =>{
    res.send('Congrats! You have accessed the super sick pollen middleware API!');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));