const loan = document.querySelector('#amount');
const term = document.querySelector('#term');
const rate = document.querySelector('#rate');
const monthly = document.querySelector('#monthly');
const total = document.querySelector('#total');
const repayment = document.querySelector('#repayment');
const interest = document.querySelector('#Interest');
const clearAll = document.querySelector('#clear');
const result = document.querySelector('#result');

const monthlyRepayment = () => {
    const monthlyTerms = +term.value * 12;
    const monthlyRate = +rate.value / 100 / 12;
    let cal = (+loan.value * monthlyRate) * ((1 + monthlyRate) ** monthlyTerms) / (((1 + monthlyRate) ** monthlyTerms) - 1);
    let monthlyCal = cal * 100;
    monthlyCal = Math.floor(monthlyCal);
    monthlyCal /= 100;
    monthly.textContent = `£${monthlyCal}`;
    let totalCal = cal * monthlyTerms;
    totalCal *= 100;
    totalCal = Math.floor(totalCal);
    totalCal /= 100;
    total.textContent = `£${totalCal}`;
}

const monthlyInterest = () => {
    const monthlyRate = +rate.value / 100 / 12;
    const monthlyTerms = +term.value * 12;
    let cal = +loan.value * monthlyRate;
    let monthlyCal = cal * 100;
    monthlyCal = Math.round(monthlyCal);
    monthlyCal /= 100;
    monthly.textContent = `£${monthlyCal}`;
    let totalCal = cal * monthlyTerms;
    totalCal *= 100;
    totalCal = Math.round(totalCal);
    totalCal /= 100;
    total.textContent = `£${totalCal}`;

}

const clearBtn = () => {
    monthly.textContent = 0;
    total.textContent = 0;
}

repayment.addEventListener('click', (event) => {
    console.log(event)
    result.addEventListener('click', () => {
        if(event.target.id === 'repayment') {
            monthlyRepayment()
        }
    })
})

interest.addEventListener('click', (event) => {
    result.addEventListener('click', () => {
        if(event.target.id === 'Interest') {
            monthlyInterest()
        }
    })
})

clearAll.addEventListener('click', clearBtn)