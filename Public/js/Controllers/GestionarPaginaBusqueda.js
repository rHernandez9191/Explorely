'use strict';

let queryString, urlParams, _id, PersonaBD;
let listaPersonas = [];

const GetListaSocios = async () => {
    let res = await ProcessGET('ListarSocios', null);
    if (res != null && res.resultado == true) {
        listaPersonas = res.ListaSociosBD;
        cargarServicios();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};

GetListaSocios();
 const ContenedorServicios = document.querySelector("#divServicios");
 let btnAgregarCarrito = document.querySelectorAll('.botonAgregar')
 let btnAgregarReserva = document.querySelector('#btnReservar')
 let btnQuitarReserva = document.querySelector('#btnQuitar') 

 function cargarServicios() {
     for (let i = 0; i < listaPersonas.length; i++) {
         const div = document.createElement("div");
         div.classList.add("renta");
         div.innerHTML =`
         <div class="a">
          <div class="info">
           <div class="card">
             <a href="#"><img src="${listaPersonas[i].FotoPerfil}"></a>
           </div>
           <div class="lugar">
             <div class="local"><span class="txtlugar">${listaPersonas[i].NombreEmpresa}</span></div>
           </div>
           <div class="lugar">
             <div class="local"><span class="txtlugar">Lugar: </span>${ObtenerProvincia(listaPersonas[i].Provincia)}</div>
           </div>
           <div class="lugar">
             <div class="local"><span class="txtlugar">Personas: </span>${listaPersonas[i].CantPersonas}</div>
           </div>
           <div class="lugar">
            <div class="local"><span class="txtlugar">Precio: </span>${listaPersonas[i].Precio}</div>
           
           </div>
           <button onclick= "" class="botonAgregar" id="${listaPersonas[i]._id}" >Agregar al carrito</button>
          </div>
         </div>
         `;

         ContenedorServicios.append(div);
     };
     actualizarbtnAgregar()
    
 };

 function actualizarbtnAgregar() {
    btnAgregarCarrito = document.querySelectorAll('.botonAgregar')

    btnAgregarCarrito.forEach(boton => {
      boton.addEventListener("click", AgregarAlCarrito)
    });
 };

 function actualizarbtnReserva(){

  btnAgregarReserva = document.querySelectorAll('#btnReservar')
  btnAgregarReserva.forEach(btn => {
    btn.addEventListener('click', AplicarReserva)
  })
 }

 function actualizarbtnQuitar(){

  btnQuitarReserva = document.querySelectorAll('#btnQuitar')
  btnQuitarReserva.forEach(btn => {
    btn.addEventListener('click', QuitarReserva)
  })
 }

 function AplicarReserva(){
  console.log("Funciona")
 }

 function QuitarReserva(){
  console.log("se quito?")
 }

const reservasEnCarrito = [];

function AgregarAlCarrito(e) {

  const idBoton = e.currentTarget.id
  console.log("id elemento",idBoton);


  let elementosCarrito  = localStorage.getItem('ElementosCarrito');
  let coleccionServicios = [];
  if(elementosCarrito == null){
    console.log("No hay elementos");
    coleccionServicios = [];
    localStorage.setItem('ElementosCarrito', JSON.stringify(coleccionServicios));
  }else{
    console.log("Si hay elementos");

  coleccionServicios = JSON.parse( localStorage.getItem('ElementosCarrito'));

  }
  coleccionServicios.push(idBoton);
  console.log("Guardado",coleccionServicios);
  localStorage.removeItem('ElementosCarrito');
  localStorage.setItem('ElementosCarrito', JSON.stringify(coleccionServicios));
 
}

 const GetUrlCliente = async () => {
  queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);

  _id = urlParams.get('_id');

  location.href = './PerfilCliente.html?_id=' + _id;
  
};




