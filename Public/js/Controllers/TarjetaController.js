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
        ImprimirDatos();
    } else {
        ImprimirMsjsError(res.msj);
    }
};


const ImprimirDatos = () => {
    let tbody = document.getElementById('tbdTarjetas');
    tbody.innerHTML = '';

    for (let i = 0; i < listaTajetas.length; i++) {

        let fila = tbody.insertRow();
        let celdaNombre = fila.insertCell();
        let celdaNumeroTarjeta = fila.insertCell();
        let CeldaCvv = fila.insertCell();
        let celdaAcciones = fila.insertCell();

        celdaNombre.innerHTML = listaTajetas[i].Nombre + ' ' + listaTajetas[i].Apellido;
        celdaNumeroTarjeta.innerHTML = listaTajetas[i].NumeroTarjeta;
        CeldaCvv.innerHTML = listaTajetas[i].CVV;
        
       
        let btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.innerText = '🗑️';
        btnDelete.title = 'ELIMINAR';
        btnDelete.classList.add('btnsTabla');
        btnDelete.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea eliminar el registro de la tarjeta '+ listaTajetas[i].NumeroTarjeta,
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
                await GetUrlParams();
            }
        };

        let divBtns = document.createElement('div');
        divBtns.appendChild(btnDelete);

        celdaAcciones.appendChild(divBtns);
    }
};
const GetUrlParams = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);

    _id = urlParams.get('_id');

    if (_id != null && _id != undefined) {
        document.getElementById('btnCrea').onclick = () => {
            location.href = './GestionarTarjetasPersona.html?_id=' + _id;
        };
        await ObtenerPersona();
    }
};
GetUrlParams();