'use strict';

let listaCarrito = [];

const GetListaSocios = async () => {
    let res = await ProcessGET('BuscarSocioIdentificacion', null);
    if (res != null && res.resultado == true) {
        listaCarrito = res.ListaSociosBD;
        cargarReservas();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};

GetListaSocios()
const contenedorCarrito = document.querySelector("#tablaCarrito")
let btnAgregar = document.querySelector("botonAgregar")  

function cargarReservas(reservasElegidas) {

   // contenedorCarrito.innerHTML = "";

    reservasElegidas.forEach(reserva => {

        const div = document.createElement("div");
        div.classList.add("fila");
        div.innerHTML =`<th id=""><img id="imgCarrito" src="${listaCarrito.FotoPerfil}" alt=""></th>
        <th>${ObtenerProvincia(reserva[i].Provincia)}</th>
        <th>${reserva[i].NombreEmpresa}</th>
        <th>${reserva[i].Precio}</th>
        <th><button class="button-buscar">Quitar</button><button class="button-buscar">Reservar</button></th>`;
        
        contenedorCarrito.append(div)
        
    });


}
