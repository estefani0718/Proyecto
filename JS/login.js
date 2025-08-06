import { validarText,validarFormulario } from "./validaciones.js";
import { post } from "./metodos.js";

const formulario = document.querySelector("#form__login");
 const user=document.querySelector("input[name='usuario']");

user.addEventListener("keydown", validarText);
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
   const datos = validarFormulario(e.target);
  if (!datos) return;
  try {
    const res = await post("/usuarios/login", datos);
    console.log("Respuesta del backend:", res); 

    const usuario = res.data;

    if (res.ok && typeof usuario === "object") {
      alert("Bienvenido " + usuario.usuario);
      sessionStorage.setItem("usuario", JSON.stringify(usuario));

      const rol = usuario.rol?.toLowerCase();
      const tipo = usuario.tipo_cliente?.toLowerCase();

      if (rol === "cliente" || tipo === "cliente") {
        window.location.href = "cliente.html";
      } else if (rol === "domiciliario" || tipo === "domiciliario") {
        window.location.href = "usuario.html";
      } else if (rol === "admin" || tipo === "admin") {
        window.location.href = "administrador.html";
      } else {
        window.location.href = "index.html";
      }

    } else {
      alert("❌ Credenciales inválidas o usuario no encontrado");
    }

  } catch (err) {
    alert("❌ Error de conexión con el servidor");
    console.error("Error en el login:", err);
  }
});

