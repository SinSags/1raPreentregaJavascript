// constantes y getElementById

const divisaElemento_1 = document.getElementById('divisa-1');
const divisaElemento_2 = document.getElementById('divisa-2');
const cantidadElemento_1 = document.getElementById('cantidad-1');
const cantidadElemento_2 = document.getElementById('cantidad-2');

const tipoElemento = document.getElementById('tipo');
const cambio = document.getElementById('cambio');

// API link

function calculate(){
    const divisa_1 = divisaElemento_1.value;
    const divisa_2 = divisaElemento_2.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${divisa_1}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[divisa_2];
        tipoElemento.innerText = `1 ${divisa_1} = ${rate} ${divisa_2}`;
        cantidadElemento_2.value = (cantidadElemento_1.value * rate).toFixed(2);
    });
}

// lista Eventos

divisaElemento_1.addEventListener('cambio', calculate);
divisaElemento_2.addEventListener('cambio', calculate);
cantidadElemento_1.addEventListener('input', calculate);
cantidadElemento_2.addEventListener('input', calculate);

cambio.addEventListener('click', function(){
    const temp = divisaElemento_1.value;
    divisaElemento_1.value = divisaElemento_2.value;
    divisaElemento_2.value = temp;
    calculate();
});

calculate();