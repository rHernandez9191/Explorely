'use strict';



let inputTipoServicio = document.getElementById('txtTipoServicio');
let inputIdentificacion = document.getElementById('txtidentificacion');
let inputNombreEmpresa = document.getElementById('txtNombreEmpresa');
let inputEncargado1 = document.getElementById('txtEncargado1');
let inputEncargado2 = document.getElementById('txtEncargado2');
let TipoEmpresa = document.getElementById('txtempresa');
let inputEmail = document.getElementById('txtEmail');
let inputPassword1 = document.getElementById('txtPass');
let inputPassword2 = document.getElementById('txtPass2');
let inputFechaConstitucion = document.getElementById('lblConstitucion');
let inputProvincia = document.getElementById('slctProvincia');
let inputCanton = document.getElementById('txtCanton');
let inputDescripcion = document.getElementById('txtDescripcion');
let inputRol = document.getElementById('txtRol');
let inputEstado = document.getElementById('txtestado');
let input_id = document.getElementById('txt_id');
let inputImgUser = document.getElementById('imgUser');
let botonRegistrar = document.getElementById('btnRegistrar');
let inputPrecio = document.getElementById('txtprecio');
let inputCantPersonas = document.getElementById('txtCantPersonas');


const RegistrarDatos = async () => {

    let sTipoEmpresa = TipoEmpresa.value;
    let sTipoProvincia = inputProvincia.value;
    let sTipoCanton = inputCanton.value;
    let sTipoDescripcion = inputDescripcion.value;
    let sTipoNegocio = inputTipoServicio.value;
    let sIdentificacion = inputIdentificacion.value;
    let sNombreNegocio = inputNombreEmpresa.value;
    let sEncargado1 = inputEncargado1.value;
    let sEncargado2 = inputEncargado2.value;
    //let sexo = null;
    /*for (let i = 0; i < inputsSexo.length; i++) {
        if (inputsSexo[i].checked == true) {
            sexo = inputsSexo[i].value;
            break;
        }
    }*/
    let sEmail = inputEmail.value;
    let sPass = inputPassword1.value;
    let sPassConfirmacion = inputPassword2.value;
    let dConstitucion = inputFechaConstitucion.value;
    let nRol = Number(inputRol.value);
    let nEstado = Number(inputEstado.value);
    let sCantPersonas = inputCantPersonas.value;
    let sPrecio = inputPrecio.value;
    
    let sFotoPerfil = inputImgUser.src;

    //aca seguirian los subdocumentos version 1
    
    let s_id = input_id.value;

    if (ValidarDatos(sTipoNegocio, sIdentificacion, sNombreNegocio, sEncargado1, sEncargado2, sTipoEmpresa, sEmail, sPass, sPassConfirmacion, dConstitucion, sTipoProvincia, sTipoCanton, nRol, sTipoDescripcion, nEstado, sCantPersonas, sPrecio /*sFotoPerfil*/) == false) {
        return;
    }

    let res = null;
    let dataBody = {
        '_id': s_id,
        'TipoServicio': sTipoNegocio,
        'Identificacion': sIdentificacion,
        'NombreEmpresa': sNombreNegocio,
        'Encargado1': sEncargado1,
        'Encargado2': sEncargado2,
        'TipoEmpresa': sTipoEmpresa,
        'Email': sEmail,
        'Password': sPass,
        'Password2': sPassConfirmacion,
        'FechaConstitucion': new Date(dConstitucion),
        'Provincia': sTipoProvincia,
        'Canton': sTipoCanton,
        'Descripcion': sTipoDescripcion,
        'Rol': nRol,
        'Estado': nEstado,
        'CantPersonas': sCantPersonas,
        'Precio': sPrecio,
        'FotoPerfil': sFotoPerfil
    };

    //res = await ProcessPOSTSocio('RegistrarSocio', dataBody, null);

    if (s_id != null && s_id != '' && s_id != undefined) {
        res = await ProcessPUT('ModificarSocio', dataBody, null);
    } else {
        res = await ProcessPOST('RegistrarSocio', dataBody, null);
    }

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrio un error inesperado');
    } else if (res.resultado == false){
        ImprimirMsjsError(res.msj);
    }else{
        swal.fire({
            icon: 'success',
            title: 'Excelente!',
            text: res.msj,
            confirmButtonText: 'Ok'
        }).then( resSwetAlert => {
            location.href = 'index.html'
        });
    }
};    
const ValidarDatos = (pTipoServicio, pIdentificacion, pNombreEmpresa, pEncargado1, pEncargado2, pTipoEmpresa, pEmail, pPass, pPassConfirmacion, pFechaConstitucion, pProvincia, pCanton, pRol, pDescripcion, pEstado, pFotoPerfil)  => {
    if (pTipoServicio == '' || pTipoServicio == null || pTipoServicio == undefined) {
        /*resaltarLabelInvalido('lbltipoIdentificacion');*/
        resaltarInputInvalido('txtTipoServicio');
        ImprimirMsjsError('Por favor seleccione tipo de Servico');
        return false;
    }
    if (pIdentificacion == '' || pIdentificacion == null || pIdentificacion == undefined) {
        /*resaltarLabelInvalido('lblidentificacion');*/
        resaltarInputInvalido('txtidentificacion');
        ImprimirMsjsError('Por favor ingrese su identificacion');
        return false;
    }
    if (pNombreEmpresa == '' || pNombreEmpresa == null || pNombreEmpresa == undefined) {
        //resaltarLabelInvalido('lblnombre');
        resaltarInputInvalido('txtNombreEmpresa');
        ImprimirMsjsError('Por favor ingrese el nombre de la empresa');
        return false;
    }
    if (pEncargado1 == '' || pEncargado1 == null || pEncargado1 == undefined) {
        //resaltarLabelInvalido('lblapellido1');
        resaltarInputInvalido('txtEncargado1');
        ImprimirMsjsError('Por favor ingrese el encargado principal');
        return false;
    }
    if (pEncargado2 == '' || pEncargado2 == null || pEncargado2 == undefined) {
        //resaltarLabelInvalido('lblapellido1');
        resaltarInputInvalido('txtEncargado2');
        ImprimirMsjsError('Por favor ingrese el encargado secundario');
        return false;
    }
    if (pTipoEmpresa == '' || pTipoEmpresa == null || pTipoEmpresa == undefined) {
        //resaltarLabelInvalido('lblempresa');
        resaltarInputInvalido('txtempresa');
        ImprimirMsjsError('Por favor indique el tipo de empresa');
        return false;
    }
    if (pEmail == null || pEmail == '' || pEmail == undefined) {
        //resaltarLabelInvalido('lblEmail');
        resaltarInputInvalido('txtEmail');
        ImprimirMsjsError('Por favor ingrese su Correo');
        return false;
    }
    if (pPass == null || pPass == '' || pPass == undefined) {
        //resaltarLabelInvalido('lblPass');
        resaltarInputInvalido('txtPass');
        ImprimirMsjsError('Por favor ingrese su Contraseña');
        return false;
    }
    if (pPassConfirmacion == null || pPassConfirmacion == '' || pPassConfirmacion == undefined) {
        //resaltarLabelInvalido('lblPass2');
        resaltarInputInvalido('txtPass2');
        ImprimirMsjsError('Por favor ingrese su Confrimacion de Contraseña');
        return false;
    }
    if (pPass != pPassConfirmacion) {
        //resaltarLabelInvalido('lblPass');
        resaltarInputInvalido('txtPass');
        //resaltarLabelInvalido('lblPass2');
        resaltarInputInvalido('txtPass2');
        ImprimirMsjsError('Por favor ingrese ambas Contraseñas iguales');
        return false;
    }
    if (pFechaConstitucion == '' || pFechaConstitucion == null || pFechaConstitucion == undefined || new Date(pFechaConstitucion) >= new Date()) {
        //resaltarLabelInvalido('lblConstitucion');
        resaltarInputInvalido('lblConstitucion');
        ImprimirMsjsError('Por favor ingrese una fecha de constitucion menor a hoy');
        return false;
    }
    if (pProvincia == null || pProvincia == undefined || pProvincia == '') {
        ImprimirMsjsError('Seleccione su provincia');
        //resaltarLabelInvalido('lbledad');
        resaltarInputInvalido('slctProvincia');
        return false;
    }
    if (pCanton == null || pCanton == undefined || pCanton == '') {
        ImprimirMsjsError('Seleccione su cantón');
        //resaltarLabelInvalido('lbledad');
        resaltarInputInvalido('txtCanton');
        return false;
    }
    if (pRol == null || pRol == '' || pRol == undefined || pRol == 0) {
        //resaltarLabelInvalido('lblRol');
        resaltarInputInvalido('txtRol');
        ImprimirMsjsError('Por favor indique un Rol');
        return false;
    }
    if (pDescripcion == null || pDescripcion == undefined || pDescripcion == '') {
        ImprimirMsjsError('Ingrese una descripcion');
        //resaltarLabelInvalido('lbledad');
        resaltarInputInvalido('txtDescripcion');
        return false;
    }
    return true;
}

botonRegistrar.addEventListener('click', RegistrarDatos);