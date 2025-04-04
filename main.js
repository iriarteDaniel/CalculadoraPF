const ENCABEZADO = document.getElementById("encabezado");
const TABLA = document.getElementById("tabla");
const FACULTAD = document.getElementById("facultad");
const PP = document.getElementById("pp");
const BUTTON = document.getElementById("calcular");
const NOTA2 = document.getElementById("nota2");
const NOTA3 = document.getElementById("nota3");
const NOTA4 = document.getElementById("nota4");
const NOTA5 = document.getElementById("nota5");
const MSG = document.getElementById("msg");
let ppValue;

FACULTAD.addEventListener("input", (e) => {
	console.log(FACULTAD.value);
	if (FACULTAD.value== "fiuni" || FACULTAD.value== "cyt") {
		TABLA.style.visibility = "visible";
		ENCABEZADO.style.visibility = "visible";
		MSG.innerHTML = "";
	}
	else{
		TABLA.style.visibility = "hidden";
		ENCABEZADO.style.visibility = "hidden";
		MSG.innerHTML = "Estamos trabajando en añadir más facultades, vuelva pronto";
		MSG.style.visibility = "visible";
	}
})

BUTTON.addEventListener("click", (e) => {
	switch (FACULTAD.value) {
	case "fiuni":
		calcularPFFiuni();
		break;
	case "cyt":
		calcularPFFiuni();
		break;
	}
});
