// Función para convertir de dólar a peso argentino//
function convertirDolarAPeso(dolar) {
    // Tipo de cambio actual (se actualiza este valor según el tipo de cambio real)
    const tipoCambio = 846;  // Ejemplo: 1 dólar oficial = 846 pesos argentinos

    // Realizar la conversión//
    const pesoArgentino = dolar * tipoCambio;10
    return pesoArgentino;
}

//Menu principal de bienvenida//

let respuesta = prompt("Bienvenido!😁😁😁 Desea utilizar este convertidor de divisas? esc para salir")

while(respuesta !== "esc"){

// Obtener la cantidad de dólares del usuario//
const cantidadDolares = parseInt(prompt("Ingresa la cantidad de dólares a convertir🤑🤑🤑:"));

// Validar la entrada del usuario
if (!isNaN(cantidadDolares) && cantidadDolares >= 0) {
    // Calcular la conversión
    const resultado = convertirDolarAPeso(cantidadDolares);

    // Mostrar el resultado
    alert(`${cantidadDolares} dólares son equivalentes a ${resultado} pesos argentinos😎.`);
} else {
    // Mensaje de error si la entrada no es válida
    alert("Por favor, ingresa una cantidad válida de dólares.");
}


respuesta= prompt("Desea utilizar nuevamente el conversor de divisas? esc para salir")
}
