'use strict';

let inputNombre = document.getElementById('titular');
let inputTipoTarjeta = document.getElementById('tipo-tarjeta');
let inputNumTarjeta = document.getElementById('numero-tarjeta');
let inputFecha = document.getElementById('lblfecha-vence');
let queryString, urlParams, _id, PersonaBD;
let botonRegistrar = document.getElementById('btn-registrar');


const ObtenerPersona = async () => {
    let params = {
        '_id': _id
    };

    let res = await ProcessGET('BuscarPersonaId', params);
    if (res != null && res.resultado == true && res.PersonaBD != null) {
        PersonaBD = res.PersonaBD;
        inputNombre.value = PersonaBD.Nombre;
    } else {
        ImprimirMsjsError(res.msj);
    }
};
const GetUrlParams = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);

    _id = urlParams.get('_id');

    if (_id != null && _id != undefined) {
        await ObtenerPersona();
    }
};
GetUrlParams();

const RegistrarDatos = async () => {
    let sCVV = inputFecha.value;
    let sNumTarjeta = inputNumTarjeta.value;
    let sNombre = inputNombre.value;
    let sTipoPtarjeta = inputTipoTarjeta.value;
    let s_id = _id;

    if (ValidarInputs(sCVV, sNumTarjeta, sNombre, sTipoPtarjeta, s_id) == false) {
        return;
    }

    let data = {
        '_id': s_id,
        'nombre': sNombre,
        'tipoTarjeta': sTipoPtarjeta,
        'numTarjeta': sNumTarjeta,
        'vencimiento': sCVV,
    };

    let res = await ProcessPOST('RegistrarTarjeta', data, null);
    if (res != null && res.resultado == true) {
        Swal.fire({
            title: 'Excelente!',
            text: res.msj,
            icon: 'success',
            confirmButtonText: 'Volver'
        }).then(ress => {
            location.href = 'PerfilCliente.html?_id=' + _id;
        });
    } else {
        ImprimirMsjsError(res.msj);
    }

};

const ValidarInputs = (pCVV, pNumTarjeta, pNombre, p_id) => {
    if (pNombre == null || pNombre == '' || pNombre == undefined) {
        //resaltarLabelInvalido('lblNombre');
        resaltarInputInvalido('titular');
        ImprimirMsjsError('Por favor ingrese nombre');
        return false;
    }  
    if (pNumTarjeta == null || pNumTarjeta == '' || pNumTarjeta == undefined) {
        //resaltarLabelInvalido('lblNumero');
        resaltarInputInvalido('numero-tarjeta');
        ImprimirMsjsError('Por favor ingrese el número de tarjeta');
        return false;
    }  
    if (pCVV == null || pCVV == '' || pCVV == undefined) {
        //resaltarLabelInvalido('lblCVV');
        resaltarInputInvalido('txt-fecha-vence');
        ImprimirMsjsError('por ingrese el CVV');
        return false;
    }  
    if (p_id == null || p_id == '' || p_id == undefined) {
        ImprimirMsjsError('Lo siento ocurrio un error por favor regrese al listado e intente de nuevo.');
        return false;
    }  
    return true;
};

const GetUrlInicio = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  
    _id = urlParams.get('_id');
  
    location.href = './paginaBusqueda.html?_id=' + _id;
    
  };

  const GetUrlPerfil2 = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  
    _id = urlParams.get('_id');
  
    location.href = './PerfilCliente.html?_id=' + _id;
    
  };

botonRegistrar.addEventListener('click', RegistrarDatos);

