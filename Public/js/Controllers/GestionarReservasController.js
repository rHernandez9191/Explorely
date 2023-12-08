"use strict";
function cargarPaginaFinalizarReserva(idNegocio) {
  let descripcionNegocio = obtenerDescripcionNegocio(idNegocio);
  window.location.href = `finalizarReserva.html?descripcion=${descripcionNegocio}`;
}
function obtenerDescripcionNegocio(idNegocio) {
  let descripcion = obtenerDescripcionPorID(idNegocio);
  return descripcion;
}
