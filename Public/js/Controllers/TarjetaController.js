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
         <div class="a" >
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

         const btnEliminar = document.querySelector("#btnEliminar");
        let btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.innerText = '🗑️';
        btnDelete.title = listaTajetas[i].numTarjeta + ' / ' + listaTajetas[i].tipoTarjeta;
        btnDelete.classList.add('btnsTabla');
        btnDelete.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea eliminar el registro de la tarjeta '+ listaTajetas[i].numTarjeta,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_idPersona': PersonaBD._id,
                    '_idTarjeta': listaTajetas[i]._id
                };

                let result = await ProcessDELETE('EliminarTarjetaPersona', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetUrlTarjetasEliminadas();
            }
        };
        
        ContenedorServicios.append(div);
        btnEliminar.append(btnDelete)
        
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

const GetUrlTarjetasEliminadas = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  
    _id = urlParams.get('_id');
    location.href = './PerfilCliente.html?_id=' + _id;
    
  await ObtenerPersona();
    
};

const GetUrlCarritoPerfil = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  
    _id = urlParams.get('_id');
    location.href = './carrito.html?_id=' + _id;
    
  };
GetUrlTarjetasCliente();