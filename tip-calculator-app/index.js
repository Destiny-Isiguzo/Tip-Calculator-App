const billInputField = document.getElementById('bill');
const fivePercentBtn = document.getElementById('five__percent');
const tenPercentBtn = document.getElementById('ten__percent');
const fifteenPercentBtn = document.getElementById('fifteen__percent');
const twentyfivePercentBtn = document.getElementById('twenty-five__percent');
const fiftyPercentBtn = document.getElementById('fifty__percent');
const customPercentage = document.getElementById('custom');
const numOfPeopleInputField = document.getElementById('number__people');
const percentageButtons = document.getElementById('percentage');
// const calculateBtn = document.getElementById('calculate'); 
const tipFigureTextContent = document.getElementById('tip__figure');
const totalFigureTextContent = document.getElementById('total__figure');
const resetBtn= document.getElementById('reset');
const allBtns = document.querySelector('.tip__buttons')
const errorMsg = document.querySelector('.error-msg');
const errorMsg2 = document.querySelector('.error__msg');

let billValue = 0;
let tipValue = 0;
let personValue = 1;

const errorHandling = (inputField, errorMsg) => {
  if(+isNaN(+inputField.value)) {
    errorMsg.style.display = 'block';
    inputField.style.borderColor = 'red';
    inputField.style.caretColor = 'red';
  }else {
    errorMsg.style.display = "none";
    inputField.style.borderColor = 'transparent';
    inputField.style.caretColor = 'hsl(172, 67%, 45%)';
  }
}

const updateTipAndTotal = () => {
  let tipAmount = (tipValue / 100) * billValue ;
  let billAmount = (billValue + tipValue) / personValue;
  let personPerTip = tipAmount / personValue;
  tipFigureTextContent.innerText = '$' + personPerTip.toFixed(2)
  totalFigureTextContent.innerText = '$' + billAmount.toFixed(2)
}

billInputField.addEventListener('input', (e) => {
  billValue = +e.target.value; 
  errorHandling(billInputField, errorMsg);
})

numOfPeopleInputField.addEventListener('input', (e) => {
  personValue = +e.target.value; 
  errorHandling(numOfPeopleInputField, errorMsg2);
})


customPercentage.addEventListener('input', (e) => {
  tipValue = +e.target.value; 
  updateTipAndTotal();
})

resetBtn.addEventListener('click', () => {
  tipFigureTextContent.innerText = '$0.00';
  totalFigureTextContent.innerText = '$0.00';
  billInputField.value = '';
  numOfPeopleInputField.value = '';
  customPercentage.value = '';
})

allBtns.addEventListener('click', (e) => {
  const value = +e.target.getAttribute('data-tip');
  if (!value) return;
  tipValue = value;
  updateTipAndTotal();
})