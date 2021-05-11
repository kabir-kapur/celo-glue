//////////////////// REQUIRES ////////////////////
const express = require('express');
const app = express(); // allows us to handle any http requests
const Web3 = require('web3') // include web3
const ContractKit = require('@celo/contractkit') // inclkude contractkit
// const celo_ethers = require('@celo-tools/celo-ethers-wrapper') // include idk what this is
// const { ethers } = require('ethers');
require('dotenv').config({path: '.env'}) // include dotenv

//////////////////// ENV ////////////////////
const port = process.env.PORT || 3000;
// const account = process.env.ACCOUNT_NUMBER;

//////////////////// OBJECTS ////////////////////
if(process.env.PRIVATE_KEY == undefined){
    console.log("----------------------------------------------- PRIVATE_KEY is undefined! ----------------------------------------------------------\n");
    throw new error("exiting");
};
const web3 = new Web3(`https://celo-alfajores--rpc.datahub.figment.io/apikey/${process.env.FIGMENT_API_KEY}/`);
const kit = ContractKit.newKitFromWeb3(web3);
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

//////////////////// SERVERS ////////////////////
async function balance(){
    let addy = '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'
    let goldtoken = await kit.contracts.getGoldToken();
    let cGLDBalance = await goldtoken.balanceOf(account.address);
    console.log(cGLDBalance);


    app.get('/api/balance', (req, res) =>{
        res.send(kit.web3.utils.fromWei(cGLDBalance.toString(), "ether"));
    });

    app.listen(port, () => console.log(`Listening on port ${port}...`));
}

balance();