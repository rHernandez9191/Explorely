'use strict'

const fila = document.querySelector('#carritoFilas')
const btnAgregarReserva = document.querySelector('#btnReservar')

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

let validar = () => {
    console.log("Funciona el boton")
}

btnAgregarReserva.addEventListener('click', validar)


function cargarReserva() {
    listaCarrito .forEach(reserva => {

        const div = document.createElement("tr");
        div.classList.add("fila");
        div.innerHTML = `
        <th id=""><img id="imgCarrito" src="${reserva.FotoPerfil}" alt=""></th>
        <th>${reserva.Provincia}</th>
        <th>${reserva.NombreEmpresa}</th>
        <th>${reserva.Precio}</th>
        <th><button class="button-buscar">Quitar</button><button id="btnReservar" class="button-buscar">Reservar</button></th>`;

        fila.appendChild(div)

    });
}

function obtenerElemetosCarrito(listaServicios) {
    let elementosCarrito = localStorage.getItem('ElementosCarrito');
    let coleccionServicios = [];
    if (elementosCarrito != null) {
        coleccionServicios = JSON.parse(elementosCarrito);
    }

    let elementosEncontrados = [];

    listaServicios.forEach(servicio => {
        coleccionServicios.forEach(elemento => {

            if (servicio._id == elemento) {
                elementosEncontrados.push(servicio);
            }
        });
    }

    );
return elementosEncontrados;
}


GetListaCarrito();
cargarReserva();