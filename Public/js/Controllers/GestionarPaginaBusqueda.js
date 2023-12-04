'use strict';

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
          </div>
         </div>
         `;
         ContenedorServicios.append(div);
     };
 };