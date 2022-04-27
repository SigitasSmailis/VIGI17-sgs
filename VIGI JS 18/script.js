const numButtonElements = document.querySelectorAll('.button--white');
const operatorButtonElements = document.querySelectorAll('.button--grey');
const btnEl = document.querySelector('.button--blue');
const prevValueEl = document.querySelector('.prev__value');
const currValueEl = document.querySelector('.curr__value');

const operatorArray = [...operatorButtonElements, btnEl];

class Calculator {
	#currValue;
	#prevValue;
	#operator;
	constructor() {
		this.#currValue = '';
		this.#prevValue = '';
		this.#operator = '';
	}
	addValue(value) {
		this.#currValue += value;
	}
	updateDisplay() {
		currValueEl.textContent = this.#currValue;
		prevValueEl.textContent = this.#prevValue + ' ' + this.#operator;
	}
	operation(operator) {
		if (this.#operator) {
			switch (operator) {
				case '=':
					this.#currValue = +this.#prevValue + +this.#currValue;
					break;
				case 'C':
					console.log('gasgsa');
					this.clearDisplay();
					break;
			}

			this.#prevValue = '';
			this.#operator = '';
			return;
		}
		if (operator === 'C') {
			this.clearDisplay();
			return;
		}
		this.#prevValue = this.#currValue;
		this.#currValue = '';
		this.#operator = operator;
	}
	clearDisplay() {
		this.#currValue = '';
		this.#prevValue = '';
		this.#operator = '';
	}
}

const calculator = new Calculator();
numButtonElements.forEach((buttons) => {
	buttons.addEventListener('click', (event) => {
		calculator.addValue(event.target.textContent);
		calculator.updateDisplay();
	});
});
operatorArray.forEach((buttons) => {
	buttons.addEventListener('click', (event) => {
		calculator.operation(event.target.textContent);
		calculator.updateDisplay();
	});
});
