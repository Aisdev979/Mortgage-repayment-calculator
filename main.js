const loan = document.querySelector('#amount');
const term = document.querySelector('#term');
const rate = document.querySelector('#rate');
const monthly = document.querySelector('#monthly');
const total = document.querySelector('#total');
const result = document.querySelector('#result');

const monthlyRepayment = () => {
    const monthlyTerms = +term.value * 12;
    const monthlyRate = +rate.value / 100 / 12;
    let cal = (+loan.value * monthlyRate) * ((1 + monthlyRate) ** monthlyTerms) / (((1 + monthlyRate) ** monthlyTerms) - 1);
    let monthlyCal = cal * 100;
    monthlyCal = Math.floor(monthlyCal)
    monthlyCal /= 100
    monthly.textContent = monthlyCal;
    let totalCal = cal * monthlyTerms;
    totalCal *= 100;
    totalCal = Math.floor(totalCal);
    totalCal /= 100;
    total.textContent = totalCal;
}

result.addEventListener('click', monthlyRepayment)

