import { validarText, validarNum, campo, validarFormulario} from "./validaciones.js";
import { post } from "./metodos.js";
const formulario = document.querySelector("#formu__login");

// const usuario = formulario.querySelector('input[name="usuario"]');
// const contrasena = formulario.querySelector('input[name="contrasena"]');

formulario.addEventListener("submit",async (e) => {
  e.preventDefault();
  const datos = validarFormulario(e.target); 
  if (!datos) return;
      
  try {
    const res = await post("/usuarios/login", datos);
    const usuario = await res.json();

    if (res.ok) {
      alert("✅ Bienvenido " + usuario.usuario);

      // Guardamos la sesión
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
      
      // Redireccionamos según el rol o tipo_cliente
      if (usuario.rol === "Cliente" || usuario.tipo_cliente === "Cliente") {
        window.location.href = "vista__usuario.html";
      } else if (usuario.rol === "Domiciliario") {
        window.location.href = "domiciliario.html";
      } else {
        alert("Rol no reconocido");
      }
    } else {
      alert("❌ " + usuario);
    }

  } catch (err) {
    alert("❌ Error de conexión con el servidor");
    console.error(err);
}});