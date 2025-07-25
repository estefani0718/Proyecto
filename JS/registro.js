import { validarText, validarNum, campo, validarFormulario ,validarContaseña} from "./validaciones.js";
import { post } from "./metodos.js";
const formulario = document.querySelector("#form__registro");

const nombre = formulario.querySelector('input[name="nombre"]');
const documento = formulario.querySelector('input[name="documento"]');
const generos = formulario.querySelectorAll('input[name="genero"]');
const direccion = formulario.querySelector('input[name="direccion"]');
const telefono = formulario.querySelector('input[name="telefono"]');
const email = formulario.querySelector('input[name="email"]');
const residencia = formulario.querySelector('select[name="residencia"]');
const usuario = formulario.querySelector('input[name="usuario"]');
const tTipocliente = formulario.querySelector('select[name="tipoCliente"]');

nombre.addEventListener("keydown", validarText);
documento.addEventListener("keydown", validarNum);
nombre.addEventListener("blur", campo);
documento.addEventListener("blur", campo);
direccion.addEventListener("blur", campo);
telefono.addEventListener("blur", campo);
email.addEventListener("blur", campo);
tTipocliente.addEventListener('blur',campo)

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = validarFormulario(e.target);
  if (!datos) return;

  // ✅ Agregamos valores por defecto
  datos.estado = "Activo";
  datos.tipo_cliente = datos.rol;  // asumimos que tipo_cliente viene del <select>

  try {
    const res = await post("/usuarios/registrar", datos);
    const result = await res.json();

    if (res.ok) {
      alert("✅ Usuario registrado correctamente");
      formulario.reset(); // limpia el formulario
    } else {
      alert("❌ Error: " + result);
    }
  } catch (err) {
    alert("❌ No se pudo registrar",err);
   
  }
});



