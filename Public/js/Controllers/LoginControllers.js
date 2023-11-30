'use strict';

let inputUser = document.getElementById('usuario');
let inputPass = document.getElementById('contraseña');



const ValidarInputs = (pUser, pPass) => {
    if (pUser == null || pUser == undefined || pUser == '') {        
        swal.fire({
            icon:'error',
            title:'Error',
            text:'Usuario es requerido!'
        });
        return false;
    }
    if (pPass == null || pPass == undefined || pPass == '') {        
        swal.fire({
            icon:'error',
            title:'Error',
            text:'Contraseña es requerida!'
        });
        return false;
    }
    return true;
};

const  RedireccionarUsuario = (PersonaDB) => {
    let nombreRol = ObtenerRol(PersonaDB.Rol);
    if (nombreRol == 'Client') {
        location.href = 'IndexCliente.html';
    }
    if (nombreRol == 'Admin') {
        location.href = 'IndexAdmin.html';
    }
};

const IniciarSesion = async () => {
    let user = inputUser.value;
    let pass = inputPass.value;

    if (ValidarInputs(user, pass) == false) {
        return;
    }

    let params = {
        'Email': user,
        'Password': pass
    };

    let res = await ProcessGET('AutenticarPersona', params);

    if (res != null && res.resultado == true && res.PersonaDB != null) {
        RedireccionarUsuario(res.PersonaDB);
        SetSesionActiva(res.PersonaDB);
    } else {
        ImprimirMsjsError(res.msj);
    }
};