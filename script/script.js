// calc body and buttons
// const myCalc = document.querySelector(".calc");
const calcDisplay = document.querySelector(".calc__display");
const buttons = document.querySelector(".calc__buttons");
const percent = document.querySelector(".percent");
const clean = document.querySelector(".clean");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const multi = document.querySelector(".multi");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const comma = document.querySelector(".comma");
const del = document.querySelector(".del");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

buttons.addEventListener("click", (e) => {
	const {target} = e;
	if(target.classList.contains("part-of-exp")) {
		calcDisplay.innerHTML += target.innerHTML;
	} else if (target.classList.contains("equal")) {
		calcDisplay.innerHTML += ("=" + eval(calcDisplay.innerHTML));
	} else if (target.classList.contains("clean")) {
		calcDisplay.innerHTML = "";
	}
});

