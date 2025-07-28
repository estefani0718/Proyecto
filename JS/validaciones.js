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
          datosPersona[el.name] = el.options[el.selectedIndex].text; 
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

// Función reutilizable para cargar modales desde archivos HTML
export async function cargarModal(path, contenedorSelector, idModalEsperado) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('No se pudo cargar el archivo: ' + path);

    const html = await response.text();

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const modal = tempDiv.querySelector('#' + idModalEsperado);
    const contenedor = document.querySelector(contenedorSelector);

    if (!modal) {
      console.error(`❌ No se encontró el modal con ID "#${idModalEsperado}" en ${path}`);
      return null;
    }

    if (!contenedor) {
      console.error(`❌ No se encontró el contenedor "${contenedorSelector}"`);
      return null;
    }

    contenedor.appendChild(modal);
    return modal;

  } catch (error) {
    console.error('❌ Error al cargar el modal:', error);
    return null;
  }
}








