# BitGo API Lightning Workshop

This example project is intended to give a quick primer on integrating BitGo's Custodial Lightning Network API into an existing app or service.

## Setup

```shell
git clone https://github.com/sangaman/activate-lightning
cd activate-lightning
npm install
```

Make sure you have either version 14.x or 16.x of [Node.js](https://nodejs.org) installed locally.

If you'd like to use your own wallet rather than the shared demo wallet, you'll also need:

- A testnet BitGo TBTC wallet (sign up for one [here](app.bitgo-test.com)).
- A [developer access token](https://app.bitgo-test.com/0/0/settings/developer-options).

## Run the skeleton app

```shell
$ npm start

> activate-lightning@1.0.0 start /home/danielmcnally/github/activate-lightning
> node index.js

App listening on port 8000
```

Access http://localhost:8000 in your browser and check out your lightning app. If you look past the glorious aesthetics, you'll notice that none of the buttons actually do anything.

Let's change that by integrating BitGo's API.

## Integrate Lightning

First, we need the BitGoJS SDK to faciliate accessing BitGo's API from our app.

```shell
npm install bitgo
```

Now we can start using lightning.

1. Replace the `accessToken` and `walletId` with your own personal wallet and token, OR change the last 5 characters of the provided token with values provided at the workshop.
2. `require` the newly added `bitgo` dependency and initialize the SDK functions using the `test` environment.
3. Authenticate against the BitGo API platform using the access token and fetch your wallet.
4. (optional) If using your own wallet, unlock the wallet for spending purposes using a 2FA code.
5. Implement the `/balance` API route to fetch the wallet's available lightning balance.
6. Implement the `/invoice` API route to create and return a [BOLT #11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md) lightning invoice.
7. Implement the `/pay` API route to pay a provided lightning invoice.

## Examples

Not sure how to do the steps above? Refer to the lightning examples in the BitGoJS documentation [here](https://github.com/BitGo/BitGoJS/tree/master/modules/bitgo/example#bitcoin-lightning-btc).

## Making Payments

Now we can start using the Lightning Network! Try it with these sites:

- https://htlc.me/ - A testnet lightning wallet you can use to send and receive payments.
- https://starblocks.acinq.co/ - A virtual coffee shop that accepts testnet lightning.

## Next Steps

1. Integrate Wallet [Webhooks](https://www.bitgo.com/resources/training-guide?selected-tab-id=webhook-notifications) into your app to get notified when you receive lightning payments or when lightning payments you've requested succeed (or fail).
2. Try paying [LNURL Pay requests](https://github.com/BitGo/BitGoJS/blob/master/modules/bitgo/example/ts/btc/pay-lnurl-request.ts).
3. Keep poking around and trying things with the lightning network and BitGo's API, get in touch if you have any questions, ideas, or problems.
