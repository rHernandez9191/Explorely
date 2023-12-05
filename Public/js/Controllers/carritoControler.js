'use strict';

let listaCarrito = [];

const GetListaSocios = async () => {
    let res = await ProcessGET('ListarSocios', null);
    if (res != null && res.resultado == true) {
        listaCarrito = res.ListaSociosBD;
        cargarServicios();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};