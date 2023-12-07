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
    listaPersonas.forEach(socio => {
    
        const div = document.createElement("div");
        div.classList.add("fila");
        div.innerHTML= `<tr class="fila">
        <th id=""><img id="imgCarrito" src="${socio.FotoPerfil}" alt=""></th>
        <th>${socio.Provincia}</th>
        <th>${socio.NombreEmpresa}</th>
        <th>${socio.Precio}}</th>
        <th><button class="button-buscar">Quitar</button><button id="btnReservar" class="button-buscar">Reservar</button></th>
    </tr>`;
    
    fila.append(div)
    
     });
}


cargarReserva();