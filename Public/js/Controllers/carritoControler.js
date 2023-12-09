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

        <th><button id="btnQuitar" class="button-buscar">Quitar</button><button onClick="AplicarReserva(this)" id="${reserva._id}" class="button-buscar agregar-rsv">Reservar</button></th>`;


        fila.appendChild(div)

    });
    //actualizarbtnReserva();
    //actualizarbtnQuitar();
    
    
   
}

/*function actualizarbtnReserva(){

    btnAgregarReserva = document.querySelectorAll('.button-buscar')
    btnAgregarReserva.forEach(btn => {
      btn.addEventListener('click', AgregarAReservas)
    })
}

function actualizarbtnReserva(){

    btnReservar = document.querySelectorAll('.agregar-rsv')
    btnReservar.forEach(btn => {
      btn.addEventListener('click', AplicarReserva)
    })
   }
*/


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

function AgregarAReservas(e) {

    const idBoton = e.currentTarget.id
    console.log("id elemento",idBoton);
  
  
    let elementosReserva  = localStorage.getItem('ElementosReserva');
    let coleccionServicios = [];
    if(elementosReserva == null){
      console.log("No hay elementos");
      coleccionServicios = [];
      localStorage.setItem('ElementosReserva', JSON.stringify(coleccionServicios));
    }else{
      console.log("Si hay elementos");
  
    coleccionServicios = JSON.parse( localStorage.getItem('ElementosReserva'));
  
    }
    coleccionServicios.push(idBoton);
    console.log("Guardado",coleccionServicios);
    localStorage.removeItem('ElementosReserva');
    localStorage.setItem('ElementosReserva', JSON.stringify(coleccionServicios));
    
  }

function AplicarReserva(e) {

    console.log("id elemento",e.id);
    const idBoton = e.id
    console.log("id elemento",idBoton);
  
  
    /*let elementosReserva  = localStorage.getItem('ElementosReserva');
    let coleccionServicios = [];
    if(elementosReserva == null){
      console.log("No hay elementos");
      coleccionServicios = [];
      localStorage.setItem('ElementosReserva', JSON.stringify(coleccionServicios));
    }else{
      console.log("Si hay elementos");
  
    coleccionServicios = JSON.parse( localStorage.getItem('ElementosReserva'));
  
    }
    coleccionServicios.push(idBoton);
    console.log("Guardado",coleccionServicios);
    localStorage.removeItem('ElementosReserva');
    localStorage.setItem('ElementosReserva', JSON.stringify(coleccionServicios));*/
    GetUrlReservcacio(e.id);
  }
  
  const GetUrlReservcacio = async (id) => {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
  
    var _id = urlParams.get('_id');
    location.href = './finalizarReserva.html?_id=' + id;
    
  };


GetListaCarrito();
cargarReserva();





