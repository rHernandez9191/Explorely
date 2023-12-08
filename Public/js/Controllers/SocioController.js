


document.addEventListener('DOMContentLoaded', function() {
    'use strict';

        //let queryString, urlParams, _id, ListaSociosBD;



    let listaSocios = [];
    

    function ObtenerPrecio(precio) {
        precio= precio
        return precio;
    }
    function ObtenerCantPersonas(CantPersonas) {
        CantPersonas= CantPersonas
        return CantPersonas;
    }
    function ObtenerFotoPerfil(FotoPerfil){
        FotoPerfil=FotoPerfil
        return FotoPerfil;
    }



    const GetListaSocios = async () => {
        let res = await ProcessGET('ListarSocios', null);
        if (res != null && res.resultado == true) {
            listaSocios = res.ListaSociosBD;
            ImprimirDatosSocio();
            ImprimirLargoListaSocios();

        } else {
            ImprimirMsjsError(res.msj);
            return;
        }
    };

    GetListaSocios();



        const ImprimirLargoListaSocios = () => {
    // Obtén el elemento donde mostrarás el mensaje
            let mensajeElement = document.getElementById('largoListaSocios');

    // Verifica si el elemento existe antes de actualizar su contenido
            if (mensajeElement) {
                mensajeElement.textContent = `La cantidad de socios es de: ${listaSocios.length}`;
            }
        };


    const ImprimirDatosSocio = (filteredSocios = listaSocios) => {
        let tbody = document.getElementById('tbdSocios');
    
        tbody.innerHTML = '';

        for (let i = 0; i < filteredSocios.length; i++) {
            let fila = tbody.insertRow();
        let celdaTipoServicio = fila.insertCell();
        let celdaIdentificacion = fila.insertCell();
        let celdaNombreEmpresa = fila.insertCell();
        let celdaEncargado1 = fila.insertCell();
        //let celdaEncargado2 = fila.insertCell();
        let celdaTipoEmpresa = fila.insertCell();
        let celdaEmail = fila.insertCell();
        let celdaFechaConstitucion = fila.insertCell();
        let celdaProvincia = fila.insertCell();
        //let celdaCanton = fila.insertCell();
        //let celdaDescripcion = fila.insertCell();
        let celdaEstado = fila.insertCell();
        let celdaRol = fila.insertCell();
        let celdaPrecio = fila.insertCell();
        let celdaCantPersonas = fila.insertCell();
        //let celdaFotoPerfil = fila.insertCell();
        let celdaAcciones = fila.insertCell();

        celdaTipoServicio.innerHTML = ObtenerTipoServicio(listaSocios[i].TipoServicio);
        celdaIdentificacion.innerHTML = listaSocios[i].Identificacion;
        celdaNombreEmpresa.innerHTML = listaSocios[i].NombreEmpresa;
        celdaEncargado1.innerHTML = listaSocios[i].Encargado1;
        //celdaEncargado2.innerHTML = listaSocios[i].Encargado2;
        celdaTipoEmpresa.innerHTML = ObtenerTipoEmpresa(listaSocios[i].TipoEmpresa);
        celdaEmail.innerHTML = listaSocios[i].Email;
        celdaFechaConstitucion.innerHTML = listaSocios[i].FechaConstitucion;
        celdaProvincia.innerHTML = ObtenerProvincia(listaSocios[i].Provincia);
        //celdaCanton.innerHTML = listaSocios[i].Canton;
        //celdaDescripcion.innerHTML = listaSocios[i].Descripcion;
        celdaEstado.innerHTML = ObtenerEstado(listaSocios[i].Estado);
        celdaRol.innerHTML = ObtenerRol(listaSocios[i].Rol);
        celdaPrecio.innerHTML = ObtenerPrecio(listaSocios[i].Precio);
        celdaCantPersonas.innerHTML = ObtenerCantPersonas(listaSocios[i].CantPersonas);
        //celdaFotoPerfil.innerHTML = ObtenerFotoPerfil(listaSocios[i].FotoPerfil);

        let fechaNac = new Date(listaSocios[i].FechaConstitucion.replace('Z', ''));
        celdaFechaConstitucion.innerHTML = fechaNac.getDate() + '/' + (fechaNac.getMonth() + 1) + '/' + fechaNac.getFullYear();

        let btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.innerText = '🗑️';
        btnDelete.title = 'ELIMINAR';
        btnDelete.classList.add('btnsTabla');
        btnDelete.onclick = async () => {
    let confirmacion = false;
    await Swal.fire({
        title: 'Desea eliminar el registro de ' + listaSocios[i].NombreEmpresa,
        icon: 'warning',
        confirmButtonText: 'Confirmar',
        denyButtonText: 'Cancelar',
        showDenyButton: true
    }).then((res) => {
        confirmacion = res.isConfirmed;
    });

    if (confirmacion == true) {
        let data = {
            '_id': listaSocios[i]._id
        };

        let result = await ProcessDELETE('EliminarSocio', data);
        if (result != null && result.resultado == true) {
            ImprimirMsjsSuccess(result.msj);
        } else {
            ImprimirMsjsError(result.msj);
        }
        await GetListaSocios();
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
                title: 'Desea inactivar el registro de ' + listaSocios[i].NombreEmpresa,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaSocios[i]._id
                };

                let result = await ProcessPUT('/InactivarSocio', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaSocios();
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
                title: 'Desea activar el registro de ' + listaSocios[i].NombreEmpresa,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaSocios[i]._id
                };

                let result = await ProcessPUT('/ActivarSocio', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaSocios();
            }
        };

        let divBtns = document.createElement('div');
        //divBtns.appendChild(btnEdit);
        divBtns.appendChild(btnDelete);
        divBtns.appendChild(btnInactivar);
        divBtns.appendChild(btnActivar);

        celdaAcciones.appendChild(divBtns);

       


    }

    };

        

        
        
        


        
    let sociosCountElement = document.getElementById('sociosCount');
            if (sociosCountElement) {
                sociosCountElement.textContent = `Total socios: ${filteredSocios.length}`;
            }

    
});
