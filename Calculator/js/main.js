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

