// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {H:50, Q:25, D:10, N:5, P:1};
    let numOfCoin;
    let exchange = {};

    if(currency > 10000) {
        exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        for (let coin in coins) {
            numOfCoin = Math.floor(currency / coins[coin]);
            if(numOfCoin > 0) {
                exchange[coin] = numOfCoin;
                currency -= numOfCoin * coins[coin];
            }
        }
    }
    return exchange;
}
