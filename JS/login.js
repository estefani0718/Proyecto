import { validarText, validarNum, campo, validarFormulario } from "./validaciones.js";
import { post } from "./metodos.js";

const formulario = document.querySelector("#form__login");


formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("que paso")
  const datos = validarFormulario(e.target);
  if (!datos) return;
  try {
    const res = await post("/usuarios/login", datos);
    const usuario = res.data;
    console.log(data)
    if (res.ok && typeof usuario === "object") {
      alert("✅ Bienvenido " + usuario.usuario);
      sessionStorage.setItem("usuario", JSON.stringify(usuario));

      if (usuario.rol === "Cliente" || usuario.tipo_cliente === "Cliente") {
        window.location.href = "cliente.html";
      } else if (usuario.rol === "Domiciliario" || usuario.tipo_cliente === "Domiciliario") {
        window.location.href = "usuario.html";
      } else if (usuario.rol === "Admin" || usuario.tipo_cliente === "Admin") {
        window.location.href = "administrador.html";
      } else {
        window.location.href = "administrador.html";
      }
    } else {
      alert("❌ " + usuario);
    }
  } catch (err) {
    alert("❌ Error de conexión con el servidor");
    console.error(err);
  }
});
