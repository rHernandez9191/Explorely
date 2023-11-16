'use strict'


const MensajeError = (texto) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: texto
    })
};

let user = document.getElementById('usuario')
let password = document.getElementById('contraseña')

const validacionInicioSesion = () => {
    let usuario = user.value
    let pass = password.value

    if (usuario == '' || usuario == null || usuario == undefined) {
        MensajeError('Indique nombre de usuario o email');
        
    }else if (pass == '' || pass == null || pass == undefined) {
        MensajeError('Indique su contrasena')
    }
    
}

let correo = document.getElementById('mail')

const validaCorreo = ()=>{
    let email = correo.value
    if (email == '' || email == null || email == undefined) {
        MensajeError("No indico su correo")
    }

}
let codigo = document.getElementById('codigo')

const validaCodigo = ()=> {
    let code = codigo.value
    if (code == '' || code == null || code == undefined) {
        MensajeError("No indico su codigo")
    }

}


