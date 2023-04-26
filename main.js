const costToPay = document.querySelector(`#price`);
const people = document.querySelector(`#people`);
const tip = document.querySelector(`#tip`);
const btnCount = document.querySelector(`.count`);
const errorInfo = document.querySelector(`.error`);
const cost = document.querySelector(`.cost`);
const endInfo = document.querySelector(`.cost-info`);

const currency = document.querySelector(`.currency`);
const currencyInfo = document.querySelector(`.currency-info`);


const process = () => {
    
    const countBill = () => {
        errorInfo.textContent = ``;
        
        const newPrice = parseFloat(costToPay.value);
        const newPeople = parseInt(people.value);
        const newTip = parseFloat(tip.value);
        
        if (newTip == 0) {
            const sum = newPrice / newPeople;
            endInfo.style.display = `block`;
            
            cost.textContent = sum.toFixed(2);
        }else {
            const sum = (newPrice + (newPrice * newTip)) / newPeople;
            endInfo.style.display = `block`;
            
            cost.textContent = sum.toFixed(2);
        }

        currencyInfo.textContent = currency.value;
        
    }

    if (costToPay.value != `` && people.value != ``){
        countBill()

    }else {
        errorInfo.textContent = `ERROR: use correct data and fill in the blanks in the form!`;
        endInfo.style.display = `none`;
    }

    
}

btnCount.addEventListener(`click`, process);