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
let btnAgregar = document.querySelectorAll("botonAgregar")  

function cargarReservas() {

    contenedorCarrito.innerHTML = ``;

    for (let i = 0; i < listaCarrito.length; i++) {
        const div = document.createElement("div");
        div.classList.add("fila");
        div.innerHTML =`<th id=""><img id="imgCarrito" src="${listaCarrito.FotoPerfil}" alt=""></th>
        <th>${ObtenerProvincia(listaCarrito[i].Provincia)}</th>
        <th>${listaCarrito[i].NombreEmpresa}</th>
        <th>${listaCarrito[i].Precio}</th>
        <th><button class="button-buscar">Quitar</button><button class="button-buscar">Reservar</button></th>`;
        contenedorCarrito.append(div)
    }};

    console.log(btnAgregar)

