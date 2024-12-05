//
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

function calcularPFFiuni() {
	ppValue = PP.value;
	MSG.innerHTML = "";
	if(ppValue<20){
		MSG.innerHTML = "No hay examen :(";
	}
	if(ppValue>=20 && ppValue<50){
		MSG.innerHTML = "Necesitas sacar 50% en recuperatorio para rendir el final";
	}
	if(ppValue>=50 && ppValue<60){
		NOTA2.innerHTML = ((60-0.4*ppValue)/0.6).toFixed(2);
		NOTA3.innerHTML = 70;
		NOTA4.innerHTML = 81;
		NOTA5.innerHTML = 91;
	}
	if (ppValue>=60) {
		NOTA2.innerHTML = 60;
		NOTA3.innerHTML = calcularMin3(ppValue).toFixed(2);
		NOTA4.innerHTML = calcularMin4(ppValue).toFixed(2);
		NOTA5.innerHTML = calcularMin5(ppValue).toFixed(2);
	}
}
