export const validar = (e) => {
  e.preventDefault();

  const person = {};

  // Todos los campos con required
  const campos = [...e.target].filter((hijo) => hijo.hasAttribute("required"));

  // Radios: agrupar por nombre
  const radios = campos.filter((el) => el.type === "radio");
  const nombresRadios = [...new Set(radios.map((el) => el.name))];

  // Procesar radios
  nombresRadios.forEach((name) => {
    const seleccionados = radios.filter((r) => r.name === name);
    const seleccionado = seleccionados.find((r) => r.checked);
    if (!seleccionado) {
      marcarError(seleccionados[0], `Debes seleccionar una opción para ${name}`);
      person[name] = "";
    } else {
      person[name] = seleccionado.value;
    }
  });

  // Procesar los demás campos
  campos.forEach((el) => {
    if (el.type === "radio") return; // ya se procesó arriba

    switch (el.tagName) {
      case "INPUT":
        if (["text", "password", "tel", "email"].includes(el.type)) {
         if (el.value === "") {
          marcarError(el, `El campo ${el.name} está vacío`);
          person[el.name] = "";
        } else {
        person[el.name] = el.value; 
        }
      }
       break;
      case "SELECT":
        if (el.selectedIndex === 0) {
          marcarError(el, `Selecciona una opción para ${el.name}`);
          person[el.name] = "";
        } else {
          person[el.name] = el.options[el.selectedIndex].text;
        }
        break;
    }
  });

  console.log(person); // Aquí tienes todos los datos correctamente
};

function marcarError(el, mensaje) {
  el.classList.add("input__border");

  // evitar duplicados
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









