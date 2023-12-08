'use strict';

let botonRegistrar = document.getElementById('btnRegistrar');
let inputTipoIdentificacion = document.getElementById('txttipoIdentificacion');
let inputIdentificacion = document.getElementById('txtidentificacion');
let inputNombre = document.getElementById('txtnombre');
let inputApellido1 = document.getElementById('txtapellido1');
let inputApellido2 = document.getElementById('txtapellido2');
let inputsSexo = document.getElementsByName('rbtSexo');
let inputEmail = document.getElementById('txtEmail');
let inputPassword1 = document.getElementById('txtPass');
let inputPassword2 = document.getElementById('txtPass2');
let inputNacimiento = document.getElementById('txtnacimiento');
let inputEdad = document.getElementById('txtEdad');
let inputRol = 2;
let inputEstado = 1;
let input_id = document.getElementById('txt_id');
let inputImgUser = document.getElementById('imgUser');

/*const CargarDatos = (pPersona, pBtn) => {
    if (pBtn == 'btnCrea') {
        document.getElementById('ttlInicio').innerHTML = 'Registrar Persona';
        document.getElementById('btnRegistrar').value = 'Registrar';
    } else {        
        document.getElementById('ttlInicio').innerHTML = 'Actualizar Persona';
        document.getElementById('btnRegistrar').value = 'Actualizar';

        let nacimientoPersona = pPersona.Nacimiento;
        if (nacimientoPersona != null && nacimientoPersona != undefined) {
            let [date, time] = formatDate(new Date(nacimientoPersona.replace('Z', ''))).split(' ');
            inputNacimiento.value = date;
        }
        for (let i = 0; i < inputsSexo.length; i++) {
            if (pPersona.Sexo == inputsSexo[i].value) {
                inputsSexo[i].checked = true;
                break;
            }
        }
        inputTipoIdentificacion.value = pPersona.TipoIdentificacion;
        inputIdentificacion.value = pPersona.Identificacion;
        inputNombre.value = pPersona.Nombre;
        inputApellido1.value = pPersona.Apellido1;
        inputApellido2.value = pPersona.Apellido2;
        inputEmail.value = pPersona.Email;
        inputPassword1.value = pPersona.Password;
        inputPassword2.value = pPersona.Password;
        inputEdad.value = pPersona.Edad;
        inputRol.value = pPersona.Rol;
        inputEstado.value = pPersona.Estado;
        inputImgUser.src = pPersona.FotoPerfil;
        input_id.value = pPersona._id;
};



let queryString, urlParams, _id;
const IdentificarAccion = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);

    _id = urlParams.get('_id');
    //let nombre = urlParams.get('nombre');
    //console.log(nombre);

    if (_id != null && _id != undefined && _id == 'crear') {
        CargarDatos(null, 'btnCrea');
    } else {
        let params = { '_id': _id };
        let persona = await ProcessGET('BuscarPersonaId', params);
        if (persona != null && persona.resultado == true && persona.PersonaBD != null) {
            CargarDatos(persona.PersonaBD, 'btnActualizar');
        } else {
            ImprimirMsjsError(persona.msj);
        }
    }
};
IdentificarAccion();*/



