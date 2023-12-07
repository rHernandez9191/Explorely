'use strict';

let queryString, urlParams, _id, PersonaBD;
let listaTajetas = [];

const ObtenerPersona = async () => {
    let params = {
        '_id': _id
    };

    let res = await ProcessGET('BuscarPersonaId', params);
    if (res != null && res.resultado == true && res.PersonaBD != null) {
        PersonaBD = res.PersonaBD;
        listaTajetas = PersonaBD.Tarjetas;
        cargarTarjetas();
    } else {
        ImprimirMsjsError(res.msj);
    }
};


 const ContenedorServicios = document.querySelector("#Tarjetas");

 function cargarTarjetas() {
     for (let i = 0; i < listaTajetas.length; i++) {
         const div = document.createElement("div");
         div.classList.add("Tarjetas");
         div.innerHTML =`
         <div class="a">
          <div class="info">
          <div class="lugar">
          <div class="local"><span class="txtlugar">Precio: </span>${listaTajetas[i].nombre}</div>
         </div>
           <div class="lugar">
             <div class="local"><span class="txtlugar">${listaTajetas[i].tipoTarjeta}</span></div>
           </div>
           <div class="lugar">
             <div class="local"><span class="txtlugar">Lugar: </span>${listaTajetas[i].numTarjeta}</div>
           </div>
           <div class="lugar">
             <div class="local"><span class="txtlugar">Personas: </span>${listaTajetas[i].vencimiento}</div>
           </div>
          </div>
         </div>
         `;
         ContenedorServicios.append(div);
     };
 };

 const GetUrlTarjetasCliente = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  
    _id = urlParams.get('_id');
    
  await ObtenerPersona();
    
};
GetUrlTarjetasCliente();