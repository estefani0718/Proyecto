async function usuarios() {
  try {
    const respuesta = await fetch(
      "http://localhost:8080/ProyectoDomiexpro/api/usuarios"
    );
    if (!respuesta.ok)
      throw new Error("Error al obtener usuarios: " + respuesta.status);
    const datos = await respuesta.json();
    crearFilas(datos);
    nombreUsuario(datos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

function crearFilas(usuarios) {
  const cuerpo = document.getElementById("cuerpoTablaUsuarios");
  cuerpo.innerHTML = "";

  usuarios.forEach((usuario) => {
    const fila = document.createElement("tr");
    fila.classList.add("fila-data");
    fila.innerHTML = `
      <td class="celda-data">${usuario.id ?? ""}</td>
      <td class="celda-data">${usuario.nombre_usuario ?? ""}</td>
      <td class="celda-data">${usuario.documento_usuario ?? ""}</td>
      <td class="celda-data">${usuario.tipo_documento ?? ""}</td>
      <td class="celda-data">${usuario.genero_usuario ?? ""}</td>
      <td class="celda-data">${usuario.direccion_usuario ?? ""}</td>
      <td class="celda-data">${usuario.telefono_usuario ?? ""}</td>
      <td class="celda-data">${usuario.correo ?? ""}</td>
      <td class="celda-data">${usuario.estado ?? ""}</td>
      <td class="celda-data">${usuario.rol ?? ""}</td>
      <td class="celda-data">${usuario.residencia ?? ""}</td>
      <td class="celda-data">${usuario.usuario ?? ""}</td>
      <td class="celda-data">••••••</td>
      <td class="celda-data">
        <button class="button" data-id="${usuario.id}">Editar</button>
        <button class="button" data-id="${usuario.id}">Eliminar</button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}

usuarios();
