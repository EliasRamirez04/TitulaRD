document.getElementById("legalizacionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("estadoTexto").textContent =
    "Solicitud enviada. Estado: En revisión.";
  alert("Tu solicitud ha sido enviada correctamente.");
});