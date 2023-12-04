'use strict';



const IdentificarUsuarioLogueado = () => {
    let result = GetSesionActiva();

    if (result != null) {
        document.getElementById('txtBienvenido').innerHTML = 'Bienvenido(a) ' + result.Nombre;
    }
};
IdentificarUsuarioLogueado();
