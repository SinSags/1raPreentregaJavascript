const desdeDiv = document.querySelector(".desde select");
const hastaDiv = document.querySelector(".hasta select");
const obtenerBtn = document.querySelector("form button");
const cambioIcon = document.querySelector("form .reversa");
const cantidad = document.querySelector("form input");
const cambioTipoTxt = document.querySelector("form .resultado");

// lista completa de las divisas(select)

[desdeDiv, hastaDiv].forEach((select, i) => {
    for (let curCode in Lista_Paises) {
        const selected = (i === 0 && curCode === "USD") || (i === 1 && curCode === "GBP") ? "selected" : "";
        select.insertAdjacentHTML("beforeend", `<option value="${curCode}" ${selected}>${curCode}</option>`);
    }
    select.addEventListener("change", () => {
        const codigo = select.value;
        const imgTag = select.parentElement.querySelector("img");
        imgTag.src = `https://flagcdn.com/48x36/${Lista_Paises[codigo].toLowerCase()}.png`;
    });
});

// funcion para sacar los datos de intercambio de la api(json)

async function getExchangeRate() {
    const cantidadVal = cantidad.value || 1;
    cambioTipoTxt.innerText = "Getting exchange rate...";
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/e1dc626a47786c7de162c0b5/latest/${desdeDiv.value}`);
        const resultado = await response.json();
        const tipoDeCambio = resultado.conversion_rates[hastaDiv.value];
        const totalTipoDeCambio = (cantidadVal * tipoDeCambio).toFixed(2);
        cambioTipoTxt.innerText = `${cantidadVal} ${desdeDiv.value} = ${totalTipoDeCambio} ${hastaDiv.value}`;
    } catch (error) {
        cambioTipoTxt.innerText = "Something went wrong...";
    }
}

// lista para errores del boton de cambio y iconos

window.addEventListener("load", getExchangeRate);
obtenerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getExchangeRate();
});

cambioIcon.addEventListener("click", () => {
    [desdeDiv.value, hastaDiv.value] = [hastaDiv.value, desdeDiv.value];
    [desdeDiv, hastaDiv].forEach((select) => {
        const codigo = select.value;
        const imgTag = select.parentElement.querySelector("img");
        imgTag.src = `https://flagcdn.com/48x36/${Lista_Paises[codigo].toLowerCase()}.png`;
    });
    getExchangeRate();
});