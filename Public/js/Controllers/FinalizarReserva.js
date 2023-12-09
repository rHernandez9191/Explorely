function registrarReservaAutomatica() {
  
  const reserva = {
      IdSocio: obtenerIdSocioAutomatico(),
      // Agrega más campos según sea necesario
  };

  router.post('/RegistrarReserva', reserva, function(response) {
      if (response.resultado) {
          alert('Reserva registrada automáticamente');
          listarReservas(); 
      } else {
          alert('Error al registrar la reserva: ' + response.msj);
      }
  });
}


function obtenerIdSocioAutomatico() {
  const idNegocio = obtenerIdNegocioDesdeFormulario(); // Debes implementar esta función
  return idNegocio;
}
// Función para obtener y mostrar la lista de reservas desde el servidor
function listarReservas() {
  $.get('/ListarReservas', function(response) {
      if (response.resultado) {
          const listaReservas = response.ListaReservaBD;
          const tbody = $('#tablaReservas tbody');
          tbody.empty();

          listaReservas.forEach(function(reserva) {
              // Agrega una fila a la tabla para cada reserva
              const row = $('<tr>');
              row.append($('<td>').text(reserva.IdSocio));
              // Agrega más celdas según sea necesario

              tbody.append(row);
          });
      } else {
          alert('Error al obtener la lista de reservas: ' + response.msj);
      }
  });
}

// Llamada a la función al cargar la página para obtener la lista inicial
$(document).ready(function() {
  listarReservas();
});