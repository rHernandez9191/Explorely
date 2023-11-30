const reservasArray = [
    {
    id: "0001",
    titulo: "Las Colinas",
    imagen: "./img/imagen1.webp",
    precio: "75 000 CRC",
    cantPersonas: "5",
    lugar: "Puntarenas"
    },
    {
        id: "0002",
        titulo: "Etiopía",
        imagen: "./img/imagen1.webp",
        precio: "150 000 CRC",
        cantPersonas: "4", 
        lugar: "Guanacaste"
    },
    {
        id: "0003",
        titulo: "Angelus",
        imagen: "./img/imagen1.webp",
        precio: "250 000 CRC",
        cantPersonas: "11", 
        lugar: "Cartago"
    }
];

const tarjetasArray = [
    {   
        id: "1111",
        tipoTarjeta: "Credito",
        emisor: "BNCR",
        categoria: "VISA",
        numCuenta: "***890"
    },
    {
        id: "1112",
        tipoTarjeta: "Debito",
        emisor: "BNCR",
        categoria: "MasterCard",
        numCuenta: "***800"
    }
];

const contenedorProductos = document.querySelector("#divReservas");
const botonesOpciones = document.querySelectorAll("#BotonesPerfil");

function cargarReserva(){

    reservasArray.forEach(reservaArray => {

        let div = document.createElement("div");
        div.classList.add("a");
        div.innerHTML = `
        <div class="rentas">
            <span class="titulo"><h3>${reservaArray.titulo}</h3></span>
            <img src="${reservaArray.imagen}" class="renta-a" />
            <span>${reservaArray.precio}</span>
            <span>${reservaArray.cantPersonas}</span>
            <span>${reservaArray.lugar}</span>
            <button>Compartir</button>
            <i class="bx bxs-trash-alt"></i>
          </div>
          `;
        contenedorProductos.append(div);
    })
};
    
cargarReserva();