
//CAPTURAR FORMULARIO

const formulario_contacto = document.getElementById("form-contacto");

formulario_contacto.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene la acción por defecto del formulario

        let dataForm = new FormData(formulario_contacto);

        let nombre = dataForm.get("nombre");
        let email = dataForm.get("email");

        alert("Gracias: " + nombre + " por contactarte conmigo, me pondre en contacto a tu email: " + email + "");

}); 
