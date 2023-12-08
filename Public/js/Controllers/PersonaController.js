'use strict';

let queryString, urlParams, _id, PersonaBD;
let tbody = document.getElementById('tbdPersonas');

let listaPersonas = [];

const GetListaPersonas = async () => {
    let res = await ProcessGET('/ListarPersonas', null);
    if (res != null && res.resultado == true) {
        listaPersonas = res.ListaPersonasBD;
        ImprimirDatos();
        ImprimirLargoListaPersonas();
        
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaPersonas();
const ImprimirLargoListaPersonas = () => {
    // Obtén el elemento donde mostrarás el mensaje
    let mensajeElement = document.getElementById('largoListaPersonas');

<<<<<<< Updated upstream
=======
    // Verifica si el elemento existe antes de actualizar su contenido
    if (mensajeElement) {
        mensajeElement.textContent = `La cantidad de usuarios es de: ${listaPersonas.length}`;
    }
};

// Llama a ImprimirLargoListaPersonas
ImprimirLargoListaPersonas();
>>>>>>> Stashed changes
const ImprimirDatos = () => {
    let tbody = document.getElementById('tbdPersonas');
    tbody.innerHTML = '';
    for (let i = 0; i < listaPersonas.length; i++) {

        let fila = tbody.insertRow();
        let celdaTipoIdentificacion = fila.insertCell();
        let celdaIdentificacion = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaEmail = fila.insertCell();
        let celdaSexo = fila.insertCell();
        let celdaNacimiento = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaEstado = fila.insertCell();
        let celdaRol = fila.insertCell();
        let celdaAcciones = fila.insertCell();

        celdaTipoIdentificacion.innerHTML = ObtenerTipoIdentificacion(listaPersonas[i].TipoIdentificacion);
        celdaIdentificacion.innerHTML = listaPersonas[i].Identificacion;
        celdaNombre.innerHTML = listaPersonas[i].Nombre + ' ' + listaPersonas[i].Apellido1 + ' ' + listaPersonas[i].Apellido2;
        celdaEmail.innerHTML = listaPersonas[i].Email;
        celdaSexo.innerHTML = listaPersonas[i].Sexo;
        celdaEdad.innerHTML = listaPersonas[i].Edad;
        celdaEstado.innerHTML = ObtenerEstado(listaPersonas[i].Estado);
        celdaRol.innerHTML = ObtenerRol(listaPersonas[i].Rol);
        
        let fechaNac = new Date(listaPersonas[i].Nacimiento.replace('Z', ''));
        celdaNacimiento.innerHTML = fechaNac.getDate() + '/' + (fechaNac.getMonth() + 1) + '/' + fechaNac.getFullYear();

        /*let btnEdit = document.createElement('button');
        btnEdit.type = 'button';
        btnEdit.innerText = '✎';
        btnEdit.title = 'EDITAR';
        btnEdit.classList.add('btnsTabla');
        btnEdit.onclick = () => {
            location.href = 'GestionarPersona.html?_id=' + listaPersonas[i]._id;
        };*/

        
        let btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.innerText = '🗑️';
        btnDelete.title = 'ELIMINAR';
        btnDelete.classList.add('btnsTabla');
        btnDelete.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea eliminar el registro de ' + listaPersonas[i].Nombre,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaPersonas[i]._id
                };

                let result = await ProcessDELETE('EliminarPersona', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaPersonas();
            }

            let personasCountElement = document.getElementById('personasCount');
            if (personasCountElement) {
            personasCountElement.textContent = `Total personas: ${listaPersonas.length}`;
    }
        };

        let btnInactivar = document.createElement('button');
        btnInactivar.type = 'button';
        btnInactivar.innerText = 'Off';
        btnInactivar.title = 'INACTIVAR';
        btnInactivar.classList.add('btnsTabla');
        btnInactivar.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea inactivar el registro de ' + listaPersonas[i].Nombre,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaPersonas[i]._id
                };

                let result = await ProcessPUT('InactivarPersona', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaPersonas();
            }
        };

        let btnActivar = document.createElement('button');
        btnActivar.type = 'button';
        btnActivar.innerText = 'On';
        btnActivar.title = 'ACTIVAR';
        btnActivar.classList.add('btnsTabla');
        btnActivar.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea activar el registro de ' + listaPersonas[i].Nombre,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaPersonas[i]._id
                };

                let result = await ProcessPUT('ActivarPersona', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaPersonas();
            }
        };

        /*
        let btnTarjetas = document.createElement('button');
        btnTarjetas.type = 'button';
        btnTarjetas.innerText = '💳';
        btnTarjetas.title = 'Tarjetas';
        btnTarjetas.classList.add('btnsTabla');
        btnTarjetas.onclick = () => {
            location.href = 'AdminTarjetasPersonas.html?_id=' + listaPersonas[i]._id;
        };*/

        let divBtns = document.createElement('div');
        //divBtns.appendChild(btnEdit);
        divBtns.appendChild(btnDelete);
        divBtns.appendChild(btnInactivar);
        divBtns.appendChild(btnActivar);
        //divBtns.appendChild(btnTarjetas);

        celdaAcciones.appendChild(divBtns);
    }
};

//ImprimirDatos();

function CargarPerfil(){
    location.href = "PerfilCliente.html?_id=" + listaPersonas[i]._id;
};

const GetUrlAgregaTarjeta2 = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  
    _id = urlParams.get('_id');
  
    location.href = './registrarPagos.html?_id=' + _id;
    
};


  
