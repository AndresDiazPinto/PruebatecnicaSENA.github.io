/*Formulario*/
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // logica para enviar formulario

    // Ejemplo de respuesta al usuario
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = `<p>Gracias por tu mensaje, ${name}. Nos pondremos en contacto contigo pronto.</p>`;
  });
