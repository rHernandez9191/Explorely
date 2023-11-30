'use strict';
const apiUrl = 'http://localhost:3000/api/';

function ObtenerRol(pRol) {
    switch (pRol) {
        case 1:
            return 'Admin';
        case 2:
            return 'Client';
    }
}
function ObtenerTipoIdentificacion(ptipoId) {
    switch (ptipoId) {
        case 1:
            return 'Fisica';
        case 2:
            return 'Juridica';
        case 3:
            return 'Dimex';
        case 4:
            return 'Pasaporte';

        default:
            return 'Sin identificacion';
    }
}
function ObtenerEstado(pEstado){
    switch (pEstado) {
        case 1:
            return 'Activo';    
        default:
            return 'Inactivo';
    }

}
function ImprimirMsjsError(pMsj) {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: pMsj
    });
}
function ImprimirMsjsSuccess(pMsj) {
    swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: pMsj
    });
}
const resaltarLabelInvalido = (plabelID) => {
    var obj = document.getElementById(plabelID);
    var orig = obj.style;
    obj.style = 'color:red;'

    setTimeout(() => {
        obj.style = orig;
    }, 5000);
}
function resaltarInputInvalido(pinputID) {
    var obj = document.getElementById(pinputID);
    var orig = obj.style;
    obj.style = 'border: 1px solid red;'

    setTimeout(function () {
        obj.style = orig;
    }, 5000);
}

//Utileria para los datos de socio

function ObtenerTipoServicio(ptipoId) {
    switch (ptipoId) {
        case 1:
            return 'Hospedaje';
        case 2:
            return 'Transporte';
        case 3:
            return 'Alimentación';
        case 4:
            return 'Aventura';

        default:
            return 'Sin identificacion';
    }
}

function ObtenerProvincia(ptipoProvincia) {
    switch (ptipoProvincia) {
        case 1:
            return 'San José';
        case 2:
            return 'Alajuela';
        case 3:
            return 'Cartago';
        case 4:
            return 'Heredia';
        case 5:
            return 'Guanacaste';
        case 6:
            return 'Puntarenas';
        case 7:
            return 'Limón';
        default:
            return 'Sin identificacion';
    }
}

function ObtenerTipoEmpresa(pTipoEmpresa) {
    switch (pTipoEmpresa) {
        case 1:
            return 'Pequeña';
        case 2:
            return 'Mediana';
        case 3:
            return 'PYME';

        default:
            return 'Sin identificacion';
    }
}