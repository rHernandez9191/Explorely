'use strict'

const fila = document.querySelector('#carritoFilas')

let listaCarrito = [];

const GetListaCarrito = async () => {
    let res = await ProcessGET('ListarSocios', null);
    if (res != null && res.resultado == true) {
      
        listaCarrito = obtenerElemetosCarrito(   res.ListaSociosBD);
        
        cargarReserva();
        
        
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};

function cargarReserva() {
    listaCarrito .forEach(reserva => {

        const div = document.createElement("tr");
        div.classList.add("fila");
        div.innerHTML = `
        <th id=""><img id="imgCarrito" src="${reserva.FotoPerfil}" alt=""></th>
        <th>${ObtenerProvincia(reserva.Provincia)}</th>
        <th>${reserva.NombreEmpresa}</th>
        <th>${reserva.Precio}</th>

        <th><button id="btnQuitar" class="button-buscar">Quitar</button><button id="${reserva._id}" class="button-buscar agregar-rsv">Reservar</button></th>`;


        fila.appendChild(div)

    });
    
    actualizarbtnReserva();
    actualizarbtnQuitar();
    
}
cargarReserva();