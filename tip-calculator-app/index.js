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

billInputField.addEventListener('keyup', (e) => {
  billValue = +e.target.value; 

  if (isNaN(+billInputField.value)) {
    errorMsg.style.display = 'block';
    billInputField.style.borderColor = 'red';
    billInputField.style.caretColor = 'red';
  }else {
    errorMsg.style.display = 'none';
    billInputField.style.borderColor = 'transparent';
    billInputField.style.caretColor = 'hsl(172, 67%, 45%)';
  }
})

numOfPeopleInputField.addEventListener('keyup', (e) => {
  personValue = +e.target.value; 

  if (isNaN(+numOfPeopleInputField.value)) {
    errorMsg2.style.display = 'block';
    numOfPeopleInputField.style.borderColor = 'red';
    numOfPeopleInputField.style.caretColor = 'red';
  }else {
    errorMsg2.style.display = 'none';
    numOfPeopleInputField.style.borderColor = 'transparent';
    numOfPeopleInputField.style.caretColor = 'hsl(172, 67%, 45%)';
  }
})

function updateAmount() {
  let tipAmount = (tipValue / 100) * billValue ;
  let billAmount = (billValue + tipValue) / personValue;
  let personPerTip = tipAmount / personValue;
  tipFigureTextContent.innerText = '$' + personPerTip.toFixed(2)
  totalFigureTextContent.innerText = '$' + billAmount.toFixed(2)
}

customPercentage.addEventListener('keyup', (e) => {
  tipValue = +e.target.value; 
  updateAmount();
})

resetBtn.addEventListener('click', () => {
  tipFigureTextContent.innerText = '$0.00';
  totalFigureTextContent.innerText = '$0.00';
  billInputField.value = '';
  numOfPeopleInputField.value = '';
  customPercentage.value = 'Custom';
})

allBtns.addEventListener('click', (e) => {
  const value = +e.target.getAttribute('data-tip');
  if (!value) return;
  tipValue = value;
  updateAmount();
})