'use strict';

let listaCarrito = [];

const GetListaSocios = async () => {
    let res = await ProcessGET('ListarSocios', null);
    if (res != null && res.resultado == true) {
        listaCarrito = res.ListaSociosBD;
        cargarServicios();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};

GetListaSocios()
const contenedorCarrito = document.querySelector("#tablaCarrito")
let btnAgregar = document.querySelectorAll("botonAgregar")  

function cargarServicios(reservasElegidas) {

   //contenedorCarrito.innerHTML = "";

    reservasElegidas.forEach(reserva => {

        const div = document.createElement("div");
        div.classList.add("filas");
        div.innerHTML =`<div id="filas" class="filas">
        <tr class="fila">
          <th id=""><img id="imgCarrito" src="${reserva.FotoPerfil}" alt=""></th>
          <th>${reserva.NombreEmpresa}</th>
          <th>${reserva.Provincia}</th>
          <th>${reserva.Precio}</th>
          <th><button class="button-buscar">Quitar</button><button class="button-buscar" id= "${reserva.id}">Reservar</button></th>
      </tr>
      </div>`;
        
        contenedorCarrito.append(div)
        
    });


}

function ActualizarBnts () {
    btnAgregar =  document.querySelectorAll("botonAgregar")
}

const reservasEnCarrito = []

function AgregarAlCarrito(e) {
    const id = e.currentTarget.id
    console.log(id)
}
