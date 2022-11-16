const initialPrice = document.querySelector("#initial-price");
const stocksQuatity =document.querySelector("#Quantity-of-Stocks");
const currentPrice = document.querySelector("#current-price");
const showButton = document.querySelector("#submit-btn");
const outputMessage = document.querySelector("#output");

function calculateProfitOrLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/(initial*quantity)) * 100;
        outputMessage.style.color = "red";
        outputMessage.innerText = `You're makig a loss of Rs. ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}%.`;
    } else if (initial < current) {
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/(initial*quantity)) * 100;
        outputMessage.style.color = "green";
        outputMessage.innerText = `You're makig a profit of Rs. ${profit} and the profit percentage is ${profitPercentage.toFixed(2)}%.`;
    } else {
        outputMessage.innerText = `You're neither making loss nor profit.`;
    }
}

function clickHandler() {
    const initial = Number(initialPrice.value);
    const current = Number(currentPrice.value);
    const quantity = Number(stocksQuatity.value);

    if(initial > 0 && current > 0 && quantity > 0){
        calculateProfitOrLoss(initial, quantity, current);
    } else {
        alert('The Initial Price, Quantity, and Current Price cannot be negative. Please give valid inputs');
    }
    

}


showButton.addEventListener("click", clickHandler);