const RegistrarDatos = async () => {

    let sTipoIdentificacion = inputTipoIdentificacion.value;
    let sIdentificacion = inputIdentificacion.value;
    let sNombre = inputNombre.value;
    let sApellido1 = inputApellido1.value;
    let sApellido2 = inputApellido2.value;
    let sexo = null;
    for (let i = 0; i < inputsSexo.length; i++) {
        if (inputsSexo[i].checked == true) {
            sexo = inputsSexo[i].value;
            break;
        }
    }
    let sEmail = inputEmail.value;
    let sPass = inputPassword1.value;
    let sPassConfirmacion = inputPassword2.value;
    let dNacimiento = inputNacimiento.value;
    let nEdad = Number(inputEdad.value);
    let nRol = inputRol;
    let nEstado = inputEstado;
    let sFotoPerfil = inputImgUser.src;

    //aca seguirian los subdocumentos version 1

    let s_id = input_id.value;

    if (ValidarDatos(sTipoIdentificacion, sIdentificacion, sNombre, sApellido1, sApellido2, sexo, sEmail, sPass, sPassConfirmacion, dNacimiento, nEdad, nRol, nEstado /*sFotoPerfil*/) == false) {
        return;
    }

    let res = null;
    let dataBody = {
        '_id': s_id,
        'TipoIdentificacion': sTipoIdentificacion,
        'Identificacion': sIdentificacion,
        'Nombre': sNombre,
        'Apellido1': sApellido1,
        'Apellido2': sApellido2,
        'Sexo': sexo,
        'Edad': nEdad,
        'Estado': nEstado,
        'Email': sEmail,
        'Password': sPass,
        'Rol': nRol,
        'Nacimiento': new Date(dNacimiento),
        'FotoPerfil': sFotoPerfil
    };

    if (s_id != null && s_id != '' && s_id != undefined) {
        res = await ProcessPUT('ModificarPersona', dataBody, null);
    } else {
        res = await ProcessPOST('RegistrarPersona', dataBody, null);
    }

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrio un error inesperado');
    } else if (res.resultado == false) {
        ImprimirMsjsError(res.msj);
    } else {
        swal.fire({
            icon: 'success',
            title: 'Excelente!',
            text: res.msj,
            confirmButtonText: 'Ok'
        }).then(resSwetAlert => {
            location.href = 'index.html'
        });
    }
};
const ValidarDatos = (pTipoIdentificacion, pIdentificacion, pNombre, pApellido1, pApellido2, psexo, pEmail, pPass, pPassConfirmacion, pNacimiento, pEdad, pRol, pEstado, pFotoPerfil) => {
    if (pTipoIdentificacion == '' || pTipoIdentificacion == null || pTipoIdentificacion == undefined) {
        //resaltarLabelInvalido('lbltipoIdentificacion');
        resaltarInputInvalido('txttipoIdentificacion');
        ImprimirMsjsError('Por favor seleccione tipo de identificacion');
        return false;
    }
    if (pIdentificacion == '' || pIdentificacion == null || pIdentificacion == undefined) {
        //resaltarLabelInvalido('lblidentificacion');
        resaltarInputInvalido('txtidentificacion');
        ImprimirMsjsError('Por favor ingrese su identificacion');
        return false;
    }
    if (pNombre == '' || pNombre == null || pNombre == undefined) {
        //resaltarLabelInvalido('lblnombre');
        resaltarInputInvalido('txtnombre');
        ImprimirMsjsError('Por favor ingrese su Nombre');
        return false;
    }
    if (pApellido1 == '' || pApellido1 == null || pApellido1 == undefined) {
       // resaltarLabelInvalido('lblapellido1');
        resaltarInputInvalido('txtapellido1');
        ImprimirMsjsError('Por favor ingrese su Primer Apellido');
        return false;
    }
    if (psexo == '' || psexo == null || psexo == undefined) {
        //resaltarLabelInvalido('lblSexo');
        resaltarInputInvalido('txtsexo');
        ImprimirMsjsError('Por favor indique su Sexo');
        return false;
    }
    if (pEmail == null || pEmail == '' || pEmail == undefined) {
       // resaltarLabelInvalido('lblEmail');
        resaltarInputInvalido('txtEmail');
        ImprimirMsjsError('Por favor ingrese su Correo');
        return false;
    }
    if (pPass == null || pPass == '' || pPass == undefined) {
       // resaltarLabelInvalido('lblPass');
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
       // resaltarLabelInvalido('lblPass');
        resaltarInputInvalido('txtPass');
        //resaltarLabelInvalido('lblPass2');
        resaltarInputInvalido('txtPass2');
        ImprimirMsjsError('Por favor ingrese ambas Contraseñas iguales');
        return false;
    }
    if (pNacimiento == '' || pNacimiento == null || pNacimiento == undefined || new Date(pNacimiento) >= new Date()) {
       // resaltarLabelInvalido('lblnacimiento');
        resaltarInputInvalido('txtnacimiento');
        ImprimirMsjsError('Por favor ingrese una fecha de nacimiento menor a hoy');
        return false;
    }
    if (pEdad == null || pEdad == undefined) {
        ImprimirMsjsError('Estimado usuario  la edad es requerido');
       // resaltarLabelInvalido('lbledad');
        resaltarInputInvalido('txtedad');
        inputEdad.value = 0;
        return false;
    } else if (pEdad <= 0 || pEdad > 120) {
        ImprimirMsjsError('Por favor indique una edad valida entre 1 y 120 años');
        //resaltarLabelInvalido('lbledad');
        resaltarInputInvalido('txtedad');
        inputEdad.value = 0;
        return false;
    }
    if (pRol == null || pRol == '' || pRol == undefined || pRol == 0) {
       // resaltarLabelInvalido('lblRol');
        resaltarInputInvalido('txtRol');
        ImprimirMsjsError('Por favor indique un Rol');
        return false;
    }
    return true;
}

botonRegistrar.addEventListener('click', RegistrarDatos);