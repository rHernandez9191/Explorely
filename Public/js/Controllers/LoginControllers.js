'use strict';

let inputUser = document.getElementById('usuario');
let inputPass = document.getElementById('contraseña');


const ValidarInputs = (pUser, pPass) => {
    if (!pUser || !pPass) {        
        swal.fire({
            icon:'error',
            title:'Error',
            text:'Usuario y contraseña son requeridos!'
        });
        return false;
    }
    return true;
};


const  RedireccionarUsuario = (PersonaDB) => {
    let nombreRol = ObtenerRol(PersonaDB.Rol);
    if (nombreRol == 'Client') {
        location.href = 'paginaBusqueda.html';
    }
    if (nombreRol == 'Admin') {
        location.href = 'index.html';
    }
};

const IniciarSesion = async () => {
    const user = inputUser.value;
    const pass = inputPass.value;

    if (!ValidarInputs(user, pass)) {
        return;
    }

    const params = {
        'Email': user,
        'Password': pass
    };

    const res = await ProcessGET('AutenticarPersona', params);

    if (res && res.resultado && res.PersonaDB) {
        RedireccionarUsuario(res.PersonaDB);
        SetSesionActiva(res.PersonaDB);
    } else {
        ImprimirMsjsError(res.msj);
    }
};
