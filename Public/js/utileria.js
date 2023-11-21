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
function resaltarLabelInvalido(plabelID) {
    var obj = document.getElementById(plabelID);
    var orig = obj.style;
    obj.style = 'color:red;'

    setTimeout(function () {
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