class Calculator {
  constructor($previousOperand, $currentOperand) {
    this.$previousOperand = $previousOperand;
    this.$currentOperand = $currentOperand;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.$currentOperand.innerText =
      this.currentOperand;
    if (this.operation != null) {
      this.$previousOperand.innerText =
        `${this.previousOperand} ${this.operation}`;
    } else {
      this.$previousOperand.innerText = '';
    }
  }
}


const $numberButton = document.querySelectorAll(".number");
const $operatinButton = document.querySelectorAll(".operation");
const $equalsButton = document.querySelector("#equals");
const $deleteButton = document.querySelector("#delete");
const $allClearButton = document.querySelector("#all-clear");
const $previousOperand = document.querySelector("#previous-operand");
const $currentOperand = document.querySelector("#current-operand");

const calculator = new Calculator($previousOperand, $currentOperand);

$numberButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
});

$operatinButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
});

$equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

$allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

$deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});
