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

let pass1 = document.getElementById('nuevoPass')
let pass2 = document.getElementById('nuevoPass2')


const verificarPass = () => {

    let contraseña = pass1.value
    let nuevaContraseña = pass2.value

    if (contraseña == '' || contraseña == null || contraseña == undefined) {
        MensajeError('Esciba su nueva contraseña');
        
    }else if (nuevaContraseña == '' || nuevaContraseña == null || nuevaContraseña == undefined) {
        MensajeError('Repetir su contraseña')
    }

}


