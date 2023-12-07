'use strict'

const fila = document.querySelector('#carritoFilas')
const btnAgregarReserva = document.querySelector('#btnReservar')

let listaCarrito = [];

const GetListaCarrito = async () => {
    let res = await ProcessGET('ListarSocios', null);
    if (res != null && res.resultado == true) {
        listaCarrito = res.ListaSociosBD;
        cargarReserva();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};

let validar = () => {
    console.log("Funciona el boton")
}

btnAgregarReserva.addEventListener('click', validar)


function cargarReserva () {
    reservasEnCarrito.forEach(reserva => {
    
        const div = document.createElement("div");
        div.classList.add("filas");
        div.innerHTML= `<tr class="fila">
        <th id=""><img id="imgCarrito" src="${reserva.FotoPerfil}" alt=""></th>
        <th>${reserva.Provincia}</th>
        <th>${reserva.NombreEmpresa}</th>
        <th>${reserva.Precio}}</th>
        <th><button class="button-buscar">Quitar</button><button id="btnReservar" class="button-buscar">Reservar</button></th>
    </tr>`;
    
    fila.append(div)
    
     });
}


cargarReserva();