
function validaFormulario() {
document
  .getElementById("reseñaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let libro = document.getElementById("libro").value;
    let comentario = document.getElementById("comentario").value;
    if (nombre && libro && comentario) {
      alert(
        "Reseña enviada con éxito!\nNombre: " +
          nombre +
          "\nLibro: " +
          libro +
          "\nComentario: " +
          comentario
      );
      document.getElementById("reseñaForm").reset();
    }
  });
}
