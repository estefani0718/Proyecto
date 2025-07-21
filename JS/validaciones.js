export const validarFormulario = (event) => {
  const campos = [...event.target].filter((elemento) => {
    return elemento.hasAttribute("required");
  });
  campos.forEach((campo) => {
    switch (campo.tagName) {
      case "INPUT":
        if (
          campo.type == "text" ||
          campo.type == "number" ||
          campo.type == "password" ||
          campo.type == "tel"
        ) {
          obj[campo.name] = campo.value;
          if (campo.value.trim() === "") {
            campo.classList.add("error");
          }
        }
        break;
      case "SELECT":
        obj[campo.name] = campo.selectedIndex;
        if (campo.selectedIndex === 0) {
          obj[campo.name] = "";
          campo.classList.add("error");
        }
      default:
        break;
    }
  });
  return datos;
}


// validaciones de texto, numero  y contraseña 
export const validarText = (event) => {
  let letra = event.key;
  const regexTexto = /^[a-zA-Z]+$/;
  if (!regexTexto.test(letra)) {
    event.preventDefault();
  }
};

export const validarNum = (event) => {
  const letra = event.key;
  // Permitir teclas especiales
  const teclasPermitir = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
  ];
  if (teclasPermitir.includes(letra)) return; 
  const regexNumeros = /^[0-9]$/;
  // Solo números del 0 al 9
  if (!regexNumeros.test(letra)) {
    event.preventDefault();
  }
};
export const validarContaseña = (event) => {
  let letra = event.key;
  const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  const teclasPermitir = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
  ];
  if (teclasPermitir.includes(letra)) return;
  if (regexContra.test(letra)) {
    alert("contraseña valida");
  }
};
export const campo = (event) => {
  if (event.target.value !== "") {
    event.target.classList.remove("input__border");
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
};









