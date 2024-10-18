
//ACTIVACION POPOVER
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//CAPTURAR FORMULARIO

const formulario_contacto = document.getElementById("form-contacto");

formulario_contacto.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene la acción por defecto del formulario

    let dataForm = new FormData(formulario_contacto);

    let nombre = dataForm.get("nombre");
    let email = dataForm.get("email");

    document.getElementById("mensaje-modal").innerText = ("Gracias " + nombre + " por contactarte conmigo, me pondre en contacto a tu email: " + email + "");
    document.getElementById("form-contacto").reset();

    // Limpiar el mensaje del modal al cerrarlo
    document.getElementById("modal-contacto").addEventListener('hidden.bs.modal', function () {
        document.getElementById("mensaje-modal").innerText = "¡Oops!, faltan datos por ingresar";
    });

}); 
