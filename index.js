const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

// OPTIONAL: replace with your token and wallet id
const accessToken = 'v2x54cc263ea78abbacfc168c62661c1a0a70ec4d25fd1986b48bfbc4eb21dxxxxx';
const walletId = '6356cfb76e61df0007d6e37555577c0a';

// TODO: require BitGoJS dependency

let lightning;

const LISTEN_PORT = 8000;

async function setup() { 
  // TODO: fetch your bitgo wallet and set the lightning var
  lightning = undefined; // replace this

  // OPTIONAL: unlock wallet if using your own

  app.listen(LISTEN_PORT, '127.0.0.1', () => {
    console.log(`App listening on port ${LISTEN_PORT}`);
  });
}

app.get('/balance', async (req, res) => {
  const balance = 0; // replace this
  // TODO: fetch available balance from the bitgo API

  res.status(200).json({ balance });
});

app.post('/invoice', bodyParser.json(), async (req, res) => {
  const amount = Number(req.body.amount);

  // TODO: get an invoice from the bitgo API
  const invoice = 'replace this';

  res.status(200).json({ invoice });
});

app.post('/pay', bodyParser.json(), async (req, res) => {
  const { invoice } = req.body;

  // TODO: pay the invoice using the bitgo API

  res.status(200).json({});
});

if (require.main === module) {
  setup();
}
