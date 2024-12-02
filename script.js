const PP = document.getElementById("pp");
const BUTTON = document.getElementById("calcular");
const NOTA2 = document.getElementById("nota2");
const NOTA3 = document.getElementById("nota3");
const NOTA4 = document.getElementById("nota4");
const NOTA5 = document.getElementById("nota5");
const MSG = document.getElementById("msg");
let ppValue;

function calcularMin3(pp) {
	if (pp<=70) {
		return 70;
	}
	if (((70-0.4*pp)/0.6)<60) {
		return 60;
	}
	return (70-0.4*pp)/0.6;
}

function calcularMin4(pp) {
	if (pp<=81) {
		return 81;
	}
	if (((81-0.4*pp)/0.6)<60) {
		return 60;
	}
	return (81-0.4*pp)/0.6;
}

function calcularMin5(pp) {
	if (pp<=91) {
		return 91;
	}
	if (((91-0.4*pp)/0.6)<60) {
		return 60;
	}
	return (91-0.4*pp)/0.6;
}

function calcularPF() {
	ppValue = PP.value;
	MSG.innerHTML = "";
	if(ppValue<20){
		MSG.innerHTML = "No hay examen :(";
	}
	if(ppValue>20 && ppValue<50){
		MSG.innerHTML = "Necesitas sacar 50% en recuperatorio para rendir el final";
	}
	if(ppValue>=50 && ppValue<60){
		NOTA2.innerHTML = (60-0.4*ppValue)/0.6;
		NOTA3.innerHTML = 70;
		NOTA4.innerHTML = 81;
		NOTA5.innerHTML = 91;
	}
	if (ppValue>=60) {
		NOTA2.innerHTML = 60;
		NOTA3.innerHTML = calcularMin3(ppValue);
		NOTA4.innerHTML = calcularMin4(ppValue);
		NOTA5.innerHTML = calcularMin5(ppValue);
	}
}

BUTTON.addEventListener("click", calcularPF);

