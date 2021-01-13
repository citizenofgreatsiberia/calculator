const calcDisplay = document.querySelector(".calc__display");
const buttons = document.querySelector(".calc__buttons");

let signs = [
	"1", "2", "3", "+",
	"4", "5", "6", "-",
	"7", "8", "9", "*",
	"0", "/", ".", "c",
	"=",
];

signs.forEach(function (sign) {
	let signElement = document.createElement("div");
	signElement.classList.add("calc__button");
	signElement.innerHTML = sign;
	buttons.appendChild(signElement);
	if (signElement.innerHTML === "=") {
		signElement.classList.add("bottom-border")
	}
});

document.querySelectorAll(".calc__buttons .calc__button").forEach(function(button) {
	button.addEventListener("click", onButtonClick);
});

function onButtonClick(event) {
	if (event.target.innerHTML === "c") {
		calcDisplay.innerHTML = "0";
	} else if (event.target.innerHTML === "=") {
		calcDisplay.innerHTML = eval(calcDisplay.innerHTML);
	} else if (calcDisplay.innerHTML === "0") {
		calcDisplay.innerHTML = event.target.innerHTML;
	} else {
		calcDisplay.innerHTML += event.target.innerHTML;
	}
};
