function canPay(wallet, chipsPrice) {
    if (wallet.length === 0) {
        return "Empty wallet. Cannot buy chips.";
    }

    let totalMoney = 0;
    for (let i = 0; i < wallet.length; i++) {
        totalMoney += wallet[i];
    }

    return totalMoney >= chipsPrice;
}


const wallet1 = [5, 10, 20];
const chipsPrice1 = 25; 
console.log(canPay(wallet1, chipsPrice1)); 

const wallet2 = [1, 2, 5]; 
const chipsPrice2 = 10; 
console.log(canPay(wallet2, chipsPrice2)); 

const emptyWallet = [];
const chipsPrice3 = 15;
console.log(canPay(emptyWallet, chipsPrice3)); 
