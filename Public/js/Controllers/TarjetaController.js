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
          <div class="fotoTarjeta">

          </div>
          <div>
           <div class="info">
            <div class="lugar">
             <div class="local"><span class="txtlugar">Titular: </span>${listaTajetas[i].nombre}</div>
            </div>
            <div class="lugar">
             <div class="local"><span class="txtlugar">${listaTajetas[i].tipoTarjeta}</span></div>
            </div>
            <div class="lugar">
             <div class="local"><span class="txtlugar">Número: </span>${listaTajetas[i].numTarjeta}</div>
            </div>
            <div class="lugar">
             <div class="local"><span class="txtlugar">Vencimiento: </span>${listaTajetas[i].vencimiento}</div>
            </div>
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
const GetUrlInicio = async () => {
  queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);

  _id = urlParams.get('_id');

  location.href = './paginaBusqueda.html?_id=' + _id;
  
};
GetUrlTarjetasCliente();