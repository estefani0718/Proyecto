export const validarFormulario = (form) => {
  const datosPersona = {};
  let hayErrores = false;

  const campos = [...form.elements].filter(el => el.hasAttribute("required"));

  campos.forEach(el => {
    const tag = el.tagName;

    switch (tag) {
      case "INPUT":
        if (["text", "password", "tel", "email"].includes(el.type)) {
          if (el.value.trim() === "") {
            marcarError(el);
            hayErrores = true;
          } else {
            datosPersona[el.name] = el.value;
          }
        }

        if (el.type === "radio") {
          const grupo = form.querySelectorAll(`input[name="${el.name}"]`);
          const seleccionado = [...grupo].find(r => r.checked);
          if (seleccionado) {
            datosPersona[el.name] = seleccionado.value;
          } else {
            marcarError(el);
            hayErrores = true;
          }
        }
        break;

      case "SELECT":
        if (el.selectedIndex === 0) {
          marcarError(el, `El campo ${el.name} no ha sido seleccionado`);
          hayErrores = true;
        } else {
          datosPersona[el.name] = el.options[el.selectedIndex].value;
        }
        break;
    }
  });

  return hayErrores ? null : datosPersona;
};


function marcarError(el, mensaje = `El campo ${el.name} es obligatorio`) {
  el.classList.add("input__border");
  if (!el.nextElementSibling || !el.nextElementSibling.classList.contains("span")) {
    const span = document.createElement("span");
    span.classList.add("span");
    span.textContent = mensaje;
    el.insertAdjacentElement("afterend", span);
  }
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
  const valor = event.target.value;
  const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  if (regexContra.test(valor)) {
    console.log("Contraseña válida ✅");
  } else {
    console.log("Debe tener mayúscula, minúscula y un número ❌");
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









