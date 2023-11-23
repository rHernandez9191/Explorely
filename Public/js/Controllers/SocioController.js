'use strict';

let listaSocios = [];
const GetListaSocios = async () => {
    let res = await ProcessGET('ListarSocios', null);
    if (res != null && res.resultado == true) {
        listaSocios = res.ListaSociosBD;
        ImprimirDatos();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};

GetListaSocios();

const ImprimirDatos = () => {
    let tbody = document.getElementById('tbdSocios');
    tbody.innerHTML = '';

    for (let i = 0; i < listaSocios.length; i++) {

        let fila = tbody.insertRow();
        let celdaTipoServicio = fila.insertCell();
        let celdaIdentificacion = fila.insertCell();
        let celdaNombreEmpresa = fila.insertCell();
        let celdaEncargado1 = fila.insertCell();
        let celdaEncargado2 = fila.insertCell();
        let celdaTipoEmpresa = fila.insertCell();
        let celdaEmail = fila.insertCell();
        let celdaFechaConstitucion = fila.insertCell();
        let celdaProvincia = fila.insertCell();
        let celdaCanton = fila.insertCell();
        let celdaDescripcion = fila.insertCell();
        let celdaEstado = fila.insertCell();
        let celdaRol = fila.insertCell();
        let celdaAcciones = fila.insertCell();

        celdaTipoServicio.innerHTML = ObtenerTipoServicio(listaSocios[i].TipoServicio);
        celdaIdentificacion.innerHTML = listaSocios[i].Identificacion;
        celdaNombreEmpresa.innerHTML = listaSocios[i].NombreEmpresa;
        celdaEncargado1.innerHTML = listaSocios[i].Encargado1;
        celdaEncargado2.innerHTML = listaSocios[i].Encargado2;
        celdaTipoEmpresa.innerHTML = ObtenerTipoEmpresa(listaSocios[i].TipoEmpresa);
        celdaEmail.innerHTML = listaSocios[i].Email;
        celdaFechaConstitucion.innerHTML = listaSocios[i].FechaConstitucion;
        celdaProvincia.innerHTML = ObtenerProvincia(listaSocios[i].Provincia);
        celdaCanton.innerHTML = listaSocios[i].Canton;
        celdaDescripcion.innerHTML = listaSocios[i].Descripcion;
        celdaEstado.innerHTML = ObtenerEstado(listaSocios[i].Estado);
        celdaRol.innerHTML = ObtenerRol(listaSocios[i].Rol);
        
        let fechaNac = new Date(listaSocios[i].FechaConstitucion.replace('Z', ''));
        celdaFechaConstitucion.innerHTML = fechaNac.getDate() + '/' + (fechaNac.getMonth() + 1) + '/' + fechaNac.getFullYear();

    }
};