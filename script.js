function Encriptar(texto) {
	var textoEncriptado = texto
		.replaceAll("e", "enter")
		.replaceAll("i", "imes")
		.replaceAll("a", "ai")
		.replaceAll("o", "ober")
		.replaceAll("u", "ufat");

	return textoEncriptado;
}

function Desencriptar(texto) {
	var textoDesencriptado = texto
		.replaceAll("enter", "e")
		.replaceAll("imes", "i")
		.replaceAll("ai", "a")
		.replaceAll("ober", "o")
		.replaceAll("ufat", "u");

	return textoDesencriptado;
}

function ProcesoEncriptado() {
	let mensajeOriginal = document.getElementById("texto-original");
	let mensajeSalida = Encriptar(mensajeOriginal.value);
	mensajeEncriptado.innerHTML = mensajeSalida;
	mostarMensaje();
}

function ProcesoDesencriptado() {
	let mensajeOriginal = document.getElementById("texto-original");
	let mensajeSalida = Desencriptar(mensajeOriginal.value);
	mensajeEncriptado.innerHTML = mensajeSalida;
	mostarMensaje();
}

function mostarMensaje() {
	let mostrar = document.getElementById("hayMensaje");
	let ocultar = document.getElementById("sinMensaje");
	ocultar.style.display = "none";
	mostrar.style.display = "flex";
}

var copiarMensaje = document.getElementById("copiarMensaje");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var mensajeEncriptado = document.getElementById("mensajeEncriptado");
var textoOriginal = document.getElementById("texto-original");

encriptar.addEventListener("click", function (e) {
	e.preventDefault();
	ProcesoEncriptado();
});

desencriptar.addEventListener("click", function (e) {
	e.preventDefault();
	ProcesoDesencriptado();
});

copiarMensaje.addEventListener("click", () => {
	navigator.clipboard.writeText(mensajeEncriptado.innerHTML);
});
