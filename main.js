const loan = document.querySelector('#amount');
const term = document.querySelector('#term');
const rate = document.querySelector('#rate');
const monthly = document.querySelector('#monthly');
const total = document.querySelector('#total');
const repayment = document.querySelector('#repayment');
const interest = document.querySelector('#Interest');
const clearAll = document.querySelector('#clear');
const result = document.querySelector('#result');
const amountError = document.querySelector('#amount--error');
const termError = document.querySelector('#term--error');
const rateError = document.querySelector('#rate--error');
const repaymentError = document.querySelector('#repayment--error');
const interestError = document.querySelector('#interest--error');
const resultSection = document.querySelector('.result');

const clearBtn = () => {
    resultSection.innerHTML = `<section class="empty">
        <img src="./assets/images/illustration-empty.svg" alt="image--illustration__empty">
        <h3>Result shown here</h3>
        <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </section>`
}

const monthlyRepayment = () => {
    const monthlyTerms = +term.value * 12;
    const monthlyRate = +rate.value / 100 / 12;
    let cal = (+loan.value * monthlyRate) * ((1 + monthlyRate) ** monthlyTerms) / (((1 + monthlyRate) ** monthlyTerms) - 1);
    let monthlyCal = cal * 100;
    monthlyCal = Math.floor(monthlyCal);
    monthlyCal /= 100;
    let totalCal = cal * monthlyTerms;
    totalCal *= 100;
    totalCal = Math.floor(totalCal);
    totalCal /= 100;

    if(Number.isNaN(monthlyCal)) {
      return resultSection.innerHTML = `<h2 class="result--section__header">Your results</h2>

        <p class="result--section__para">
          Your results are showed below based on the information you provided.
          To adjust the results,
          edit the form and click "calculate repayment" again.
        </p>
  
        <section class="result--section">
          <h3>Your monthly repayments</h3>
          <p id="monthly">0</p>
          <hr>
          <h3><span>Total you'll repay over the term</span></h3>
          <p id="total">0</p>
        </section>`;
    }

    resultSection.innerHTML = `<h2 class="result--section__header">Your results</h2>

        <p class="result--section__para">
          Your results are showed below based on the information you provided.
          To adjust the results,
          edit the form and click "calculate repayment" again.
        </p>
  
        <section class="result--section">
          <h3>Your monthly repayments</h3>
          <p id="monthly">${monthlyCal}</p>
          <hr>
          <h3><span>Total you'll repay over the term</span></h3>
          <p id="total">${totalCal}</p>
        </section>`;
}

const monthlyInterest = () => {
    const monthRate = +rate.value / 100 / 12;
    const monthTerms = +term.value * 12;
    let calInterest = +loan.value * monthRate;
    let monthlyInterest = calInterest * 100;
    monthlyInterest = Math.round(monthlyInterest);
    monthlyInterest /= 100;
    let totalInterest = calInterest * monthTerms;
    totalInterest *= 100;
    totalInterest = Math.round(totalInterest);
    totalInterest /= 100;

    if(Number.isNaN(monthlyInterest)) {
      return resultSection.innerHTML = `<h2 class="result--section__header">Your results</h2>

        <p class="result--section__para">
          Your results are showed below based on the information you provided.
          To adjust the results,
          edit the form and click "calculate repayment" again.
        </p>
  
        <section class="result--section">
          <h3>Your monthly interest</h3>
          <p id="monthly">0</p>
          <hr>
          <h3><span>Total you'll repay over the term</span></h3>
          <p id="total">0</p>
        </section>`;
    }

    resultSection.innerHTML = `<h2 class="result--section__header">Your results</h2>

        <p class="result--section__para">
          Your results are showed below based on the information you provided.
          To adjust the results,
          edit the form and click "calculate repayment" again.
        </p>
  
        <section class="result--section">
          <h3>Your monthly interest</h3>
          <p id="monthly">${monthlyInterest}</p>
          <hr>
          <h3><span>Total you'll repay over the term</span></h3>
          <p id="total">${totalInterest}</p>
        </section>`;
}

const errorHandling = () => {
  if(loan.value === "" || term.value === "" || rate.value === "") {
    amountError.textContent = "field require";
    termError.textContent = "field require";
    rateError.textContent = "field require";
  } else {
    amountError.textContent = "";
    termError.textContent = "";
    rateError.textContent = "";
  }
}

repayment.addEventListener('click', (event) => {
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

result.addEventListener("click", errorHandling)

clearAll.addEventListener('click', clearBtn)