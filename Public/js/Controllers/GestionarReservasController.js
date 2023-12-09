"use strict";
function cargarPaginaFinalizarReserva(idNegocio) {
  let descripcionNegocio = obtenerDescripcionNegocio(idNegocio);
  window.location.href = `finalizarReserva.html?descripcion=${descripcionNegocio}`;
}
function obtenerDescripcionNegocio(idNegocio) {
  let descripcion = obtenerDescripcionPorID(idNegocio);
  return descripcion;
}
document.addEventListener("DOMContentLoaded", function () {
  let params = new URLSearchParams(window.location.search);
  let descripcionNegocio = params.get("descripcion");
  document.getElementById("infoHotel").innerText = descripcionNegocio;
});
