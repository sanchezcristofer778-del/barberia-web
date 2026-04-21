let servicioActual = "";

function abrirModal(titulo, descripcion, precio, imagen) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("titulo").innerText = titulo;
  document.getElementById("descripcion").innerText = descripcion;
  document.getElementById("precio").innerText = precio;
  document.getElementById("imagen").src = imagen;

  servicioActual = titulo;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function irWhatsApp() {
  let mensaje = "Hola, quiero reservar " + servicioActual;
  window.open("https://wa.me/51926881582?text=" + encodeURIComponent(mensaje));
}

function irWhatsAppDirecto() {
  window.open("https://wa.me/51926881582");
}