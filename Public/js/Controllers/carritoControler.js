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


function cargarReserva() {
    reservasEnCarrito.forEach(reserva => {

        const div = document.createElement("div");
        div.classList.add("filas");
        div.innerHTML = `<tr class="fila">
        <th id=""><img id="imgCarrito" src="${reserva.FotoPerfil}" alt=""></th>
        <th>${reserva.Provincia}</th>
        <th>${reserva.NombreEmpresa}</th>
        <th>${reserva.Precio}}</th>
        <th><button class="button-buscar">Quitar</button><button id="btnReservar" class="button-buscar">Reservar</button></th>
    </tr>`;

        fila.append(div)

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
 
let prueba = [
    {
    "_id": "656a0ce68e941493699a314f",
    "TipoServicio": 4,
    "Identificacion": "12309710293",
    "NombreEmpresa": "La Banana",
    "Encargado1": "Pedro",
    "Encargado2": "Chente",
    "TipoEmpresa": 2,
    "Email": "Chente@gmail.com",
    "Password": "1234",
    "FechaConstitucion": "2007-08-31T00:00:00.000Z",
    "Provincia": 6,
    "Canton": "Quepos",
    "Descripcion": "Disfrute de un divertido tour en banana en las cercanías de la playa de Manuel Antonio.",
    "Estado": 1,
    "Rol": 1,
    "CantPersonas": "5",
    "Precio": "7 000 CRC/P",
    "FotoPerfil": "https://res.cloudinary.com/dnivxfsrs/image/upload/v1701448847/plq3nn4xs74geyur7efg.jpg",
    "__v": 0
    },
    {
    "_id": "656bfa8c49ddcd14154e9802",
    "TipoServicio": 1,
    "Identificacion": "09871234",
    "NombreEmpresa": "Sweet Dreams",
    "Encargado1": "Allan",
    "Encargado2": "Diego",
    "TipoEmpresa": 1,
    "Email": "Allan3@gmail.com",
    "Password": "1234",
    "FechaConstitucion": "2013-01-12T00:00:00.000Z",
    "Provincia": 5,
    "Canton": "Samara",
    "Descripcion": "Este es un magnifico lugar de hospedaje para aquellos que buscan disfrutar de unas vacaciones llenas de confort.",
    "Estado": 1,
    "Rol": 2,
    "CantPersonas": "10",
    "Precio": "130 000 CRC",
    "FotoPerfil": "https://res.cloudinary.com/dnivxfsrs/image/upload/v1701575228/vjad24cmfjhmkqhu0sbk.webp",
    "__v": 0
    },
    {
    "_id": "656bfb3649ddcd14154e9805",
    "TipoServicio": 1,
    "Identificacion": "0987123456",
    "NombreEmpresa": "Angelus",
    "Encargado1": "Pedro",
    "Encargado2": "Ana",
    "TipoEmpresa": 1,
    "Email": "Pedro7@gmail.com",
    "Password": "1234",
    "FechaConstitucion": "2019-02-12T00:00:00.000Z",
    "Provincia": 7,
    "Canton": "Puerto VIejo",
    "Descripcion": "Disfrute de la exclusiva vista a la hermosa playa de Puerto Viejo, mientras se relaja en una fresca piscina.",
    "Estado": 1,
    "Rol": 2,
    "CantPersonas": "12",
    "Precio": "100 000 CRC",
    "FotoPerfil": "https://res.cloudinary.com/dnivxfsrs/image/upload/v1701575380/mbvqjnho3om0eljwu5md.webp",
    "__v": 0
    },
    {
    "_id": "656bfd6b49ddcd14154e9809",
    "TipoServicio": 3,
    "Identificacion": "000011122",
    "NombreEmpresa": "La Cuchara Sucia",
    "Encargado1": "Sara",
    "Encargado2": "Rika",
    "TipoEmpresa": 1,
    "Email": "Sara@gmail.com",
    "Password": "1234",
    "FechaConstitucion": "2019-12-01T00:00:00.000Z",
    "Provincia": 1,
    "Canton": "San José",
    "Descripcion": "Venga y disfrute de la mejor cuchara de la ciudad. !!!No está sucia¡¡¡",
    "Estado": 1,
    "Rol": 1,
    "CantPersonas": "60",
    "Precio": "Varia",
    "FotoPerfil": "https://res.cloudinary.com/dnivxfsrs/image/upload/v1701575946/qabcwtkxwebdvqmzilsb.jpg",
    "__v": 0
    },
    {
    "_id": "656bfe3349ddcd14154e980c",
    "TipoServicio": 1,
    "Identificacion": "00001144567",
    "NombreEmpresa": "Sabanas Blancas",
    "Encargado1": "Raúl",
    "Encargado2": "Hernández",
    "TipoEmpresa": 2,
    "Email": "Raul7@gmail.com",
    "Password": "1234",
    "FechaConstitucion": "2013-06-01T00:00:00.000Z",
    "Provincia": 5,
    "Canton": "Santa Cruz",
    "Descripcion": "Lujoso lugar de relajación a solo minutes de las mejores playa del país. Puede disfrutar de una hermosa y fresca piscina.",
    "Estado": 1,
    "Rol": 1,
    "CantPersonas": "7",
    "Precio": "259 000 CRC",
    "FotoPerfil": "https://res.cloudinary.com/dnivxfsrs/image/upload/v1701576172/h2zagrh13butfkfytkch.jpg",
    "__v": 0
    }
    ];


console.log(obtenerElemetosCarrito(prueba));


cargarReserva();